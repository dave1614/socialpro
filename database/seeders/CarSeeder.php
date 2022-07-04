<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\Mechanic;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $mechanics = Mechanic::all();
        foreach($mechanics as $mechanic){
            $faker = (new \Faker\Factory())::create();
            $faker->addProvider(new \Faker\Provider\Fakecar($faker));
           
            Car::create([
                'model' => $faker->vehicle,
                'mechanic_id' => $mechanic->id,
            ]);
        }
    }
}
