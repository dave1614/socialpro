"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Navbars_AuthNavbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Navbars/AuthNavbar.vue */ "./resources/js/components/Navbars/AuthNavbar.vue");
/* harmony import */ var _components_Footers_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footers/Footer.vue */ "./resources/js/components/Footers/Footer.vue");
/* harmony import */ var _assets_img_add_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/img/add.png */ "./resources/js/assets/img/add.png");
/* harmony import */ var _assets_img_team_2_800x800_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/img/team-2-800x800.jpg */ "./resources/js/assets/img/team-2-800x800.jpg");
/* harmony import */ var _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/FlashMessages */ "./resources/js/Shared/FlashMessages.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FlashMessages: _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_4__["default"],
    Navbar: _components_Navbars_AuthNavbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FooterComponent: _components_Footers_Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    cover_photo_prop: String,
    cover_photo_change_txt_prop: String,
    show_more_bio: Boolean,
    user_details: Object,
    is_logged_in: Boolean,
    is_logged_in_users_page: Boolean,
    logged_in_users_details: Object
  },
  data: function data() {
    return {
      team2: _assets_img_team_2_800x800_jpg__WEBPACK_IMPORTED_MODULE_3__["default"],
      add_img_icon: _assets_img_add_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      profile_picture: this.user_details.profile_picture,
      showModal: false,
      showCoverPhotoModalBool: false,
      cover_photo: this.cover_photo_prop,
      cover_photo_change_txt: this.cover_photo_change_txt_prop,
      show_more_bio_btn: this.show_more_bio,
      cover_photo_form: this.$inertia.form({
        image: null
      }),
      profile_picture_form: this.$inertia.form({
        image: null
      })
    };
  },
  mounted: function mounted() {
    console.log(this.user_details);
    console.log(this.is_logged_in);
    console.log(this.is_logged_in_users_page);
    console.log(this.logged_in_users_details);
  },
  methods: {
    uploadNewProfilePicture: function uploadNewProfilePicture() {
      var self = this;

      if (!this.profile_picture_form.processing) {
        if (this.$refs.profile_picture) {
          this.profile_picture_form.image = this.$refs.profile_picture.files[0];
          self.profile_picture_form.post(self.route('upload_profile_picture'), {
            preserveScroll: true,
            onSuccess: function onSuccess(page) {
              var response = page.props.flash.data;
              console.log(response);

              if (page.props.flash.success) {} else if (response.errors != "") {
                Swal.fire({
                  title: 'Error',
                  html: response.errors,
                  icon: 'error'
                });
              }
            },
            onError: function onError(errors) {
              console.log(errors);
              Swal.fire({
                title: 'We ran into errors when uploading your image',
                html: errors.image,
                icon: 'error',
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonColor: '#3b82f6',
                cancelButtonColor: '#c53030',
                confirmButtonText: 'Try Again'
              }).then(function (result) {
                if (result.isConfirmed) {
                  self.uploadNewProfilePicture();
                }
              });
            }
          });
        }
      }
    },
    updateProfilePicturePreview: function updateProfilePicturePreview() {
      var _this = this;

      if (!this.profile_picture_form.processing) {
        var photo = this.$refs.profile_picture.files[0];
        if (!photo) return;
        var reader = new FileReader();

        reader.onload = function (e) {
          _this.profile_picture = e.target.result;
        };

        reader.readAsDataURL(photo);
        this.uploadNewProfilePicture();
      }
    },
    selectNewProfilePicture: function selectNewProfilePicture() {
      if (!this.profile_picture_form.processing) {
        this.$refs.profile_picture.click();
      }
    },
    uploadNewCoverPhoto: function uploadNewCoverPhoto() {
      var self = this;

      if (!this.cover_photo_form.processing) {
        if (this.$refs.cover_photo) {
          if (this.$refs.cover_photo.files.length == 1) {
            this.cover_photo_form.image = this.$refs.cover_photo.files[0];
            self.cover_photo_form.post(self.route('upload_cover_photo'), {
              preserveScroll: true,
              onSuccess: function onSuccess(page) {
                var response = page.props.flash.data;
                console.log(response);

                if (page.props.flash.success) {
                  setTimeout(function () {
                    self.toggleCoverPhotoModal();
                  }, 3000);
                } else if (response.errors != "") {
                  Swal.fire({
                    title: 'Error',
                    html: response.errors,
                    icon: 'error'
                  });
                }
              },
              onError: function onError(errors) {}
            });
          } else {
            Swal.fire({
              title: 'Ooops!',
              html: "You must select an image to upload.",
              icon: 'error'
            });
          }
        }
      }
    },
    updateCoverPhotoPreview: function updateCoverPhotoPreview() {
      var _this2 = this;

      if (!this.cover_photo_form.processing) {
        var photo = this.$refs.cover_photo.files[0];
        if (!photo) return;
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.cover_photo = e.target.result;
        };

        reader.readAsDataURL(photo);
      }
    },
    selectNewCoverPhoto: function selectNewCoverPhoto() {
      if (!this.cover_photo_form.processing) {
        this.$refs.cover_photo.click();
      }
    },
    toggleCoverPhotoModal: function toggleCoverPhotoModal() {
      this.showCoverPhotoModalBool = !this.showCoverPhotoModalBool;
    },
    showLessBio: function showLessBio() {
      this.show_more_bio_btn = true;
    },
    showMoreBio: function showMoreBio() {
      this.show_more_bio_btn = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/FlashMessages.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/FlashMessages.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      show: true
    };
  },
  watch: {
    '$page.props.flash': {
      handler: function handler() {
        this.show = true;
      },
      deep: true
    }
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
  props: ['profile_picture'],
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['profile_picture'],
  data: function data() {
    return {
      navbarOpen: false
    };
  },
  methods: {
    setNavbarOpen: function setNavbarOpen() {
      this.navbarOpen = !this.navbarOpen;
    }
  },
  components: {
    PagesDropdown: _components_Dropdowns_PagesDropdown_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0 ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  style: {},
  "class": "profile-page"
};
var _hoisted_2 = {
  "class": "relative block h-[500px]"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  id: "blackOverlay",
  "class": "w-full h-full absolute opacity-50 bg-black"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-camera text-white text-lg mr-3"
}, null, -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "text-white font-bold"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]",
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

var _hoisted_7 = {
  "class": "relative py-16 bg-blueGray-200"
};
var _hoisted_8 = {
  "class": "container mx-auto px-4"
};
var _hoisted_9 = {
  "class": "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
};
var _hoisted_10 = {
  "class": "px-6"
};
var _hoisted_11 = {
  "class": "flex flex-wrap justify-center"
};
var _hoisted_12 = {
  "class": "w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"
};
var _hoisted_13 = {
  "class": "relative"
};
var _hoisted_14 = ["src"];
var _hoisted_15 = ["src"];
var _hoisted_16 = {
  "class": "w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"
};
var _hoisted_17 = {
  "class": "py-6 px-3 mt-32 sm:mt-0"
};
var _hoisted_18 = {
  key: 0,
  "class": "bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150",
  type: "button"
};
var _hoisted_19 = {
  key: 1,
  "class": "bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150",
  type: "button"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"w-full lg:w-4/12 px-4 lg:order-1\"><div class=\"flex justify-center py-4 lg:pt-4 pt-8\"><div class=\"mr-4 p-3 text-center\"><span class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"> 22 </span><span class=\"text-sm text-blueGray-400\">Followers</span></div><div class=\"mr-4 p-3 text-center\"><span class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"> 10 </span><span class=\"text-sm text-blueGray-400\">Posts</span></div><div class=\"lg:mr-4 p-3 text-center\"><span class=\"text-xl font-bold block uppercase tracking-wide text-blueGray-600\"> 89 </span><span class=\"text-sm text-blueGray-400\">Following</span></div></div></div>", 1);

var _hoisted_21 = {
  "class": "text-center mt-12"
};
var _hoisted_22 = {
  "class": "capitalize text-4xl font-semibold leading-normal mb-2 text-blueGray-700"
};
var _hoisted_23 = {
  "class": "text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
}, null, -1
/* HOISTED */
);

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(", ");

var _hoisted_26 = {
  "class": "mt-10 py-10 border-t border-blueGray-200 text-center"
};
var _hoisted_27 = {
  key: 0,
  "class": "flex flex-wrap justify-center"
};
var _hoisted_28 = {
  key: 0,
  "class": "w-full lg:w-9/12 px-4 transition ease-in-out duration-1000 delay-150"
};
var _hoisted_29 = {
  "class": "mb-4 text-lg leading-relaxed text-blueGray-700"
};
var _hoisted_30 = {
  key: 1,
  "class": "w-full lg:w-9/12 px-4 transition ease-in-out duration-1000 delay-150"
};
var _hoisted_31 = {
  "class": "mb-4 text-lg leading-relaxed text-blueGray-700"
};
var _hoisted_32 = {
  key: 0,
  "class": "overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
};
var _hoisted_33 = {
  "class": "relative w-auto my-6 mx-auto max-w-3xl"
};
var _hoisted_34 = {
  "class": "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
};
var _hoisted_35 = {
  "class": "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
};
var _hoisted_36 = {
  "class": "text-2xl font-semibold"
};

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "bg-transparent text-gray-500 h-6 w-6 text-2xl block"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-times"
})], -1
/* HOISTED */
);

var _hoisted_38 = [_hoisted_37];
var _hoisted_39 = {
  "class": "relative p-6 flex-auto text-center text-white"
};
var _hoisted_40 = ["src"];
var _hoisted_41 = {
  key: 0,
  id: "blackOverlay",
  "class": "w-full h-full absolute opacity-25 bg-black top-0 left-0"
};
var _hoisted_42 = {
  "class": "absolute top-1/2 left-1/2 centered"
};
var _hoisted_43 = ["src"];
var _hoisted_44 = {
  "class": "p-6 border-t border-solid border-slate-200 rounded-b"
};
var _hoisted_45 = {
  key: 0,
  "class": "relative pt-1"
};
var _hoisted_46 = {
  "class": "overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200"
};
var _hoisted_47 = {
  key: 1,
  "class": ""
};
var _hoisted_48 = {
  key: 0,
  "class": "text-red-500 form-error"
};
var _hoisted_49 = {
  "class": "flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
};
var _hoisted_50 = {
  key: 0
};
var _hoisted_51 = {
  key: 1
};
var _hoisted_52 = {
  key: 1,
  "class": "opacity-25 fixed inset-0 z-40 bg-black"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("navbar");

  var _component_flash_messages = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("flash-messages");

  var _component_footer_component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("footer-component");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navbar, {
    profile_picture: $props.logged_in_users_details.profile_picture
  }, null, 8
  /* PROPS */
  , ["profile_picture"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "absolute top-0 w-full h-full bg-center bg-cover",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($props.user_details.cover_photo)
  }, [_hoisted_3, $props.is_logged_in_users_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggleCoverPhotoModal && $options.toggleCoverPhotoModal.apply($options, arguments);
    }),
    "class": "rounded-sm transiton ease-in-out duration-300 absolute top-20 right-0 border-2 border-white border-solid px-2 py-2 mx-6 cursor-pointer hover:px-3"
  }, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.cover_photo_change_txt), 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 4
  /* STYLE */
  ), _hoisted_6]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    "class": "hidden",
    ref: "profile_picture",
    onChange: _cache[1] || (_cache[1] = function () {
      return $options.updateProfilePicturePreview && $options.updateProfilePicturePreview.apply($options, arguments);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), $props.is_logged_in_users_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 0,
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.selectNewProfilePicture && $options.selectNewProfilePicture.apply($options, arguments);
    }),
    title: "Select Photo",
    style: {
      "border-radius": "50%"
    },
    alt: "...",
    src: $data.profile_picture,
    "class": "cursor-pointer shadow-xl h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
  }, null, 8
  /* PROPS */
  , _hoisted_14)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
    key: 1,
    style: {
      "border-radius": "50%"
    },
    alt: "...",
    src: $data.profile_picture,
    "class": "shadow-xl h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
  }, null, 8
  /* PROPS */
  , _hoisted_15))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [!$props.is_logged_in_users_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_18, " Follow ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.is_logged_in_users_page ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_19, " Edit Profile ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_20]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user_details.full_name), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user_details.region), 1
  /* TEXT */
  ), _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user_details.country), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"mb-2 text-blueGray-600 mt-10\">\r\n                  <i\r\n                    class=\"fas fa-briefcase mr-2 text-lg text-blueGray-400\"\r\n                  ></i>\r\n                  Solution Manager - Creative Tim Officer\r\n                </div>\r\n                <div class=\"mb-2 text-blueGray-600\">\r\n                  <i\r\n                    class=\"fas fa-university mr-2 text-lg text-blueGray-400\"\r\n                  ></i>\r\n                  University of Computer Science\r\n                </div> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [$props.user_details.bio != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_27, [$data.show_more_bio_btn ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user_details.bio_short), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.showMoreBio && $options.showMoreBio.apply($options, arguments);
    }),
    href: "javascript:void(0)",
    "class": "font-normal text-emerald-500"
  }, " Show more ")])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user_details.bio), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.showLessBio && $options.showLessBio.apply($options, arguments);
    }),
    href: "javascript:void(0)",
    "class": "font-normal text-emerald-500"
  }, " Show less ")]))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), $data.showCoverPhotoModalBool ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.cover_photo_change_txt), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold",
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.toggleCoverPhotoModal && $options.toggleCoverPhotoModal.apply($options, arguments);
    })
  }, _hoisted_38)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "file",
    "class": "hidden",
    ref: "cover_photo",
    onChange: _cache[6] || (_cache[6] = function () {
      return $options.updateCoverPhotoPreview && $options.updateCoverPhotoPreview.apply($options, arguments);
    })
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: '' + $data.cover_photo,
    alt: "",
    "class": "w-full",
    style: {
      "max-height": "300px"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_40), $data.cover_photo != '/storage/images/annie-spratt-BcGoZXjyPzA-unsplash.jpg' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_41)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onClick: _cache[7] || (_cache[7] = function () {
      return $options.selectNewCoverPhoto && $options.selectNewCoverPhoto.apply($options, arguments);
    }),
    "class": "rounded-full bg-black opacity-50 p-5 hover:opacity-75 transition ease-in-out duration-300 cursor-pointer",
    title: "Choose Photo"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.add_img_icon,
    alt: "",
    style: {
      "width": "30px"
    }
  }, null, 8
  /* PROPS */
  , _hoisted_43)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [$data.cover_photo_form.progress ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)('width:' + $data.cover_photo_form.progress.percentage + '%'),
    "class": "transition ease-linear duration-150 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
  }, null, 4
  /* STYLE */
  )])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_flash_messages), $data.cover_photo_form.errors.image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.cover_photo_form.errors.image), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("footer"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
    type: "button",
    onClick: _cache[8] || (_cache[8] = function () {
      return $options.uploadNewCoverPhoto && $options.uploadNewCoverPhoto.apply($options, arguments);
    })
  }, [$data.cover_photo_form.processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_50, " UPLOADING... ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_51, " UPLOAD "))])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.showCoverPhotoModalBool ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_52)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_footer_component)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/FlashMessages.vue?vue&type=template&id=1fa08db0":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/FlashMessages.vue?vue&type=template&id=1fa08db0 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  "class": "mb-8 flex items-center justify-between bg-green-500 rounded max-w-3xl"
};
var _hoisted_2 = {
  "class": "flex items-center"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "ml-4 mr-2 flex-shrink-0 w-4 h-4 fill-white",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polygon", {
  points: "0 11 2 9 7 14 18 3 20 5 7 18"
})], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "py-4 text-white text-sm font-medium"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "block w-2 h-2 fill-green-800 group-hover:fill-white",
  xmlns: "http://www.w3.org/2000/svg",
  width: "235.908",
  height: "235.908",
  viewBox: "278.046 126.846 235.908 235.908"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"
})], -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];
var _hoisted_7 = {
  key: 1,
  "class": "mb-8 flex items-center justify-between bg-red-400 rounded max-w-3xl"
};
var _hoisted_8 = {
  "class": "flex items-center"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "ml-4 mr-2 flex-shrink-0 w-4 h-4 fill-white",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"
})], -1
/* HOISTED */
);

var _hoisted_10 = {
  key: 0,
  "class": "py-4 text-white text-sm font-medium"
};
var _hoisted_11 = {
  key: 1,
  "class": "py-4 text-white text-sm font-medium"
};
var _hoisted_12 = {
  key: 0
};
var _hoisted_13 = {
  key: 1
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "block w-2 h-2 fill-red-800 group-hover:fill-white",
  xmlns: "http://www.w3.org/2000/svg",
  width: "235.908",
  height: "235.908",
  viewBox: "278.046 126.846 235.908 235.908"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"
})], -1
/* HOISTED */
);

var _hoisted_15 = [_hoisted_14];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_ctx.$page.props.flash.success && $data.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.flash.success), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "group mr-2 p-2",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.show = false;
    })
  }, _hoisted_6)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (_ctx.$page.props.flash.error || Object.keys(_ctx.$page.props.errors).length > 0) && $data.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, _ctx.$page.props.flash.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.flash.error), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [Object.keys(_ctx.$page.props.errors).length === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_12, "There is one form error.")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, "There are " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Object.keys(_ctx.$page.props.errors).length) + " form errors.", 1
  /* TEXT */
  ))]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "group mr-2 p-2",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.show = false;
    })
  }, _hoisted_15)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
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
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

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
  }, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/admin/dashboard",
    "class": "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_3];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/admin/settings",
    "class": "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1
    /* STABLE */

  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/admin/tables",
    "class": "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_6, _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/auth/login",
    "class": "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_9, _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/profile",
    "class": "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  })], 2
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

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex flex-wrap text-center lg:text-left\"><div class=\"w-full lg:w-6/12 px-4\"><h4 class=\"text-3xl font-semibold\">Let&#39;s keep in touch!</h4><h5 class=\"text-lg mt-0 mb-2 text-blueGray-600\"> Find us on any of these platforms, we respond 1-2 business days. </h5><div class=\"mt-6 lg:mb-0 mb-6\"><button class=\"bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\" type=\"button\"><i class=\"fab fa-twitter\"></i></button><button class=\"bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\" type=\"button\"><i class=\"fab fa-facebook-square\"></i></button><button class=\"bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\" type=\"button\"><i class=\"fab fa-dribbble\"></i></button><button class=\"bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2\" type=\"button\"><i class=\"fab fa-github\"></i></button></div></div><div class=\"w-full lg:w-6/12 px-4\"><div class=\"flex flex-wrap items-top mb-6\"><div class=\"w-full lg:w-4/12 px-4 ml-auto\"><span class=\"block uppercase text-blueGray-500 text-sm font-semibold mb-2\"> Useful Links </span><ul class=\"list-unstyled\"><li><a class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\" href=\"https://www.creative-tim.com/presentation?ref=vn-footer\"> About Us </a></li><li><a class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\" href=\"https://blog.creative-tim.com?ref=vn-footer\"> Blog </a></li><li><a class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\" href=\"https://www.github.com/creativetimofficial?ref=vn-footer\"> Github </a></li><li><a class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\" href=\"https://www.creative-tim.com/bootstrap-themes/free?ref=vn-footer\"> Free Products </a></li></ul></div><div class=\"w-full lg:w-4/12 px-4\"><span class=\"block uppercase text-blueGray-500 text-sm font-semibold mb-2\"> Other Resources </span><ul class=\"list-unstyled\"><li><a class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\" href=\"https://github.com/creativetimofficial/vue-notus/blob/main/LICENSE.md?ref=vn-footer\"> MIT License </a></li><li><a class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\" href=\"https://creative-tim.com/terms?ref=vn-footer\"> Terms &amp; Conditions </a></li><li><a class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\" href=\"https://creative-tim.com/privacy?ref=vn-footer\"> Privacy Policy </a></li><li><a class=\"text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm\" href=\"https://creative-tim.com/contact-us?ref=vn-footer\"> Contact Us </a></li></ul></div></div></div></div><hr class=\"my-6 border-blueGray-300\">", 2);

var _hoisted_6 = {
  "class": "flex flex-wrap items-center md:justify-between justify-center"
};
var _hoisted_7 = {
  "class": "w-full md:w-4/12 px-4 mx-auto text-center"
};
var _hoisted_8 = {
  "class": "text-sm text-blueGray-500 font-semibold py-1"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "https://www.creative-tim.com?ref=vn-footer",
  "class": "text-blueGray-500 hover:text-blueGray-800"
}, " Creative Tim ", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" . ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("footer", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Copyright © " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.date) + " Vue Notus by ", 1
  /* TEXT */
  ), _hoisted_9, _hoisted_10])])])])]);
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
  "class": "top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
};
var _hoisted_2 = {
  "class": "container px-4 mx-auto flex flex-wrap items-center justify-between"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-auto static block justify-start"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "text-white text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase",
  to: "/"
}, " Social Pro "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <button\r\n          class=\"cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none border-white\"\r\n          style=\"border-color: white;\"\r\n          type=\"button\"\r\n          v-on:click=\"setNavbarOpen\"\r\n        >\r\n          <i class=\"text-white fas fa-bars\"></i>\r\n        </button> ")], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "flex flex-grow items-center bg-opacity-0 shadow-none",
  id: "example-navbar-warning"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "flex flex-col lg:flex-row list-none mr-auto"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"flex items-center\">\r\n            <a\r\n              class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n              href=\"https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus?ref=vn-auth-navbar\"\r\n            >\r\n              <i\r\n                class=\"lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2\"\r\n              />\r\n              Docs\r\n            </a>\r\n          </li> ")], -1
/* HOISTED */
);

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<form class=\"md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-12 w-1/2\"><div class=\"relative flex w-full flex-wrap items-stretch\"><span class=\"z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3\"><i class=\"fas fa-search\"></i></span><input type=\"text\" placeholder=\"Search\" class=\"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10\"></div></form>", 1);

var _hoisted_7 = {
  "class": "flex flex-row list-none ml-auto"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "inline-flex items-center md:hidden"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  "class": "text-white px-3 py-2 flex items-center text-xs uppercase font-bold",
  href: "#"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-search text-2xl leading-lg"
})])], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "flex items-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PagesDropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PagesDropdown");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Form "), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_PagesDropdown, {
    profile_picture: $props.profile_picture
  }, null, 8
  /* PROPS */
  , ["profile_picture"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <li class=\"flex items-center\">\r\n            <a\r\n              class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n              href=\"https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20VueJS%20UI%20Kit%20and%20Admin.%20Let%20Vue%20Notus%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20\"\r\n              target=\"_blank\"\r\n            >\r\n              <i\r\n                class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg\"\r\n              />\r\n              <span class=\"lg:hidden inline-block ml-2\">Tweet</span>\r\n            </a>\r\n          </li>\r\n\r\n          <li class=\"flex items-center\">\r\n            <a\r\n              class=\"lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"\r\n              href=\"https://github.com/creativetimofficial/vue-notus?ref=vn-auth-navbar\"\r\n              target=\"_blank\"\r\n            >\r\n              <i\r\n                class=\"lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg\"\r\n              />\r\n              <span class=\"lg:hidden inline-block ml-2\">Star</span>\r\n            </a>\r\n          </li> ")])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.centered{\r\n    transform: translate(-50%, -50%);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/img/add.png":
/*!*****************************************!*\
  !*** ./resources/js/assets/img/add.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/add.png?be1afbfc496d491e7c5316fdf7c7917e");

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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_0_id_1bdc34e0_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_0_id_1bdc34e0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_0_id_1bdc34e0_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Profile.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Profile.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_1bdc34e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=1bdc34e0 */ "./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js */ "./resources/js/Pages/Profile.vue?vue&type=script&lang=js");
/* harmony import */ var _Profile_vue_vue_type_style_index_0_id_1bdc34e0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=css */ "./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=css");
/* harmony import */ var C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Profile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Profile_vue_vue_type_template_id_1bdc34e0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Profile.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/FlashMessages.vue":
/*!***********************************************!*\
  !*** ./resources/js/Shared/FlashMessages.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FlashMessages_vue_vue_type_template_id_1fa08db0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlashMessages.vue?vue&type=template&id=1fa08db0 */ "./resources/js/Shared/FlashMessages.vue?vue&type=template&id=1fa08db0");
/* harmony import */ var _FlashMessages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlashMessages.vue?vue&type=script&lang=js */ "./resources/js/Shared/FlashMessages.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FlashMessages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FlashMessages_vue_vue_type_template_id_1fa08db0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/FlashMessages.vue"]])
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

/***/ "./resources/js/Pages/Profile.vue?vue&type=script&lang=js":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/FlashMessages.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./resources/js/Shared/FlashMessages.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FlashMessages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FlashMessages_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FlashMessages.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/FlashMessages.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_template_id_1bdc34e0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_template_id_1bdc34e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=template&id=1bdc34e0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=template&id=1bdc34e0");


/***/ }),

/***/ "./resources/js/Shared/FlashMessages.vue?vue&type=template&id=1fa08db0":
/*!*****************************************************************************!*\
  !*** ./resources/js/Shared/FlashMessages.vue?vue&type=template&id=1fa08db0 ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FlashMessages_vue_vue_type_template_id_1fa08db0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FlashMessages_vue_vue_type_template_id_1fa08db0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FlashMessages.vue?vue&type=template&id=1fa08db0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/FlashMessages.vue?vue&type=template&id=1fa08db0");


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


/***/ }),

/***/ "./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=css":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Profile_vue_vue_type_style_index_0_id_1bdc34e0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Profile.vue?vue&type=style&index=0&id=1bdc34e0&lang=css");


/***/ })

}]);