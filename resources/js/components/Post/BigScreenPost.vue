<template>
    <div class="">
        <div v-if="posts.length > 0" class="h-screen overflow-x-hidden" @scroll="loadMorePosts">
            <div class="grid grid-cols-12 px-2 pb-2 border-b border-gray-200">
                <div v-for="(post,index) in posts" :key="post.id" class="col-span-4 mt-6">
                    
                    <a @mouseenter="postMouseenter(index)" @mouseleave="postMouseleave(index)" class="h-[293px] w-[293px] relative" :href="route('post_page',post.id)">
                        <img class="h-[293px] w-[293px]" :src="post.images" :alt='post.user_name + " Post"'>
                        <div :class="(post.hvring) ? 'visible' : 'invisible'" class="absolute top-0 opacity-30 bg-black h-[293px] w-[293px]">
                            
                        </div>
                        <div :class="(post.hvring) ? 'visible' : 'invisible'" class="text-center text-white absolute top-[50%] h-[293px] w-[293px] z-50">
                            <i class="fas fa-heart text-2xl"></i>
                            <span class="font-bold pr-4 pl-1">{{ post.like_count }}</span>
                            <i class="far fa-comment-alt text-2xl pr-1"></i>
                            <span class="font-bold">{{ post.cmnt_count }}</span>
                        </div>
                        <!-- <div class="absolute text-white top-0 right-0 h-[293px] w-[293px]">
                            <i class="fas fa-image text-3xl"></i>
                        </div> -->
                        <!-- <div class="h-[293px] w-[293px]" :style="'background: url('+post.images+') repeat center center '"> -->

                        <!-- </div> -->
                    </a>
                    
                    
                </div>
            </div>
            <div v-if="loading_more_posts" class="flex justify-center">
                <img class="w-12" :src="load_more_spinner" alt="">
            </div>
        </div>
    </div>

</template>
<script>
import { createPopper } from "@popperjs/core";
import TextInput from "@/components/Post/TextInput.vue";
import load_more_comments_spinner from "@/assets/img/load_more_comments_spinner.gif";
import load_more_spinner from "@/assets/img/load_more_spinner.gif";
import add_img_icon from "@/assets/img/add.png";
import team2 from "@/assets/img/team-2-800x800.jpg";
import FlashMessages from '@/Shared/FlashMessages';
import LoadingButton from "@/components/Forms/Auth/LoadingButton.vue";


export default {
components: {
    
    TextInput,
    FlashMessages,
    LoadingButton,
  },
  props: ['user_id'],
  data() {
    return {
        load_more_comments_spinner,
        load_more_spinner,
        team2,
        add_img_icon,
        loading_more_posts: false,
        selected_post_id: null,
        noResult: false,
        message: '',

        
        loading_more_likes_users: false,
        showLikesUsersModalBool: false,
        likes_users_arr: [],
        posts: [],
        loading_more_posts: false,
        posts_form: this.$inertia.form({    
            
        }),
        likes_form: this.$inertia.form({    
            
        }),
        follow_user_form: this.$inertia.form({
                
          user_id: null,
        }),
        load_more_cmnts_form: this.$inertia.form({
                
        }),
        test_form: this.$inertia.form({
            comment: null,
        }),
        make_cmnt_form: this.$inertia.form({
            comment: null,
        }),


    };
  },
  mounted() {
    
    console.log(this.user_id);
    this.getUsersPosts();
    console.log(this.posts)
  },
  methods: {
    postMouseenter(index){
        var post = this.posts[index];
        post.hvring = true;
    },
    postMouseleave(index){
        var post = this.posts[index];
        post.hvring = false;
    },
    loadMorePosts({ target: { scrollTop, clientHeight, scrollHeight }}){  
        // console.log('scrolling')
        var self = this;
        
      
        if (scrollTop + clientHeight >= scrollHeight) {
            if(!this.loading_more_posts != null || !this.loading_more_posts && this.posts.length > 0){
                var last_post = this.posts[this.posts.length - 1];
                var last_id = last_post.id;
                console.log(last_id);
                this.getUsersPosts(last_id);
            }
        }
        
    },

    prepend(value, array) {
        var newArray = array.slice();
        newArray.unshift(value);
        return newArray;
    },
    submitCmnt(index){
        var self = this
        var post = this.posts[index];
        var post_id = post.id;
        var cmnts = post.lst_thr_cmnts;
        

        var url = this.route('make_new_cmnt',post_id);
        console.log(url)
        var ref = 'cmnt_input_'+ post.id;
        var comment = this.$refs[ref][0].value;
        console.log(comment)
        this.make_cmnt_form.comment = comment
        post.add_comment_loading = true;
        this.make_cmnt_form.post(url, {
            preserveScroll: true,
            onSuccess: (page) => {
                post.add_comment_loading = false;
                var response = page.props.flash.data;
                console.log(response)
            
                if(response.success && response.lst_thr_cmnts != []){
                    self.$refs[ref][0].value = "";
                    // post.lst_thr_cmnts = self.prepend(response.comment,cmnts);
                    post.lst_thr_cmnts = response.lst_thr_cmnts;
                    post.rem_cmnts_num = response.rem_cmnts_num;
                    post.last_row = response.last_row;
                    // console.log(self.prepend(response.comment,cmnts))
                }
            },onError: (errors) => {
                post.add_comment_loading = false;
                console.log(errors)
                if(errors.comment){
                    Swal.fire({
                        title: 'Ooops!',
                        html: 'Something went wrong when posting your comment. See error below. <p class="mt-8 text-red-500 italic text-sm">'+errors.comment+'</p>',
                        icon: 'error',
                        
                    })
                }
            },
        });
        
    },
    viewMoreComments(index){
        var self = this
        var post = this.posts[index];
        var post_id = post.id;
        var last_cmnt = post.lst_thr_cmnts[post.lst_thr_cmnts.length - 1];
        var last_cmnt_id = last_cmnt.id;
        var last_cmnt_text = last_cmnt.text;
        console.log(last_cmnt_text)

        var url = this.route('load_more_cmnts',post_id) + '?last_id='+last_cmnt_id;
        console.log(url)
        

        this.load_more_cmnts_form.post(url, {
            preserveScroll: true,
            onSuccess: (page) => {
                
                var response = page.props.flash.data;
                console.log(response)
            
                if(response.success){
                
                    // console.log("success")
                    if(response.cmnts.length > 0) {
                        // console.log("populated")
                        post.lst_thr_cmnts.push(...response.cmnts);
                        post.rem_cmnts_num = response.rem_cmnts_num;
                        if(response.last_row){
                            post.last_row = true;
                        }
                    
                    } 
                }
            },onError: (errors) => {
                console.log(errors)
                
            },
        });
        
    },
    loadMoreUsersLikes({ target: { scrollTop, clientHeight, scrollHeight }}) {
      var self = this;
      

      if (scrollTop + clientHeight >= scrollHeight) {
        
      
        const axios = require('axios');
        
        
        var last_row = this.likes_users_arr[this.likes_users_arr.length - 1];
        var last_id = last_row.user_details.id;
        // console.log(last_row)
        

        var url = this.route('post_likes_users_subs',this.selected_post_id) + '?last_id='+last_id;
        // console.log(url)
        if(self.loading_more_likes_users === false && self.loading_more_likes_users !== null){
          self.loading_more_likes_users = true;

          self.likes_form.post(url, {
            preserveScroll: true,
            onSuccess: (page) => {
              
              var response = page.props.flash.data;
              console.log(response)
            
              if(response.success){
                self.loading_more_likes_users = false;
                // console.log("success")
                if(response.liked_users.length > 0) {
                  // console.log("populated")
                  self.likes_users_arr.push(...response.liked_users);
                  if(response.last_row){
                    console.log('This is the last row!');
                    self.loading_more_likes_users = null;
                    console.log(self.loading_more_likes_users)
                  }
                //   console.log( self.likes_users_arr)
                } else {
                  self.noResult = true;
                  self.message = "No result found";
                }
              }else{
                self.loading_more_likes_users = false;
                self.noResult = true;
                self.message = "Something went wrong";
              }
            },onError: (errors) => {
              console.log(errors)
              self.loading_more_likes_users = false;
              self.noResult = true;
              self.message = "Error loading data";
            },
          });
        }
      }
      
    },
    toggleFollowLikesModal(user_id,index){
      var self = this;
      self.follow_user_form.user_id = user_id;
      // console.log(self.follow_user_form.user_id)
      self.follow_user_form.post(self.route('toggle_follow_user',self.follow_user_form.user_id), {
        preserveScroll: true,
        onSuccess: (page) => {
          
          var response = page.props.flash.data;
          console.log(response)

          if(page.props.flash.success){
            self.likes_users_arr[index].following_status = (!self.likes_users_arr[index].following_status) ? true : false;
          }
        },onError: (errors) => {
          console.log(errors)
          
        },
      });

    },
    toggleLikesModal(){
      this.loading_more_likes_users = false;
      this.showLikesUsersModalBool = !this.showLikesUsersModalBool;
     
    },
    viewLikedUsers(index){
        var post = this.posts[index];
        this.selected_post_id = post.id;
        var self = this;
        self.likes_form.post(self.route('post_likes_users',this.selected_post_id), {
            preserveScroll: true,
            onSuccess: (page) => {
            
            var response = page.props.flash.data;
            console.log(response)

            if(page.props.flash.success){
                
                self.likes_users_arr = response.liked_users;
                self.toggleLikesModal();
                
            }
            },onError: (errors) => {
            console.log(errors)
            
            },
        });
    },
    unlikePost(index){
        var self = this;
        var post_id = this.posts[index].id;
        var url = this.route('unlike_post',post_id);
        this.posts_form.post(url, {
            preserveScroll: true,
            onSuccess: (page) => {
            
                var response = page.props.flash.data;
                console.log(response)
                
                if(response.success){
                    self.posts[index].like_count--;
                    self.posts[index].liked = false;
                }
            },onError: (errors) => {
                console.log(errors)
                
                
            },
        });

    },
    likePost(index){
        var self = this;
        var post_id = this.posts[index].id;
        var url = this.route('like_post',post_id);
        this.posts_form.post(url, {
            preserveScroll: true,
            onSuccess: (page) => {
            
                var response = page.props.flash.data;
                console.log(response)
                
                if(response.success){
                    self.posts[index].like_count++;
                    self.posts[index].liked = true;
                }
            },onError: (errors) => {
                console.log(errors)
                
                
            },
        });
    },
    showMoreCaption(index){
        console.log(this.posts[index])
        this.posts[index].caption_too_long = false;
    },
    seeMoreOptions(index){
        console.log(this.posts[index])
    },
    getUsersPosts(last_id = 0){
        var self = this;

        var url = this.route('get_users_posts_bg_scr',this.user_id) + '?last_id='+last_id;
        // console.log(url)
        if(this.loading_more_posts === false && this.loading_more_posts !== null){
            this.loading_more_posts = true;

            this.posts_form.post(url, {
                preserveScroll: true,
                onSuccess: (page) => {
                
                    var response = page.props.flash.data;
                    console.log(response)
                    
                    if(response.success){
                        self.loading_more_posts = false;
                        
                        if(response.posts.length > 0) {
                        
                            self.posts.push(...response.posts);
                            console.log(self.posts)
                            if(response.last_row){
                                console.log('This is the last row!');
                                self.loading_more_posts = null;
                                console.log(self.loading_more_posts)
                            }
                            
                        }else{
                            self.loading_more_posts = false;
                        }
                    }
                },onError: (errors) => {
                    console.log(errors)
                    self.loading_more_posts = false;
                    
                },
            });
        }
    },
  },
};
</script>
