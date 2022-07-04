<style>
  .centered{
    transform: translate(-50%, -50%);
  }
</style>
<template>
  <div>
    <navbar :profile_picture="user_details.profile_picture" :black_nav="true" :user_info="user_details" />
    <main style="" class="edit-profile-page mt-24">
      <div class="min-h-screen">
        <div class="px-5 py-5 border-b">
          <h4 class="text-sm font-bold">Edit Profile</h4>
        </div>
        <div class="flex justify-center items-center -mb-8">
          <flash-messages />
        </div>
        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
          <div>
            <div class="md:grid md:grid-cols-4 md:gap-6">
              <div class="md:col-span-1 flex justify-between">
                <div class="">
                  <input type="file" class="hidden"
                            ref="profile_picture"
                            @change="updateProfilePicturePreview">
                  <img class="w-full shadow-xl" style="" :src="profile_picture" alt="Your Profile Picture">
                  
                  <div v-if="profile_picture_form.progress" class="flex justify-center items-center">
                    <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                      <div :style="'width:'+profile_picture_form.progress.percentage+'%'" class="transition ease-linear duration-150 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                    </div>
                  </div>

                  <div class="flex justify-center items-center">
                    <div @click="selectNewProfilePicture" class="transition ease-in-out duration-300 hover:shadow-xl rounded-full cursor-pointer mt-4 px-6 py-2 bg-emerald-500 shadow text-white font-semibold font-montserrat">SELECT IMAGE</div>

                   
                  </div>

                  <div class="flex justify-center items-center">
                    
                    
                    <loading-button @click="uploadNewProfilePicture" type="button" :loading="profile_picture_form.processing" class="transition ease-in-out duration-300 hover:shadow-xl rounded-full cursor-pointer mt-4 px-8 py-2 bg-red-500 shadow text-white font-semibold font-montserrat">UPLOAD IMAGE</loading-button>
                  </div>
                </div>
                
              </div>
              <div class="mt-5 md:mt-0 md:col-span-3">
                <div class="card">
                  <h5 class="mb-6 font-semibold text-lg">Edit Personal Details</h5>
                  <form @submit.prevent="submitForm">
                    <text-input v-model="form.full_name" :error="form.errors.full_name" type="text" label="Full Name" id="full_name" placeholder="Fullname" class="mb-3"/>                          

                    <text-input v-model="form.email" :error="form.errors.email" type="email" label="Email" id="email" placeholder="Email" class="mb-4"/>

                    <div class="relative w-full mb-3">
                      <label class="main_form_label" :for="'country'">Country:</label>

                      <select @change="loadRegionsForCountry" id="country" v-model="form.country" :class="form.errors.country ? 'form-input-error' : 'form-input'">
                        <option v-for="country in countries" :value="country.id" :key="country.id">{{ country.name }}</option>
                      </select>
                    
                      <div v-if="form.errors.country" class="form-error">{{ form.errors.country }}</div>
                    </div>  

                    <div class="relative w-full mb-3">
                      <label class="main_form_label" :for="'region'">Region:</label>

                      <select id="region" v-model="form.region" :class="form.errors.region ? 'form-input-error' : !region_disabled ? 'form-input' : 'form-input opacity-50 cursor-not-allowed'">
                        <option v-for="region in regions" :value="region.id" :key="region.id">{{ region.name }}</option>
                      </select>
                    
                      <div v-if="form.errors.region" class="form-error">{{ form.errors.region }}</div>
                    </div>   

                    <div class="relative w-full mb-3">
                      <label class="main_form_label" :for="'address'">Address:</label>
                      <textarea rows="4" :class="form.errors.address ? 'form-input-error' : 'form-input'"  v-model="form.address" name="" id=""  placeholder="Enter your address....."></textarea>  
                      <div v-if="form.errors.address" class="form-error">{{ form.errors.address }}</div>        
                    </div>

                    <div class="relative w-full mb-3">
                      <label class="main_form_label" :for="'bio'">Bio:</label>
                      <textarea rows="4" :class="form.errors.bio ? 'form-input-error' : 'form-input'"  v-model="form.bio" name="" id=""  placeholder="Enter your bio here....."></textarea>  
                      <div v-if="form.errors.bio" class="form-error">{{ form.errors.bio }}</div>        
                    </div>

                    <!-- <button type="submit" class="bg-black text-white font-semibold mt-4 px-5 py-2 rounded">
                      Submit
                    </button> -->
                    <loading-button class="bg-black text-white font-semibold mt-4 px-5 py-2 rounded" :loading="form.processing" type="submit">Submit</loading-button>
                  </form>
                </div>
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
import FlashMessages from '@/Shared/FlashMessages';
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
      
  },
  data() {
    return {
      team2,
      add_img_icon,
      profile_picture: this.user_details.profile_picture,
      region_disabled: false,
      regions: this.all_regions,
     

      form: this.$inertia.form({
          full_name: this.user_details.full_name,
          email: this.user_details.email,
          country: this.user_details.country_id,
          region: this.user_details.region_id,
          address: this.user_details.address,
          bio: this.user_details.bio,
          
      }),

      load_regions_for_country_request: this.$inertia.form({
          country: null,
          
      }),

      profile_picture_form: this.$inertia.form({
                
          image: null,
      }),
    };
  },
  
  mounted() {
    console.log(this.user_details)
    console.log(this.all_regions)
    
  },
  methods: {
    submitForm(){
      
      this.form.post(this.route('process_edit_profile'), {
          preserveScroll: true,
      });
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
        // this.uploadNewProfilePicture();
      }
    },
    selectNewProfilePicture(){
      if(!this.profile_picture_form.processing){
        this.$refs.profile_picture.click();
      }
    },
    loadRegionsForCountry(){
      var self = this;
      self.load_regions_for_country_request.country = self.form.country
      console.log(self.load_regions_for_country_request.country)
      self.region_disabled = true;
      self.form.processing = true;

      self.load_regions_for_country_request.post(self.route('load_regions_for_country'), {
        preserveScroll: true,
        onSuccess: (page) => {
          
          var response = page.props.flash.data;
          console.log(response)

          if(response.regions.length){
            self.form.region = response.first_region_id;
            self.regions = response.regions;
            
          }
          self.region_disabled = false;
          self.form.processing = false;
        },onError: (errors) => {
          
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
    
    selectNewProfilePicture(){
      if(!this.profile_picture_form.processing){
        this.$refs.profile_picture.click();
      }
    },

  },
};
</script>
