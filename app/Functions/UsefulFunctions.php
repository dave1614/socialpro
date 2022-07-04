<?php

namespace App\Functions;

use App\Models\User;
use DateTime;
use Illuminate\Support\Str;

class UsefulFunctions 
{

    public function generateRandNum($min,$max,$except = []){
        $num = rand($min,$max);
        if(in_array($num,$except)){
            return $this->generateRandNum($min,$max, $except);
        }else{
            return $num;
        }
    }

    public function generateNewUsername($full_name)
    {
        $str = preg_replace('/[^\p{L}\p{N}\s]/u', '', $full_name);
        $str = str_replace(' ', '_', $str);
        $str = (Str::length($str) > 20) ? substr($str, 0, 20) : $str;
        $str .= rand(1,9);

        $query = User::where('user_name', $str)->first();
        if($query->count() > 0){
            return $this->generateNewUsername($full_name);
        }else{
            return strtolower($str);
        }
        
    }

    public function getSocialMediaTime($post_date, $post_time)
    {
        $social_formated_time = "";
        if ($post_date !== "" && $post_time !== "") {
            $post_date = strtotime($post_date);
            $post_date = date("j M Y", $post_date);
            $post_time = strtotime($post_time);
            $post_time = date("H:i:s", $post_time);

            $post_date1 = $post_date;
            $post_time1 = $post_time;

            $curr_date = date("j M Y");
            $curr_time = date("h:i:sa");
            $curr_date = date("j M Y", strtotime($curr_date));
            $curr_time = date("H:i:s", strtotime($curr_time));

            $curr_date = $curr_date . " " . $curr_time;
            // echo $curr_date;
            $curr_date = new DateTime($curr_date);
            $post_date = $post_date . " " . $post_time;
            $post_date = new DateTime($post_date);

            $time_diff = $curr_date->getTimestamp() - $post_date->getTimestamp();
            // echo $time_diff;
            if ($time_diff >= 0) {
                //First Check If Time Is Greater Equal
                if ($time_diff == 0) {
                    $social_formated_time = "Just Now";
                } else if ($time_diff <= 60) {
                    $social_formated_time = $time_diff . " secs ago";
                } else if (($time_diff > 60) && ($time_diff < 3600)) {
                    $social_formated_time = floor($time_diff / 60);
                    $social_formated_time = $social_formated_time . " mins ago";
                } else if (($time_diff >= 3600) && ($time_diff < 86400)) {
                    $social_formated_time = floor($time_diff / 3600);
                    if ($social_formated_time == 1) {
                        $social_formated_time = $social_formated_time . " hour ago";
                    } else {
                        $social_formated_time = $social_formated_time . " hours ago";
                    }
                } else if (($time_diff >= 86400) && ($time_diff < 2628000)) {
                    $social_formated_time = floor($time_diff / 86400);
                    if ($social_formated_time == 1) {
                        $social_formated_time = $social_formated_time . " day ago";
                    } else {
                        $social_formated_time = $social_formated_time . " days ago";
                    }
                } else if (($time_diff >= 2628000) && (date("Y") == date("Y", strtotime($post_date1)))) {
                    $social_formated_time = date("j M", strtotime($post_date1));
                } else if ((date("Y") !== date("Y", strtotime($post_date1)))) {
                    $social_formated_time = date("j M Y", strtotime($post_date1));
                }
            }
        }
        return $social_formated_time;
    }
}


