<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Movie;
use App\Models\Movies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MoviesController extends Controller
{
    //
    public function index(){
        $movies = Movies::all();
        
        $categories = Category::all();
        
        
        
        return response()->json([
            'movies' => $movies,
            
            'categories'=>$categories,
            
        ]);
    }
    public function store(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'rate' => 'required|numeric|min:0|max:10',
            'category_id' => 'required|exists:categories,id', 
            'image' => 'required|image|mimes:jpg,png,jpeg,gif|max:2048',
            
        ]);
    
        $movie = new Movies();
        $movie->name = $request->name;
        $movie->category_id = $request->category_id;
        $movie->description = $request->description;
        $movie->rate = $request->rate;
    
       
            // Handle image upload
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
                $destinationPath = public_path('uploads_movies');
                
                if ($image->move($destinationPath, $imageName)) {
                    $movie->image = $imageName;
                    Log::info('Image successfully uploaded: ' . $destinationPath . '/' . $imageName);
                } else {
                    Log::error('Failed to move uploaded image.');
                    return response()->json(['error' => 'Failed to upload image'], 500);
                }
            }
            
            // Save movie
            if ($movie->save()) {
                Log::info('Movie saved successfully.');
                return response()->json($movie, 201);
            }
            
            return response()->json(['error' => 'Failed to save movie'], 500);
        }
        
    

    public function movie($id){
        return Movies::find($id);
    }


    public function getMoviesByCategory($categoryId)
    {
        
        $movies = Movies::where('category_id', $categoryId)->get();
        return response()->json(['movies' => $movies], 200);
    }


    
    public function update(Request $request, $id){
        $movie = Movies::find($id);
        $movie->update($request->all());
        return response()->json($movie);
    }
    public function destroy($id){
        Movies::destroy($id);
        return response()->json(null, 204);
    }

    public function searchMovie(Request $request){
        $query = Movies::query();
        $data = $request->input('searchMovie');
        if($data){
            $query->where('name', 'Like' ,'%'. $data. '%');
        }
        return $query->get();
    }
}
