<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Testing\Fluent\AssertableJson;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_the_application_returns_a_successful_response()
    {
        $id = 1;
        $user_name = "dave1614";
        $email = "ikechukwunwogo@gmail.com";
        $full_name = 'David Nwogo';
        // $response = $this->withHeaders([
        //     'Accept' => 'application/json'
        // ])->postJson('/api/login',[
        //     'login' => $user_name,
        //     'password' => 'Dave1614..'
        // ]);

        // // $response->dump();
        // $response->assertStatus(201);
        
        // $response->assertJson(fn (AssertableJson $json) =>
        //     // $json->where("user.id", $id)
        //     //     ->where("user.email", $email)
        //     //     ->where("user.user_name",$user_name)
        //     //     ->missing("error")
        //     //     ->etc()
        //     $json->hasAll(["success","user.id"])
        //     ->missing("error")
        //         ->etc()
        // );

        // $user = User::find(103);

        // $response = $this->actingAs($user,"web")
        //                 // ->withSession(['banned' => false])
        //                 ->get('/edit_profile');
        // $response = $this->get('/edit_profile');
        // $response->assertStatus(200);
        
        // $response = $this->get('/api/get_first_three_users');
        // $response->assertJson(fn(AssertableJson $json) => 
        //     $json->has('meta')
        //         ->whereType('meta','array')
        //         ->has('users',3)
        //         ->has('users.0',fn($user) => 
        //             $user->where('id',$id)
        //                 ->whereType('id','integer')
        //                 ->where('full_name',$full_name)
        //                 ->where('user_name',$user_name)
        //                 ->where('email',$email)
        //                 ->missing('password')
        //                 ->etc()
        //         )
        // );
        // Storage::fake('avatars');
        // $file = UploadedFile::fake()->image('avatar.jpg',300,300)->size(100);

        // $response = $this->withHeaders([
        //         'Authorization' => 'Bearer 36|BqqPY6GiLpaLz5UnTPK8FnpuYXi5TNPdQCmGI73I',
        //         'Accept' => 'application/json',
        //     ])->post('/api/upload_profile_picture',[
        //         'image' => $file,
        //     ]);
        
        // Storage::disk('avatars')->assertExists($file->hashName());

        $view = $this->view('welcome',['param' => 'test']);
        $view->assertSee('items');
    }
}
