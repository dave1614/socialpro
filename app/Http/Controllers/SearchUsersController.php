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

class SearchUsersController extends Controller
{
    public function index(Request $request){
        $logged_in_user = Auth::user();


        $props = ['page_post' => []];

        $props['is_logged_in'] = false;
        $props['is_logged_in_users_page'] = false;
        $props['logged_in_users_details'] = (object) [];

        $props['is_logged_in'] = true;
        $props['logged_in_users_details'] = $logged_in_user;

        $props['logged_in_users_details']['profile_picture'] = (is_null($logged_in_user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $logged_in_user->profile_picture;



        return Inertia::render('Admin/SearchUsersPage', $props);
    }

    
    public function searchUsers(Request $request)
    {
        $response_arr = array('success' => false, "search_results" => []);

        if ($request->has('s') && $request->has('limit')) {
            $query = $request->get('s');
            $limit = $request->get('limit');
            $response_arr['success'] = true;
            if(!is_null($query) && $query != ""){
                
                
                
                $search_results = User::where('user_name', 'like',"%" . $query . '%')->orWhere('full_name', 'like', "%" . $query . '%')->limit($limit)->select("user_name", "full_name", "profile_picture","slug","id")->get();

                if ($search_results->count() > 0) {
                    foreach($search_results as $row){
                        $row->profile_picture = (is_null($row->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $row->profile_picture;
                    }
                    $response_arr['search_results'] = $search_results;
                }
            }
        }

        // return $response_arr;

        session()->flash('data', $response_arr);
        return back()->with('success', 'Search results returned successfully');
    }
}
