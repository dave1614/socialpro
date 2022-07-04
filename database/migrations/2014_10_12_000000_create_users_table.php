<?php

use App\Models\City;
use App\Models\Country;
use App\Models\Region;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('user_name')->unique();
            $table->string('slug')->unique();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->foreignIdFor(Country::class)->constrained()->onDelete('cascade')->nullable();
            $table->foreignIdFor(Region::class)->constrained()->onDelete('cascade')->nullable();
            // $table->foreignIdFor(City::class)->constrained()->onDelete('cascade')->nullable();
            $table->text('address')->nullable();
            $table->text('bio')->nullable();
            $table->text('followers')->nullable();
            $table->text('following')->nullable();
            $table->text('profile_picture')->nullable();
            $table->text('cover_photo')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
