<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\Owner;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OwnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $cars = Car::all();
        foreach($cars as $car){
            $faker = (new \Faker\Factory())::create();
            Owner::create([
                'name' => $faker->name(),
                'car_id' => $car->id
            ]);
        }
    }
}
