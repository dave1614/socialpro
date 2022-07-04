<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;


use Exception;
use Inertia\Inertia;
use App\Models\User;
use App\Rules\CountryRule;
use App\Rules\RegionRule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Functions\UsefulFunctions;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class GoogleSocialiteController extends Controller
{

    public $useful_functions;

    public function __construct()
    {
        $this->useful_functions = new UsefulFunctions();
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function handleCallback()
    {
        try {

            $user = Socialite::driver('google')->user();

            $finduser = User::where('social_id', $user->id)->orWhere('email', $user->email)->first();

            if ($finduser) {

                Auth::login($finduser);

                
                return redirect()->route('home_page')->with('success', 'Login Successful');
            } else {
                $user_name = $this->useful_functions->generateNewUsername($user->name);
                $newUser = User::create([
                    'full_name' => $user->name,
                    'user_name' => $user_name,
                    'slug' => Str::slug($user_name),
                    'email' => $user->email,
                    'country_id' => 230,
                    'region_id' => 3617,
                    'social_id' => $user->id,
                    'social_type' => 'google',
                    'password' => Hash::make(Str::random(10)),
                    'remember_token' => Str::random(10),
                ]);

                Auth::login($newUser);

                return redirect()->route('home_page')->with('success', 'Login Successful');
            }
        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}
