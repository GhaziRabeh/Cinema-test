<?php


use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\MoviesController;
use App\Http\Controllers\ShowController;
use App\Http\Controllers\ShowTvController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;





/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware([EnsureFrontendRequestsAreStateful::class])->get('/user', function (Request $request) {
    return $request->user();
});







//affichage (GET)
Route::get('/shows', [ShowController::class, 'index']);

Route::get('/shows/{id}', [ShowController::class, 'show']);

//create (POST)
Route::post('/shows', [ShowController::class, 'store']);

// update
Route::patch('/shows/{id}', [ShowController::class, 'update']);

// supprimer
Route::delete('/shows/{id}', [ShowController::class, 'destroy']);


//*********************************admin/categories *****************************//
// affichage (GET)
Route::get('/admin/categories', [CategoryController::class, 'index']);


Route::get('/admin/categories/{id}', [CategoryController::class, 'category']);

// //create (POST)
Route::post('/admin/categories', [CategoryController::class, 'store']);

// Update 
Route::put('/admin/categories/{id}', [CategoryController::class, 'update']);

// supprimer
Route::delete('/admin/categories/{id}', [CategoryController::class, 'destroy']);



//*********************************admin/movies *****************************//
//affichage (GET)
Route::get('/admin/movies', [MoviesController::class, 'index']);

Route::get('/movies/{id}', [MoviesController::class, 'movie']);

Route::get('/admin/movies/{id}', [MoviesController::class, 'movie']);

Route::get('/admin/movies/category/{categoryId}', [MoviesController::class, 'getMoviesByCategory']);

//create (POST)
Route::post('/admin/movies', [MoviesController::class, 'store']);

// update
Route::put('/admin/movies/{id}', [MoviesController::class, 'update']);

// supprimer
Route::delete('/admin/movies/{id}', [MoviesController::class, 'destroy']);

//*********************************admin/showtv *****************************//

Route::get('/admin/showtv', [ShowTvController::class, 'index']);

Route::get('/admin/showtv/{id}', [ShowTvController::class, 'movie']);

Route::get('/admin/showtv/category/{categoryId}', [ShowTvController::class, 'getMoviesByCategory']);

//create (POST)
Route::post('/admin/showtv', [ShowTvController::class, 'store']);

// update
Route::put('/admin/showtv/{id}', [ShowTvController::class, 'update']);

// supprimer
Route::delete('/admin/showtv/{id}', [ShowTvController::class, 'destroy']);

//*********************************search *****************************//

Route::get('/searchMovie',[MoviesController::class, 'searchMovie']);

/*****************************Login*********************************/

Route::post('/register', [UserController::class, 'register']);

Route::post('/login', [UserController::class, 'login']);
