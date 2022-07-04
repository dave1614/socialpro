<?php

namespace App\Http\Controllers;

use App\Interfaces\PostRepositoryInterface;
use App\Models\Car;
use App\Models\Destination;
use App\Models\Flight;
use App\Models\Mechanic;
use App\Models\Phone;
use App\Models\Post;
use App\Models\Role;
use App\Models\RoleUser;
use App\Models\User;
use App\Scopes\AncientScope;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TestPostController extends Controller
{
    
    protected PostRepositoryInterface $posts;

    public function __construct(PostRepositoryInterface $posts)
    {
        $this->posts = $posts;
    }

    public function show($id): JsonResponse{
        $post = $this->posts->getPost($id);
        return response()->json([
            'post' =>  $post,
        ]);
    }

    public function showAttribute($id,$attribute): JsonResponse
    {
        $attribute_val = $this->posts->getPostAttributeVal($id,$attribute);
        return response()->json([
            $attribute =>  $attribute_val,
        ]);
    }

    public function randomStuvs(){
        // return Destination::addSelect([
        //     'last_flight' => Flight::select('name')
        //     ->whereColumn('destination_id', 'destinations.id')
        //     ->orderByDesc('arrived_at')
        //     ->limit(1)
        // ])->get();

        // return Destination::orderByDesc(
        //     Flight::select('arrived_at')
        //     ->whereColumn('destination_id', 'destinations.id')
        //     ->orderByDesc('arrived_at')
        //     ->limit(1)
        // )->get();

        // $flight = Flight::withTrashed()->where('id',10)->restore();
        
        // // $flight->delete();

        // return $flight;

        // $flight = Flight::find(10);
        // return Flight::all();
        // return Flight::withoutGlobalScopes()->get();
        // $flight1 = Flight::find(1);
        // $flight2 = Flight::find(2);

        // return ($flight1->is($flight2)) ? "Flight 1 and 2 are the same" : "Flight 1 and 2 are different";

        // return User::find(3)->phone()->get();
        // return Phone::find(5)->user;
        // return User::find(6)->posts()->where('id', 306)->get();
        // return Post::find(100)->user;
        // return Post::where('user_id',67)->get();
        // $users = User::find(67);
        // return Post::whereBelongsTo($users)->get();

        // return User::find(2)->latestPost;
        // $car = new Car();
        // $car->model = "Nissan Pathfinder";
        // $car->mechanic_id = 5;
        // $car->save();

        // return Mechanic::find(8)->carOwner()->get();
        // return User::find(23)->roles()->get();
        // return Role::find(4)->users()->select('full_name','user_name')->get();
        return User::find(34)->roles;
        
        
    }
}
