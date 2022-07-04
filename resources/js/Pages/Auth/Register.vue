<template>
  <main>
    <section class="relative w-full h-full py-20 min-h-screen">
      <div
        class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
        :style="`background-image: url('${registerBg2}');`"
      ></div>
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-6/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
            >
              <div class="rounded-t mb-0 px-6 py-6">
                <div class="text-center mb-3">
                  <h6 class="text-blueGray-500 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>
                <div class="btn-wrapper text-center">
                  <button
                    class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." class="w-5 mr-1" :src="facebook" />
                    Facebook
                  </button>
                  <a
                    :href="route('auth/google')"
                    class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img alt="..." class="w-5 mr-1" :src="google" />
                    Google
                  </a>
                </div>
                <hr class="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                <flash-messages />
                <div class="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <form @submit.prevent="submit">
                  
                  <text-input v-model="form.full_name" :error="form.errors.full_name" type="text" label="Full Name" id="full_name" placeholder="Fullname" class=""/>
                
                  <text-input v-model="form.user_name" :error="form.errors.user_name" type="text" label="Username" id="user_name" placeholder="Username" class=""/>

                  <text-input v-model="form.email" :error="form.errors.email" type="email" label="Email Address" id="email" placeholder="Email" class=""/> 

                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" :for="'country'">Country:</label>

                    <select @change="loadRegionsForCountry" id="country" v-model="form.country" :class="form.errors.country ? 'form-input-error' : 'form-input'">
                      <option v-for="country in countries" :value="country.id" :key="country.id">{{ country.name }}</option>
                    </select>
                   
                    <div v-if="form.errors.country" class="form-error">{{ form.errors.country }}</div>
                  </div>  

                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" :for="'region'">Region:</label>

                    <select id="region" v-model="form.region" :class="form.errors.region ? 'form-input-error' : !region_disabled ? 'form-input' : 'form-input opacity-50 cursor-not-allowed'">
                      <option v-for="region in regions" :value="region.id" :key="region.id">{{ region.name }}</option>
                    </select>
                   
                    <div v-if="form.errors.region" class="form-error">{{ form.errors.region }}</div>
                  </div>             
           

                  <text-input v-model="form.password" :error="form.errors.password" type="password" label="Password" id="password" placeholder="Password" class=""/>

                  <text-input v-model="form.password_confirmation" :error="form.errors.password_confirmation" type="password" label="Confirm Password" id="password_confirmation" placeholder="Confirm Password" class="mb-6"/>

                  <!-- <div>
                    <label class="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span class="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the
                        <a href="javascript:void(0)" class="text-emerald-500">
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div> -->

                  <div class="text-center mt-6">
                      
                    <loading-button :loading="form.processing" type="submit">Create Account</loading-button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";
import facebook from "@/assets/img/facebook.svg";
import registerBg2 from "@/assets/img/register_bg_2.png";

import TextInput from "@/components/Forms/Auth/TextInput.vue";
import SelectInput from "@/components/Forms/Auth/SelectInput.vue";
import LoadingButton from "@/components/Forms/Auth/LoadingButton.vue";
import FlashMessages from '@/Shared/FlashMessages'

export default {
    components: {
        TextInput,
        SelectInput,
        LoadingButton,
        FlashMessages,
    },

    props: {
        all_regions: Object,
        countries: Object,
        year: String,
        errors: Object,
    },

    data() {
        return {
            regions: this.all_regions,
            region_disabled: false,
            github,
            google,
            facebook,
            registerBg2,
            form: this.$inertia.form({
                full_name: null,
                user_name: null,
                email: null,
                country: 1,
                region: 1,
                password: null,
                password_confirmation: null,
            }),
            load_regions_for_country_request: this.$inertia.form({
                country: null,
                
            }),
        }
    },

    mounted() {
        console.log(this.$page.props)
    },

    created() {
        
    },

    methods: {
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
        submit() {
            // this.$inertia.post(route('process_login'), this.form)
            this.form.post(this.route('process_registration'), {
                preserveScroll: true,
            });
        },
    },
};
</script>
