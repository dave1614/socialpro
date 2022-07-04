"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Navbars_AuthNavbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Navbars/AuthNavbar.vue */ "./resources/js/components/Navbars/AuthNavbar.vue");
/* harmony import */ var _components_Footers_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footers/Footer.vue */ "./resources/js/components/Footers/Footer.vue");
/* harmony import */ var _assets_img_team_1_800x800_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/img/team-1-800x800.jpg */ "./resources/js/assets/img/team-1-800x800.jpg");
/* harmony import */ var _assets_img_team_2_800x800_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/img/team-2-800x800.jpg */ "./resources/js/assets/img/team-2-800x800.jpg");
/* harmony import */ var _assets_img_team_3_800x800_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/img/team-3-800x800.jpg */ "./resources/js/assets/img/team-3-800x800.jpg");
/* harmony import */ var _assets_img_team_4_470x470_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/img/team-4-470x470.png */ "./resources/js/assets/img/team-4-470x470.png");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      team1: _assets_img_team_1_800x800_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
      team2: _assets_img_team_2_800x800_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
      team3: _assets_img_team_3_800x800_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
      team4: _assets_img_team_4_470x470_png__WEBPACK_IMPORTED_MODULE_5__["default"]
    };
  },
  components: {
    Navbar: _components_Navbars_AuthNavbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FooterComponent: _components_Footers_Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dropdowns/PagesDropdown.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dropdowns/PagesDropdown.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/popper.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['profile_picture', 'user_info'],
  data: function data() {
    return {
      dropdownPopoverShow: false
    };
  },
  methods: {
    toggleDropdown: function toggleDropdown(event) {
      event.preventDefault();

      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        (0,_popperjs_core__WEBPACK_IMPORTED_MODULE_0__.createPopper)(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start"
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Footers/Footer.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Footers/Footer.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      date: new Date().getFullYear()
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbars/AuthNavbar.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbars/AuthNavbar.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Dropdowns_PagesDropdown_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Dropdowns/PagesDropdown.vue */ "./resources/js/components/Dropdowns/PagesDropdown.vue");
/* harmony import */ var _assets_img_load_more_comments_spinner_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/img/load_more_comments_spinner.gif */ "./resources/js/assets/img/load_more_comments_spinner.gif");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    profile_picture: String,
    user_info: Object,
    black_nav: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    }
  },
  data: function data() {
    return {
      load_more_spinner: _assets_img_load_more_comments_spinner_gif__WEBPACK_IMPORTED_MODULE_1__["default"],
      show_results_box: true,
      navbarOpen: false,
      search_results: [],
      form: this.$inertia.form({
        search: null
      })
    };
  },
  methods: {
    processSearchInput: function processSearchInput() {
      var self = this;
      var search = this.form.search;

      if (search == "" || search == null) {
        this.form.search = null;
        this.search_results = [];
      }

      var url = route('search_users') + "?s=" + search + '&limit=20';
      this.form.post(url, {
        preserveScroll: true,
        onSuccess: function onSuccess(page) {
          var response = page.props.flash.data;
          console.log(response);

          if (response.success) {
            self.search_results = response.search_results; // self.show_results_box = (self.search_results.length > 0) ? true : false;
          }
        },
        onError: function onError(errors) {
          console.log(errors);
        }
      });
    },
    setNavbarOpen: function setNavbarOpen() {
      this.navbarOpen = !this.navbarOpen;
    }
  },
  components: {
    PagesDropdown: _components_Dropdowns_PagesDropdown_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75\"><div class=\"absolute top-0 w-full h-full bg-center bg-cover\" style=\"background-image:url(&#39;https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80&#39;);\"><span id=\"blackOverlay\" class=\"w-full h-full absolute opacity-75 bg-black\"></span></div><div class=\"container relative mx-auto\"><div class=\"items-center flex flex-wrap\"><div class=\"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center\"><div class=\"pr-12\"><h1 class=\"text-white font-semibold text-5xl\"> Your story starts with us. </h1><p class=\"mt-4 text-lg text-blueGray-200\"> This is a simple example of a Landing Page you can build using Vue Notus. It features multiple CSS components based on the Tailwind CSS design system. </p></div></div></div></div><div class=\"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]\" style=\"transform:translateZ(0);\"><svg class=\"absolute bottom-0 overflow-hidden\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\" version=\"1.1\" viewBox=\"0 0 2560 100\" x=\"0\" y=\"0\"><polygon class=\"text-blueGray-200 fill-current\" points=\"2560 0 2560 100 0 100\"></polygon></svg></div></div>", 1);

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
  "class": "pb-20 bg-blueGray-200 -mt-24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container mx-auto px-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex flex-wrap"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-4 py-5 flex-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-award"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "text-xl font-semibold"
}, "Awarded Agency"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-2 mb-4 text-blueGray-500"
}, " Divide details about your product or agency work into parts. A paragraph describing a feature will be enough. ")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-full md:w-4/12 px-4 text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-4 py-5 flex-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-retweet"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "text-xl font-semibold"
}, "Free Revisions"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-2 mb-4 text-blueGray-500"
}, " Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious. ")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pt-6 w-full md:w-4/12 px-4 text-center"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "px-4 py-5 flex-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-fingerprint"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "text-xl font-semibold"
}, "Verified Company"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "mt-2 mb-4 text-blueGray-500"
}, " Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged! ")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex flex-wrap items-center mt-32"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-full md:w-5/12 px-4 mr-auto ml-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-user-friends text-xl"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "text-3xl mb-2 font-semibold leading-normal"
}, " Working with us is a pleasure "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
}, " Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
}, " The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  to: "/",
  "class": "font-bold text-blueGray-700 mt-8"
}, " Check Vue Notus! ")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-full md:w-4/12 px-4 mr-auto ml-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "bg-emerald-500 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  alt: "...",
  src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
  "class": "w-full align-middle rounded-t-lg"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("blockquote", {
  "class": "relative p-8 mb-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  preserveAspectRatio: "none",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 583 95",
  "class": "absolute left-0 w-full block h-[95px] -top-[94px]"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polygon", {
  points: "-30,95 583,95 583,65",
  "class": "text-emerald-500 fill-current"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-xl font-bold text-white"
}, " Top Notch Services "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-md font-light mt-2 text-white"
}, " The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens. ")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"relative py-20\"><div class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\" style=\"transform:translateZ(0);\"><svg class=\"absolute bottom-0 overflow-hidden\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\" version=\"1.1\" viewBox=\"0 0 2560 100\" x=\"0\" y=\"0\"><polygon class=\"text-white fill-current\" points=\"2560 0 2560 100 0 100\"></polygon></svg></div><div class=\"container mx-auto px-4\"><div class=\"items-center flex flex-wrap\"><div class=\"w-full md:w-4/12 ml-auto mr-auto px-4\"><img alt=\"...\" class=\"max-w-full rounded-lg shadow-lg\" src=\"https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80\"></div><div class=\"w-full md:w-5/12 ml-auto mr-auto px-4\"><div class=\"md:pr-12\"><div class=\"text-emerald-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-300\"><i class=\"fas fa-rocket text-xl\"></i></div><h3 class=\"text-3xl font-semibold\">A growing company</h3><p class=\"mt-4 text-lg leading-relaxed text-blueGray-500\"> The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you&#39;re good to go. </p><ul class=\"list-none mt-6\"><li class=\"py-2\"><div class=\"flex items-center\"><div><span class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3\"><i class=\"fas fa-fingerprint\"></i></span></div><div><h4 class=\"text-blueGray-500\"> Carefully crafted components </h4></div></div></li><li class=\"py-2\"><div class=\"flex items-center\"><div><span class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3\"><i class=\"fab fa-html5\"></i></span></div><div><h4 class=\"text-blueGray-500\"> Amazing page examples </h4></div></div></li><li class=\"py-2\"><div class=\"flex items-center\"><div><span class=\"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3\"><i class=\"far fa-paper-plane\"></i></span></div><div><h4 class=\"text-blueGray-500\">Dynamic components</h4></div></div></li></ul></div></div></div></div></section>", 1);

var _hoisted_4 = {
  "class": "pt-20 pb-48"
};
var _hoisted_5 = {
  "class": "container mx-auto px-4"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex flex-wrap justify-center text-center mb-24"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-full lg:w-6/12 px-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-4xl font-semibold"
}, "Here are our heroes"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-lg leading-relaxed m-4 text-blueGray-500"
}, " According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum. ")])], -1
/* HOISTED */
);

var _hoisted_7 = {
  "class": "flex flex-wrap"
};
var _hoisted_8 = {
  "class": "w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
};
var _hoisted_9 = {
  "class": "px-6"
};
var _hoisted_10 = ["src"];

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"pt-6 text-center\"><h5 class=\"text-xl font-bold\">Ryan Tompson</h5><p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\"> Web Developer </p><div class=\"mt-6\"><button class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\" type=\"button\"><i class=\"fab fa-twitter\"></i></button><button class=\"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\" type=\"button\"><i class=\"fab fa-facebook-f\"></i></button><button class=\"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\" type=\"button\"><i class=\"fab fa-dribbble\"></i></button></div></div>", 1);

var _hoisted_12 = {
  "class": "w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
};
var _hoisted_13 = {
  "class": "px-6"
};
var _hoisted_14 = ["src"];

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"pt-6 text-center\"><h5 class=\"text-xl font-bold\">Romina Hadid</h5><p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\"> Marketing Specialist </p><div class=\"mt-6\"><button class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\" type=\"button\"><i class=\"fab fa-google\"></i></button><button class=\"bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\" type=\"button\"><i class=\"fab fa-facebook-f\"></i></button></div></div>", 1);

var _hoisted_16 = {
  "class": "w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
};
var _hoisted_17 = {
  "class": "px-6"
};
var _hoisted_18 = ["src"];

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"pt-6 text-center\"><h5 class=\"text-xl font-bold\">Alexa Smith</h5><p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\"> UI/UX Designer </p><div class=\"mt-6\"><button class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\" type=\"button\"><i class=\"fab fa-google\"></i></button><button class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\" type=\"button\"><i class=\"fab fa-twitter\"></i></button><button class=\"bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\" type=\"button\"><i class=\"fab fa-instagram\"></i></button></div></div>", 1);

var _hoisted_20 = {
  "class": "w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
};
var _hoisted_21 = {
  "class": "px-6"
};
var _hoisted_22 = ["src"];

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"pt-6 text-center\"><h5 class=\"text-xl font-bold\">Jenna Kardi</h5><p class=\"mt-1 text-sm text-blueGray-400 uppercase font-semibold\"> Founder and CEO </p><div class=\"mt-6\"><button class=\"bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\" type=\"button\"><i class=\"fab fa-dribbble\"></i></button><button class=\"bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\" type=\"button\"><i class=\"fab fa-google\"></i></button><button class=\"bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\" type=\"button\"><i class=\"fab fa-twitter\"></i></button><button class=\"bg-blueGray-700 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1\" type=\"button\"><i class=\"fab fa-instagram\"></i></button></div></div>", 1);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"pb-20 relative block bg-blueGray-800\"><div class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20\" style=\"transform:translateZ(0);\"><svg class=\"absolute bottom-0 overflow-hidden\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\" version=\"1.1\" viewBox=\"0 0 2560 100\" x=\"0\" y=\"0\"><polygon class=\"text-blueGray-800 fill-current\" points=\"2560 0 2560 100 0 100\"></polygon></svg></div><div class=\"container mx-auto px-4 lg:pt-24 lg:pb-64\"><div class=\"flex flex-wrap text-center justify-center\"><div class=\"w-full lg:w-6/12 px-4\"><h2 class=\"text-4xl font-semibold text-white\"> Build something </h2><p class=\"text-lg leading-relaxed mt-4 mb-4 text-blueGray-400\"> Put the potentially record low maximum sea ice extent tihs year down to low ice. According to the National Oceanic and Atmospheric Administration, Ted, Scambos. </p></div></div><div class=\"flex flex-wrap mt-12 justify-center\"><div class=\"w-full lg:w-3/12 px-4 text-center\"><div class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"><i class=\"fas fa-medal text-xl\"></i></div><h6 class=\"text-xl mt-5 font-semibold text-white\"> Excelent Services </h6><p class=\"mt-2 mb-4 text-blueGray-400\"> Some quick example text to build on the card title and make up the bulk of the card&#39;s content. </p></div><div class=\"w-full lg:w-3/12 px-4 text-center\"><div class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"><i class=\"fas fa-poll text-xl\"></i></div><h5 class=\"text-xl mt-5 font-semibold text-white\"> Grow your market </h5><p class=\"mt-2 mb-4 text-blueGray-400\"> Some quick example text to build on the card title and make up the bulk of the card&#39;s content. </p></div><div class=\"w-full lg:w-3/12 px-4 text-center\"><div class=\"text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center\"><i class=\"fas fa-lightbulb text-xl\"></i></div><h5 class=\"text-xl mt-5 font-semibold text-white\"> Launch time </h5><p class=\"mt-2 mb-4 text-blueGray-400\"> Some quick example text to build on the card title and make up the bulk of the card&#39;s content. </p></div></div></div></section>", 1);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", {
  "class": "relative block py-24 lg:pt-0 bg-blueGray-800"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "container mx-auto px-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex flex-wrap justify-center lg:-mt-64 -mt-48"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-full lg:w-6/12 px-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex-auto p-5 lg:p-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-2xl font-semibold"
}, " Want to work with us? "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "leading-relaxed mt-1 mb-4 text-blueGray-500"
}, " Complete this form and we will get back to you in 24 hours. "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "relative w-full mb-3 mt-8"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block uppercase text-blueGray-600 text-xs font-bold mb-2",
  htmlFor: "full-name"
}, " Full Name "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  "class": "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
  placeholder: "Full Name"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "relative w-full mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block uppercase text-blueGray-600 text-xs font-bold mb-2",
  htmlFor: "email"
}, " Email "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "email",
  "class": "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",
  placeholder: "Email"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "relative w-full mb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "block uppercase text-blueGray-600 text-xs font-bold mb-2",
  htmlFor: "message"
}, " Message "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
  rows: "4",
  cols: "80",
  "class": "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full",
  placeholder: "Type a message..."
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-center mt-6"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
  type: "button"
}, " Send Message ")])])])])])])], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("navbar");

  var _component_footer_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("footer-component");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navbar), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [_hoisted_1, _hoisted_2, _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    alt: "...",
    src: $data.team1,
    "class": "shadow-lg rounded-full mx-auto max-w-[120px]"
  }, null, 8
  /* PROPS */
  , _hoisted_10), _hoisted_11])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    alt: "...",
    src: $data.team2,
    "class": "shadow-lg rounded-full mx-auto max-w-[120px]"
  }, null, 8
  /* PROPS */
  , _hoisted_14), _hoisted_15])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    alt: "...",
    src: $data.team3,
    "class": "shadow-lg rounded-full mx-auto max-w-[120px]"
  }, null, 8
  /* PROPS */
  , _hoisted_18), _hoisted_19])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    alt: "...",
    src: $data.team4,
    "class": "shadow-lg rounded-full mx-auto max-w-[120px]"
  }, null, 8
  /* PROPS */
  , _hoisted_22), _hoisted_23])])])])]), _hoisted_24, _hoisted_25]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_footer_component)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dropdowns/PagesDropdown.vue?vue&type=template&id=621aa66d":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dropdowns/PagesDropdown.vue?vue&type=template&id=621aa66d ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["src"];

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
}, " Profile ", -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View Profile ");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit Profile ");

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Change Password ");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "h-0 mx-4 my-2 border border-solid border-blueGray-100"
}, null, -1
/* HOISTED */
);

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
}, " Settings ", -1
/* HOISTED */
);

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Edit Settings ");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "h-0 mx-4 my-2 border border-solid border-blueGray-100"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
}, " Sign Out ", -1
/* HOISTED */
);

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Logout ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "#pablo",
    ref: "btnDropdownRef",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.toggleDropdown($event);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.profile_picture,
    alt: "Profile picture",
    "class": "w-8",
    style: {
      "border-radius": "50%"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_1)], 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    ref: "popoverDropdownRef",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48", {
      hidden: !$data.dropdownPopoverShow,
      block: $data.dropdownPopoverShow
    }])
  }, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
    href: _ctx.route('profile', $props.user_info.slug)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
    href: _ctx.route('edit_profile')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
    href: _ctx.route('change_password_page')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), _hoisted_6, _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
    href: _ctx.route('settings_page')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), _hoisted_9, _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700",
    href: _ctx.route('logout.perform')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])], 2
  /* CLASS */
  )]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Footers/Footer.vue?vue&type=template&id=3d9610c6":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Footers/Footer.vue?vue&type=template&id=3d9610c6 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "relative bg-blueGray-200 pt-8 pb-6"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20",
  style: {
    "transform": "translateZ(0)"
  }
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "absolute bottom-0 overflow-hidden",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "none",
  version: "1.1",
  viewBox: "0 0 2560 100",
  x: "0",
  y: "0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polygon", {
  "class": "text-blueGray-200 fill-current",
  points: "2560 0 2560 100 0 100"
})])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "container mx-auto px-4"
};
var _hoisted_4 = {
  "class": "flex flex-wrap text-center lg:text-left"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"w-full lg:w-6/12 px-4\"><h4 class=\"text-3xl font-semibold\">Let&#39;s keep in touch!</h4><h5 class=\"text-lg mt-0 mb-2 text-blueGray-600\"> Find us on any of these platforms. </h5><div class=\"mt-6 lg:mb-0 mb-6\"><button class=\"bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\" type=\"button\"><i class=\"fab fa-twitter\"></i></button><button class=\"bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\" type=\"button\"><i class=\"fab fa-facebook-square\"></i></button><button class=\"bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\" type=\"button\"><i class=\"fab fa-dribbble\"></i></button><button class=\"bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\" type=\"button\"><i class=\"fab fa-github\"></i></button></div></div>", 1);

var _hoisted_6 = {
  "class": "w-full lg:w-6/12 px-4"
};
var _hoisted_7 = {
  "class": "flex flex-wrap items-top mb-6"
};
var _hoisted_8 = {
  "class": "w-full lg:w-4/12 px-4 ml-auto"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "block uppercase text-blueGray-500 text-sm font-semibold mb-2"
}, " Useful Links ", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "list-unstyled"
};
var _hoisted_11 = ["href"];
var _hoisted_12 = ["href"];
var _hoisted_13 = {
  "class": "w-full lg:w-4/12 px-4"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "block uppercase text-blueGray-500 text-sm font-semibold mb-2"
}, " Other Resources ", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "list-unstyled"
};
var _hoisted_16 = ["href"];
var _hoisted_17 = ["href"];
var _hoisted_18 = ["href"];

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", {
  "class": "my-6 border-blueGray-300"
}, null, -1
/* HOISTED */
);

var _hoisted_20 = {
  "class": "flex flex-wrap items-center md:justify-between justify-center"
};
var _hoisted_21 = {
  "class": "w-full md:w-4/12 px-4 mx-auto text-center"
};
var _hoisted_22 = {
  "class": "text-sm text-blueGray-500 font-semibold py-1"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  "class": "text-blueGray-500 hover:text-blueGray-800"
}, " Dave Solutions ", -1
/* HOISTED */
);

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" . ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("footer", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",
    href: _ctx.route('about_page')
  }, " About Us ", 8
  /* PROPS */
  , _hoisted_11)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",
    href: _ctx.route('help_page')
  }, " Help ", 8
  /* PROPS */
  , _hoisted_12)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",
    href: _ctx.route('terms_page')
  }, " Terms & Conditions ", 8
  /* PROPS */
  , _hoisted_16)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",
    href: _ctx.route('privacy_page')
  }, " Privacy Policy ", 8
  /* PROPS */
  , _hoisted_17)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm",
    href: _ctx.route('contact_page')
  }, " Contact Us ", 8
  /* PROPS */
  , _hoisted_18)])])])])])]), _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Copyright © " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.date) + " Social Pro by ", 1
  /* TEXT */
  ), _hoisted_23, _hoisted_24])])])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbars/AuthNavbar.vue?vue&type=template&id=c8438a62":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbars/AuthNavbar.vue?vue&type=template&id=c8438a62 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container px-4 mx-auto flex flex-wrap items-center justify-between"
};
var _hoisted_2 = {
  "class": "w-auto static block justify-start"
};
var _hoisted_3 = ["href"];
var _hoisted_4 = {
  "class": "flex flex-grow items-center bg-opacity-0 shadow-none",
  id: "example-navbar-warning"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "flex flex-col lg:flex-row list-none mr-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"flex items-center\">\r\n            <a\r\n              class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-auth-navbar\"\r\n            >\r\n              <i\r\n                class=\"lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2\"\r\n              />\r\n              Docs\r\n            </a>\r\n          </li> ")], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-12 w-1/2 relative"
};
var _hoisted_7 = {
  "class": "w-full"
};
var _hoisted_8 = {
  "class": "relative flex w-full flex-wrap items-stretch"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-search"
})], -1
/* HOISTED */
);

var _hoisted_10 = ["src"];

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-times-circle text-gray-400"
}, null, -1
/* HOISTED */
);

var _hoisted_12 = [_hoisted_11];

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "absolute"
}, null, -1
/* HOISTED */
);

var _hoisted_14 = {
  key: 0,
  "class": "w-full max-h-[350px] bg-white rounded border border-solid border-gray-350 absolute top-10 mt-3 overflow-x-hidden"
};
var _hoisted_15 = {
  "class": "col-span-2"
};
var _hoisted_16 = ["onClick", "src", "alt"];
var _hoisted_17 = {
  "class": "col-span-10"
};
var _hoisted_18 = {
  "class": "text-black text-sm font-bold"
};
var _hoisted_19 = {
  "class": "text-gray-400 text-sm"
};
var _hoisted_20 = {
  "class": "flex flex-row list-none ml-auto"
};
var _hoisted_21 = {
  "class": "inline-flex items-center md:hidden"
};
var _hoisted_22 = ["href"];

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-search text-2xl leading-lg"
}, null, -1
/* HOISTED */
);

var _hoisted_24 = [_hoisted_23];
var _hoisted_25 = {
  "class": "flex items-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_PagesDropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PagesDropdown");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(!$props.black_nav ? 'default_nav' : 'black_nav')
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(!$props.black_nav ? 'default_nav_brand' : 'black_nav_brand'),
    href: _ctx.route('home_page')
  }, " Social Pro ", 10
  /* CLASS, PROPS */
  , _hoisted_3), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button\r\n          class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none border-white\"\r\n          style=\"border-color: white;\"\r\n          type=\"button\"\r\n          v-on:click=\"setNavbarOpen\"\r\n        >\r\n          <i class=\"text-white fas fa-bars\"></i>\r\n        </button> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Form "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    onKeyup: _cache[0] || (_cache[0] = function () {
      return $options.processSearchInput && $options.processSearchInput.apply($options, arguments);
    }),
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.search = $event;
    }),
    type: "text",
    placeholder: "Search",
    "class": "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.search]]), $data.form.processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    src: $data.load_more_spinner,
    "class": "z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center w-9 pr-3 py-3 right-0"
  }, null, 8
  /* PROPS */
  , _hoisted_10)) : !$data.form.processing && $data.form.search != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = function ($event) {
      $data.form.search = null;
      $data.search_results = [];
    }),
    "class": "z-10 h-full leading-snug font-normal text-center absolute bg-transparent rounded text-base items-center justify-center w-9 pr-3 py-3 right-0 cursor-pointer"
  }, _hoisted_12)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_13]), $data.search_results.length > 0 && $data.show_results_box ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.search_results, function (user, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: user.id,
      "class": ""
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: _ctx.route('profile', user.slug),
      "class": "grid grid-cols-12 px-2 py-3 hover:bg-gray-200"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          onClick: index,
          "class": "w-7 rounded-full",
          src: user.profile_picture,
          alt: user.user_name + " Profile Picture"
        }, null, 8
        /* PROPS */
        , _hoisted_16)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.user_name), 1
        /* TEXT */
        ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.full_name), 1
        /* TEXT */
        )])];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["px-3 py-2 flex items-center text-xs uppercase font-bold", !$props.black_nav ? 'text-white' : 'text-black']),
    href: _ctx.route('search_page')
  }, _hoisted_24, 10
  /* CLASS, PROPS */
  , _hoisted_22)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PagesDropdown, {
    profile_picture: $props.profile_picture,
    user_info: $props.user_info
  }, null, 8
  /* PROPS */
  , ["profile_picture", "user_info"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"flex items-center\">\r\n            <a\r\n              class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n              href=\"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20VueJS%20UI%20Kit%20and%20Admin.%20Let%20Vue%20Notus%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20\"\r\n              target=\"_blank\"\r\n            >\r\n              <i\r\n                class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg\"\r\n              />\r\n              <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\r\n            </a>\r\n          </li>\r\n\r\n          <li class=\"flex items-center\">\r\n            <a\r\n              class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n              href=\"https://github.com/creativetimofficial/vue-notus?ref=vn-auth-navbar\"\r\n              target=\"_blank\"\r\n            >\r\n              <i\r\n                class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg\"\r\n              />\r\n              <span class=\"lg:hidden inline-block ml-2\">Star</span>\r\n            </a>\r\n          </li> ")])])])], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./resources/js/assets/img/load_more_comments_spinner.gif":
/*!****************************************************************!*\
  !*** ./resources/js/assets/img/load_more_comments_spinner.gif ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/load_more_comments_spinner.gif?601288c2d9d77311f28c9cb627165cfa");

/***/ }),

/***/ "./resources/js/assets/img/team-1-800x800.jpg":
/*!****************************************************!*\
  !*** ./resources/js/assets/img/team-1-800x800.jpg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/team-1-800x800.jpg?fa5a7ac2c81a43925586ea85f2fea332");

/***/ }),

/***/ "./resources/js/assets/img/team-2-800x800.jpg":
/*!****************************************************!*\
  !*** ./resources/js/assets/img/team-2-800x800.jpg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/team-2-800x800.jpg?3e08ef145920c93bbe320add0d2ef58d");

/***/ }),

/***/ "./resources/js/assets/img/team-3-800x800.jpg":
/*!****************************************************!*\
  !*** ./resources/js/assets/img/team-3-800x800.jpg ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/team-3-800x800.jpg?19201574ed51f77138a739c0452ca104");

/***/ }),

/***/ "./resources/js/assets/img/team-4-470x470.png":
/*!****************************************************!*\
  !*** ./resources/js/assets/img/team-4-470x470.png ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/team-4-470x470.png?4ef82ef45a9598d24c4c951ead4d626a");

/***/ }),

/***/ "./resources/js/Pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=6a63e488 */ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./resources/js/Pages/Home.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Dropdowns/PagesDropdown.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Dropdowns/PagesDropdown.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PagesDropdown_vue_vue_type_template_id_621aa66d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PagesDropdown.vue?vue&type=template&id=621aa66d */ "./resources/js/components/Dropdowns/PagesDropdown.vue?vue&type=template&id=621aa66d");
/* harmony import */ var _PagesDropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PagesDropdown.vue?vue&type=script&lang=js */ "./resources/js/components/Dropdowns/PagesDropdown.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PagesDropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PagesDropdown_vue_vue_type_template_id_621aa66d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Dropdowns/PagesDropdown.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Footers/Footer.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Footers/Footer.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_3d9610c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=3d9610c6 */ "./resources/js/components/Footers/Footer.vue?vue&type=template&id=3d9610c6");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js */ "./resources/js/components/Footers/Footer.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Footer_vue_vue_type_template_id_3d9610c6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Footers/Footer.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Navbars/AuthNavbar.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/Navbars/AuthNavbar.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthNavbar_vue_vue_type_template_id_c8438a62__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthNavbar.vue?vue&type=template&id=c8438a62 */ "./resources/js/components/Navbars/AuthNavbar.vue?vue&type=template&id=c8438a62");
/* harmony import */ var _AuthNavbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthNavbar.vue?vue&type=script&lang=js */ "./resources/js/components/Navbars/AuthNavbar.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_AuthNavbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AuthNavbar_vue_vue_type_template_id_c8438a62__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Navbars/AuthNavbar.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Dropdowns/PagesDropdown.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Dropdowns/PagesDropdown.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PagesDropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PagesDropdown_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PagesDropdown.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dropdowns/PagesDropdown.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Footers/Footer.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Footers/Footer.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Footers/Footer.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Navbars/AuthNavbar.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Navbars/AuthNavbar.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthNavbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthNavbar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthNavbar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbars/AuthNavbar.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_6a63e488__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=6a63e488 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488");


/***/ }),

/***/ "./resources/js/components/Dropdowns/PagesDropdown.vue?vue&type=template&id=621aa66d":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Dropdowns/PagesDropdown.vue?vue&type=template&id=621aa66d ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PagesDropdown_vue_vue_type_template_id_621aa66d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PagesDropdown_vue_vue_type_template_id_621aa66d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PagesDropdown.vue?vue&type=template&id=621aa66d */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Dropdowns/PagesDropdown.vue?vue&type=template&id=621aa66d");


/***/ }),

/***/ "./resources/js/components/Footers/Footer.vue?vue&type=template&id=3d9610c6":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Footers/Footer.vue?vue&type=template&id=3d9610c6 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_3d9610c6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Footer_vue_vue_type_template_id_3d9610c6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Footer.vue?vue&type=template&id=3d9610c6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Footers/Footer.vue?vue&type=template&id=3d9610c6");


/***/ }),

/***/ "./resources/js/components/Navbars/AuthNavbar.vue?vue&type=template&id=c8438a62":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Navbars/AuthNavbar.vue?vue&type=template&id=c8438a62 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthNavbar_vue_vue_type_template_id_c8438a62__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthNavbar_vue_vue_type_template_id_c8438a62__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthNavbar.vue?vue&type=template&id=c8438a62 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Navbars/AuthNavbar.vue?vue&type=template&id=c8438a62");


/***/ })

}]);