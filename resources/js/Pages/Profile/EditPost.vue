<style>
.centered {
  transform: translate(-50%, -50%);
}
</style>
<template>
  <div>
    <navbar :profile_picture="user_details.profile_picture" :black_nav="true" :user_info="user_details" />
    <main style="" class="edit-profile-page mt-24">
      <div class="min-h-screen">
        <!-- <div class="px-5 py-5 border-b">
          <h4 class="text-sm font-bold">Change Password</h4>
        </div> -->
        <div class="flex justify-center items-center -mb-8">
            <flash-messages />
        </div>

        <div class=" mx-auto py-10 sm:px-6 lg:px-8">

            <div class="">
                
                <h5 class="font-semibold text-2xl text-center mb-6 mt-5">Edit Your Post</h5>
                <div class="flex justify-center">
                  <div class="card border border-solid border-gray-100 mt-5 md:mt-0 w-full md:w-3/4 p-8">
                    <form @submit.prevent="submitForm">
                      <!-- <div class="tool-bar flex justify-content-start mb-6 text-gray-400 space-x-3 bg-gray-200 my-2 ml-2 w-max		p-2 rounded-lg " files="" temporaryfiles="">
                        <i title="Start Upload" class="transition-colors	duration-700 cursor-pointer  hover:text-green-500 fas fa-arrow-circle-up"></i>
                        <i title="Cancel Upload" class=" transition-colors	duration-700 cursor-pointer hover:text-red-400  fas fa-ban"></i> 
                        <i title="Delete All" class=" transition-colors	duration-700 cursor-pointer hover:text-red-400  fas fa-trash-alt"></i>
                      </div> -->

                      <div id="image-container " class="mb-8 mx-auto flex flex-wrap justify-content-start   -ml-3 h-auto">
                        <div v-if="photoPreview" class="overflow-hidden  relative image-box mt-3 ml-3 block border-2 shadow-xl rounded-md w-[100px] h-[100px]">
                          <div class="absolute h-full w-full bg-gray-100 rounded opacity-30">
                          </div> 
                          <div @click="deletePhoto" class="absolute tool-bar-img flex justify-content-start mb-6 text-gray-400 space-x-3 bg-gray-200 my-2 ml-2 w-max		p-2 rounded-lg ">
                            <i title="Delete" class=" transition-colors	duration-700 cursor-pointer hover:text-red-400  fas fa-trash-alt"></i>
                          </div> 
                          <img  :src="photoPreview" class="upload-images object-cover w-[100px] h-[100px]"> 
                        </div>

                        
                      </div>

                     

                      <div v-if="form.progress" class="flex justify-center items-center">
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                          <div :style="'width:'+form.progress.percentage+'%'" class="transition ease-linear duration-150 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-black"></div>
                        </div>
                      </div>

                      <div @click="chooseImageAreaClicked" class="flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md mt-20 hover:bg-gray-50 cursor-pointer">
                        <div class="text-sm">
                          <div class="flex justify-center">
                            
                            <svg class="w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true" data-v-46d73839=""><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-46d73839=""></path></svg>
                          </div>
                          <label for="photo" class="relative cursor-pointer bg-white rounded-md font-medium text-blue-500  hover:text-blue-600 transition-color duration-300">
                            <span >Choose another image to replace with</span> 
                            <input @change="updatePhotoPreview" ref="photos" id="photos" accept="image/*" name="photos" type="file" class="sr-only">
                          </label>
                          <!-- <span class="pl-1">or drag and drop</span> -->
                          <p class="text-xs text-gray-500 text-center">PNG, JPG, GIF up to 4MB</p>
                        </div>
                      </div>

                    
                      <div class="relative w-full my-6">
                        <textarea rows="4" :class="form.errors.caption ? 'form-input-error' : 'form-input'"  v-model="form.caption" name="" id=""  placeholder="Write your caption here....."></textarea>  
                        <div v-if="form.errors.caption" class="form-error">{{ form.errors.caption }}</div>        
                      </div>

                      <loading-button class="bg-black text-white font-semibold mt-4 px-5 py-2 rounded" :loading="form.processing" type="submit">Submit</loading-button>
                    </form>

                  </div>
                </div>
            </div>
        </div>
            
            
        
      </div>
    </main>
    <footer-component />
  </div>
 
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";


import TextInput from "@/components/Forms/Auth/TextInput.vue";
import add_img_icon from "@/assets/img/add.png";
import team2 from "@/assets/img/team-2-800x800.jpg";
import FlashMessages from "@/Shared/FlashMessages";
import LoadingButton from "@/components/Forms/Auth/LoadingButton.vue";

export default {
  components: {
    FlashMessages,
    Navbar,
    FooterComponent,
    TextInput,
    LoadingButton,
  },
  props: {
    all_regions: Object,
    countries: Object,
    cover_photo_prop: String,
    user_details: Object,

    post: Object,
  },
  data() {
    return {
      
      team2,
      add_img_icon,
      photoPreview: '/storage/images/' +this.post.images,
      profile_picture: this.user_details.profile_picture,
      region_disabled: false,
      regions: this.all_regions,

      form: this.$inertia.form({
        caption: this.post.caption,
        image: null,
      }),
    };
  },

  mounted() {
    console.log(this.post.images)

    console.log(this.$refs.photos.files)
    if(this.$refs.photos.files.length == 0){
      console.log("no file selected");
    }
    // var api = "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0";
    // this.axios.get(api).then((response) => {
    //   console.log(response.data)
    // })
  },
  methods: {
    submitForm() {
    //   if (this.$refs.photos.files.length == 0){
    //     Swal.fire({
    //       title: 'Ooops',
    //       html: "At least one image must be selected",
    //       icon: 'error',
          
    //     })
    //     return;
    //   } 
      if (this.$refs.photos.files.length > 1){
        Swal.fire({
          title: 'Ooops',
          html: "Only one image can be selected",
          icon: 'error',
          
        })
        return;
      }
      
      if (this.form.caption == null){
        Swal.fire({
          title: 'Ooops',
          html: "A caption must be entered to proceed",
          icon: 'error',
          
        })
        return;
      }

      Swal.fire({
        title: 'Proceed?',
        html: "Are you sure you want to edit this post?",
        icon: 'warning',
        
        confirmButtonText: 'Yes, proceed!',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
            
      }).then((result) => {    
        if (result.isConfirmed) {

          this.form.image = this.$refs.photos.files[0];
          
          var self = this;
          
          self.form.post(self.route('process_edit_post',self.post.id), {
            preserveScroll: true,
            onSuccess: (page) => {
              
              var response = page.props.flash.data;
              console.log(response)

              if(page.props.flash.success){
                
                self.$inertia.visit(self.route('edit_post_page',self.post.id));
                  
              }else if(response.errors != ""){
                
                Swal.fire({
                  title: 'Error',
                  html: response.errors,
                  icon: 'error',
                  
                })
              }
            },onError: (errors) => {
              console.log(errors)
              if(errors.image){
                Swal.fire({
                  title: 'We ran into errors when uploading your image',
                  html: errors.image,
                  icon: 'error',
                  showConfirmButton: true,
                  confirmButtonText: 'OK',
                  
                }).then((result) => {
                  
                  if (result.isConfirmed) {
                    
                  }
                });
              }
            },
          });
        }
      });
    },
    chooseImageAreaClicked(){
      this.$refs.photos.click();
    },
    deletePhoto() {
      this.photoPreview = null;
      if (this.$refs.photos?.value) {
        this.$refs.photos.value = null;
      }
    },
    updatePhotoPreview() {
        const photos = this.$refs.photos.files;

        if (this.$refs.photos.files.length == 0){
          Swal.fire({
            title: 'Ooops',
            html: "At least one image must be selected",
            icon: 'error',
            
          })
          return;
        } 
        if (this.$refs.photos.files.length > 1){
          Swal.fire({
            title: 'Ooops',
            html: "Only one image can be selected",
            icon: 'error',
            
          })
          return;
        }

        for(var i = 0; i < photos.length; i++){
          var photo = photos[i];
          const reader = new FileReader();

          reader.onload = (e) => {
              this.photoPreview = e.target.result;
          };

          reader.readAsDataURL(photo);
        }
    },
    
  },
};
</script>
