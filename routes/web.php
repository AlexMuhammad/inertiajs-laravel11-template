<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function () {
    return Inertia::render('testing');
});

Route::get('/test2', function () {
    return Inertia::render('testing2');
})->name('page.test2');
