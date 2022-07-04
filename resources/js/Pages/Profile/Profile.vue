<style>
  .centered{
    transform: translate(-50%, -50%);
  }
</style>
<template>
  <div>
    <navbar :profile_picture="logged_in_users_details.profile_picture" :user_info="logged_in_users_details"/>
    <main style="" class="profile-page ">
      <section class="relative block h-[500px]">
       
        <div 
          
          class="absolute top-0 w-full h-full bg-center bg-cover"
          :style="user_details.cover_photo"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          >
            
          </span>
          <div @click="toggleCoverPhotoModal" v-if="is_logged_in_users_page" class="rounded-sm transiton ease-in-out duration-300 absolute top-20 right-0 border-2 border-white border-solid px-2 py-2 mx-6 cursor-pointer hover:px-3">
            <i class="fas fa-camera text-white text-lg mr-3"></i>
            <span class="text-white font-bold">{{ cover_photo_change_txt }}</span>
          </div>
        </div>

        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">

        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
                >
                  <div class="relative">
                    <input type="file" class="hidden"
                            ref="profile_picture"
                            @change="updateProfilePicturePreview">
                    <img
                      v-if="is_logged_in_users_page"
                      @click="selectNewProfilePicture"
                      title="Select Photo"
                      style="border-radius: 50%;"
                      alt="..."
                      :src="profile_picture"
                      class="cursor-pointer shadow-xl h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                    />

                     <img
                      v-else
                      style="border-radius: 50%;"
                      alt="..."
                      :src="profile_picture"
                      class="shadow-xl h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                    />
                  </div>
                </div>
                <div
                  class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
                >
                  <div class="py-6 px-3 mt-32 sm:mt-0">
                    

                    <loading-button 
                      v-if="!is_logged_in_users_page && !following_this_user"
                      @click="toggleFollow" 
                      type="button" 
                      :loading="follow_user_form.processing" 
                      class="w-auto cursor-pointer bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                      
                      Follow
                    
                    </loading-button>

                    <loading-button 
                      v-if="!is_logged_in_users_page && following_this_user"
                      @click="toggleFollow" 
                      type="button" 
                      :loading="follow_user_form.processing" 
                      class="w-auto cursor-pointer bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                      
                      Following
                    
                    </loading-button>

                    <Link
                      v-if="is_logged_in_users_page"
                      :href="route('edit_profile')"
                      class="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                  
                      Edit Profile
                    </Link>
                  </div>
                </div>
                <div class="w-full lg:w-4/12 px-4 lg:order-1">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">

                    <div class="mr-4 p-3 text-center cursor-pointer">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        10
                      </span>
                      <span class="text-sm text-blueGray-400">Posts</span>
                    </div>

                    <div @click="viewUsersFollowers" class="mr-4 p-3 text-center cursor-pointer">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        
                        {{ user_details.followers_num }}
                      </span>
                      <span class="text-sm text-blueGray-400">Followers</span>
                    </div>
                    
                    <div @click="viewUsersFollowing" class="lg:mr-4 p-3 text-center cursor-pointer">
                      <span
                        class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                      >
                        {{ user_details.following_num }}
                      </span>
                      <span class="text-sm text-blueGray-400">Following</span>
                    </div>

                  </div>
                </div>
              </div>
              <div class="text-center mt-12">
                <Link
                      v-if="is_logged_in_users_page"
                      :href="route('make_post_page')"
                      class="bg-emerald-500 active:bg-emerald-700 uppercase text-white font-bold hover:shadow-md shadow text-xs px-5 py-3 rounded-full outline-none focus:outline-none sm:mr-2 mb-3 ease-linear transition-all duration-150"
                      type="button"
                    >
                  
                      Make Post
                </Link>
                <h3
                  class="capitalize text-4xl font-semibold leading-normal mb-2 text-blueGray-700"
                >
                  {{ user_details.full_name }}
                </h3>
                <div
                  class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
                >
                  <i
                    class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
                  ></i>
                  <span>{{ user_details.region }}</span>,
                  <span>{{ user_details.country }}</span>
                </div>
                
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div v-if="user_details.bio != null" class="flex flex-wrap justify-center">
                  <div v-if="show_more_bio_btn" class="w-full lg:w-9/12 px-4 transition ease-in-out duration-1000 delay-150">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {{ user_details.bio_short }}
                    </p>
                    <a
                      @click="showMoreBio"
                      href="javascript:void(0)"
                      class="font-normal text-emerald-500"
                    >
                      Show more
                    </a>
                  </div>
                 

                  <div v-else class="w-full lg:w-9/12 px-4 transition ease-in-out duration-1000 delay-150">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {{ user_details.bio }}
                    </p>
                    <a
                      @click="showLessBio"
                      href="javascript:void(0)"
                      class="font-normal text-emerald-500"
                    >
                      Show less
                    </a>
                  </div>
                </div>
              </div>

              <div v-if="windowWidth <= 850" >
                <small-screen-post  :user_id="user_details.id"/>
              </div>
              <div v-else >
                <big-screen-post :user_id="user_details.id"/>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      
      <div v-if="showCoverPhotoModalBool" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
        <div class="relative w-auto my-6 mx-auto max-w-3xl">
          <!--content-->
          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <!--header-->
            <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 class="text-2xl font-semibold">
                {{ cover_photo_change_txt }}
              </h3>
              <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold" @click="toggleCoverPhotoModal">
                <span class="bg-transparent text-gray-500  h-6 w-6 text-2xl block ">
                  <i class="fas fa-times"></i>
                </span>
              </button>
            </div>
            <!--body-->
            <div class="relative p-6 flex-auto text-center text-white">
              
              <input type="file" class="hidden"
                            ref="cover_photo"
                            @change="updateCoverPhotoPreview">

              <img :src="''+ cover_photo" alt="" class="w-full" style="max-height: 300px;">
              <div
                v-if="cover_photo != '/storage/images/annie-spratt-BcGoZXjyPzA-unsplash.jpg'"
                id="blackOverlay"
                class="w-full h-full absolute opacity-25 bg-black top-0 left-0"
              >
              </div>
              <div class="absolute top-1/2 left-1/2 centered " >
                <div @click="selectNewCoverPhoto" class="rounded-full bg-black opacity-50 p-5 hover:opacity-75 transition ease-in-out duration-300 cursor-pointer" title="Choose Photo">
                  <img :src="add_img_icon" alt="" style="width:30px;">
                </div>
              </div>
            </div>
            <div class="p-6 border-t border-solid border-slate-200 rounded-b">
              
              <div v-if="cover_photo_form.progress" class="relative pt-1">
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                  <div :style="'width:'+cover_photo_form.progress.percentage+'%'" class="transition ease-linear duration-150 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                </div>
              </div>
              <div class="" v-else>
                <flash-messages />
                <div v-if="cover_photo_form.errors.image" class="text-red-500 form-error">{{ cover_photo_form.errors.image }}</div>
              </div>
            </div>
            
            <!--footer-->
            <div class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              
              <button class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" @click="uploadNewCoverPhoto">
                
                
                <span v-if="cover_photo_form.processing"> UPLOADING... </span>
                <span v-else> UPLOAD </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showCoverPhotoModalBool" class="opacity-25 fixed inset-0 z-40 bg-black"></div>


      <div v-if="showFollowingUsersModalBool" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex" id="following_users_modal">
        <div class="relative w-auto my-6 mx-auto max-w-3xl">
          <!--content-->
          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <!--header-->
            <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h4 class="text-xl font-semibold text-center">
                Following
              </h4>
              <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold" @click="toggleFollowingModal">
                <span class="bg-transparent text-gray-500  h-6 w-6 text-2xl block ">
                  <i class="fas fa-times"></i>
                </span>
              </button>
            </div>
            <!--body-->
            <div class="relative p-6 flex-auto text-white ">
              <div v-if="following_users_arr.length > 0" class="">
                
                <div
                  
                  @scroll="loadMoreUsersFollowing"
                  class="h-[350px] overflow-x-hidden"
                  >
                  <div >
                    <div v-for="(user,index) in following_users_arr" :key="user.user_details.id" class="">
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
                            @click="toggleFollowFollowingModal(user.user_details.id,index)" 
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
                    <div v-if="loading_more_following_users" class="flex justify-center">
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
      <div v-if="showFollowingUsersModalBool" class="opacity-25 fixed inset-0 z-40 bg-black"></div>


      <div v-if="showFollowersUsersModalBool" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex" id="following_users_modal">
        <div class="relative w-auto my-6 mx-auto max-w-3xl">
          <!--content-->
          <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <!--header-->
            <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h4 class="text-xl font-semibold text-center">
                Followers
              </h4>
              <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold" @click="toggleFollowersModal">
                <span class="bg-transparent text-gray-500  h-6 w-6 text-2xl block ">
                  <i class="fas fa-times"></i>
                </span>
              </button>
            </div>
            <!--body-->
            <div class="relative p-6 flex-auto text-white ">
              <div v-if="followers_users_arr.length > 0" class="">
                
                <div
                  
                  @scroll="loadMoreUsersFollowers"
                  class="h-[350px] overflow-x-hidden"
                  >
                  <div >
                    <div v-for="(user,index) in followers_users_arr" :key="user.user_details.id" class="">
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
                            @click="toggleFollowFollowersModal(user.user_details.id,index)" 
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
                    <div v-if="loading_more_followers_users" class="flex justify-center">
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
      <div v-if="showFollowersUsersModalBool" class="opacity-25 fixed inset-0 z-40 bg-black"></div>

     
      
    </main>
    <!-- <footer-component /> -->
  </div>
 
</template>
<script>

import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
import BigScreenPost from "@/components/Post/BigScreenPost.vue";
import SmallScreenPost from "@/components/Post/SmallScreenPost.vue";


import load_more_spinner from "@/assets/img/load_more_spinner.gif";
import add_img_icon from "@/assets/img/add.png";
import team2 from "@/assets/img/team-2-800x800.jpg";
import FlashMessages from '@/Shared/FlashMessages';
import LoadingButton from "@/components/Forms/Auth/LoadingButton.vue";


export default {
  components: {
    
    BigScreenPost,
    SmallScreenPost,
    FlashMessages,
    Navbar,
    FooterComponent,
    LoadingButton,
  },
  props: {
      prop_following_this_user: Boolean,
      cover_photo_prop: String,
      cover_photo_change_txt_prop: String,
      show_more_bio: Boolean,
      user_details: Object,
      is_logged_in: Boolean,
      is_logged_in_users_page: Boolean,
      logged_in_users_details: Object,
      
  },
  data() {
    return {
      load_more_spinner,
      team2,
      add_img_icon,

      windowWidth: window.innerWidth,
      showMakePostModalBool: false,
      loading_more_followers_users: false,
      loading_more_following_users: false,
      message: "",
      noResult: false,
      
      followers_users_arr: [],
      following_users_arr: [],
      showFollowersUsersModalBool: false,
      showFollowingUsersModalBool: false,
      following_this_user: this.prop_following_this_user,
      profile_picture: this.user_details.profile_picture,
      showModal: false,
      showCoverPhotoModalBool: false,
      cover_photo: this.cover_photo_prop,
      cover_photo_change_txt: this.cover_photo_change_txt_prop,
      show_more_bio_btn: this.show_more_bio,

      cover_photo_form: this.$inertia.form({
                
          image: null,
      }),

      profile_picture_form: this.$inertia.form({
                
          image: null,
      }),

      follow_user_form: this.$inertia.form({
                
          user_id: null,
      }),

      view_users_following_request: this.$inertia.form({   
        
      }),
      view_users_followers_request: this.$inertia.form({   
        
      }),

      following_users_form: this.$inertia.form({   
        
      }),

      followers_users_form: this.$inertia.form({   
        
      }),
    };
  },
  
  
  mounted() {
    console.log(this.windowWidth)
    
  },
  
  methods: {
    
    startMakePostProcess() {
      this.toggleMakePostModal();
    },
    toggleMakePostModal() {
      this.showMakePostModalBool = !this.showMakePostModalBool;
    },
    loadMoreUsersFollowers({ target: { scrollTop, clientHeight, scrollHeight }}) {
      var self = this;
      

      if (scrollTop + clientHeight >= scrollHeight) {
        
      
        const axios = require('axios');
        
        // console.log(this.following_users_arr[this.following_users_arr.length - 1]);
        var last_row = this.followers_users_arr[this.followers_users_arr.length - 1];
        var last_id = last_row.user_details.id;
        // var last_id = 16;

        var url = this.route('view_users_follower_list_subs',this.user_details.id) + '?last_id='+last_id;
        // console.log(url)
        if(self.loading_more_followers_users === false && self.loading_more_followers_users !== null){
          self.loading_more_followers_users = true;

          self.followers_users_form.post(url, {
            preserveScroll: true,
            onSuccess: (page) => {
              
              var response = page.props.flash.data;
              // console.log(response)
            
              if(response.success){
                self.loading_more_followers_users = false;
                // console.log("success")
                if(response.followers_users.length > 0) {
                  // console.log("populated")
                  self.followers_users_arr.push(...response.followers_users);
                  if(response.last_row){
                    console.log('This is the last row!');
                    self.loading_more_followers_users = null;
                    console.log(self.loading_more_followers_users)
                  }
                  // console.log( self.following_users_arr)
                } else {
                  self.noResult = true;
                  self.message = "No result found";
                }
              }else{
                self.loading_more_followers_users = false;
                self.noResult = true;
                self.message = "Something went wrong";
              }
            },onError: (errors) => {
              console.log(errors)
              self.loading_more_followers_users = false;
              self.noResult = true;
              self.message = "Error loading data";
            },
          });
        }
      }
      
    },
    toggleFollowFollowersModal(user_id,index){
      var self = this;
      self.follow_user_form.user_id = user_id;
      // console.log(self.follow_user_form.user_id)
      self.follow_user_form.post(self.route('toggle_follow_user',self.follow_user_form.user_id), {
        preserveScroll: true,
        onSuccess: (page) => {
          
          var response = page.props.flash.data;
          console.log(response)

          if(page.props.flash.success){
            self.followers_users_arr[index].following_status = (!self.followers_users_arr[index].following_status) ? true : false;
          }
        },onError: (errors) => {
          console.log(errors)
          
        },
      });

    },
    toggleFollowersModal(){
      this.loading_more_followers_users = false;
      this.showFollowersUsersModalBool = !this.showFollowersUsersModalBool;
     
    },
    viewUsersFollowers(){
      // console.log('test')
      var self = this;
      self.view_users_followers_request.post(self.route('view_users_followers_list',self.user_details.id), {
        preserveScroll: true,
        onSuccess: (page) => {
          
          var response = page.props.flash.data;
          console.log(response)

          if(page.props.flash.success){
            
            self.followers_users_arr = response.followers_users;
            self.toggleFollowersModal();
            
          }
        },onError: (errors) => {
          console.log(errors)
          
        },
      });

    },
    loadMoreUsersFollowing({ target: { scrollTop, clientHeight, scrollHeight }}) {
      var self = this;
      

      if (scrollTop + clientHeight >= scrollHeight) {
        
      
        const axios = require('axios');
        
        // console.log(this.following_users_arr[this.following_users_arr.length - 1]);
        var last_row = this.following_users_arr[this.following_users_arr.length - 1];
        var last_id = last_row.user_details.id;
        // var last_id = 16;

        var url = this.route('view_users_following_list_subs',this.user_details.id) + '?last_id='+last_id;
        // console.log(url)
        if(self.loading_more_following_users === false && self.loading_more_following_users !== null){
          self.loading_more_following_users = true;

          self.following_users_form.post(url, {
            preserveScroll: true,
            onSuccess: (page) => {
              
              var response = page.props.flash.data;
              // console.log(response)
            
              if(response.success){
                self.loading_more_following_users = false;
                // console.log("success")
                if(response.following_users.length > 0) {
                  // console.log("populated")
                  self.following_users_arr.push(...response.following_users);
                  if(response.last_row){
                    console.log('This is the last row!');
                    self.loading_more_following_users = null;
                    console.log(self.loading_more_following_users)
                  }
                  // console.log( self.following_users_arr)
                } else {
                  self.noResult = true;
                  self.message = "No result found";
                }
              }else{
                self.loading_more_following_users = false;
                self.noResult = true;
                self.message = "Something went wrong";
              }
            },onError: (errors) => {
              console.log(errors)
              self.loading_more_following_users = false;
              self.noResult = true;
              self.message = "Error loading data";
            },
          });
        }
      }
      
    },
    toggleFollowFollowingModal(user_id,index){
      var self = this;
      self.follow_user_form.user_id = user_id;
      // console.log(self.follow_user_form.user_id)
      self.follow_user_form.post(self.route('toggle_follow_user',self.follow_user_form.user_id), {
        preserveScroll: true,
        onSuccess: (page) => {
          
          var response = page.props.flash.data;
          console.log(response)

          if(page.props.flash.success){
            self.following_users_arr[index].following_status = (!self.following_users_arr[index].following_status) ? true : false;
          }
        },onError: (errors) => {
          console.log(errors)
          
        },
      });

    },
    toggleFollowingModal(){
      this.loading_more_following_users = false;
      this.showFollowingUsersModalBool = !this.showFollowingUsersModalBool;
     
    },
    viewUsersFollowing(){
      // console.log('test')
      var self = this;
      self.view_users_following_request.post(self.route('view_users_following_list',self.user_details.id), {
        preserveScroll: true,
        onSuccess: (page) => {
          
          var response = page.props.flash.data;
          console.log(response)

          if(page.props.flash.success){
            
            self.following_users_arr = response.following_users;
            self.toggleFollowingModal();
            
          }
        },onError: (errors) => {
          console.log(errors)
          
        },
      });

    },
    toggleFollow() {
      var self = this;
      self.follow_user_form.user_id = self.user_details.id;
      // console.log(self.follow_user_form.user_id)
      self.follow_user_form.post(self.route('toggle_follow_user',self.user_details.id), {
        preserveScroll: true,
        onSuccess: (page) => {
          
          var response = page.props.flash.data;
          console.log(response)

          if(page.props.flash.success){
            self.following_this_user = (!self.following_this_user) ? true : false;
          }
        },onError: (errors) => {
          console.log(errors)
          
        },
      });
    },
    uploadNewProfilePicture(){
      var self = this
      if(!this.profile_picture_form.processing){
        
        if (this.$refs.profile_picture) {
          this.profile_picture_form.image = this.$refs.profile_picture.files[0]

          self.profile_picture_form.post(self.route('upload_profile_picture'), {
            preserveScroll: true,
            onSuccess: (page) => {
              
              var response = page.props.flash.data;
              console.log(response)

              if(page.props.flash.success){
                
              }else if(response.errors != ""){
                
                Swal.fire({
                  title: 'Error',
                  html: response.errors,
                  icon: 'error',
                  
                })
              }
            },onError: (errors) => {
              console.log(errors)
              Swal.fire({
                title: 'We ran into errors when uploading your image',
                html: errors.image,
                icon: 'error',
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonColor: '#3b82f6',
                cancelButtonColor : '#c53030',
                confirmButtonText: 'Try Again',
                
              }).then((result) => {
                
                if (result.isConfirmed) {
                  self.uploadNewProfilePicture()
                }
              });
            },
          });
        
        }
      }
    },
    updateProfilePicturePreview(){
      if(!this.profile_picture_form.processing){
        const photo = this.$refs.profile_picture.files[0];

        if (! photo) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            this.profile_picture = e.target.result;
        };

        reader.readAsDataURL(photo);
        this.uploadNewProfilePicture();
      }
    },
    selectNewProfilePicture(){
      if(!this.profile_picture_form.processing){
        this.$refs.profile_picture.click();
      }
    },
    uploadNewCoverPhoto(){
      var self = this
      if(!this.cover_photo_form.processing){
        
        if (this.$refs.cover_photo) {
          if(this.$refs.cover_photo.files.length == 1){
            this.cover_photo_form.image = this.$refs.cover_photo.files[0]

            self.cover_photo_form.post(self.route('upload_cover_photo'), {
              preserveScroll: true,
              onSuccess: (page) => {
                
                var response = page.props.flash.data;
                console.log(response)

                if(page.props.flash.success){
                  setTimeout(() => {
                    self.toggleCoverPhotoModal();
                  }, 3000);
                  
                }else if(response.errors != ""){
                  
                  Swal.fire({
                    title: 'Error',
                    html: response.errors,
                    icon: 'error',
                    
                  })
                }
              },onError: (errors) => {
                
              },
            });
          }else{
           Swal.fire({
              title: 'Ooops!',
              html: "You must select an image to upload.",
              icon: 'error',
              
            }) 
          }
        }
      }
    },
    updateCoverPhotoPreview(){
      if(!this.cover_photo_form.processing){
        const photo = this.$refs.cover_photo.files[0];

        if (! photo) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            this.cover_photo = e.target.result;
        };

        reader.readAsDataURL(photo);
      }
    },
    selectNewCoverPhoto(){
      if(!this.cover_photo_form.processing){
        this.$refs.cover_photo.click();
      }
    },
    toggleCoverPhotoModal(){
      this.showCoverPhotoModalBool = !this.showCoverPhotoModalBool;
    },
    showLessBio(){
      this.show_more_bio_btn = true
    },
    showMoreBio(){
      this.show_more_bio_btn = false
    },
  },
};
</script>
