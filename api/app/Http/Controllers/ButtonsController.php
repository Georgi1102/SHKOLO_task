<?php

namespace App\Http\Controllers;

use App\Models\Button;
use Illuminate\Http\Request;

class ButtonsController
{
    public function index(){
        $button = Button::all();
        $data = [
            'button' => $button
        ];
        return response()->json($data, 200);
    }
}
