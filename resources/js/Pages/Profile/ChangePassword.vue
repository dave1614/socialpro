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
        <div class="px-5 py-5 border-b">
          <!-- <h4 class="text-sm font-bold">Change Password</h4> -->
        </div>
        <div class="flex justify-center items-center -mb-8">
            <flash-messages />
        </div>

        <div class=" mx-auto py-10 sm:px-6 lg:px-8">

            <div class="">
            
                <div class="flex justify-center">
                    <div class="card mt-5 md:mt-0 w-full md:w-1/2">
                        <h5 class="font-semibold text-2xl text-center mb-12">Change Your Password</h5>
                        <form @submit.prevent="submitForm">
                            

                            <text-input v-model="form.current_password" :error="form.errors.current_password" type="password" label="Current Password" id="current_password" placeholder="********" class="mb-3"/> 

                            <text-input v-model="form.new_password" :error="form.errors.new_password" type="password" label="New Password" id="new_password" placeholder="********" class="mb-3"/>                                                   

                            <text-input v-model="form.new_confirm_password" :error="form.errors.new_confirm_password" type="password" label="Confirm New Password" id="new_confirm_password" placeholder="********" class="mb-6"/>

                        
                            <loading-button class="bg-black text-white font-semibold mt-4 px-5 py-2 rounded" :loading="form.processing" type="submit">Update Password</loading-button>
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
  },
  data() {
    return {
      team2,
      add_img_icon,
      profile_picture: this.user_details.profile_picture,
      region_disabled: false,
      regions: this.all_regions,

      form: this.$inertia.form({
        current_password: null,
        new_password: null,
        new_confirm_password: null,
      }),
    };
  },

  mounted() {
    console.log(this.user_details);
    console.log(this.all_regions);
  },
  methods: {
    submitForm() {
      this.form.post(this.route("change.password"), {
        preserveScroll: true,
      });
    },
  },
};
</script>
