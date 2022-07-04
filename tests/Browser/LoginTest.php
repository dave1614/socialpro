<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */

    use DatabaseMigrations;

    public function testExample()
    {
        $user = User::find(101);

        // $this->browse(function($browser) use ($user) {
        //     $browser->visit('/login')
        //         ->type('login',"ikechukwunwogo@gmail.com")
        //         ->type('password','Dave1614..')
        //         ->press('SIGN IN')
        //         ->assertPathIs('/');
        // });

        $this->browse(function($browser) {
            $browser->loginAs(User::find(101))
                ->visit('/')
                ->assertPathIs('/');
        });
    }
}
