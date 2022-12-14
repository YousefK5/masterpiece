<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('pages.home');
});
Route::get('/about' , function(){
    return view('pages.about');
});
Route::get('/contact' , function(){
    return view('pages.contact');
});
Route::get('/login' , function(){
    return view('pages.login');
});
Route::get('/profile' , function(){
    return view('pages.profile');
});
Route::get('/posts' , function(){
    return view('pages.posts');
});
Route::get('/dashboard' , function(){
    return view('dashboard.index');
});
Route::get('/dashboard/users' , function(){
    return view('dashboard.users');
});
Route::get('/dashboard/posts' , function(){
    return view('dashboard.posts');
});



