<?php

use App\Http\Controllers\ButtonsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//getting all buttons data
Route::get('buttons', [ButtonsController::class, 'index']);

//updating specific button data
Route::put('buttons/upload', [ButtonsController::class, 'upload']);

//removing specific button data
Route::delete('buttons/{id}', [ButtonsController::class, 'destroy']);

