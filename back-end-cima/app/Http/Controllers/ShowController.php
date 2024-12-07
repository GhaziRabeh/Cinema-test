<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Show;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ShowController extends Controller
{
    public function index() {
        return Show::all();
        
    }
    
    public function store(Request $request) {
       

            // Validate incoming data
            $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'required|string',
                'image' => 'required|image|mimes:jpg,png,jpeg,gif|max:2048', 
            ]);
        
         
            $show = new Show();
            $show->title = $request->title;
            $show->description = $request->description;
        
            // Handle image upload
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
                $destinationPath = public_path('uploads'); 
                $image->move($destinationPath, $imageName);
                $show->image = $imageName; 
            }
        
            // Save the show
            if ($show->save()) {
                return response()->json($show, 201);
            }
        
            return response()->json(['error' => 'Failed to save show'], 500);
        
        
    }
    
    public function show($id) {
        return Show::find($id);
    }
    
    public function update( Request $request,$id) {
       
        $show = Show::find($id);

    if (!$show) {
        return response()->json(['error' => 'Show not found'], 404);
    }
/*
    $show->title = $request->input('title');
    $show->description = $request->input('description');
    
  */

  $show->title = $request->title;
  $show->description = $request->description;  

    if ($request->hasFile('image')) {
        $image = $request->file('image');
        $imageName = uniqid() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('uploads'), $imageName);
        $show->image = $imageName;
    }

    $show->update();
    
    return response()->json($show);
        }

   
    

    
    public function destroy($id) {
        Show::destroy($id);
        return response()->json(null, 204);
    }
    
}
