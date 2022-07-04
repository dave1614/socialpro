<?php
namespace App\Repositories;

use App\Interfaces\UserInterface;
use App\Models\User;

class UserRepository implements UserInterface{

    public function getUser($id){
        return User::find($id);
    }
}