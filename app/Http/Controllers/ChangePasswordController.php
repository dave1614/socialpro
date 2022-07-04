<?php

namespace App\Http\Controllers;

use App\Rules\FullNameRule;
use App\Rules\PasswordValidationRule;
use App\Models\Country;
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

class ChangePasswordController extends Controller
{
    public function index(Request $request)
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




        return Inertia::render('Profile/ChangePassword', $props);
    }

    public function store(Request $request)
    {
        $request->validate([
            'current_password' => ['required', new MatchOldPassword],
            'new_password' => ['required', new PasswordValidationRule],
            'new_confirm_password' => ['same:new_password'],
        ]);

        User::find(auth()->user()->id)->update(['password' => Hash::make($request->new_password)]);

        return back()->with('success','Password Changed Successfully.');
    }
}
