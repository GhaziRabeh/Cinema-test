<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShowTv extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',           
        'description',     
        'rate',            
        'image', 
        'category_id'  
    ];
    public function category(){
        return $this->belongsTo(Category::class , 'category_id' , 'id');
    }
}
