<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Category;

use App\Models\ShowTv;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ShowTvController extends Controller
{
    //
    public function index(){
        $show_tv = ShowTv::all();
        
        $categories = Category::all();
        
        
        
        return response()->json([
            'show_tv' => $show_tv,
            
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
    
        $show_tv = new ShowTv();
        $show_tv->name = $request->name;
        $show_tv->category_id = $request->category_id;
        $show_tv->description = $request->description;
        $show_tv->rate = $request->rate;
    
       
            // Handle image upload
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
                $destinationPath = public_path('uploads_show_tv');
                
                if ($image->move($destinationPath, $imageName)) {
                    $show_tv->image = $imageName;
                    Log::info('Image successfully uploaded: ' . $destinationPath . '/' . $imageName);
                } else {
                    Log::error('Failed to move uploaded image.');
                    return response()->json(['error' => 'Failed to upload image'], 500);
                }
            }
            
            // Save 
            if ($show_tv->save()) {
                Log::info('Movie saved successfully.');
                return response()->json($show_tv, 201);
            }
            
            return response()->json(['error' => 'Failed to save movie'], 500);
        }
        
    

    public function movie($id){
        return ShowTv::find($id);
    }


    public function getMoviesByCategory($categoryId)
    {
        
        $show_tv = ShowTv::where('category_id', $categoryId)->get();
        return response()->json(['movies' => $show_tv], 200);
    }


    
    public function update(Request $request, $id){
        $show_tv = ShowTv::find($id);
        $show_tv->update($request->all());
        return response()->json($show_tv);
    }
    public function destroy($id){
        ShowTv::destroy($id);
        return response()->json(null, 204);
    }
}
