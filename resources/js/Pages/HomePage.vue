<template>
    <navbar :profile_picture="logged_in_users_details.profile_picture" :black_nav="true" :user_info="logged_in_users_details" />
    <div class="mt-32">
        <div class="md:grid md:grid-cols-10 md:gap-6 ">
            <div class="md:col-span-6 mx-5">
                <div v-if="posts.length > 0" class="">
                    <div v-for="(post,index) in posts" :key="post.id" class=" border border-solid border-gray-200 rounded-md  py-3 my-3">
                        <div class="grid grid-cols-12 px-2 pb-2 border-b border-gray-200">
                            <div class="col-span-2">
                                <Link class="hover:underline" :href="route('profile',post.slug)">
                                    <img class="w-10 rounded-full" :src="post.profile_picture" :alt='post.user_name + " Profile Picture"'>
                                </Link>
                            </div>
                            <div class="col-span-9">
                                <p class="text-black font-bold text-sm ml-3 mt-2"><Link class="hover:underline" :href="route('profile',post.slug)">{{ post.user_name }}</Link></p>
                            </div>
                            <div class="col-span-1">
                                <i @click="seeMoreOptions(index)" class="fas fa-ellipsis-h text-black cursor-pointer mt-2"></i>
                            </div>
                        </div>
                        <div class="w-full flex justify-center">
                            <img class="w-full h-full max-w-[400px]" :src="'storage/images/' +post.images" :alt='post.user_name + " Post"'>
                        </div>
                        <div class="grid grid-cols-12 px-2 pb-2 border-t border-gray-200 py-3">
                            <div class="col-span-2">
                                <i v-if="!post.liked" @click="likePost(index)" class="far fa-heart text-black text-2xl cursor-pointer"></i>
                                <i v-else @click="unlikePost(index)" class="fas fa-heart text-red-500 text-2xl cursor-pointer"></i>
                            </div>
                            <div class="col-span-2">
                                <i @click="$refs['cmnt_input_'+ post.id][0].focus()" class="far fa-comment-alt text-black text-2xl cursor-pointer"></i>
                            </div>
                            <div class="col-span-2">
                                <i class="far fa-share-square text-black text-2xl cursor-pointer"></i>
                            </div>
                        </div>
                        <div class="-mt-2 pl-2">
                            <p @click="viewLikedUsers(index)" class="cursor-pointer font-semibold text-sm" v-html="(post.like_count > 0) ?  post.like_count + ' Likes' : 'No Likes' "></p>
                        </div>
                        <div class="px-2 mb-1">
                            <p class="text-sm text-black"><span class="font-bold pr-1"><Link class="hover:underline" :href="route('profile',post.slug)">{{ post.user_name }}</Link></span><span v-if="post.caption_too_long">{{ post.caption_shrt }}</span> <span @click="showMoreCaption(index)" class="cursor-pointer font-bold" v-if="post.caption_too_long">more</span> <span v-if="!post.caption_too_long">{{ post.caption }}</span></p>
                        </div>
                        <div v-if="post.lst_thr_cmnts.length > 0" class="pl-2">
                            <div v-if="post.rem_cmnts_num > 0" class="">
                                <span @click="viewMoreComments(index)" class="cursor-pointer text-sm text-gray-400" v-html="'View more comments (' + post.rem_cmnts_num + ')'"></span>
                                <span><img v-if="load_more_cmnts_form.processing" class="w-6 inline-block" :src="load_more_comments_spinner" alt=""></span>
                            </div>
                            <div v-for="(cmnt,i) in post.lst_thr_cmnts.slice().reverse()" :key="cmnt.id"  class="grid grid-cols-12 gap-6">
                                <div class="col-span-10">
                                    <p class="text-sm text-black mt-1"><span class="font-bold pr-1"><Link class="hover:underline" :href="route('profile',cmnt.slug)">{{ cmnt.user_name }}</Link></span><span>{{ cmnt.text }}</span>
                                        <span v-if="false" v-html="i"></span><br>
                                        <span class="text-gray-400 text-sm">{{ cmnt.cmnt_social_time }}</span>
                                    </p>
                                </div>
                                <div v-if="cmnt.user_id == logged_in_users_details.id" class="col-span-2 ">
                                    <i @click="deleteCmnt(index,i)" class=" fas fa-trash cursor-pointer text-gray-300 hover:text-gray-400 text-sm transition ease-in-out duration-200"></i>
                                </div>
                            </div>

                        </div>

                        <div class="mt-2 pl-2">
                            <span class="text-xs text-gray-400 uppercase" v-html="post.post_social_time"></span>
                        </div>

                        <div class="mt-2  border-t border-solid border-gray-200 relative">
                            <form @submit.prevent="submitCmnt(index)">
                                <!-- <text-input v-model="make_cmnt_form.comment" :error="make_cmnt_form.errors.comment" type="text" label="" id="comment" placeholder="Add a comment..." class=""/> -->
                                <div class="grid grid-cols-12 gap-6 pr-5">
                                    <div class="col-span-10">
                                        <input :ref="'cmnt_input_'+ post.id" style="--tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); border-radius: 0;" id="comment"  class="border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm  focus:outline-none w-full ease-linear transition-all duration-150 shadow-none m-0" type="text" placeholder="Add a comment..."/>
                                    </div>
                                    <div class="col-span-2">
                                        <button type="submit" class="bg-transparent text-blue-400 border-0 pt-3 font-bold">Post</button>
                                    </div>
                                </div>
                
                            </form>
                            <div v-if="post.add_comment_loading" class="absolute top-0 bg-white opacity-40 z-40 w-full h-full flex justify-center">
                                <img class="w-12 inline-block" :src="load_more_comments_spinner" alt="">
                            </div>
                        </div>
                    </div>
                    <div v-if="loading_more_posts" class="flex justify-center">
                        <img class="w-12" :src="load_more_spinner" alt="">
                    </div>
                </div> 
                
                <div v-if="posts.length == 0 && no_posts" class="flex justify-center">
                    <span class="font-bold text-orange-300 text-sm">You are not following anyone. Follow someone to see their posts here.</span>
                </div>

            </div>
            <div class="relative hidden md:block md:col-span-4  ">
                <div class="fixed w-full mt-4">
                    <div class="grid grid-cols-12 gap-2">
                        <div class="col-span-1">
                            <Link :href="route('profile',logged_in_users_details.slug)">
                                <img class="w-12 rounded-full" :src="logged_in_users_details.profile_picture" alt="Your Profile Picture">
                            </Link>
                        </div>
                        <div class="col-span-11">
                            <div class="">
                                <span class="text-black font-bold text-sm block"><Link :href="route('profile',logged_in_users_details.slug)">{{ logged_in_users_details.user_name }}</Link></span>
                                <span class="text-gray-400 text-sm capitalize">{{ logged_in_users_details.full_name }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-7">
                        <p class="text-xs text-gray-300">
                            <span class="mr-1"><Link :href="route('about_page')">About</Link></span>.
                            <span class="mr-1"><Link :href="route('contact_page')">Contact</Link></span>.
                            <span class="mr-1"><Link :href="route('help_page')">Help</Link></span>.
                            <span class="mr-1"><Link :href="route('privacy_page')">Privacy</Link></span>.
                            <span class="mr-1"><Link :href="route('terms_page')">Terms</Link></span>
                            
                        </p>
                    </div>
                    <div class="mt-3">
                        <span class="text-sm uppercase text-gray-400" v-html="'&copy; ' + year + ' social pro from dave solutions'"> </span>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div v-if="showLikesUsersModalBool" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex" id="following_users_modal">
        <div class="relative w-auto my-6 mx-auto max-w-3xl">
            <!--content-->
            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <!--header-->
                <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h4 class="text-xl font-semibold text-center">
                        Likes
                    </h4>
                    <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold" @click="toggleLikesModal">
                        <span class="bg-transparent text-gray-500  h-6 w-6 text-2xl block ">
                            <i class="fas fa-times"></i>
                        </span>
                    </button>
                </div>
                <!--body-->
                <div class="relative flex-auto text-white ">
                    <div v-if="likes_users_arr.length > 0" class="">
                        
                        <div
                        
                        @scroll="loadMoreUsersLikes"
                        class="h-[350px] overflow-x-hidden p-6"
                        >
                        <div >
                            <div v-for="(user,index) in likes_users_arr" :key="user.user_details.id" class="">
                            <div class="grid grid-cols-12 mt-3">
                                <div class="col-span-2">
                                <Link class="hover:underline" :href="route('profile',user.user_details.slug)">
                                    <img class="w-10 rounded-full" :src="user.user_details.profile_picture" alt="">
                                </Link>
                                </div>
                                <div class="col-span-7">
                                <p class="text-black font-bold"><Link class="hover:underline" :href="route('profile',user.user_details.slug)">{{ user.user_details.user_name }}</Link></p>
                                <p class="text-gray-400">{{ user.user_details.full_name }}</p>
                                </div>
                                <div class="col-span-3">
                                <loading-button 
                                    v-if="user.following_status != null"
                                    @click="toggleFollowLikesModal(user.user_details.id,index)" 
                                    type="button" 
                                    v-html="(!user.following_status) ? 'Follow' : 'Following'"
                                    :class="(!user.following_status) ? 'w-auto cursor-pointer bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150' : 'w-auto cursor-pointer bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150'">
                                    
                                    
                                
                                </loading-button>

                                <loading-button
                                    v-else
                                    class="invisible w-auto cursor-pointer bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                                    Following
                                </loading-button>


                            

                                </div>
                            </div>

                            </div>
                            <div v-if="loading_more_likes_users" class="flex justify-center">
                            <img class="w-16" :src="load_more_spinner" alt="">
                            </div>
                        </div>

                        
                        </div>
                        
                    </div>
                    <div class="" v-else>
                        <h5 class="text-center">No Users Here</h5>
                    </div>
                
                </div>
            
            
            </div>
        </div>
    </div>
    <div v-if="showLikesUsersModalBool" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

    <div v-if="showMoreOptionsModalBool" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex" id="following_users_modal">
        <div class="relative w-full my-6 mx-auto max-w-3xl md:w-1/2">
            <!--content-->
            <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               
                <!--body-->
                <div class="relative flex-auto text-black text-center ">
                    <div v-if="selected_post_id_more_opt != 0" class="" >
                        <div v-if="posts[selected_post_index_more_opt].user_id == logged_in_users_details.id" class="border-b border-gray-200 py-2">
                            
                            <div class="">
                                
                                <p class=""><Link class="hover:underline" :href="route('edit_post_page',selected_post_id_more_opt)">Edit post</Link></p>
                            </div>
                                
                            
                                
                        </div>
                        <div v-if="posts[selected_post_index_more_opt].user_id == logged_in_users_details.id" class="border-b border-gray-200 py-2">
                        
                            <div class="">
                            
                                <p @click="deletePost" class="text-red-500 cursor-pointer" >Delete post</p>
                            </div>
                                
                            
                        </div>
                    </div>
                       
                    <div class="border-b border-gray-200 py-2">
                        
                        <div class="">
                            
                            <p class=""><Link class="hover:underline" :href="route('post_page',selected_post_id_more_opt)">Go to post</Link></p>
                        </div>
                            
                        
                    </div>
                    <div class="border-b border-gray-200 py-2">
                        
                        <div class="">
                            
                            <p @click="copyPostLink" class="cursor-pointer">Copy Link</p>
                        </div>
                            
                        
                    </div>
                    <div class="border-0 py-2">
                         
                        <div class="">
                            
                            <p @click="closeMoreOptionsModal" class="text-red-500 cursor-pointer" >Cancel</p>
                        </div>
                          
                    </div>

                </div>
            
            
            </div>
        </div>
    </div>
    <div v-if="showMoreOptionsModalBool" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

    

    <!-- <footer-component class="mt-24" /> -->
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

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
    Navbar,
    FooterComponent,
    TextInput,
    FlashMessages,
    LoadingButton,
  },

  props: {
      
      is_logged_in: Boolean,
      is_logged_in_users_page: Boolean,
      logged_in_users_details: Object,
      year: String,
      
  },
  data() {
    return {
        
        load_more_comments_spinner,
        load_more_spinner,
        team2,
        add_img_icon,
        no_posts: false,
        loading_more_posts: false,
        selected_post_id: null,
        noResult: false,
        message: '',

        selected_post_index_more_opt: 0,
        selected_post_id_more_opt: 0,
        showMoreOptionsModalBool: false,
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
        delete_post_request: this.$inertia.form({
            
        }),
        delete_cmnt_request: this.$inertia.form({
            
        }),



        
    };
  },
  mounted() {
    
    this.scroll()
    this.getUsersPosts();
    console.log(this.posts)
  },
  methods: { 
    deleteCmnt(post_index,cmnt_index){
        var post = this.posts[post_index];
        var cmnt = post.lst_thr_cmnts.reverse()[cmnt_index];
        post.lst_thr_cmnts.reverse()
        console.log(cmnt.text)
        // return true;

        var url = route('delete_cmnt',cmnt.id);
        Swal.fire({
            title: 'Delete?',
            html: 'Are you sure you want to delete this comment?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.delete_cmnt_request.post(url, {
                    preserveScroll: true,
                    onSuccess: (page) => {
                        
                        var response = page.props.flash.data;
                        console.log(response)
                    
                        if(response.success){
                            
                            post.lst_thr_cmnts.reverse().splice(cmnt_index,1)
                            post.lst_thr_cmnts.reverse() 
                        }else{
                            Swal.fire({
                                title: 'Ooops!',
                                html: 'Something went wrong when trying to delete this comment',
                                icon: 'error',
                            });
                        }
                    },onError: (errors) => {
                        console.log(errors)
                        Swal.fire({
                            title: 'Ooops!',
                            html: 'Something went wrong when trying to delete this comment',
                            icon: 'error',
                        });
                        
                    },
                });
        
            }
        })
    },
    deletePost(){
        var self = this;
        var url = route('delete_post',this.selected_post_id_more_opt) + '?source=home_page';
        Swal.fire({
            title: 'Delete?',
            html: 'Are you sure you want to delete this post?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.delete_post_request.post(url, {
                    preserveScroll: true,
                    onSuccess: (page) => {
                        
                        var response = page.props.flash.data;
                        console.log(response)
                    
                        if(response.success){
                            Swal.fire({
                                title: 'Successful',
                                html: 'Your post has been deleted successfully',
                                icon: 'success',
                                allowOutsideClick: false,
                                allowEscapeKey: false,
                                allowEnterKey: false,
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    self.posts.splice(self.selected_post_index_more_opt,1)
                                    self.toggleMoreOptionsModal()
                                    // self.$inertia.visit(self.route('home_page'))
                                }
                            });
                        }else{
                            Swal.fire({
                                title: 'Ooops!',
                                html: 'Something went wrong when trying to delete this post',
                                icon: 'error',
                            });
                        }
                    },onError: (errors) => {
                        console.log(errors)
                        Swal.fire({
                            title: 'Ooops!',
                            html: 'Something went wrong when trying to delete this post',
                            icon: 'error',
                        });
                        
                    },
                });
        
            }
        })
    },
    scroll () {
        window.onscroll = () => {
            // console.log("scrolling");
            let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

            if (bottomOfWindow) {
                // this.scrolledToBottom = true // replace it with your code
                if(!this.loading_more_posts != null || !this.loading_more_posts && this.posts.length > 0){
                    var last_post = this.posts[this.posts.length - 1];
                    var last_id = last_post.id;
                    console.log(last_id);
                    this.getUsersPosts(last_id);
                }
            }
        }
    },  
    
    copyPostLink(){
        var link = route('post_page',this.selected_post_id_more_opt)
        
        // document.execCommand('copy');
        // clipboard.writeText(link);
         navigator.clipboard.writeText(link);
        Swal.fire({
            title: 'Copied',
            html: '',
            icon: 'success',
            
        })
    },
    closeMoreOptionsModal(){
        this.selected_post_id_more_opt = 0;
        this.toggleMoreOptionsModal();
    },

    seeMoreOptions(index){
        var post = this.posts[index];
        var post_id = post.id;
        this.selected_post_index_more_opt = index;
        this.selected_post_id_more_opt = post_id;
        this.toggleMoreOptionsModal();
    },

    toggleMoreOptionsModal(){
      
      this.showMoreOptionsModalBool = !this.showMoreOptionsModalBool;
     
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
        console.log(post.like_count)
        if(post.like_count <= 0){
            return true;
        }
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
    
    getUsersPosts(last_id = 0){
        var self = this;

        var url = this.route('get_users_front_page_posts',this.logged_in_users_details.id) + '?last_id='+last_id;
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
                            self.no_posts = true;
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
