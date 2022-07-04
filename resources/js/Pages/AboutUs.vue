<template>
    <navbar :profile_picture="logged_in_users_details.profile_picture" :black_nav="true" :user_info="logged_in_users_details" />
    <div class="mt-32 p-3">
        <h4 class="text-center text-2xl font-bold mb-5">About Us</h4>
        <div class="flex justify-center" >
            
            <div class="rounded-sm shadow-md px-5 py-5 my-3 mt-5 md:mt-0 w-full md:w-1/2 bg-gray-200">
                <p class="text-sm text-gray-500">
                    <span class="block">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sit dolorem. Recusandae labore numquam, molestias enim sapiente repellendus laboriosam, quae asperiores porro ratione eum, ab placeat? Fugit qui in perferendis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sit dolorem. Recusandae labore numquam, molestias enim sapiente repellendus laboriosam, quae asperiores porro ratione eum, ab placeat? Fugit qui in perferendis.
                    </span>

                    <span class="block mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sit dolorem. Recusandae labore numquam, molestias enim sapiente repellendus laboriosam, quae asperiores porro ratione eum, ab placeat? Fugit qui in perferendis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sit dolorem. Recusandae labore numquam, molestias enim sapiente repellendus laboriosam, quae asperiores porro ratione eum, ab placeat? Fugit qui in perferendis.
                    </span>

                     <span class="block mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sit dolorem. Recusandae labore numquam, molestias enim sapiente repellendus laboriosam, quae asperiores porro ratione eum, ab placeat? Fugit qui in perferendis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sit dolorem. Recusandae labore numquam, molestias enim sapiente repellendus laboriosam, quae asperiores porro ratione eum, ab placeat? Fugit qui in perferendis.
                    </span>

                     <span class="block mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sit dolorem. Recusandae labore numquam, molestias enim sapiente repellendus laboriosam, quae asperiores porro ratione eum, ab placeat? Fugit qui in perferendis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sit dolorem. Recusandae labore numquam, molestias enim sapiente repellendus laboriosam, quae asperiores porro ratione eum, ab placeat? Fugit qui in perferendis.
                    </span>

                     <span class="block mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sit dolorem. Recusandae labore numquam, molestias enim sapiente repellendus laboriosam, quae asperiores porro ratione eum, ab placeat? Fugit qui in perferendis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sit dolorem. Recusandae labore numquam, molestias enim sapiente repellendus laboriosam, quae asperiores porro ratione eum, ab placeat? Fugit qui in perferendis.
                    </span>
                </p>
            </div>
        </div>
    </div>

    
    <footer-component class="mt-24" />
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
      
  },
  data() {
    return {
        
        load_more_comments_spinner,
        load_more_spinner,
        team2,
        add_img_icon,
        
        
        
    };
  },
  mounted() {
  
  },
  methods: { 
   
      
       
  },
};
</script>
