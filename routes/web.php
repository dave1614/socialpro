<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChangePasswordController;
use App\Http\Controllers\EditProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\SearchUsersController;
use App\Http\Controllers\SettingsController;
use App\Models\BlogPost;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\GoogleSocialiteController;
use App\Http\Controllers\MainController;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test_profile', function (Request $request) {
    return view('profile');
});


//Show email notice
Route::get('/email/verify', function () {
    // return view('auth.verify-email');
    if(!is_null(Auth::user()->email_verified_at)){
        return redirect()->route('home_page');
    }
    return Inertia::render('Auth/VerifyEmail');
})->middleware('auth')->name('verification.notice');

//Verify email link url
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect()->route('home_page');
})->middleware(['auth', 'signed'])->name('verification.verify');

//Resend email verification
Route::post('/email/verification-notification', function (Request $request) {
    if (!is_null(Auth::user()->email_verified_at)) {
        return redirect()->route('home_page');
    }
    $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

//Reset password view
Route::get('/reset-password/{token}', function ($token) {
    // return view('auth.reset-password', ['token' => $token]);
    $props = ['token' => $token];
    return Inertia::render('Auth/ResetPassword', $props);
})->middleware('guest')->name('password.reset');

//Process Reset Password
Route::post('/reset-password', [AuthController::class, 'processResetPassword'])->middleware('guest')->name('password.update');

Route::get('auth/google', [GoogleSocialiteController::class, 'redirectToGoogle'])->name('auth/google');
Route::get('callback/google', [GoogleSocialiteController::class, 'handleCallback'])->name('callback/google');

Route::post('/load_regions_for_country', [AuthController::class, 'loadRegionsForCountry'])->name('load_regions_for_country');


Route::group(['middleware' => ['guest']],function () {
    Route::get('/login',[AuthController::class,'loginPage'])->name('login');

    Route::post('/login', [AuthController::class, 'processLogin'])->name('process_login');
    Route::get('/register', [AuthController::class, 'registerPage'])->name('register');

    Route::post('/register', [AuthController::class, 'processRegister'])->name('process_registration');

    Route::get('/forgot-password', [AuthController::class, 'forgotPasswordPage'])->name('password.request');
    Route::post('/forgot-password', [AuthController::class, 'handleForgotPassword'])->name('password.email');

});



Route::group(['middleware' => ['auth', 'verified']],function () {
    Route::get('/', [PublicController::class, 'homePage'])->name('home_page');
    Route::get('/dashboard',[ProfileController::class,'index'])->name('dashboard');
    Route::get('/edit_profile', [EditProfileController::class, 'index'])->name('edit_profile');
    Route::get('/change_password', [ChangePasswordController::class, 'index'])->name('change_password_page');
    Route::get('/make_post', [PostController::class, 'create'])->name('make_post_page');
    Route::get('/post/{post}', [PostController::class, 'show'])->name('post_page');
    Route::get('/users/search', [SearchUsersController::class, 'index'])->name('search_page');
    
    Route::get('/edit_post/{post}', [PostController::class, 'edit'])->name('edit_post_page');

    Route::get('/about', [MainController::class, 'aboutUsPage'])->name('about_page');
    Route::get('/help', [MainController::class, 'helpPage'])->name('help_page');
    Route::get('/privacy-policy', [MainController::class, 'privacyPage'])->name('privacy_page');
    Route::get('/terms', [MainController::class, 'termsPage'])->name('terms_page');
    Route::get('/contact', [MainController::class, 'contactUsPage'])->name('contact_page');
    
    
    
    
    Route::get('/settings', [SettingsController::class, 'index'])->name('settings_page');
    
    Route::get('/logout', [AuthController::class, 'performLogout'])->name('logout.perform');

    
    Route::post('/delete_cmnt/{cmnt}', [PostController::class, 'deleteCmnt'])->name('delete_cmnt');
    Route::post('/edit_post/{post}', [PostController::class, 'update'])->name('process_edit_post');
    Route::post('/delete_post/{post}', [PostController::class, 'destroy'])->name('delete_post');
    Route::post('/users/search', [SearchUsersController::class, 'searchUsers'])->name('search_users');
    Route::post('/post/like/{post}', [PostController::class, 'likePost'])->name('like_post');
    Route::post('/post/unlike/{post}', [PostController::class, 'unlikePost'])->name('unlike_post');
    
    Route::post('/make_post', [PostController::class, 'store'])->name('process_make_post');
    Route::post('/edit_profile', [EditProfileController::class, 'processEditProfile'])->name('process_edit_profile');
    Route::post('/upload_profile_picture', [ProfileController::class, 'uploadProfilePicture'])->name('upload_profile_picture');
    Route::post('/upload_cover_photo', [ProfileController::class, 'uploadCoverPhoto'])->name('upload_cover_photo');
    Route::post('/follow/{user}', [ProfileController::class, 'toggleFollowUser'])->name('toggle_follow_user');

    Route::post('/comment/new/{post}', [PostController::class, 'makeNewComment'])->name('make_new_cmnt');
    Route::post('/comments/load_more/{post}', [PostController::class, 'loadMoreComments'])->name('load_more_cmnts');
    Route::post('/post/likes/{post}', [PostController::class, 'viewLikesUsers'])->name('post_likes_users');
    Route::post('/post/likes_subs/{post}', [PostController::class, 'viewLikesUsersSubs'])->name('post_likes_users_subs');
    Route::post('/view_users_following_list/{user}', [ProfileController::class, 'viewUsersFollowingList'])->name('view_users_following_list');
    Route::post('/view_users_followers_list/{user}', [ProfileController::class, 'viewUsersFollowersList'])->name('view_users_followers_list');
    Route::post('change_password', [ChangePasswordController::class, 'store'])->name('change.password');
    
    Route::post('/view_users_following_list_subs/{user}', [ProfileController::class, 'viewUsersFollowingListSubsequent'])->name('view_users_following_list_subs');
    Route::post('/view_users_follower_list_subs/{user}', [ProfileController::class, 'viewUsersFollowerListSubsequent'])->name('view_users_follower_list_subs');
    Route::post('/user_posts/{user}', [PostController::class, 'index'])->name('get_users_posts');
    Route::post('/front_page_posts/{user}', [PostController::class, 'getUsersFrontPagePosts'])->name('get_users_front_page_posts');
    Route::post('/user_posts/{user}/bg_scr', [PostController::class, 'getUsersPostsBgScre'])->name('get_users_posts_bg_scr');

    

    Route::get('/{user}', [ProfileController::class, 'profilePage'])->name('profile');
});



// Route::get('/about', function () {
//     $posts = BlogPost::paginate(10);
//     return Inertia::render('About', ['title' => 'About Us Page','posts' => $posts]);
// })->name('about');

// Route::get('/contact', function () {
//     return Inertia::render('Contact', ['title' => 'Contact Us Page']);
// })->name('contact');
