<?php

namespace App\Http\Controllers;

use App\Models\Country;
use App\Models\Region;
use App\Rules\FullNameRule;
use App\Rules\PasswordValidationRule;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Rules\CountryRule;
use App\Rules\RegionRule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;

class AuthController extends Controller
{


    public function processResetPassword(Request $request)
    {
        
        $request->validate([
            'token' => ['required'],
            'email' => ['required', 'email'],
            'password' => ['required', 'confirmed', new PasswordValidationRule],
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        return $status === Password::PASSWORD_RESET
            ?  redirect()->route('login')->with('success', __($status))
            : back()->withErrors(['email' => [__($status)]]);

        // if($status === Password::PASSWORD_RESET){
        //     session()->flash('status', __($status));
        //     return  redirect()->route('login');
        // }else{
        //     back()->withErrors(['email' => [__($status)]]);
        // }
    }

    public function handleForgotPassword(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status === Password::RESET_LINK_SENT
            ? back()->with(['status' => __($status)])
            : back()->withErrors(['email' => __($status)]);
    }

    public function forgotPasswordPage(Request $request)
    {
        $props['year'] = date('Y');

        return Inertia::render('Auth/ForgotPassword', $props);
    }

    public function performLogout()
    {
        Session::flush();

        Auth::logout();

        return redirect('login');
    }

    public function loadRegionsForCountry(Request $request)
    {
        $post_data = (Object) $request->input();
        $response_arr = array();
        // return $post_data;
        // return Country::where("id", $post_data->country)->count();
        // $post_data->country = 1;
        if(!isset($post_data->country) || Country::where("id",$post_data->country)->count() < 1){
            return back()->with('error', 'something went wrong');
        }

        $regions = Region::where('country_id',$post_data->country)->orderBy("name","ASC")->get();
        $first_region_id = Region::where('country_id', $post_data->country)->orderBy("name", "ASC")->first()->id;
        $response_arr['regions'] = $regions;
        $response_arr['first_region_id'] = $first_region_id;

        return back()->with('data',$response_arr);


    }

    public function loginPage(Request $request)
    {
        $props['year'] = date('Y');

        return Inertia::render('Auth/Login', $props);
    }


    public function processLogin(Request $request)
    {
        
        $rules = [
            'login' => ['required'],
            'password' => ['required'],
        ];

        $messages = [
            'login.required' => 'The username or email field is required.',
        ];

        //Validate input
        
        $validator = (!$request->wantsJson()) ? $request->validate($rules, $messages) : Validator::make($request->all(),
            $rules,$messages);

        if($request->wantsJson() && $validator->fails()){
            return response()->json($validator->errors());
        }

        //Check if login is email or username
        $login_type = filter_var($request->input('login'), FILTER_VALIDATE_EMAIL)
            ? 'email'
            : 'user_name';
            
        // Store user input in user_data variable
        $user_data = array(
            $login_type  => $request->input('login'),
            'password' => $request->input('password')
        );

        //get the remember_me param
        $remember_me  = ( !empty( $request->remember_me ) )? TRUE : FALSE;
        
        
        // Check if username exists
        $user = User::where($login_type, $user_data[$login_type])->first();

        if(!$user){
            return (!$request->wantsJson()) ? back()->with('error', 'This user does not exist') : response()->json(['error' => 'This user does not exist']);
        }

        // Check if login details are valid. If valid, redirect to admin page
        if (Auth::attempt($user_data)) {
            // $user = User::where([$login_type => $user_data[$login_type]])->first();
            
            $token = (!$request->wantsJson()) ? Auth::login($user, $remember_me) : $user->createToken('my-app-token')->plainTextToken;
            
            return (!$request->wantsJson()) ? redirect()->route('home_page')->with('success','Login Successful') : response()->json(['success' => true,'user' => $user,'token' => $token],201);
        }

        return (!$request->wantsJson()) ? back()->with('error', 'Invalid login details') : response()->json(['error' => 'Invalid login details']);
        
    }

    public function registerPage(Request $request)
    {
        $props['year'] = date('Y');
        $props['countries'] = Country::where('id','!=','0')->orderBy("name", "ASC")->get();
        $props['all_regions'] = Region::where('country_id',1)->orderBy("name", "ASC")->get();
        
        return Inertia::render('Auth/Register',$props);
    }

    

    public function processRegister(Request $request)
    {
        // return $request->input();
        $request->validate([
            'country' => ['required', new CountryRule],
            'region' => ['required', new RegionRule($request->input('country'))],
            'full_name' => ['required','max:60',new FullNameRule],
            'user_name' => ['required','min:5','max:15','alpha_dash','unique:users,user_name'],
            'email' => ['required','min:8','max:40', 'email:rfc,dns,strict,spoof,filter', 'unique:users,email'],
            'password' => ['required','confirmed',new PasswordValidationRule],
        ]);

        $user = User::create([
            'full_name' => $request->input('full_name'),
            'user_name' => $request->input('user_name'),
            'slug' => Str::slug($request->input('user_name')),
            'email' => $request->input('email'),
            'country_id' => $request->input('country'),
            'region_id' => $request->input('region'),
            'password' => Hash::make($request->input('password')),
            'remember_token' => Str::random(10),
            'social_type' => 'default',
        ]);

        event(new Registered($user));

        $user_data = array(
            'email'  => $request->input('email'),
            'password' => $request->input('password')
        );

        if (Auth::attempt($user_data)) {
            return redirect()->route('home_page');
        } else {
            return back()->with('error', 'Wrong Login Details');
        }
    }
}
