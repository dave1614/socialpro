<?php
namespace App\View\Composers;

use App\Models\User;
use Illuminate\View\View;

class ProfileComposer{

    protected $users;

    public function __construct()
    {
        $this->users = User::where('id','<=',20)->get();

        // User::chunk(20,function($users){
        //     // dd($users);
        //     $this->users = $users;
        //     // dd($this->users);
        // });
        
    }

    public function compose(View $view)
    {
        $view->with('users',$this->users);
    }
}