<?php
namespace App\Interfaces;

interface PostRepositoryInterface{
    public function getPost($id);

    public function getPostCaption($id): String ;

    public function getPostAttributeVal($id,$attribute);
}