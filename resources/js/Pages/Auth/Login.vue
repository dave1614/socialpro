<template>
  <div>
    
    <main>
      <section class="relative w-full h-full py-20 min-h-screen">
        <div
          class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          :style="`background-image: url('${registerBg2}');`"
        ></div>
        <div class="container mx-auto px-4 h-full">
          <div class="flex content-center items-center justify-center h-full">
            <div class="w-full lg:w-4/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
              >
                <div class="rounded-t mb-0 px-6 py-6">
                  <div class="text-center mb-3">
                    <h6 class="text-blueGray-500 text-sm font-bold">
                      Sign in with
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
                    <button
                      class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center  text-xs ease-linear transition-all duration-150"
                      type="button"
                    >
                      <img alt="..." class="w-5 mr-1" :src="google" />
                      Google
                    </button>
                  </div>
                  <hr class="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <flash-messages />
                  <!-- <span v-if="$page.props.flash.status" class="text-green-400 text-xs italic font-bold">{{ $page.props.flash.status }}</span> -->
                  <div class="text-blueGray-400 text-center mb-3 font-bold">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form @submit.prevent="submit">
                    

                    <!-- <text-input v-model="form.user_name" :error="form.errors.user_name" type="text" label="Username" id="user_name" placeholder="Username" class="mb-3"/>                           -->
                    <text-input v-model="form.login" :error="form.errors.login" type="text" label="Username or email" id="login" name="login" placeholder="Enter username or email" class="mb-3"/> 

                    <text-input v-model="form.password" :error="form.errors.password" type="password" label="Password" id="password" name="password" placeholder="Password" class="mb-4"/>

                    <div>
                      <label class="inline-flex items-center cursor-pointer">
                        <input
                          v-model="form.remember_me"
                          id="customCheckLogin"
                          type="checkbox"
                          class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span class="ml-2 text-sm font-semibold text-blueGray-600">
                          Remember me
                        </span>
                      </label>
                    </div>

                    <div class="text-center mt-6">
                      
                      <loading-button :loading="form.processing" type="submit">Sign In</loading-button>
                    </div>


                  </form>
                </div>
              </div>
              <div class="flex flex-wrap mt-6 relative">
                <div class="w-1/2">
                  <Link :href="route('password.request')" class="text-blueGray-200">
                    <small>Forgot password?</small>
                  </Link>
                </div>
                <div class="w-1/2 text-right">
                 
                  <Link class="text-blueGray-200" :href="route('register')">
                    <small>Create new account</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";
import facebook from "@/assets/img/facebook.svg";
import registerBg2 from "@/assets/img/register_bg_2.png";

import TextInput from "@/components/Forms/Auth/TextInput.vue";
import LoadingButton from "@/components/Forms/Auth/LoadingButton.vue";
import FlashMessages from '@/Shared/FlashMessages'

export default {
    components: {
        TextInput,
        LoadingButton,
        FlashMessages,
    },

    props: {
        year: String,
        errors: Object,
    },

    data() {
        return {
            github,
            google,
            facebook,
            registerBg2,
            form: this.$inertia.form({
                
                login: null,
                
                password: null,
                remember_me: false,
            }),
        }
    },

    mounted() {
        console.log(this.$page.props)
    },

    created() {
        
    },

    methods: {
        submit() {
            // this.$inertia.post(route('process_login'), this.form)
            this.form.post(this.route('process_login'), {
                preserveScroll: true,
            });
        },
    },
};
</script>
