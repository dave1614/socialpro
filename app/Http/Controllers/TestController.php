<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Faker\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Mockery\Container;
use Illuminate\Support\Str;

use function PHPUnit\Framework\fileExists;
use App\Functions\UsefulFunctions;

class TestController extends Controller
{

    public $useful_functions;

    public function __construct()
    {
        $this->useful_functions = new UsefulFunctions();
    }

    public function index(Request $request){

    }

    public function createDummyPosts(Request $request){
        // $str = "Joeeeeeee Reagannnnnnnnnnnnnnnnnnn";

        // return $this->useful_functions->generateNewUsername($str);

        $faker = Factory::create();
        $posts = [
            [
                
                'images' => 'image_1.jpg',
                
            ],
            [
                
                'images' => 'image_2.jpg',
                
            ],
            [
                
                'images' => 'image_3.jpg',
                
            ],
            [
                
                'images' => 'image_4.jpg',
                
            ],
            [
                
                'images' => 'image_5.jpg',
                
            ],
        ];
        // return $posts;
        // return public_path("storage/images/");
        // File::copy(public_path("/image_1.jpg"), public_path("storage/images/image_1.jpg"));
        $likes = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,102,101";
        for($i = 0; $i < count($posts); $i++){
            $post = $posts[$i];
            
            $all_users = User::where('id','!=','0')->get('id');
            foreach($all_users as $row){
                $user_id = $row->id;

                $image_name = Str::random(30).".jpg";
                $caption = $faker->paragraph();
                File::copy(public_path($post['images']), public_path("storage/images/". $image_name));

                $form_array = [
                    'user_id' => $user_id,
                    'caption' => $caption,
                    'images' => $image_name,
                    'likes' => $likes
                ];

                Post::create($form_array);
            }
        }
    }
}
