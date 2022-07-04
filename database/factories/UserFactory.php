<?php

namespace Database\Factories;

use App\Models\Country;
use App\Models\Region;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $user_name = $this->faker->userName();
        // $country_id = Country::factory();
        return [
            'full_name' => $this->faker->name(),
            'user_name' => $user_name,
            'slug' => Str::slug($user_name),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'country_id' => 230,
            // 'region_id' => Region::find($country_id)->factory(),
            'region_id' => 3617,
            'address' => $this->faker->paragraph(),
            'bio' => $this->faker->paragraph(),
            'password' => Hash::make($user_name),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
