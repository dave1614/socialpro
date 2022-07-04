<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Casts\Attribute;


class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'full_name',
        'user_name',
        'slug',
        'email',
        'country_id',
        'region_id',
        'address',
        'bio',
        'profile_picture',
        'cover_photo',
        'password',
        'remember_token',
        'social_id',
        'social_type'
        
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected function following(): Attribute
    {
        return Attribute::make(
            // get: fn ($value) => (is_null($value)) ? "" : $value,
            set: fn ($value) => ($value == "") ? null : $value,
        );
    }

    protected function followers(): Attribute
    {
        return Attribute::make(
            // get: fn ($value) => (is_null($value)) ? "" : $value,
            set: fn ($value) => ($value == "") ? null : $value,
        );
    }

    protected function address(): Attribute {
        return Attribute::make(
            get: fn ($value) => (is_null($value)) ? "" : $value,
            set: fn ($value) => ($value == "") ? null : $value,
        );
    }

    public function phone(){
        return $this->hasOne(Phone::class);
    }

    public function posts(){
        return $this->hasMany(Post::class);
    }

    public function latestPost(){
        return $this->hasOne(Post::class)->latestOfMany();
    }

    public function roles(){
        return $this->belongsToMany(Role::class)->withTimestamps();
    }
}
