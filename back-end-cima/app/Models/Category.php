<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description'];
    public function movies(){
        return $this->hasMany(Movies::class , 'category_id' , 'id');
    }
    
    public function showTv(){
        return $this->hasMany(ShowTv::class , 'category_id' , 'id');
    }

}
