<?php

namespace Database\Seeders;

use App\Models\Phone;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory;

class PhoneSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::all();
        $faker = Factory::create();
        foreach($users as $user){
            Phone::create([
                'user_id' => $user->id,
                'number' => $faker->numerify('##########'),
                
            ]);
        }
    }
}
