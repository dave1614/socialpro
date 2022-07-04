<?php

namespace Database\Seeders;

use App\Models\Destination;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DestinationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Destination::create([
            'name' => 'Athens, Greece',
            'last_flight' => 'Qatar Airways'
        ]);

        Destination::create([
            'name' => 'Los Angeles, USA',
            'last_flight' => '2021-05-21 04:21:32',
            'last_flight' => 'Singapore Airlines'
        ]);

        Destination::create([
            'name' => 'Lagos, Portugal',
            'last_flight' => '2021-05-25 14:51:39',
            'last_flight' => 'ANA All Nippon Airways'
        ]);

        Destination::create([
            'name' => 'Ontario, Canada',
            'last_flight' => '2021-08-04 05:31:23',
            'last_flight' => 'Emirates Airways'
        ]);

        Destination::create([
            'name' => 'Bali, Indonesia',
            'last_flight' => '2022-02-30 19:21:36',
            'last_flight' => 'Japan Airlines'
        ]);

        Destination::create([
            'name' => 'Delta, Nigeria',
            'last_flight' => '2022-03-30 09:41:39',
            'last_flight' => 'Cathay Pacific Airways'
        ]);

        Destination::create([
            'name' => 'Accra, Ghana',
            'last_flight' => '2021-12-30 07:43:45',
            'last_flight' => 'EVA Air'
        ]);

        Destination::create([
            'name' => 'London, England',
            'last_flight' => '2021-02-20 17:42:54',
            'last_flight' => 'Qantas Airways'
        ]);

        Destination::create([
            'name' => 'Helsinki, Finland',
            'last_flight' => '2022-06-21 07:34:36',
            'last_flight' => 'Hainan Airlines'
        ]);

        Destination::create([
            'name' => 'Oslo, Norway',
            'last_flight' => '2022-06-21 07:34:36',
            'last_flight' => 'Air France'
        ]);
    }
}
