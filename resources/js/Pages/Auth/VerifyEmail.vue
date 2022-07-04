<template>
  <div class="min-h-screen bg-gray-200">
    
    <!-- <div class="pt-20 pb-5 flex justify-center">
        
            <img :src="logo" class="w-20" alt="Social Pro Logo Image">
        
    </div> -->
    <div class="flex justify-center " >
        <div class="mt-20 bg-white rounded shadow-md  transform -translate-y-1/2 w-full md:w-1/2 min-h-[250px] relative">
            <p class="text-gray-600 text-sm font-bold text-center">Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.</p>

            <div class="absolute bottom-0 w-full px-3">
                <div class="mb-4 font-medium text-xs text-green-600 text-center transition ease-in-out duration-300" v-show="status" >
                    A new verification link has been sent to the email address you provided during registration.
                </div>
                <div class="mb-4 font-medium text-xs text-red-500 text-center transition ease-in-out duration-300" v-show="error" >
                    Something went wrong when trying to resend the email
                </div>
                <div class="border-t-2 border-solid border-gray-400"></div>
                
                <div class="text-blue-400 text-xs my-2 grid grid-cols-12 gap-6">
                    <div class="col-span-6">
                        <span 
                            @click="resendVerEmail"
                            
                            class="hover:text-blue-600 hover:underline cursor-pointer">
                            Resend Verification Email
                        </span>
                    </div>
                    <div class="col-span-6 flex justify-end">
                        <Link 
                            :href="route('logout.perform')"
                            class="hover:text-blue-600 hover:underline">
                            Log Out
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
   
  </div>
 
</template>
<script>
import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";


import TextInput from "@/components/Forms/Auth/TextInput.vue";
import logo from "@/assets/img/default.svg";
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
   
  },
  data() {
    return {
        logo,
        status: false,
        error: false,
        form: this.$inertia.form({
            
        }),
    };
  },

  mounted() {
    
  },
  methods: {
    resendVerEmail(){
        var self = this;
        var url = route('verification.send');
        self.form.post(url, {
            preserveScroll: true,
            onSuccess: (page) => {
                self.status = true;
                self.error = false;
            },onError: (errors) => {
                console.log(errors)
                
                self.status = false;
                self.error = true;
            },
        });
        
    },
  },
};
</script>
