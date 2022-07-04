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
                      Reset your password
                    </h6>
                  </div>
                  
                  <hr class="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <flash-messages />
                  <div class="text-blueGray-400 text-center mb-3 font-bold">
                    <!-- <small>Or sign in with credentials</small> -->
                  </div>
                  <form @submit.prevent="submit">
                    

                    <text-input v-model="form.email" :error="form.errors.email" type="email" label="Enter your email" id="email" placeholder="Email address" class="mb-3"/>                          

                    <text-input v-model="form.password" :error="form.errors.password" type="password" label="Password" id="password" placeholder="" class="mb-3"/>                          
                    <text-input v-model="form.password_confirmation" :error="form.errors.password_confirmation" type="password" label="Confirm Password" id="password_confirmation" placeholder="" class="mb-3"/> 

                    <div class="text-center mt-6">
                      
                      <loading-button :loading="form.processing" type="submit">Reset Password</loading-button>
                    </div>


                  </form>
                </div>
              </div>
              <div class="flex flex-wrap mt-6 relative">
                <div class="w-1/2">
                  <Link :href="route('login')" class="text-blueGray-200">
                    <small>Sign in</small>
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
        token: String,
        
    },

    data() {
        return {
            github,
            google,
            facebook,
            registerBg2,
            form: this.$inertia.form({
                token: this.token,
                email: '',
                password: '',
                password_confirmation: '',
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
            this.form.post(this.route('password.update'), {
                preserveScroll: true,
            });
        },
    },
};
</script>
