<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create([
            'name' => 'receptionist',
        ]);

        Role::create([
            'name' => 'lab scientist',
        ]);

        Role::create([
            'name' => 'phlebotomist',
        ]);

        Role::create([
            'name' => 'pathologist',
        ]);
    }
}
