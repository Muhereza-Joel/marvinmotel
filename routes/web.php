<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('root');

Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
})->name('about');

Route::get('/restaurant-and-bar', function () {
    return Inertia::render('RestaurantAndBar');
})->name('restaurantbar');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
})->name('contact');

Route::get('/gallery', function () {
    return Inertia::render('Gallery');
})->name('gallery');







Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
