<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\TestPostController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
class Service
{
    //
}

Route::get('/test', function (Service $service) {
    die(get_class($service));
});
Route::get('/random_stuvs',[TestPostController::class,'randomStuvs']);
Route::get('post/{id}/{attribute}',[TestPostController::class, 'showAttribute']);
Route::get('/post/{id}', [TestPostController::class, 'show']);
Route::get('/get_user/{id}', [UserController::class, 'show']);
Route::get('/create_dummy_posts', [TestController::class, 'createDummyPosts']);
Route::get('/get_first_three_users', function(Request $request): JsonResponse{
    $users = User::where('id','<=', 3)->get();
    return response()->json([
        'meta' => [
            'stat' => 'hddt64674787',
            'hdd_type' => 'yete',
            'faca' => true
        ],
        'users' => $users,
    ]);
});
Route::post('/login', [AuthController::class, 'processLogin']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
    
});

Route::group(['middleware' => 'auth:sanctum'],function(){
    Route::post('/upload_profile_picture', [ProfileController::class, 'uploadProfilePicture']);
});


