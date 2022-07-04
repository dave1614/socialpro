"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_HomePage_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/HomePage.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/HomePage.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Navbars_AuthNavbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Navbars/AuthNavbar.vue */ "./resources/js/components/Navbars/AuthNavbar.vue");
/* harmony import */ var _components_Footers_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Footers/Footer.vue */ "./resources/js/components/Footers/Footer.vue");
/* harmony import */ var _components_Post_TextInput_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Post/TextInput.vue */ "./resources/js/components/Post/TextInput.vue");
/* harmony import */ var _assets_img_load_more_comments_spinner_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/img/load_more_comments_spinner.gif */ "./resources/js/assets/img/load_more_comments_spinner.gif");
/* harmony import */ var _assets_img_load_more_spinner_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/img/load_more_spinner.gif */ "./resources/js/assets/img/load_more_spinner.gif");
/* harmony import */ var _assets_img_add_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/img/add.png */ "./resources/js/assets/img/add.png");
/* harmony import */ var _assets_img_team_2_800x800_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/img/team-2-800x800.jpg */ "./resources/js/assets/img/team-2-800x800.jpg");
/* harmony import */ var _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/FlashMessages */ "./resources/js/Shared/FlashMessages.vue");
/* harmony import */ var _components_Forms_Auth_LoadingButton_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Forms/Auth/LoadingButton.vue */ "./resources/js/components/Forms/Auth/LoadingButton.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Navbar: _components_Navbars_AuthNavbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FooterComponent: _components_Footers_Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TextInput: _components_Post_TextInput_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FlashMessages: _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_7__["default"],
    LoadingButton: _components_Forms_Auth_LoadingButton_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  props: {
    is_logged_in: Boolean,
    is_logged_in_users_page: Boolean,
    logged_in_users_details: Object,
    year: String
  },
  data: function data() {
    var _ref;

    return _ref = {
      load_more_comments_spinner: _assets_img_load_more_comments_spinner_gif__WEBPACK_IMPORTED_MODULE_3__["default"],
      load_more_spinner: _assets_img_load_more_spinner_gif__WEBPACK_IMPORTED_MODULE_4__["default"],
      team2: _assets_img_team_2_800x800_jpg__WEBPACK_IMPORTED_MODULE_6__["default"],
      add_img_icon: _assets_img_add_png__WEBPACK_IMPORTED_MODULE_5__["default"],
      no_posts: false,
      loading_more_posts: false,
      selected_post_id: null,
      noResult: false,
      message: '',
      selected_post_index_more_opt: 0,
      selected_post_id_more_opt: 0,
      showMoreOptionsModalBool: false,
      loading_more_likes_users: false,
      showLikesUsersModalBool: false,
      likes_users_arr: [],
      posts: []
    }, _defineProperty(_ref, "loading_more_posts", false), _defineProperty(_ref, "posts_form", this.$inertia.form({})), _defineProperty(_ref, "likes_form", this.$inertia.form({})), _defineProperty(_ref, "follow_user_form", this.$inertia.form({
      user_id: null
    })), _defineProperty(_ref, "load_more_cmnts_form", this.$inertia.form({})), _defineProperty(_ref, "test_form", this.$inertia.form({
      comment: null
    })), _defineProperty(_ref, "make_cmnt_form", this.$inertia.form({
      comment: null
    })), _defineProperty(_ref, "delete_post_request", this.$inertia.form({})), _defineProperty(_ref, "delete_cmnt_request", this.$inertia.form({})), _ref;
  },
  mounted: function mounted() {
    this.scroll();
    this.getUsersPosts();
    console.log(this.posts);
  },
  methods: {
    deleteCmnt: function deleteCmnt(post_index, cmnt_index) {
      var _this = this;

      var post = this.posts[post_index];
      var cmnt = post.lst_thr_cmnts.reverse()[cmnt_index];
      post.lst_thr_cmnts.reverse();
      console.log(cmnt.text); // return true;

      var url = route('delete_cmnt', cmnt.id);
      Swal.fire({
        title: 'Delete?',
        html: 'Are you sure you want to delete this comment?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          _this.delete_cmnt_request.post(url, {
            preserveScroll: true,
            onSuccess: function onSuccess(page) {
              var response = page.props.flash.data;
              console.log(response);

              if (response.success) {
                post.lst_thr_cmnts.reverse().splice(cmnt_index, 1);
                post.lst_thr_cmnts.reverse();
              } else {
                Swal.fire({
                  title: 'Ooops!',
                  html: 'Something went wrong when trying to delete this comment',
                  icon: 'error'
                });
              }
            },
            onError: function onError(errors) {
              console.log(errors);
              Swal.fire({
                title: 'Ooops!',
                html: 'Something went wrong when trying to delete this comment',
                icon: 'error'
              });
            }
          });
        }
      });
    },
    deletePost: function deletePost() {
      var _this2 = this;

      var self = this;
      var url = route('delete_post', this.selected_post_id_more_opt) + '?source=home_page';
      Swal.fire({
        title: 'Delete?',
        html: 'Are you sure you want to delete this post?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          _this2.delete_post_request.post(url, {
            preserveScroll: true,
            onSuccess: function onSuccess(page) {
              var response = page.props.flash.data;
              console.log(response);

              if (response.success) {
                Swal.fire({
                  title: 'Successful',
                  html: 'Your post has been deleted successfully',
                  icon: 'success',
                  allowOutsideClick: false,
                  allowEscapeKey: false,
                  allowEnterKey: false
                }).then(function (result) {
                  if (result.isConfirmed) {
                    self.posts.splice(self.selected_post_index_more_opt, 1);
                    self.toggleMoreOptionsModal(); // self.$inertia.visit(self.route('home_page'))
                  }
                });
              } else {
                Swal.fire({
                  title: 'Ooops!',
                  html: 'Something went wrong when trying to delete this post',
                  icon: 'error'
                });
              }
            },
            onError: function onError(errors) {
              console.log(errors);
              Swal.fire({
                title: 'Ooops!',
                html: 'Something went wrong when trying to delete this post',
                icon: 'error'
              });
            }
          });
        }
      });
    },
    scroll: function scroll() {
      var _this3 = this;

      window.onscroll = function () {
        // console.log("scrolling");
        var bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          // this.scrolledToBottom = true // replace it with your code
          if (!_this3.loading_more_posts != null || !_this3.loading_more_posts && _this3.posts.length > 0) {
            var last_post = _this3.posts[_this3.posts.length - 1];
            var last_id = last_post.id;
            console.log(last_id);

            _this3.getUsersPosts(last_id);
          }
        }
      };
    },
    copyPostLink: function copyPostLink() {
      var link = route('post_page', this.selected_post_id_more_opt); // document.execCommand('copy');
      // clipboard.writeText(link);

      navigator.clipboard.writeText(link);
      Swal.fire({
        title: 'Copied',
        html: '',
        icon: 'success'
      });
    },
    closeMoreOptionsModal: function closeMoreOptionsModal() {
      this.selected_post_id_more_opt = 0;
      this.toggleMoreOptionsModal();
    },
    seeMoreOptions: function seeMoreOptions(index) {
      var post = this.posts[index];
      var post_id = post.id;
      this.selected_post_index_more_opt = index;
      this.selected_post_id_more_opt = post_id;
      this.toggleMoreOptionsModal();
    },
    toggleMoreOptionsModal: function toggleMoreOptionsModal() {
      this.showMoreOptionsModalBool = !this.showMoreOptionsModalBool;
    },
    loadMorePosts: function loadMorePosts(_ref2) {
      var _ref2$target = _ref2.target,
          scrollTop = _ref2$target.scrollTop,
          clientHeight = _ref2$target.clientHeight,
          scrollHeight = _ref2$target.scrollHeight;
      // console.log('scrolling')
      var self = this;

      if (scrollTop + clientHeight >= scrollHeight) {
        if (!this.loading_more_posts != null || !this.loading_more_posts && this.posts.length > 0) {
          var last_post = this.posts[this.posts.length - 1];
          var last_id = last_post.id;
          console.log(last_id);
          this.getUsersPosts(last_id);
        }
      }
    },
    prepend: function prepend(value, array) {
      var newArray = array.slice();
      newArray.unshift(value);
      return newArray;
    },
    submitCmnt: function submitCmnt(index) {
      var self = this;
      var post = this.posts[index];
      var post_id = post.id;
      var cmnts = post.lst_thr_cmnts;
      var url = this.route('make_new_cmnt', post_id);
      console.log(url);
      var ref = 'cmnt_input_' + post.id;
      var comment = this.$refs[ref][0].value;
      console.log(comment);
      this.make_cmnt_form.comment = comment;
      post.add_comment_loading = true;
      this.make_cmnt_form.post(url, {
        preserveScroll: true,
        onSuccess: function onSuccess(page) {
          post.add_comment_loading = false;
          var response = page.props.flash.data;
          console.log(response);

          if (response.success && response.lst_thr_cmnts != []) {
            self.$refs[ref][0].value = ""; // post.lst_thr_cmnts = self.prepend(response.comment,cmnts);

            post.lst_thr_cmnts = response.lst_thr_cmnts;
            post.rem_cmnts_num = response.rem_cmnts_num;
            post.last_row = response.last_row; // console.log(self.prepend(response.comment,cmnts))
          }
        },
        onError: function onError(errors) {
          post.add_comment_loading = false;
          console.log(errors);

          if (errors.comment) {
            Swal.fire({
              title: 'Ooops!',
              html: 'Something went wrong when posting your comment. See error below. <p class="mt-8 text-red-500 italic text-sm">' + errors.comment + '</p>',
              icon: 'error'
            });
          }
        }
      });
    },
    viewMoreComments: function viewMoreComments(index) {
      var self = this;
      var post = this.posts[index];
      var post_id = post.id;
      var last_cmnt = post.lst_thr_cmnts[post.lst_thr_cmnts.length - 1];
      var last_cmnt_id = last_cmnt.id;
      var last_cmnt_text = last_cmnt.text;
      console.log(last_cmnt_text);
      var url = this.route('load_more_cmnts', post_id) + '?last_id=' + last_cmnt_id;
      console.log(url);
      this.load_more_cmnts_form.post(url, {
        preserveScroll: true,
        onSuccess: function onSuccess(page) {
          var response = page.props.flash.data;
          console.log(response);

          if (response.success) {
            // console.log("success")
            if (response.cmnts.length > 0) {
              var _post$lst_thr_cmnts;

              // console.log("populated")
              (_post$lst_thr_cmnts = post.lst_thr_cmnts).push.apply(_post$lst_thr_cmnts, _toConsumableArray(response.cmnts));

              post.rem_cmnts_num = response.rem_cmnts_num;

              if (response.last_row) {
                post.last_row = true;
              }
            }
          }
        },
        onError: function onError(errors) {
          console.log(errors);
        }
      });
    },
    loadMoreUsersLikes: function loadMoreUsersLikes(_ref3) {
      var _ref3$target = _ref3.target,
          scrollTop = _ref3$target.scrollTop,
          clientHeight = _ref3$target.clientHeight,
          scrollHeight = _ref3$target.scrollHeight;
      var self = this;

      if (scrollTop + clientHeight >= scrollHeight) {
        var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

        var last_row = this.likes_users_arr[this.likes_users_arr.length - 1];
        var last_id = last_row.user_details.id; // console.log(last_row)

        var url = this.route('post_likes_users_subs', this.selected_post_id) + '?last_id=' + last_id; // console.log(url)

        if (self.loading_more_likes_users === false && self.loading_more_likes_users !== null) {
          self.loading_more_likes_users = true;
          self.likes_form.post(url, {
            preserveScroll: true,
            onSuccess: function onSuccess(page) {
              var response = page.props.flash.data;
              console.log(response);

              if (response.success) {
                self.loading_more_likes_users = false; // console.log("success")

                if (response.liked_users.length > 0) {
                  var _self$likes_users_arr;

                  // console.log("populated")
                  (_self$likes_users_arr = self.likes_users_arr).push.apply(_self$likes_users_arr, _toConsumableArray(response.liked_users));

                  if (response.last_row) {
                    console.log('This is the last row!');
                    self.loading_more_likes_users = null;
                    console.log(self.loading_more_likes_users);
                  } //   console.log( self.likes_users_arr)

                } else {
                  self.noResult = true;
                  self.message = "No result found";
                }
              } else {
                self.loading_more_likes_users = false;
                self.noResult = true;
                self.message = "Something went wrong";
              }
            },
            onError: function onError(errors) {
              console.log(errors);
              self.loading_more_likes_users = false;
              self.noResult = true;
              self.message = "Error loading data";
            }
          });
        }
      }
    },
    toggleFollowLikesModal: function toggleFollowLikesModal(user_id, index) {
      var self = this;
      self.follow_user_form.user_id = user_id; // console.log(self.follow_user_form.user_id)

      self.follow_user_form.post(self.route('toggle_follow_user', self.follow_user_form.user_id), {
        preserveScroll: true,
        onSuccess: function onSuccess(page) {
          var response = page.props.flash.data;
          console.log(response);

          if (page.props.flash.success) {
            self.likes_users_arr[index].following_status = !self.likes_users_arr[index].following_status ? true : false;
          }
        },
        onError: function onError(errors) {
          console.log(errors);
        }
      });
    },
    toggleLikesModal: function toggleLikesModal() {
      this.loading_more_likes_users = false;
      this.showLikesUsersModalBool = !this.showLikesUsersModalBool;
    },
    viewLikedUsers: function viewLikedUsers(index) {
      var post = this.posts[index];
      console.log(post.like_count);

      if (post.like_count <= 0) {
        return true;
      }

      this.selected_post_id = post.id;
      var self = this;
      self.likes_form.post(self.route('post_likes_users', this.selected_post_id), {
        preserveScroll: true,
        onSuccess: function onSuccess(page) {
          var response = page.props.flash.data;
          console.log(response);

          if (page.props.flash.success) {
            self.likes_users_arr = response.liked_users;
            self.toggleLikesModal();
          }
        },
        onError: function onError(errors) {
          console.log(errors);
        }
      });
    },
    unlikePost: function unlikePost(index) {
      var self = this;
      var post_id = this.posts[index].id;
      var url = this.route('unlike_post', post_id);
      this.posts_form.post(url, {
        preserveScroll: true,
        onSuccess: function onSuccess(page) {
          var response = page.props.flash.data;
          console.log(response);

          if (response.success) {
            self.posts[index].like_count--;
            self.posts[index].liked = false;
          }
        },
        onError: function onError(errors) {
          console.log(errors);
        }
      });
    },
    likePost: function likePost(index) {
      var self = this;
      var post_id = this.posts[index].id;
      var url = this.route('like_post', post_id);
      this.posts_form.post(url, {
        preserveScroll: true,
        onSuccess: function onSuccess(page) {
          var response = page.props.flash.data;
          console.log(response);

          if (response.success) {
            self.posts[index].like_count++;
            self.posts[index].liked = true;
          }
        },
        onError: function onError(errors) {
          console.log(errors);
        }
      });
    },
    showMoreCaption: function showMoreCaption(index) {
      console.log(this.posts[index]);
      this.posts[index].caption_too_long = false;
    },
    getUsersPosts: function getUsersPosts() {
      var last_id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var self = this;
      var url = this.route('get_users_front_page_posts', this.logged_in_users_details.id) + '?last_id=' + last_id; // console.log(url)

      if (this.loading_more_posts === false && this.loading_more_posts !== null) {
        this.loading_more_posts = true;
        this.posts_form.post(url, {
          preserveScroll: true,
          onSuccess: function onSuccess(page) {
            var response = page.props.flash.data;
            console.log(response);

            if (response.success) {
              self.loading_more_posts = false;

              if (response.posts.length > 0) {
                var _self$posts;

                (_self$posts = self.posts).push.apply(_self$posts, _toConsumableArray(response.posts));

                console.log(self.posts);

                if (response.last_row) {
                  console.log('This is the last row!');
                  self.loading_more_posts = null;
                  console.log(self.loading_more_posts);
                }
              } else {
                self.loading_more_posts = false;
                self.no_posts = true;
              }
            }
          },
          onError: function onError(errors) {
            console.log(errors);
            self.loading_more_posts = false;
          }
        });
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Auth/LoadingButton.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Auth/LoadingButton.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    loading: Boolean,
    spinnerClasses: String
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Post/TextInput.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Post/TextInput.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      "default": function _default() {
        return "text-input-".concat(this._uid);
      }
    },
    type: {
      type: String,
      "default": 'text'
    },
    modelValue: {
      type: [String, Number],
      "default": ""
    },
    label: String,
    error: String
  },
  methods: {
    focus: function focus() {
      this.$refs.input.focus();
    },
    select: function select() {
      this.$refs.input.select();
    },
    setSelectionRange: function setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/HomePage.vue?vue&type=template&id=728653b7":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/HomePage.vue?vue&type=template&id=728653b7 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mt-32"
};
var _hoisted_2 = {
  "class": "md:grid md:grid-cols-10 md:gap-6"
};
var _hoisted_3 = {
  "class": "md:col-span-6 mx-5"
};
var _hoisted_4 = {
  key: 0,
  "class": ""
};
var _hoisted_5 = {
  "class": "grid grid-cols-12 px-2 pb-2 border-b border-gray-200"
};
var _hoisted_6 = {
  "class": "col-span-2"
};
var _hoisted_7 = ["src", "alt"];
var _hoisted_8 = {
  "class": "col-span-9"
};
var _hoisted_9 = {
  "class": "text-black font-bold text-sm ml-3 mt-2"
};
var _hoisted_10 = {
  "class": "col-span-1"
};
var _hoisted_11 = ["onClick"];
var _hoisted_12 = {
  "class": "w-full flex justify-center"
};
var _hoisted_13 = ["src", "alt"];
var _hoisted_14 = {
  "class": "grid grid-cols-12 px-2 pb-2 border-t border-gray-200 py-3"
};
var _hoisted_15 = {
  "class": "col-span-2"
};
var _hoisted_16 = ["onClick"];
var _hoisted_17 = ["onClick"];
var _hoisted_18 = {
  "class": "col-span-2"
};
var _hoisted_19 = ["onClick"];

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-span-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "far fa-share-square text-black text-2xl cursor-pointer"
})], -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "-mt-2 pl-2"
};
var _hoisted_22 = ["onClick", "innerHTML"];
var _hoisted_23 = {
  "class": "px-2 mb-1"
};
var _hoisted_24 = {
  "class": "text-sm text-black"
};
var _hoisted_25 = {
  "class": "font-bold pr-1"
};
var _hoisted_26 = {
  key: 0
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_28 = ["onClick"];

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)();

var _hoisted_30 = {
  key: 2
};
var _hoisted_31 = {
  key: 0,
  "class": "pl-2"
};
var _hoisted_32 = {
  key: 0,
  "class": ""
};
var _hoisted_33 = ["onClick", "innerHTML"];
var _hoisted_34 = ["src"];
var _hoisted_35 = {
  "class": "col-span-10"
};
var _hoisted_36 = {
  "class": "text-sm text-black mt-1"
};
var _hoisted_37 = {
  "class": "font-bold pr-1"
};
var _hoisted_38 = ["innerHTML"];

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_40 = {
  "class": "text-gray-400 text-sm"
};
var _hoisted_41 = {
  key: 0,
  "class": "col-span-2"
};
var _hoisted_42 = ["onClick"];
var _hoisted_43 = {
  "class": "mt-2 pl-2"
};
var _hoisted_44 = ["innerHTML"];
var _hoisted_45 = {
  "class": "mt-2 border-t border-solid border-gray-200 relative"
};
var _hoisted_46 = ["onSubmit"];
var _hoisted_47 = {
  "class": "grid grid-cols-12 gap-6 pr-5"
};
var _hoisted_48 = {
  "class": "col-span-10"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-span-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "submit",
  "class": "bg-transparent text-blue-400 border-0 pt-3 font-bold"
}, "Post")], -1
/* HOISTED */
);

var _hoisted_50 = {
  key: 0,
  "class": "absolute top-0 bg-white opacity-40 z-40 w-full h-full flex justify-center"
};
var _hoisted_51 = ["src"];
var _hoisted_52 = {
  key: 0,
  "class": "flex justify-center"
};
var _hoisted_53 = ["src"];
var _hoisted_54 = {
  key: 1,
  "class": "flex justify-center"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "font-bold text-orange-300 text-sm"
}, "You are not following anyone. Follow someone to see their posts here.", -1
/* HOISTED */
);

var _hoisted_56 = [_hoisted_55];
var _hoisted_57 = {
  "class": "relative hidden md:block md:col-span-4"
};
var _hoisted_58 = {
  "class": "fixed w-full mt-4"
};
var _hoisted_59 = {
  "class": "grid grid-cols-12 gap-2"
};
var _hoisted_60 = {
  "class": "col-span-1"
};
var _hoisted_61 = ["src"];
var _hoisted_62 = {
  "class": "col-span-11"
};
var _hoisted_63 = {
  "class": ""
};
var _hoisted_64 = {
  "class": "text-black font-bold text-sm block"
};
var _hoisted_65 = {
  "class": "text-gray-400 text-sm capitalize"
};
var _hoisted_66 = {
  "class": "mt-7"
};
var _hoisted_67 = {
  "class": "text-xs text-gray-300"
};
var _hoisted_68 = {
  "class": "mr-1"
};

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("About");

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ");

var _hoisted_71 = {
  "class": "mr-1"
};

var _hoisted_72 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Contact");

var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ");

var _hoisted_74 = {
  "class": "mr-1"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Help");

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ");

var _hoisted_77 = {
  "class": "mr-1"
};

var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Privacy");

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ");

var _hoisted_80 = {
  "class": "mr-1"
};

var _hoisted_81 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Terms");

var _hoisted_82 = {
  "class": "mt-3"
};
var _hoisted_83 = ["innerHTML"];
var _hoisted_84 = {
  key: 0,
  "class": "overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex",
  id: "following_users_modal"
};
var _hoisted_85 = {
  "class": "relative w-auto my-6 mx-auto max-w-3xl"
};
var _hoisted_86 = {
  "class": "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
};
var _hoisted_87 = {
  "class": "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
};

var _hoisted_88 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-xl font-semibold text-center"
}, " Likes ", -1
/* HOISTED */
);

var _hoisted_89 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "bg-transparent text-gray-500 h-6 w-6 text-2xl block"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-times"
})], -1
/* HOISTED */
);

var _hoisted_90 = [_hoisted_89];
var _hoisted_91 = {
  "class": "relative flex-auto text-white"
};
var _hoisted_92 = {
  key: 0,
  "class": ""
};
var _hoisted_93 = {
  "class": "grid grid-cols-12 mt-3"
};
var _hoisted_94 = {
  "class": "col-span-2"
};
var _hoisted_95 = ["src"];
var _hoisted_96 = {
  "class": "col-span-7"
};
var _hoisted_97 = {
  "class": "text-black font-bold"
};
var _hoisted_98 = {
  "class": "text-gray-400"
};
var _hoisted_99 = {
  "class": "col-span-3"
};

var _hoisted_100 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Following ");

var _hoisted_101 = {
  key: 0,
  "class": "flex justify-center"
};
var _hoisted_102 = ["src"];
var _hoisted_103 = {
  key: 1,
  "class": ""
};

var _hoisted_104 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "text-center"
}, "No Users Here", -1
/* HOISTED */
);

var _hoisted_105 = [_hoisted_104];
var _hoisted_106 = {
  key: 1,
  "class": "opacity-25 fixed inset-0 z-40 bg-black"
};
var _hoisted_107 = {
  key: 2,
  "class": "overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex",
  id: "following_users_modal"
};
var _hoisted_108 = {
  "class": "relative w-full my-6 mx-auto max-w-3xl md:w-1/2"
};
var _hoisted_109 = {
  "class": "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
};
var _hoisted_110 = {
  "class": "relative flex-auto text-black text-center"
};
var _hoisted_111 = {
  key: 0,
  "class": ""
};
var _hoisted_112 = {
  key: 0,
  "class": "border-b border-gray-200 py-2"
};
var _hoisted_113 = {
  "class": ""
};
var _hoisted_114 = {
  "class": ""
};

var _hoisted_115 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Edit post");

var _hoisted_116 = {
  key: 1,
  "class": "border-b border-gray-200 py-2"
};
var _hoisted_117 = {
  "class": ""
};
var _hoisted_118 = {
  "class": "border-b border-gray-200 py-2"
};
var _hoisted_119 = {
  "class": ""
};
var _hoisted_120 = {
  "class": ""
};

var _hoisted_121 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Go to post");

var _hoisted_122 = {
  "class": "border-b border-gray-200 py-2"
};
var _hoisted_123 = {
  "class": ""
};
var _hoisted_124 = {
  "class": "border-0 py-2"
};
var _hoisted_125 = {
  "class": ""
};
var _hoisted_126 = {
  key: 3,
  "class": "opacity-25 fixed inset-0 z-40 bg-black"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("navbar");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_loading_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("loading-button");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_navbar, {
    profile_picture: $props.logged_in_users_details.profile_picture,
    black_nav: true,
    user_info: $props.logged_in_users_details
  }, null, 8
  /* PROPS */
  , ["profile_picture", "user_info"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [$data.posts.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.posts, function (post, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: post.id,
      "class": "border border-solid border-gray-200 rounded-md py-3 my-3"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "hover:underline",
      href: _ctx.route('profile', post.slug)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          "class": "w-10 rounded-full",
          src: post.profile_picture,
          alt: post.user_name + " Profile Picture"
        }, null, 8
        /* PROPS */
        , _hoisted_7)];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "hover:underline",
      href: _ctx.route('profile', post.slug)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.user_name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      onClick: function onClick($event) {
        return $options.seeMoreOptions(index);
      },
      "class": "fas fa-ellipsis-h text-black cursor-pointer mt-2"
    }, null, 8
    /* PROPS */
    , _hoisted_11)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "w-full h-full max-w-[400px]",
      src: 'storage/images/' + post.images,
      alt: post.user_name + " Post"
    }, null, 8
    /* PROPS */
    , _hoisted_13)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [!post.liked ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
      key: 0,
      onClick: function onClick($event) {
        return $options.likePost(index);
      },
      "class": "far fa-heart text-black text-2xl cursor-pointer"
    }, null, 8
    /* PROPS */
    , _hoisted_16)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", {
      key: 1,
      onClick: function onClick($event) {
        return $options.unlikePost(index);
      },
      "class": "fas fa-heart text-red-500 text-2xl cursor-pointer"
    }, null, 8
    /* PROPS */
    , _hoisted_17))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
      onClick: function onClick($event) {
        return _ctx.$refs['cmnt_input_' + post.id][0].focus();
      },
      "class": "far fa-comment-alt text-black text-2xl cursor-pointer"
    }, null, 8
    /* PROPS */
    , _hoisted_19)]), _hoisted_20]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
      onClick: function onClick($event) {
        return $options.viewLikedUsers(index);
      },
      "class": "cursor-pointer font-semibold text-sm",
      innerHTML: post.like_count > 0 ? post.like_count + ' Likes' : 'No Likes'
    }, null, 8
    /* PROPS */
    , _hoisted_22)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "hover:underline",
      href: _ctx.route('profile', post.slug)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.user_name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]), post.caption_too_long ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.caption_shrt), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_27, post.caption_too_long ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
      key: 1,
      onClick: function onClick($event) {
        return $options.showMoreCaption(index);
      },
      "class": "cursor-pointer font-bold"
    }, "more", 8
    /* PROPS */
    , _hoisted_28)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_29, !post.caption_too_long ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(post.caption), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), post.lst_thr_cmnts.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, [post.rem_cmnts_num > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      onClick: function onClick($event) {
        return $options.viewMoreComments(index);
      },
      "class": "cursor-pointer text-sm text-gray-400",
      innerHTML: 'View more comments (' + post.rem_cmnts_num + ')'
    }, null, 8
    /* PROPS */
    , _hoisted_33), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [$data.load_more_cmnts_form.processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
      key: 0,
      "class": "w-6 inline-block",
      src: $data.load_more_comments_spinner,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_34)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(post.lst_thr_cmnts.slice().reverse(), function (cmnt, i) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: cmnt.id,
        "class": "grid grid-cols-12 gap-6"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        "class": "hover:underline",
        href: _ctx.route('profile', cmnt.slug)
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(cmnt.user_name), 1
          /* TEXT */
          )];
        }),
        _: 2
        /* DYNAMIC */

      }, 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(cmnt.text), 1
      /* TEXT */
      ),  false ? (0) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(cmnt.cmnt_social_time), 1
      /* TEXT */
      )])]), cmnt.user_id == $props.logged_in_users_details.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
        onClick: function onClick($event) {
          return $options.deleteCmnt(index, i);
        },
        "class": "fas fa-trash cursor-pointer text-gray-300 hover:text-gray-400 text-sm transition ease-in-out duration-200"
      }, null, 8
      /* PROPS */
      , _hoisted_42)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
    }), 128
    /* KEYED_FRAGMENT */
    ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": "text-xs text-gray-400 uppercase",
      innerHTML: post.post_social_time
    }, null, 8
    /* PROPS */
    , _hoisted_44)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
      onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
        return $options.submitCmnt(index);
      }, ["prevent"])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <text-input v-model=\"make_cmnt_form.comment\" :error=\"make_cmnt_form.errors.comment\" type=\"text\" label=\"\" id=\"comment\" placeholder=\"Add a comment...\" class=\"\"/> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      ref_for: true,
      ref: 'cmnt_input_' + post.id,
      style: {
        "--tw-shadow": "0 0 #0000",
        "--tw-shadow-colored": "0 0 #0000",
        "box-shadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
        "border-radius": "0"
      },
      id: "comment",
      "class": "border-0 px-3 py-3 text-blueGray-600 bg-white rounded text-sm focus:outline-none w-full ease-linear transition-all duration-150 shadow-none m-0",
      type: "text",
      placeholder: "Add a comment..."
    }, null, 512
    /* NEED_PATCH */
    )]), _hoisted_49])], 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_46), post.add_comment_loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "w-12 inline-block",
      src: $data.load_more_comments_spinner,
      alt: ""
    }, null, 8
    /* PROPS */
    , _hoisted_51)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), $data.loading_more_posts ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "w-12",
    src: $data.load_more_spinner,
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_53)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.posts.length == 0 && $data.no_posts ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_54, _hoisted_56)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('profile', $props.logged_in_users_details.slug)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        "class": "w-12 rounded-full",
        src: $props.logged_in_users_details.profile_picture,
        alt: "Your Profile Picture"
      }, null, 8
      /* PROPS */
      , _hoisted_61)];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('profile', $props.logged_in_users_details.slug)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.logged_in_users_details.user_name), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_65, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.logged_in_users_details.full_name), 1
  /* TEXT */
  )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('about_page')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_69];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), _hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('contact_page')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_72];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), _hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('help_page')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_75];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), _hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('privacy_page')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_78];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), _hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('terms_page')
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_81];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-sm uppercase text-gray-400",
    innerHTML: '© ' + $props.year + ' social pro from dave solutions'
  }, null, 8
  /* PROPS */
  , _hoisted_83)])])])])]), $data.showLikesUsersModalBool ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_84, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_87, [_hoisted_88, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.toggleLikesModal && $options.toggleLikesModal.apply($options, arguments);
    })
  }, _hoisted_90)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [$data.likes_users_arr.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_92, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    onScroll: _cache[1] || (_cache[1] = function () {
      return $options.loadMoreUsersLikes && $options.loadMoreUsersLikes.apply($options, arguments);
    }),
    "class": "h-[350px] overflow-x-hidden p-6"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.likes_users_arr, function (user, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: user.user_details.id,
      "class": ""
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_94, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "hover:underline",
      href: _ctx.route('profile', user.user_details.slug)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          "class": "w-10 rounded-full",
          src: user.user_details.profile_picture,
          alt: ""
        }, null, 8
        /* PROPS */
        , _hoisted_95)];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_96, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_97, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "hover:underline",
      href: _ctx.route('profile', user.user_details.slug)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.user_details.user_name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(user.user_details.full_name), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_99, [user.following_status != null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_loading_button, {
      key: 0,
      onClick: function onClick($event) {
        return $options.toggleFollowLikesModal(user.user_details.id, index);
      },
      type: "button",
      innerHTML: !user.following_status ? 'Follow' : 'Following',
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(!user.following_status ? 'w-auto cursor-pointer bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150' : 'w-auto cursor-pointer bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150')
    }, null, 8
    /* PROPS */
    , ["onClick", "innerHTML", "class"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_loading_button, {
      key: 1,
      "class": "invisible w-auto cursor-pointer bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_100];
      }),
      _: 1
      /* STABLE */

    }))])])]);
  }), 128
  /* KEYED_FRAGMENT */
  )), $data.loading_more_likes_users ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_101, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    "class": "w-16",
    src: $data.load_more_spinner,
    alt: ""
  }, null, 8
  /* PROPS */
  , _hoisted_102)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 32
  /* HYDRATE_EVENTS */
  )])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_103, _hoisted_105))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.showLikesUsersModalBool ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_106)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.showMoreOptionsModalBool ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_107, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_108, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_109, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_110, [$data.selected_post_id_more_opt != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_111, [$data.posts[$data.selected_post_index_more_opt].user_id == $props.logged_in_users_details.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_112, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_113, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_114, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "hover:underline",
    href: _ctx.route('edit_post_page', $data.selected_post_id_more_opt)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_115];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.posts[$data.selected_post_index_more_opt].user_id == $props.logged_in_users_details.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_116, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_117, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.deletePost && $options.deletePost.apply($options, arguments);
    }),
    "class": "text-red-500 cursor-pointer"
  }, "Delete post")])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_118, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_119, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_120, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": "hover:underline",
    href: _ctx.route('post_page', $data.selected_post_id_more_opt)
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_121];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_122, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_123, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    onClick: _cache[3] || (_cache[3] = function () {
      return $options.copyPostLink && $options.copyPostLink.apply($options, arguments);
    }),
    "class": "cursor-pointer"
  }, "Copy Link")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_124, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_125, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    onClick: _cache[4] || (_cache[4] = function () {
      return $options.closeMoreOptionsModal && $options.closeMoreOptionsModal.apply($options, arguments);
    }),
    "class": "text-red-500 cursor-pointer"
  }, "Cancel")])])])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.showMoreOptionsModalBool ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_126)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <footer-component class=\"mt-24\" /> ")], 64
  /* STABLE_FRAGMENT */
  );
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
  "class": "w-full"
};
var _hoisted_2 = {
  key: 0,
  "class": "mb-8 flex items-center justify-between bg-green-500 rounded"
};
var _hoisted_3 = {
  "class": "flex items-center"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "ml-4 mr-2 flex-shrink-0 w-4 h-4 fill-white",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polygon", {
  points: "0 11 2 9 7 14 18 3 20 5 7 18"
})], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "py-4 text-white text-sm font-medium"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_7 = [_hoisted_6];
var _hoisted_8 = {
  key: 1,
  "class": "mb-8 flex items-center justify-between bg-red-400 rounded max-w-3xl"
};
var _hoisted_9 = {
  "class": "flex items-center"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "ml-4 mr-2 flex-shrink-0 w-4 h-4 fill-white",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"
})], -1
/* HOISTED */
);

var _hoisted_11 = {
  key: 0,
  "class": "py-4 text-white text-sm font-medium"
};
var _hoisted_12 = {
  key: 1,
  "class": "py-4 text-white text-sm font-medium"
};
var _hoisted_13 = {
  key: 0
};
var _hoisted_14 = {
  key: 1
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
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

var _hoisted_16 = [_hoisted_15];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_ctx.$page.props.flash.success && $data.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.flash.success), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "group mr-2 p-2",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.show = false;
    })
  }, _hoisted_7)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (_ctx.$page.props.flash.error || Object.keys(_ctx.$page.props.errors).length > 0) && $data.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [_hoisted_10, _ctx.$page.props.flash.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$page.props.flash.error), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [Object.keys(_ctx.$page.props.errors).length === 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, "There is one form error.")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_14, "There are " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(Object.keys(_ctx.$page.props.errors).length) + " form errors.", 1
  /* TEXT */
  ))]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    "class": "group mr-2 p-2",
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $data.show = false;
    })
  }, _hoisted_16)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Auth/LoadingButton.vue?vue&type=template&id=0aa1959c":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Auth/LoadingButton.vue?vue&type=template&id=0aa1959c ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = ["disabled"];

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
  fill: "currentColor"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
  fill: "currentFill"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    disabled: $props.loading,
    "class": "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), $props.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
    key: 0,
    role: "status",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([$props.spinnerClasses, "float-right text-right ml-2 inline-block w-4 h-4 text-white animate-spin dark:text-white"]),
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _hoisted_4, 2
  /* CLASS */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
  /* PROPS */
  , _hoisted_1);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Post/TextInput.vue?vue&type=template&id=49855ff9":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Post/TextInput.vue?vue&type=template&id=49855ff9 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mb-2"
};
var _hoisted_2 = ["for"];
var _hoisted_3 = ["id", "type", "value"];
var _hoisted_4 = {
  key: 1,
  "class": "form-error"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [$props.label ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", {
    key: 0,
    "class": "form-label",
    "for": $props.id
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.label) + ":", 9
  /* TEXT, PROPS */
  , _hoisted_2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    style: {
      "--tw-shadow": "0 0 #0000",
      "--tw-shadow-colored": "0 0 #0000",
      "box-shadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      "border-radius": "0"
    },
    id: $props.id,
    ref: "input"
  }, _ctx.$attrs, {
    "class": ["form-input shadow-none m-0", $props.error ? 'form-input-error' : 'form-input'],
    type: $props.type,
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('update:modelValue', $event.target.value);
    })
  }), null, 16
  /* FULL_PROPS */
  , _hoisted_3), $props.error ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.error), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
}

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

/***/ "./resources/js/assets/img/load_more_spinner.gif":
/*!*******************************************************!*\
  !*** ./resources/js/assets/img/load_more_spinner.gif ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/load_more_spinner.gif?e8a2426e0af47f4d6f8ab32e9b805965");

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

/***/ "./resources/js/Pages/HomePage.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/HomePage.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomePage_vue_vue_type_template_id_728653b7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=728653b7 */ "./resources/js/Pages/HomePage.vue?vue&type=template&id=728653b7");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js */ "./resources/js/Pages/HomePage.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_HomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HomePage_vue_vue_type_template_id_728653b7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/HomePage.vue"]])
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

/***/ "./resources/js/components/Forms/Auth/LoadingButton.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Forms/Auth/LoadingButton.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingButton_vue_vue_type_template_id_0aa1959c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingButton.vue?vue&type=template&id=0aa1959c */ "./resources/js/components/Forms/Auth/LoadingButton.vue?vue&type=template&id=0aa1959c");
/* harmony import */ var _LoadingButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingButton.vue?vue&type=script&lang=js */ "./resources/js/components/Forms/Auth/LoadingButton.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LoadingButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LoadingButton_vue_vue_type_template_id_0aa1959c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Forms/Auth/LoadingButton.vue"]])
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

/***/ "./resources/js/components/Post/TextInput.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Post/TextInput.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextInput_vue_vue_type_template_id_49855ff9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextInput.vue?vue&type=template&id=49855ff9 */ "./resources/js/components/Post/TextInput.vue?vue&type=template&id=49855ff9");
/* harmony import */ var _TextInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextInput.vue?vue&type=script&lang=js */ "./resources/js/components/Post/TextInput.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_David_Nwogo_Desktop_social_pro_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_TextInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_TextInput_vue_vue_type_template_id_49855ff9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Post/TextInput.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/HomePage.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/HomePage.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomePage.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/HomePage.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/components/Forms/Auth/LoadingButton.vue?vue&type=script&lang=js":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Forms/Auth/LoadingButton.vue?vue&type=script&lang=js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingButton_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingButton.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Auth/LoadingButton.vue?vue&type=script&lang=js");
 

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

/***/ "./resources/js/components/Post/TextInput.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Post/TextInput.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Post/TextInput.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/HomePage.vue?vue&type=template&id=728653b7":
/*!***********************************************************************!*\
  !*** ./resources/js/Pages/HomePage.vue?vue&type=template&id=728653b7 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_template_id_728653b7__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomePage_vue_vue_type_template_id_728653b7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomePage.vue?vue&type=template&id=728653b7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/HomePage.vue?vue&type=template&id=728653b7");


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

/***/ "./resources/js/components/Forms/Auth/LoadingButton.vue?vue&type=template&id=0aa1959c":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Forms/Auth/LoadingButton.vue?vue&type=template&id=0aa1959c ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingButton_vue_vue_type_template_id_0aa1959c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LoadingButton_vue_vue_type_template_id_0aa1959c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LoadingButton.vue?vue&type=template&id=0aa1959c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Forms/Auth/LoadingButton.vue?vue&type=template&id=0aa1959c");


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

/***/ "./resources/js/components/Post/TextInput.vue?vue&type=template&id=49855ff9":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Post/TextInput.vue?vue&type=template&id=49855ff9 ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextInput_vue_vue_type_template_id_49855ff9__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_TextInput_vue_vue_type_template_id_49855ff9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./TextInput.vue?vue&type=template&id=49855ff9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Post/TextInput.vue?vue&type=template&id=49855ff9");


/***/ })

}]);