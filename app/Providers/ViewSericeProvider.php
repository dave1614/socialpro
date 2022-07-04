<?php

namespace App\Providers;

use App\Models\User;
use App\View\Composers\ProfileComposer;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewSericeProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        View::composer('profile',ProfileComposer::class);
        // View::composer('profile',function ($view){
        //     $view->with('user', User::find(rand(1, 100)));
        // });
    }
}
