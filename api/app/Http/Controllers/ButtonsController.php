<?php

namespace App\Http\Controllers;

use App\Models\Button;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;

class ButtonsController
{
    public function index()
    {
        //order by 'id' in descending order
        $button = Button::orderBy('id', 'asc')->get();
        $data = [
            'button' => $button
        ];
        return response()->json($data, 200);
    }

    public function upload(Request $request)
    {
        //defined rules for the request
        $validator = Validator::make($request->all(), [
            'id' => 'required|exists:buttons,id',
            'title' => 'required',
            'color' => 'required',
            'link' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['success' => false, 'message' => $validator->errors()->first()], 422);
        }

        try {
            $button = Button::findOrFail($request->id);
            $button->update([
                'title' => $request->title,
                'color' => $request->color,
                'link' => $request->link,
            ]);

            return response()->json(['success' => true, 'message' => 'Button updated successfully.']);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while updating the button.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        $button = Button::find($id);
        if (!$button) {
            return response()->json(['message' => 'Button not found'], 404);
        }

        $button->delete();
        return response()->json(['message' => 'Button successfully deleted'], 200);
    }
}
