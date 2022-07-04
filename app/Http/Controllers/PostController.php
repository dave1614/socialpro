<?php

namespace App\Http\Controllers;

use App\Functions\UsefulFunctions;
use App\Models\Comment;
use App\Rules\FullNameRule;
use App\Rules\PasswordValidationRule;
use App\Models\Country;
use App\Models\Post;
use App\Models\Region;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Str;
use App\Rules\CountryRule;
use App\Rules\MatchOldPassword;
use App\Rules\RegionRule;
use Illuminate\Support\Facades\Hash;

class PostController extends Controller
{
    public $useful_functions;

    public function __construct()
    {
        $this->useful_functions = new UsefulFunctions();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,User $user)
    {
        // return $user;
        $response_arr = array('success' => false, "posts" => [], 'last_row' => false);
        $logged_in_user = Auth::user();

        
        

        if ($request->has('last_id')) {
            $response_arr['success'] = true;
            $last_id = $request->get('last_id');
            // $last_id = 14;
       
            $posts = Post::where('user_id',$user->id);
            if($last_id > 0){
                $posts = $posts->where('id', '<', $last_id);
            }
            $posts = $posts->orderBy("id","desc")->limit(3)->get();
            $response_arr['posts'] = $posts;

            $posts_num = $posts->count();
            if($posts_num > 0){

                foreach($posts as $row){
                    $post_user_id = $row->user_id;
                    $post_user = User::find($post_user_id);
                    $post_id = $row->id;
                    $likes = $row->likes;
                    $post_caption = $row->caption;
                    $like_count = (!is_null($likes)) ? count(explode(",", $likes)) : 0;
                    $lst_thr_cmnts = Comment::where('post_id', $post_id)->orderBy("id","DESC")->limit(3)->get();
                    $post_date_arr = explode(" ", $row->created_at);
                    $post_social_time = $this->useful_functions->getSocialMediaTime($post_date_arr[0], $post_date_arr[1]);
                    $post_user_name = $post_user->user_name;
                    $post_user_slug = $post_user->slug;
                    $post_user_profile_picture = (is_null($post_user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $post_user->profile_picture;

                    $post_caption_too_long = (Str::length($post_caption) > 58) ? true : false;

                    $post_caption_shrt = Str::limit($post_caption,58,"...");

                    $liked = false;

                    $likes_arr = explode(",",$likes);
                    
                    if(in_array($logged_in_user->id,$likes_arr)){
                        $liked = true;
                    }

                    $row->caption_too_long = $post_caption_too_long;
                    $row->caption_shrt = $post_caption_shrt;
                    $row->liked = $liked;
                    $row->like_count = $like_count;
                    $row->user_name = $post_user_name;
                    $row->slug = $post_user_slug;
                    $row->profile_picture = $post_user_profile_picture;
                    $row->post_social_time = $post_social_time;
                    $row->lst_thr_cmnts = $lst_thr_cmnts;
                    $row->last_row = false;
                    $row->rem_cmnts_num = 0;
                    $row->add_comment_loading = false;

                    $lst_thr_cmnts_num = $lst_thr_cmnts->count();
                    if($lst_thr_cmnts_num > 0) {

                        foreach ($lst_thr_cmnts as $cmnt_row) {
                            $cmnt_user_id = $cmnt_row->user_id;
                            $cmnt_user = User::find($cmnt_user_id);
                            $cmnt_id = $cmnt_row->id;
                            $cmnt_date_arr = explode(" ", $cmnt_row->created_at);
                            $cmnt_social_time = $this->useful_functions->getSocialMediaTime($cmnt_date_arr[0], $cmnt_date_arr[1]);

                            $cmnt_social_time = (substr($cmnt_social_time, -3) == "ago") ? substr($cmnt_social_time, 0, -4) : $cmnt_social_time;

                            $cmnt_user_name = $cmnt_user->user_name;
                            $cmnt_user_slug = $cmnt_user->slug;

                            $cmnt_row->cmnt_social_time = $cmnt_social_time;
                            $cmnt_row->user_name = $cmnt_user_name;
                            $cmnt_row->slug = $cmnt_user_slug;
                        }

                        $lst_cmmt_id = $lst_thr_cmnts[$lst_thr_cmnts_num - 1]->id;
                        
                        $subs_cmnt = Comment::where('post_id', $post_id)->where('id', '<', $lst_cmmt_id)->orderBy("id", "DESC")->get("id");
                        $row->rem_cmnts_num = $subs_cmnt->count();
                        if ($subs_cmnt->count() == 0) {
                            $row->last_row = true;
                            
                        }
                    }

                }

                $last_post_id = $posts[$posts_num - 1]->id;
                $subs_post = Post::where('user_id', $user->id)->where('id', '<', $last_post_id)->limit(1)->get("id");
                if($subs_post->count() == 0){
                    $response_arr['last_row'] = true;
                }
            }
            
            // return $response_arr;
        }

        session()->flash('data', $response_arr);
        return back()->with('success', 'Posts fetched successfully');
    }

    public function getUsersFrontPagePosts(Request $request, User $user)
    {
        // return $user;
        $response_arr = array('success' => false, "posts" => [], 'last_row' => false);
        $logged_in_user = Auth::user();




        if ($request->has('last_id')) {
            $response_arr['success'] = true;
            $last_id = $request->get('last_id');
            // $last_id = 14;

            $following_list = $user->following;
            if(!is_null($following_list)){
                $following_array = explode(",", $following_list);

                $posts = Post::where('id','>' , '0');
               
                
                for($k = 0; $k < count($following_array); $k++){
                    $foll_id = $following_array[$k];
                    if($k == 0){
                        $posts = $posts->where("user_id", $foll_id);
                    }else{
                        $posts = $posts->orWhere("user_id", $foll_id);
                    }
                }

                if ($last_id > 0) {
                    $posts = $posts->where('id', '<', $last_id);
                }

                $posts = $posts->orderBy("id", "desc")->limit(10)->get();
                $response_arr['posts'] = $posts;

                $posts_num = $posts->count();
                if ($posts_num > 0) {

                    foreach ($posts as $row) {
                        $post_user_id = $row->user_id;
                        $post_user = User::find($post_user_id);
                        $post_id = $row->id;
                        $likes = $row->likes;
                        $post_caption = $row->caption;
                        $like_count = (!is_null($likes)) ? count(explode(",", $likes)) : 0;
                        $lst_thr_cmnts = Comment::where('post_id', $post_id)->orderBy("id", "DESC")->limit(3)->get();
                        $post_date_arr = explode(" ", $row->created_at);
                        $post_social_time = $this->useful_functions->getSocialMediaTime($post_date_arr[0], $post_date_arr[1]);
                        $post_user_name = $post_user->user_name;
                        $post_user_slug = $post_user->slug;
                        $post_user_profile_picture = (is_null($post_user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $post_user->profile_picture;

                        $post_caption_too_long = (Str::length($post_caption) > 58) ? true : false;

                        $post_caption_shrt = Str::limit($post_caption, 58, "...");

                        $liked = false;

                        $likes_arr = explode(",", $likes);

                        if (in_array($logged_in_user->id, $likes_arr)) {
                            $liked = true;
                        }

                        $row->caption_too_long = $post_caption_too_long;
                        $row->caption_shrt = $post_caption_shrt;
                        $row->liked = $liked;
                        $row->like_count = $like_count;
                        $row->user_name = $post_user_name;
                        $row->slug = $post_user_slug;
                        $row->profile_picture = $post_user_profile_picture;
                        $row->post_social_time = $post_social_time;
                        $row->lst_thr_cmnts = $lst_thr_cmnts;
                        $row->last_row = false;
                        $row->rem_cmnts_num = 0;
                        $row->add_comment_loading = false;

                        $lst_thr_cmnts_num = $lst_thr_cmnts->count();
                        if ($lst_thr_cmnts_num > 0) {

                            foreach ($lst_thr_cmnts as $cmnt_row) {
                                $cmnt_user_id = $cmnt_row->user_id;
                                $cmnt_user = User::find($cmnt_user_id);
                                $cmnt_id = $cmnt_row->id;
                                $cmnt_date_arr = explode(" ", $cmnt_row->created_at);
                                $cmnt_social_time = $this->useful_functions->getSocialMediaTime($cmnt_date_arr[0], $cmnt_date_arr[1]);

                                $cmnt_social_time = (substr($cmnt_social_time, -3) == "ago") ? substr($cmnt_social_time, 0, -4) : $cmnt_social_time;

                                $cmnt_user_name = $cmnt_user->user_name;
                                $cmnt_user_slug = $cmnt_user->slug;

                                $cmnt_row->cmnt_social_time = $cmnt_social_time;
                                $cmnt_row->user_name = $cmnt_user_name;
                                $cmnt_row->slug = $cmnt_user_slug;
                            }

                            $lst_cmmt_id = $lst_thr_cmnts[$lst_thr_cmnts_num - 1]->id;

                            $subs_cmnt = Comment::where('post_id', $post_id)->where('id', '<', $lst_cmmt_id)->orderBy("id", "DESC")->get("id");
                            $row->rem_cmnts_num = $subs_cmnt->count();
                            if ($subs_cmnt->count() == 0) {
                                $row->last_row = true;
                            }
                        }
                    }

                    $last_post_id = $posts[$posts_num - 1]->id;
                    $subs_post = Post::where('user_id', $user->id)->where('id', '<', $last_post_id)->limit(1)->get("id");
                    if ($subs_post->count() == 0) {
                        $response_arr['last_row'] = true;
                    }
                }
            }

            // return $response_arr;
        }

        session()->flash('data', $response_arr);
        return back()->with('success', 'Posts fetched successfully');
    }

    public function getUsersPostsBgScre(Request $request, User $user)
    {
        // return $user;
        $response_arr = array('success' => false, "posts" => [], 'last_row' => false);
        $logged_in_user = Auth::user();

        if ($request->has('last_id')) {
            $response_arr['success'] = true;
            $last_id = $request->get('last_id');
            // $last_id = 14;

            $posts = Post::where('user_id', $user->id);
            if ($last_id > 0) {
                $posts = $posts->where('id', '<', $last_id);
            }
            $posts = $posts->orderBy("id", "desc")->limit(5)->get();
            $response_arr['posts'] = $posts;

            $posts_num = $posts->count();
            if ($posts_num > 0) {

                foreach ($posts as $row) {
                    
                    $post_id = $row->id;
                    $likes = $row->likes;
                    $like_count = (!is_null($likes)) ? count(explode(",", $likes)) : 0;
                    $cmnt_count = Comment::where('post_id', $post_id)->get('id')->count();
                    
                    $row->images = "storage/images/" . $row->images;
                    $row->like_count = $like_count;
                    $row->cmnt_count = $cmnt_count;
                    $row->hvring = false;
                }

                $last_post_id = $posts[$posts_num - 1]->id;
                $subs_post = Post::where('user_id', $user->id)->where('id', '<', $last_post_id)->limit(1)->get("id");
                if ($subs_post->count() == 0) {
                    $response_arr['last_row'] = true;
                }
            }

            // return $response_arr;
        }

        session()->flash('data', $response_arr);
        return back()->with('success', 'Posts fetched successfully');
    }

    public function makeNewComment(Request $request, Post $post)
    {
        // return $user;
        $response_arr = array('success' => false, "lst_thr_cmnts" => [], 'rem_cmnts_num' => 0, 'last_row' => false);
        $logged_in_user = Auth::user();

        $post_id = $post->id;

        $request->validate([
            'comment' => ['required', 'min:1', 'max:500'],
        ]);

        $comment = Comment::create([
            'user_id' => $logged_in_user->id,
            'post_id' => $post_id,
            'text' => $request->input('comment'),
        ]);

        $comment->save();
        $response_arr['success'] = true;
        

        $lst_thr_cmnts = Comment::where('post_id', $post_id)->orderBy("id", "DESC")->limit(3)->get();


        $response_arr['lst_thr_cmnts'] = $lst_thr_cmnts;
        
        $lst_thr_cmnts_num = $lst_thr_cmnts->count();
        if ($lst_thr_cmnts_num > 0) {

            foreach ($lst_thr_cmnts as $cmnt_row) {
                $cmnt_user_id = $cmnt_row->user_id;
                $cmnt_user = User::find($cmnt_user_id);
                $cmnt_id = $cmnt_row->id;
                $cmnt_date_arr = explode(" ", $cmnt_row->created_at);
                $cmnt_social_time = $this->useful_functions->getSocialMediaTime($cmnt_date_arr[0], $cmnt_date_arr[1]);
                
                $cmnt_social_time = (substr($cmnt_social_time, -3) == "ago") ? substr($cmnt_social_time, 0,-4) : $cmnt_social_time;
                $cmnt_user_name = $cmnt_user->user_name;
                $cmnt_user_slug = $cmnt_user->slug;

                $cmnt_row->cmnt_social_time = $cmnt_social_time;
                $cmnt_row->user_name = $cmnt_user_name;
                $cmnt_row->slug = $cmnt_user_slug;
            }

            $lst_cmmt_id = $lst_thr_cmnts[$lst_thr_cmnts_num - 1]->id;

            $subs_cmnt = Comment::where('post_id', $post_id)->where('id', '<', $lst_cmmt_id)->orderBy("id", "DESC")->get("id");
            $response_arr['rem_cmnts_num'] = $subs_cmnt->count();
            if ($subs_cmnt->count() == 0) {
                $response_arr['last_row'] = true;
            }
        }
        // return $response_arr;

        session()->flash('data', $response_arr);
        return back()->with('success', 'Comment Made successfully');
    }


    public function loadMoreComments(Request $request, Post $post)
    {
        // return $user;
        $response_arr = array('success' => false, "cmnts" => [], 'last_row' => false);
        $logged_in_user = Auth::user();

        $post_id = $post->id;


        if ($request->has('last_id')) {
            $response_arr['success'] = true;
            $last_id = $request->get('last_id');
            // $last_id = 14;


            $cmnts = Comment::where('post_id', $post_id)->where('id', '<', $last_id)->orderBy("id", "DESC")->limit(3)->get();

            // return $cmnts;



            $cmnts_num = $cmnts->count();
            if ($cmnts_num > 0) {
                $response_arr['cmnts'] = $cmnts;
                foreach ($cmnts as $cmnt_row) {
                    $cmnt_user_id = $cmnt_row->user_id;
                    $cmnt_user = User::find($cmnt_user_id);
                    $cmnt_id = $cmnt_row->id;
                    $cmnt_date_arr = explode(" ", $cmnt_row->created_at);
                    $cmnt_social_time = $this->useful_functions->getSocialMediaTime($cmnt_date_arr[0], $cmnt_date_arr[1]);
                    $cmnt_social_time = (substr($cmnt_social_time, -3) == "ago") ? substr($cmnt_social_time, 0, -4) : $cmnt_social_time;
                    $cmnt_user_name = $cmnt_user->user_name;
                    $cmnt_user_slug = $cmnt_user->slug;

                    $cmnt_row->cmnt_social_time = $cmnt_social_time;
                    $cmnt_row->user_name = $cmnt_user_name;
                    $cmnt_row->slug = $cmnt_user_slug;
                }

                $lst_cmmt_id = $cmnts[$cmnts_num - 1]->id;

                $subs_cmnt = Comment::where('post_id', $post_id)->where('id', '<', $lst_cmmt_id)->orderBy("id", "DESC")->get("id");
                $response_arr['rem_cmnts_num'] = $subs_cmnt->count();
                if ($subs_cmnt->count() == 0) {
                    $response_arr['last_row'] = true;
                }
            }
        

            // return $response_arr;
        }

        session()->flash('data', $response_arr);
        return back()->with('success', 'More comments fetched successfully');
    }

    public function unlikePost(Request $request, Post $post)
    {
        $response_arr = array('success' => true);
        $logged_in_user = Auth::user();

        $form_array = array();
        $likes = $post->likes;
        if (is_null($likes)) {
            $like_str = null;
        } else {
            $likes_arr = explode(",", $likes);
            if (in_array($logged_in_user->id, $likes_arr)) {
                if (($key = array_search($logged_in_user->id, $likes_arr)) !== false) {
                    unset($likes_arr[$key]);
                }
                
                $like_str = (count($likes_arr) > 0) ? implode(",", $likes_arr) : null;
            } else {
                $like_str = $likes;
            }
        }

        // $form_array['likes'] = $like_str;

        $post->likes = $like_str;
        $post->save();
        // Post::find($post->id)->update($form_array);

        session()->flash('data', $response_arr);
        return back()->with('success', 'Post unliked successfully');
    }

    public function viewLikesUsersSubs(Request $request, Post $post)
    {
        $response_arr = array('success' => false, "liked_users" => [], 'last_row' => false);

        if ($request->has('last_id')) {
            $last_id = $request->get('last_id');

            $logged_in_user = Auth::user();
            $likes_arr = (!is_null($post->likes)) ? explode(",", $post->likes) : [];
            $likes_num = count($likes_arr);
            if ($likes_num > 0) {
                if (in_array($last_id, $likes_arr)) {
                    $response_arr['success'] = true;
                    $index = array_search($last_id, $likes_arr);
                    // return $index;
                    $likes_arr = array_slice($likes_arr, $index + 1, 10);
                    for ($i = 0; $i < count($likes_arr); $i++) {
                        $following_status = false;
                        $likes_user_id = $likes_arr[$i];
                        $likes_user = User::find($likes_user_id);

                        $likes_followers_arr = (!is_null($likes_user->followers)) ? explode(",", $likes_user->followers) : [];
                        $likes_user->profile_picture = (is_null($likes_user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $likes_user->profile_picture;

                        //Check if you are following this user

                        if (in_array($logged_in_user->id, $likes_followers_arr)) {
                            $following_status = true;
                        }

                        if ($logged_in_user->id == $likes_user_id) {
                            $following_status = null;
                        }

                        // return $following_num - 1;
                        // return $index + $i;
                        if (($likes_num - 1) == ($index + 1 + $i)) {
                            $response_arr['last_row'] = true;
                        }

                        $obj = [
                            'user_details' => [
                                // 'index' => $i,
                                'id' => $likes_user_id,
                                'user_name' => $likes_user->user_name,
                                'full_name' => $likes_user->full_name,
                                'slug' => $likes_user->slug,
                                'profile_picture' => $likes_user->profile_picture,
                            ],
                            'following_status' => $following_status,
                        ];


                        $response_arr['liked_users'][] = $obj;
                    }
                }
            }
        }
        // return $response_arr;
        session()->flash('data', $response_arr);
        return back()->with('success', 'More Liked users fetched successfully');
    } 

    public function viewLikesUsers(Request $request, Post $post)
    {
        $response_arr = array('liked_users' => []);
        $logged_in_user = Auth::user();


        
        $likes_arr = (!is_null($post->likes)) ? explode(",", $post->likes) : [];

        if (count($likes_arr) > 0) {
            $likes_arr = array_slice($likes_arr, 0, 10);
            for ($i = 0; $i < count($likes_arr); $i++) {
                $following_status = false;
                $liked_user_id = $likes_arr[$i];
                $liked_user = User::find($liked_user_id);

                $liked_followers_arr = (!is_null($liked_user->followers)) ? explode(",", $liked_user->followers) : [];
                $liked_user->profile_picture = (is_null($liked_user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $liked_user->profile_picture;

                //Check if you are following this user

                if (in_array($logged_in_user->id, $liked_followers_arr)) {
                    $following_status = true;
                }

                if ($logged_in_user->id == $liked_user_id) {
                    $following_status = null;
                }

                $obj = [
                    'user_details' => [
                        'id' => $liked_user_id,
                        'user_name' => $liked_user->user_name,
                        'full_name' => $liked_user->full_name,
                        'slug' => $liked_user->slug,
                        'profile_picture' => $liked_user->profile_picture,
                    ],
                    'following_status' => $following_status,
                ];

                $response_arr['liked_users'][] = $obj;
            }
        }

        session()->flash('data', $response_arr);
        return back()->with('success', 'Liked users fetched successfully');
    }   


    public function likePost(Request $request, Post $post){
        $response_arr = array('success' => true);
        $logged_in_user = Auth::user();

        
        $likes = $post->likes;
        if(is_null($likes)){
            $like_str = $logged_in_user->id;
            
        }else{
            $likes_arr = explode(",",$likes);
            if(!in_array($logged_in_user->id, $likes_arr)){
                array_push($likes_arr, $logged_in_user->id);
                $like_str = implode(",", $likes_arr);
            }else{
                $like_str = $likes;
            }
        }

        $post->likes = $like_str;
        $post->save();
        

        session()->flash('data', $response_arr);
        return back()->with('success', 'Post liked successfully');
    }   

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $user = Auth::user();
        $props['countries'] = Country::where('id', '!=', '0')->orderBy("name", "ASC")->get();
        $props['all_regions'] = Region::where('country_id', $user->country_id)->orderBy("name", "ASC")->get();
        $props['user_details'] = $user;
        $props['user_details']['region'] = Region::find($user->region_id)->name;
        $props['user_details']['country'] = Country::find($user->country_id)->name;
        $props['user_details']['bio_short'] = Str::limit($user->bio, 150, '...');
        $props['show_more_bio'] = (strlen($user->bio) > 150) ? true : false;
        $props['cover_photo_change_txt_prop'] = (is_null($user->cover_photo)) ? "Add Cover Photo" : "Change Cover Photo";
        $props['cover_photo_prop'] = (is_null($user->cover_photo)) ? "/storage/images/annie-spratt-BcGoZXjyPzA-unsplash.jpg" : "/storage/images/" . $user->cover_photo;
        $props['user_details']['cover_photo'] = (is_null($user->cover_photo)) ? "background-image: url('/storage/images/annie-spratt-BcGoZXjyPzA-unsplash.jpg)" : "background-image: url('/storage/images/" . $user->cover_photo . "')";
        $props['user_details']['profile_picture'] = (is_null($user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $user->profile_picture;




        return Inertia::render('Profile/MakePost', $props);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $response_arr = array("image_errors" => "");
       
        $request->validate([
            'caption' => ['required','min:10', 'max:500'],
            'image' => 'required|image|mimes:png,jpeg,jpg,gif,webp|max:4000',
        ]);

        if ($request->file('image')) {

            $image = $request->file('image');

            if ($_SERVER['SERVER_NAME'] == "127.0.0.1") {
                $fileName = time() . '_' . $image->getClientOriginalName();
                $filePath = $image->storePubliclyAs('/public/images', $fileName);
                $extension = $image->getClientOriginalExtension();
                $filePath = str_replace('public', 'storage', $filePath);

                $file = public_path($filePath);
            } else {
                $fileName = time() . '_' . $image->getClientOriginalName();
                $filePath = $image->storeAs('images', $fileName, 'public_uploads');
                $extension = $image->getClientOriginalExtension();
                $filePath = str_replace('public', 'storage', $filePath);

                $file = base_path('storage/' . $filePath);
            }
            if (file_exists($file)) {

                $form_array = [
                    'user_id' => $user->id,
                    'caption' => $request->input('caption'),
                    'images' => $fileName,
                ];
            } else {
                $response_arr['image_errors'] = 'We ran into some errors when uploading your file';

                session()->flash('data', $response_arr);
                return back()->with('error', 'something went wrong');
            }
        }


        Post::create($form_array);


        return back()->with('success', 'Post made successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Post $post)
    {
       
        
        $logged_in_user = Auth::user();


        $props = ['page_post' => []];

        $props['is_logged_in'] = false;
        $props['is_logged_in_users_page'] = false;
        $props['logged_in_users_details'] = (object) [];
        
        $props['is_logged_in'] = true;
        $props['logged_in_users_details'] = $logged_in_user;

        $props['logged_in_users_details']['profile_picture'] = (is_null($logged_in_user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $logged_in_user->profile_picture;
        

            
        $post_user_id = $post->user_id;
        $post_user = User::find($post_user_id);
        $post_id = $post->id;
        $likes = $post->likes;
        $post_caption = $post->caption;
        $like_count = (!is_null($likes)) ? count(explode(",", $likes)) : 0;
        $lst_thr_cmnts = Comment::where('post_id', $post_id)->orderBy("id", "DESC")->limit(3)->get();
        $post_date_arr = explode(" ", $post->created_at);
        $post_social_time = $this->useful_functions->getSocialMediaTime($post_date_arr[0], $post_date_arr[1]);
        $post_user_name = $post_user->user_name;
        $post_user_slug = $post_user->slug;
        $post_user_profile_picture = (is_null($post_user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $post_user->profile_picture;

        $post_caption_too_long = (Str::length($post_caption) > 58) ? true : false;

        $post_caption_shrt = Str::limit($post_caption, 58, "...");

        $liked = false;

        $likes_arr = explode(",", $likes);

        if (in_array($logged_in_user->id, $likes_arr)) {
            $liked = true;
        }

        $post->caption_too_long = $post_caption_too_long;
        $post->caption_shrt = $post_caption_shrt;
        $post->liked = $liked;
        $post->like_count = $like_count;
        $post->user_name = $post_user_name;
        $post->slug = $post_user_slug;
        $post->profile_picture = $post_user_profile_picture;
        $post->post_social_time = $post_social_time;
        $post->lst_thr_cmnts = $lst_thr_cmnts;
        $post->last_row = false;
        $post->rem_cmnts_num = 0;
        $post->add_comment_loading = false;

        $lst_thr_cmnts_num = $lst_thr_cmnts->count();
        if ($lst_thr_cmnts_num > 0) {

            foreach ($lst_thr_cmnts as $cmnt_row) {
                $cmnt_user_id = $cmnt_row->user_id;
                $cmnt_user = User::find($cmnt_user_id);
                $cmnt_id = $cmnt_row->id;
                $cmnt_date_arr = explode(" ", $cmnt_row->created_at);
                $cmnt_social_time = $this->useful_functions->getSocialMediaTime($cmnt_date_arr[0], $cmnt_date_arr[1]);

                $cmnt_social_time = (substr($cmnt_social_time, -3) == "ago") ? substr($cmnt_social_time, 0, -4) : $cmnt_social_time;

                $cmnt_user_name = $cmnt_user->user_name;
                $cmnt_user_slug = $cmnt_user->slug;

                $cmnt_row->cmnt_social_time = $cmnt_social_time;
                $cmnt_row->user_name = $cmnt_user_name;
                $cmnt_row->slug = $cmnt_user_slug;
            }

            $lst_cmmt_id = $lst_thr_cmnts[$lst_thr_cmnts_num - 1]->id;

            $subs_cmnt = Comment::where('post_id', $post_id)->where('id', '<', $lst_cmmt_id)->orderBy("id", "DESC")->get("id");
            $post->rem_cmnts_num = $subs_cmnt->count();
            if ($subs_cmnt->count() == 0) {
                $post->last_row = true;
            }
        }
           
        $props['page_post'][] = $post;
        // return $props['page_post'];



        return Inertia::render('Profile/PostPage', $props);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, Post $post)
    {
        $user = Auth::user();
        if ($user->id == $post->user_id) {
            $props['countries'] = Country::where('id', '!=', '0')->orderBy("name", "ASC")->get();
            $props['all_regions'] = Region::where('country_id', $user->country_id)->orderBy("name", "ASC")->get();
            $props['user_details'] = $user;
            $props['user_details']['region'] = Region::find($user->region_id)->name;
            $props['user_details']['country'] = Country::find($user->country_id)->name;
            $props['user_details']['bio_short'] = Str::limit($user->bio, 150, '...');
            $props['show_more_bio'] = (strlen($user->bio) > 150) ? true : false;
            $props['cover_photo_change_txt_prop'] = (is_null($user->cover_photo)) ? "Add Cover Photo" : "Change Cover Photo";
            $props['cover_photo_prop'] = (is_null($user->cover_photo)) ? "/storage/images/annie-spratt-BcGoZXjyPzA-unsplash.jpg" : "/storage/images/" . $user->cover_photo;
            $props['user_details']['cover_photo'] = (is_null($user->cover_photo)) ? "background-image: url('/storage/images/annie-spratt-BcGoZXjyPzA-unsplash.jpg)" : "background-image: url('/storage/images/" . $user->cover_photo . "')";
            $props['user_details']['profile_picture'] = (is_null($user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $user->profile_picture;

            $props['post'] = $post;


            return Inertia::render('Profile/EditPost', $props);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        $user = Auth::user();
        if($user->id == $post->user_id){
            $response_arr = array("image_errors" => "");

            $request->validate([
                'caption' => ['required', 'min:10', 'max:500'],
                'image' => 'image|mimes:png,jpeg,jpg,gif,webp|max:4000',
            ]);

            if ($request->file('image')) {

                $image = $request->file('image');

                if ($_SERVER['SERVER_NAME'] == "127.0.0.1") {
                    $fileName = time() . '_' . $image->getClientOriginalName();
                    $filePath = $image->storePubliclyAs('/public/images', $fileName);
                    $extension = $image->getClientOriginalExtension();
                    $filePath = str_replace('public', 'storage', $filePath);

                    $file = public_path($filePath);
                } else {
                    $fileName = time() . '_' . $image->getClientOriginalName();
                    $filePath = $image->storeAs('images', $fileName, 'public_uploads');
                    $extension = $image->getClientOriginalExtension();
                    $filePath = str_replace('public', 'storage', $filePath);

                    $file = base_path('storage/' . $filePath);
                }
                if (file_exists($file)) {

                    $old_file_path = public_path() . '/storage/images/' . $post->images;
                    if (file_exists($old_file_path)) {
                        unlink($old_file_path);
                    }

                    $form_array = [
                        
                        'caption' => $request->input('caption'),
                        'images' => $fileName,
                    ];
                } else {
                    $response_arr['image_errors'] = 'We ran into some errors when uploading your file';

                    session()->flash('data', $response_arr);
                    return back()->with('error', 'something went wrong');
                }
            }else{
                $form_array = [
                    
                    'caption' => $request->input('caption'),
                    
                ];
            }


            Post::where('id',$post->id)->update($form_array);
            


            return back()->with('success', 'Post edited successfully');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Post $post)
    {
        if($request->has('source')){
            $source = $request->get('source');

            $response_arr = array('success' => false);
            $post_id = $post->id;
            $logged_in_user = Auth::user();

            if($logged_in_user->id == $post->user_id){
                $post_image = $post->images;
                $file_path = public_path() . '/storage/images/' . $post_image;
                if (file_exists($file_path)) {
                    unlink($file_path);
                }
                Comment::where('post_id', $post_id)->delete();
                $post->delete();
                $response_arr['success'] = true;
            }

            

            session()->flash('data', $response_arr);
            if($source == "post_page"){
                
                return redirect()->route('profile', $logged_in_user->id);
            }else{
                return back()->with('success', 'Post deleted successfully');
            }
            
        }
    }

    public function deleteCmnt(Request $request, Comment $cmnt)
    {
        

        $response_arr = array('success' => false);
        $cmnt_id = $cmnt->id;
        $logged_in_user = Auth::user();

        // return $cmnt->user_id;
        if ($logged_in_user->id == $cmnt->user_id) {

            $cmnt->delete();
            $response_arr['success'] = true;
        }



        session()->flash('data', $response_arr);
            
        return back()->with('success', 'Comment deleted successfully');
            
    }
}
