<?php

namespace Database\Seeders;

use App\Models\Flight;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FlightSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Flight::create([
            'name' => 'Qatar Airways',
            'destination_id' => 1,
            'arrived_at' => '2021-06-28 02:58:32'
        ]);

        Flight::create([
            'name' => 'Singapore Airlines',
            'destination_id' => 2,
            'arrived_at' => '2021-05-21 04:21:32'
        ]);

        Flight::create([
            'name' => 'ANA All Nippon Airways',
            'destination_id' => 3,
            'arrived_at' => '2021-05-25 14:51:39'
        ]);

        Flight::create([
            'name' => 'Emirates Airways',
            'destination_id' => 4,
            'arrived_at' => '2021-08-04 05:31:23'
        ]);

        Flight::create([
            'name' => 'Japan Airlines',
            'destination_id' => 5,
            'arrived_at' => '2022-04-30 19:21:36'
        ]);

        Flight::create([
            'name' => 'Cathay Pacific Airways',
            'destination_id' => 6,
            'arrived_at' => '2022-03-30 09:41:39'
        ]);

        Flight::create([
            'name' => 'EVA Air',
            'destination_id' => 7,
            'arrived_at' => '2021-12-30 07:43:45'
        ]);

        Flight::create([
            'name' => 'Qantas Airways',
            'destination_id' => 8,
            'arrived_at' => '2021-02-20 17:42:54'
        ]);

        Flight::create([
            'name' => 'Hainan Airlines',
            'destination_id' => 9,
            'arrived_at' => '2022-06-21 07:34:36'
        ]);

        Flight::create([
            'name' => 'Air France',
            'destination_id' => 10,
            'arrived_at' => '2022-09-11 11:44:49'
        ]);

    }
}
