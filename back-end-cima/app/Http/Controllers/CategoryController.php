<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CategoryController extends Controller
{
    public function index() {
        return Category::all();
    }

    public function store(Request $request) {
        
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
        ]);
        
        $category = new Category();
        $category->title = $request->title;
        $category->description = $request->description;
        Log::error("store1".$request->title);
        Log::error("store2".$request->description);
        if ($category->save()) {
            return response()->json($category, 201);
        } else {
            return response()->json(['error' => 'Failed to save category'], 500);
        }
    }

    public function category($id) {
        return Category::find($id);
    }

    public function update(Request $request, $id) {
        $category = Category::find($id);
        
        $category->title = $request->title;
        $category->description = $request->description;
        
       
        $category->update();
        return response()->json($category);
    }

    public function destroy($id) {
        Category::destroy($id);
        return response()->json(null, 204);
    }
}


