<?php

use App\Http\Controllers\ButtonsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('buttons', [ButtonsController::class, 'index']);
