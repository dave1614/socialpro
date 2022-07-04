<?php

namespace Database\Seeders;

use App\Functions\UsefulFunctions;
use App\Models\RoleUser;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleUserSeeder extends Seeder
{

    public UsefulFunctions $useful_functions;

    public function __construct()
    {
        $this->useful_functions = new UsefulFunctions();
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $users = User::all();
        foreach($users as $user){

            $first_role = rand(1, 4);
            
            RoleUser::create([
                'user_id' => $user->id,
                'role_id' => $first_role,
            ]);

            RoleUser::create([
                'user_id' => $user->id,
                'role_id' => $this->useful_functions->generateRandNum(1, 4, [0 => $first_role]),
            ]);
        }
    }
}
