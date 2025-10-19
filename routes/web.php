<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('root');

Route::get('/about-us', function () {
    return Inertia::render('AboutUs', [
        'entranceImage' => asset('assets/images/behind.jpg'),
        'diningImage' => asset('assets/images/dining.jpg'),
        'bedImage' => asset('assets/images/bed.jpg'),
    ]);
})->name('about');

Route::get('/restaurant-and-bar', function () {
    return Inertia::render('RestaurantAndBar',  [
        'dining2Image' => asset('assets/images/dining2.jpg'),
        'barImage' => asset('assets/images/bar.jpg'),
    ]);
})->name('restaurantbar');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
})->name('contact');

Route::get('/gallery', function () {
    return Inertia::render('Gallery', [
        'image1' => asset('assets/images/bar.jpg'),
        'image2' => asset('assets/images/bathroom.jpg'),
        'image3' => asset('assets/images/bed.jpg'),
        'image4' => asset('assets/images/behind.jpg'),
        'image5' => asset('assets/images/dining2.jpg'),
        'image6' => asset('assets/images/corridle.jpg'),
        'image7' => asset('assets/images/toilet.jpg'),
        'image8' => asset('assets/images/sink.jpg'),
        'image9' => asset('assets/images/double.jpg'),
        'image10' => asset('assets/images/toilet2.jpg'),
        'image11' => asset('assets/images/toilet3.jpg'),
        'image12' => asset('assets/images/double2.jpg'),
        'image13' => asset('assets/images/single.jpg'),
        'image14' => asset('assets/images/double3.jpg'),
        'image15' => asset('assets/images/net.jpg'),
        'image16' => asset('assets/images/dining.jpg'),
        'image17' => asset('assets/images/entrance.jpg'),
        'image18' => asset('assets/images/double4.jpg'),
        'image19' => asset('assets/images/side.jpg'),
    ]);
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
