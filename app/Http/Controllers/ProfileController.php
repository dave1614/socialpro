<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\Region;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ProfileController extends Controller
{
    

    public function index(Request $request)
    {
        $props['details'] = Auth::user();
        return Inertia::render('Admin/Dashboard',$props);
    }

    public function changeYourPasswordPage(Request $request){

    }

    public function viewUsersFollowerListSubsequent(Request $request, User $user)
    {
        $response_arr = array('success' => false, "followers_users" => [], 'last_row' => false);

        if ($request->has('last_id')) {
            $last_id = $request->get('last_id');
            $logged_in_user = Auth::user();
            $other_follower_arr = (!is_null($user->followers)) ? explode(",", $user->followers) : [];
            $follower_num = count($other_follower_arr);
            if ($follower_num > 0) {
                if (in_array($last_id, $other_follower_arr)) {
                    $response_arr['success'] = true;
                    $index = array_search($last_id, $other_follower_arr);
                    // return $index;
                    $other_follower_arr = array_slice($other_follower_arr, $index + 1, 10);
                    for ($i = 0; $i < count($other_follower_arr); $i++) {
                        $following_status = false;
                        $follower_user_id = $other_follower_arr[$i];
                        $follower_user = User::find($follower_user_id);

                        $follower_followers_arr = (!is_null($follower_user->followers)) ? explode(",", $follower_user->followers) : [];
                        $follower_user->profile_picture = (is_null($follower_user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $follower_user->profile_picture;

                        //Check if you are following this user

                        if (in_array($logged_in_user->id, $follower_followers_arr)) {
                            $following_status = true;
                        }

                        if ($logged_in_user->id == $follower_user_id) {
                            $following_status = null;
                        }

                        // return $following_num - 1;
                        // return $index + $i;
                        if (($follower_num - 1) == ($index + 1 + $i)) {
                            $response_arr['last_row'] = true;
                        }

                        $obj = [
                            'user_details' => [
                                // 'index' => $i,
                                'id' => $follower_user_id,
                                'user_name' => $follower_user->user_name,
                                'full_name' => $follower_user->full_name,
                                'slug' => $follower_user->slug,
                                'profile_picture' => $follower_user->profile_picture,
                            ],
                            'following_status' => $following_status,
                        ];


                        $response_arr['followers_users'][] = $obj;
                    }
                }
            }
        }

        session()->flash('data', $response_arr);
        return back()->with('success', 'More Followers fetched successfully');
    }

    public function viewUsersFollowersList(Request $req, User $user)
    {
        $response_arr = array("followers_users" => []);


        $logged_in_user = Auth::user();
        $other_followers_arr = (!is_null($user->followers)) ? explode(",", $user->followers) : [];

        if (count($other_followers_arr) > 0) {
            $other_followers_arr = array_slice($other_followers_arr, 0, 10);
            for ($i = 0; $i < count($other_followers_arr); $i++) {
                $following_status = false;
                $follower_user_id = $other_followers_arr[$i];
                $follower_user = User::find($follower_user_id);

                $follower_followers_arr = (!is_null($follower_user->followers)) ? explode(",", $follower_user->followers) : [];
                $follower_user->profile_picture = (is_null($follower_user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $follower_user->profile_picture;

                //Check if you are following this user

                if (in_array($logged_in_user->id, $follower_followers_arr)) {
                    $following_status = true;
                }

                if ($logged_in_user->id == $follower_user_id) {
                    $following_status = null;
                }

                $obj = [
                    'user_details' => [
                        'id' => $follower_user_id,
                        'user_name' => $follower_user->user_name,
                        'full_name' => $follower_user->full_name,
                        'slug' => $follower_user->slug,
                        'profile_picture' => $follower_user->profile_picture,
                    ],
                    'following_status' => $following_status,
                ];

                $response_arr['followers_users'][] = $obj;
            }
        }

        session()->flash('data', $response_arr);
        return back()->with('success', 'Follower list fetched successfully');
    }

    public function viewUsersFollowingListSubsequent(Request $request, User $user){
        $response_arr = array('success' => false, "following_users" => [],'last_row' => false);

        if($request->has('last_id')){
            $last_id = $request->get('last_id');
            $logged_in_user = Auth::user();
            $other_following_arr = (!is_null($user->following)) ? explode(",", $user->following) : [];
            $following_num = count($other_following_arr);
            if ($following_num > 0) {
                if(in_array($last_id, $other_following_arr)){
                    $response_arr['success'] = true;
                    $index = array_search($last_id, $other_following_arr);
                    // return $index;
                    $other_following_arr = array_slice($other_following_arr, $index + 1, 10);
                    for ($i = 0; $i < count($other_following_arr); $i++) {
                        $following_status = false;
                        $following_user_id = $other_following_arr[$i];
                        $following_user = User::find($following_user_id);

                        $following_followers_arr = (!is_null($following_user->followers)) ? explode(",", $following_user->followers) : [];
                        $following_user->profile_picture = (is_null($following_user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $following_user->profile_picture;

                        //Check if you are following this user

                        if (in_array($logged_in_user->id, $following_followers_arr)) {
                            $following_status = true;
                        }

                        if ($logged_in_user->id == $following_user_id) {
                            $following_status = null;
                        }

                        // return $following_num - 1;
                        // return $index + $i;
                        if(($following_num - 1) == ($index + 1 + $i)){
                            $response_arr['last_row'] = true;
                        }

                        $obj = [
                            'user_details' => [
                                // 'index' => $i,
                                'id' => $following_user_id,
                                'user_name' => $following_user->user_name,
                                'full_name' => $following_user->full_name,
                                'slug' => $following_user->slug,
                                'profile_picture' => $following_user->profile_picture,
                            ],
                            'following_status' => $following_status,
                        ];
                        

                        $response_arr['following_users'][] = $obj;
                    }
                }
            }
        }

        session()->flash('data', $response_arr);
        return back()->with('success', 'More Following fetched successfully');

    }

    public function viewUsersFollowingList(Request $req, User $user)
    {
        $response_arr = array("following_users" => []);
       

        $logged_in_user = Auth::user();
        $other_following_arr = (!is_null($user->following)) ? explode(",", $user->following) : [];

        if(count($other_following_arr) > 0){
            $other_following_arr = array_slice($other_following_arr,0,10);
            for($i = 0; $i < count($other_following_arr); $i++){
                $following_status = false;
                $following_user_id = $other_following_arr[$i];
                $following_user = User::find($following_user_id);

                $following_followers_arr = (!is_null($following_user->followers)) ? explode(",", $following_user->followers) : [];
                $following_user->profile_picture = (is_null($following_user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $following_user->profile_picture;

                //Check if you are following this user
                
                if (in_array($logged_in_user->id, $following_followers_arr)) {
                    $following_status = true;
                }

                if($logged_in_user->id == $following_user_id){
                    $following_status = null;
                }

                $obj = [
                    'user_details' => [
                        'id' => $following_user_id,
                        'user_name' => $following_user->user_name,
                        'full_name' => $following_user->full_name,
                        'slug' => $following_user->slug,
                        'profile_picture' => $following_user->profile_picture,
                    ],
                    'following_status' => $following_status,
                ];

                $response_arr['following_users'][] = $obj;
            }
        }

        session()->flash('data', $response_arr);
        return back()->with('success', 'Following list fetched successfully');

    }

    public function toggleFollowUser(Request $req, User $user)
    {
        // $user = [];
        // $all_users = User::all();
        // foreach($all_users as $user){
            
        // return $user;

        $logged_in_user = Auth::user();
        //Confirm you do not want to follow yourself
        if($user->id != $logged_in_user->id){
            

            $your_following_arr = (!is_null($logged_in_user->following)) ? explode(",", $logged_in_user->following) : [];
            $your_followers_arr = explode(",", $logged_in_user->followers);
            $other_following_arr = explode(",", $user->following);
            $other_followers_arr = (!is_null($user->followers)) ? explode(",", $user->followers) : [];
            //Check if you are following this user
            // return $other_following_arr;
            if (in_array($logged_in_user->id, $other_followers_arr) && in_array($user->id, $your_following_arr)) {
                //Then unfollow him  
                
                if (($key = array_search($logged_in_user->id, $other_followers_arr)) !== false) {
                    
                     unset($other_followers_arr[$key]);
                }

                if (($key = array_search($user->id, $your_following_arr)) !== false) {
                    unset($your_following_arr[$key]);
                }

                $other_followers_str = implode(",", $other_followers_arr);
                $your_following_str = implode(",", $your_following_arr);

                $user->followers = $other_followers_str;
                $user->save();

                $logged_in_user = User::find($logged_in_user->id);

                $logged_in_user->following = $your_following_str;
                $logged_in_user->save();

                

                return back()->with('success', 'Unfollowed Successfully');
            }else{
                //Then follow him  
                
                array_push($other_followers_arr, $logged_in_user->id);
                array_push($your_following_arr, $user->id);
                

                $other_followers_str = implode(",", $other_followers_arr);
                $your_following_str = implode(",", $your_following_arr);

                $user->followers = $other_followers_str;
                $user->save();

                $logged_in_user = User::find($logged_in_user->id);

                $logged_in_user->following = $your_following_str;
                $logged_in_user->save();



                return back()->with('success', 'Followed Successfully');
            }
            
        }
    // }
    }

    public function uploadProfilePicture(Request $request)
    {
        // return $request->getHttpHost();
        $post_data = (object) $request->input();
        // return json_encode($post_data);

        $user = Auth::user();
        $user_id = $user->id;

        $response_arr = array("errors" => "");
        $rules = [
            'image' => 'required|image|mimes:png,jpeg,jpg,gif,webp|max:4000|dimensions:min_width=100,min_height=100,max_width=800,max_height=800',
        ];
        $messages = [
            'image.dimensions' => "Dimensions must be between 100 x 100 and 500 x 500",
        ];
        if(!$request->wantsJson()){
            $request->validate($rules, $messages);
        }else{
            $validator = Validator::make($request->all(),$rules,$messages);
            if($validator->fails()){
                return response()->json($validator->errors());
            }
        }

        if ($request->file('image')) {

            $image = $request->file('image');

            // if (isset($_SERVER['SERVER_NAME']) && $_SERVER['SERVER_NAME'] == "127.0.0.1") {
            if($request->getHttpHost() == "127.0.0.1:9000" || $request->getHttpHost() == "localhost" ){
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

                if (!is_null($user->profile_picture)) {
                    $file_path = public_path() . '/storage/images/' . $user->profile_picture;
                    if (file_exists($file_path)) {
                        unlink($file_path);
                    }
                }

                $form_array = array(
                    'profile_picture' => $fileName,
                );
                User::where('id', $user_id)->update($form_array);
                return (!$request->wantsJson()) ? back()->with('success', 'Profile picture changed successfully')
                    : response()->json(['success' => true,'message' => 'Profile picture changed successfully']);
            } else {
                $response_arr['image_errors'] = 'We ran into some errors when uploading your file';
                if($request->wantsJson()){
                    session()->flash('data', $response_arr);
                    return back()->with('error', 'something went wrong');
                }else{
                    return response()->json(['success' => false,'data' => $response_arr]);
                }
                
                
            }
        }
    }

    public function uploadCoverPhoto(Request $request){
        $post_data = (object) $request->input();
        // return json_encode($post_data);

        $user = Auth::user();
        $user_id = $user->id;

        $response_arr = array("errors" => "");
        $messages = [
            'image.dimensions' => "Cover photo must be at least 600 by 250 px's",
        ];

        $request->validate([
            'image' => 'required|image|mimes:png,jpeg,jpg,gif,webp|max:4000|dimensions:min_width=600,min_height=250',
        ], $messages);

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

                if(!is_null($user->cover_photo)){
                    $file_path = public_path() . '/storage/images/' . $user->cover_photo;
                    if (file_exists($file_path)) {
                        unlink($file_path);
                    }
                }

                $form_array = array(
                    'cover_photo' => $fileName,
                );
                User::where('id',$user_id)->update($form_array);
                return back()->with('success', 'Cover photo changed successfully');
            } else {
                $response_arr['image_errors'] = 'We ran into some errors when uploading your file';

                session()->flash('data', $response_arr);
                return back()->with('error', 'something went wrong');
            }
        }
            
        
    }

    public function profilePage(Request $request,User $user){
        
        $logged_in_user = Auth::user();
        $props['user_details'] = $user;
        $props['user_details']['region'] = Region::find($user->region_id)->name;
        $props['user_details']['country'] = Country::find($user->country_id)->name;
        $props['user_details']['bio_short'] = Str::limit($user->bio, 150, '...');
        $props['show_more_bio'] = (strlen($user->bio) > 150) ? true: false;
        $props['cover_photo_change_txt_prop'] = (is_null($user->cover_photo)) ? "Add Cover Photo" : "Change Cover Photo";
        $props['cover_photo_prop'] = (is_null($user->cover_photo)) ? "/storage/images/annie-spratt-BcGoZXjyPzA-unsplash.jpg" : "/storage/images/" . $user->cover_photo;
        $props['user_details']['cover_photo'] = (is_null($user->cover_photo)) ? "background-image: url('/storage/images/annie-spratt-BcGoZXjyPzA-unsplash.jpg')" : "background-image: url('/storage/images/" . $user->cover_photo . "')";
        $props['user_details']['profile_picture'] = (is_null($user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $user->profile_picture;
        $props['user_details']['followers_num'] = (is_null($user->followers)) ? 0 : count(explode(",", $user->followers));
        $props['user_details']['following_num'] = (is_null($user->following)) ? 0 : count(explode(",", $user->following));
        


        // return $props['profile_picture'];
        
        $props['is_logged_in'] = false;
        $props['is_logged_in_users_page'] = false;
        $props['logged_in_users_details'] = (Object) [];
        if(Auth::check()){
            $props['is_logged_in'] = true;
            $props['logged_in_users_details'] = Auth::user();

            $props['logged_in_users_details']['profile_picture'] = (is_null($logged_in_user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $logged_in_user->profile_picture;

            $props['prop_following_this_user'] = false;
            if(Auth::user()->id == $user->id){
                $props['is_logged_in_users_page'] = true;
                
            }else{
                if(!is_null($logged_in_user->following)){
                    $following_arr = explode(",", $logged_in_user->following);
                    $followers_arr = explode(",", $user->followers);
                    if(in_array($user->id, $following_arr) && in_array($logged_in_user->id, $followers_arr)){
                        $props['prop_following_this_user'] = true;
                    }
                }
                
            }
        }
        return Inertia::render('Profile/Profile',$props);
    }
}
