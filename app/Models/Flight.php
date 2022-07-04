<?php

namespace App\Models;

use App\Scopes\AncientScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Flight extends Model
{
    use HasFactory, SoftDeletes;

    protected static function booted(){
        static::addGlobalScope(new AncientScope);
    }
}
