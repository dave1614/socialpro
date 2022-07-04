<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PublicController extends Controller
{
    

    public function homePage(Request $request)
    {

        $logged_in_user = Auth::user();


        $props = ['page_post' => []];

        $props['year'] = date("Y");

        $props['is_logged_in'] = false;
        $props['is_logged_in_users_page'] = false;
        $props['logged_in_users_details'] = (object) [];

        $props['is_logged_in'] = true;
        $props['logged_in_users_details'] = $logged_in_user;

        $props['logged_in_users_details']['profile_picture'] = (is_null($logged_in_user->profile_picture)) ? "/storage/images/avatar.jpg" : "/storage/images/" . $logged_in_user->profile_picture;



        return Inertia::render('HomePage', $props);
    }
}
