<?php
namespace App\Repositories;

use App\Interfaces\PostRepositoryInterface;
use App\Models\Post;

class PostRepository implements PostRepositoryInterface {

    public function getPost($id)
    {
        return Post::find($id);
    }

    public function getPostCaption($id): String{
        return Post::find($id)->caption;
    }

    public function getPostAttributeVal($id, $attribute){
        return Post::find($id)->$attribute;
    }
}