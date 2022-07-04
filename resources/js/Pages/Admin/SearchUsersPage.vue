<template>
    <navbar :profile_picture="logged_in_users_details.profile_picture" :black_nav="true" :user_info="logged_in_users_details" />
    <div class="mt-32">
        <div class="card min-h-screen mx-3">
            <div class="flex flex-row flex-wrap items-center ml-auto  relative">
                <form class="w-full"
                >
                    <div class="relative flex w-full flex-wrap items-stretch">
                    <span
                        class="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
                    >
                        <i class="fas fa-search"></i>
                    </span>
                    <input
                    
                        @keyup="processSearchInput"
                        v-model="form.search"
                        type="text"
                        placeholder="Search users"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                    />
                    <img
                        v-if="form.processing"
                        :src="load_more_spinner"
                        class="z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center w-9 pr-3 py-3 right-0"
                    >
                    <span
                        
                        v-else-if="!form.processing && form.search != null"
                        @click="form.search = null; search_results = [];"
                        class="z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center w-9 pr-3 py-3 right-0 cursor-pointer"
                    >
                        <i class="fas fa-times-circle text-gray-400"></i>
                    </span>

                        
                    </div>
                    <div class="absolute">

                    </div>
                </form>

                
                <div v-if="search_results.length > 0 && show_results_box" class="w-full mt-3 ">
                    <div v-for="(user,index) in search_results" :key="user.id" class="">
                    <Link :href="route('profile',user.slug)" class="grid grid-cols-12 px-2 py-3 border-b border-l border-r border-solid border-gray-200 hover:bg-gray-200">
                        <div class="col-span-2">
                            
                        <img @click="index" class="w-7 rounded-full" :src="user.profile_picture" :alt='user.user_name + " Profile Picture"'>
                            
                        </div>
                        <div class="col-span-10">
                        
                            <p class="text-black text-sm font-bold">{{ user.user_name }}</p>
                            <p class="text-gray-400 text-sm">{{ user.full_name }}</p>
                        
                        </div>
                    </Link>
                    </div>
                
                </div>
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
import load_more_spinner from "@/assets/img/load_more_comments_spinner.gif";
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
        
        load_more_spinner,
        team2,
        add_img_icon,
        show_results_box: true,
        search_results: [],
        form: this.$inertia.form({
            search: null,
            
            
        }),
        
    };
  },
  mounted() {
    
    
    
  },
  methods: {    
    processSearchInput() {
      var self = this;
      var search = this.form.search;
      if(search == "" || search == null){
        this.form.search = null;
        this.search_results = []
      }
      var url = route('search_users') + "?s=" + search + '&limit=100';
      this.form.post(url, {
          preserveScroll: true,
          onSuccess: (page) => {
              
              var response = page.props.flash.data;
              console.log(response)
          
              if(response.success){
                  self.search_results = response.search_results
                  
                  // self.show_results_box = (self.search_results.length > 0) ? true : false;
              }
          },onError: (errors) => {
              console.log(errors)
              
          },
      });
        
    },
  },
};
</script>
