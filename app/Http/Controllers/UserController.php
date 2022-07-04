<?php

namespace App\Http\Controllers;

use App\Interfaces\UserInterface;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class UserController extends Controller
{
    

    protected UserInterface $users;

    public function __construct(UserInterface $users)
    {
        $this->users = $users;
    }

    public function show($id){
        $user = $this->users->getUser($id);
        return $user;
    }
}
