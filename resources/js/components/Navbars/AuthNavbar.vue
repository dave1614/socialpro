<template>
  <nav
    :class="!black_nav ? 'default_nav': 'black_nav'"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-auto static block justify-start"
      >
        <a
          :class="!black_nav  ? 'default_nav_brand': 'black_nav_brand'"
          :href="route('home_page')"
        >
          Social Pro
        </a>
        <!-- <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none border-white"
          style="border-color: white;"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="text-white fas fa-bars"></i>
        </button> -->
      </div>
      <div
        class="flex flex-grow items-center bg-opacity-0  shadow-none"
        
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <!-- <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-auth-navbar"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2"
              />
              Docs
            </a>
          </li> -->
        </ul>
        <!-- Form -->
        <div class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-12 w-1/2 relative">
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
                placeholder="Search"
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

          
          <div v-if="search_results.length > 0 && show_results_box" class="w-full max-h-[350px] bg-white rounded border border-solid border-gray-350 absolute top-10 mt-3 overflow-x-hidden">
            <div v-for="(user,index) in search_results" :key="user.id" class="">
              <Link :href="route('profile',user.slug)" class="grid grid-cols-12 px-2 py-3 hover:bg-gray-200">
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




        <ul class="flex  flex-row list-none ml-auto">
          
          <li class="inline-flex items-center md:hidden">
            <a
              class=" px-3 py-2 flex items-center text-xs uppercase font-bold"
              :class="!black_nav  ? 'text-white': 'text-black'"
              :href="route('search_page')"
              
            >
              <i
                class="fas fa-search text-2xl leading-lg"
              />
              
            </a>
          </li>
          <li class="flex items-center">
            <PagesDropdown :profile_picture="profile_picture" :user_info="user_info" />
          </li>
          

          <!-- <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20VueJS%20UI%20Kit%20and%20Admin.%20Let%20Vue%20Notus%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
              target="_blank"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg"
              />
              <span class="lg:hidden inline-block ml-2">Tweet</span>
            </a>
          </li>

          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              href="https://github.com/creativetimofficial/vue-notus?ref=vn-auth-navbar"
              target="_blank"
            >
              <i
                class="lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg"
              />
              <span class="lg:hidden inline-block ml-2">Star</span>
            </a>
          </li> -->

          
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import PagesDropdown from "@/components/Dropdowns/PagesDropdown.vue";
import load_more_spinner from "@/assets/img/load_more_comments_spinner.gif";
export default {
  
  props: {
    profile_picture: String,
    user_info: Object,
    black_nav: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      load_more_spinner,
      show_results_box: true,
      navbarOpen: false,
      search_results: [],
      form: this.$inertia.form({
          search: null,
          
          
      }),
    };
  },
  methods: {
    processSearchInput() {
      var self = this;
      var search = this.form.search;
      if(search == "" || search == null){
        this.form.search = null;
        this.search_results = []
      }
      var url = route('search_users') + "?s=" + search + '&limit=20';
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
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    PagesDropdown,
  },
};
</script>
