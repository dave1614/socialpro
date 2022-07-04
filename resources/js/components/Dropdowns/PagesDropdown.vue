<template>
  <div>
    <a
      class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      
      <img :src="profile_picture" alt="Profile picture" class="w-8" style="border-radius: 50%;">
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
      >
        Profile
      </span>
      
      <Link class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" :href="route('profile',user_info.slug)">
        View Profile
      </Link>
      
      <Link class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" :href="route('edit_profile')">
        Edit Profile
      </Link>
      <Link class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" :href="route('change_password_page')">
        Change Password
      </Link>
      
      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
      >
        Settings
      </span>
      <Link class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" :href="route('settings_page')">
        Edit Settings
      </Link>
      
      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
      <span
        class="text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
      >
        Sign Out
      </span>
      
      
      <Link class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" :href="route('logout.perform')">
        Logout
      </Link>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";

export default {
  props: ['profile_picture','user_info'],
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
