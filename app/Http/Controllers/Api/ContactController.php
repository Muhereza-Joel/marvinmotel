<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'firstName' => 'required|string|max:100',
            'lastName' => 'nullable|string|max:100',
            'email' => 'required|email',
            'message' => 'required|string|max:2000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors(),
            ], 422);
        }

        $data = $request->only(['firstName', 'lastName', 'email', 'message']);

        try {
            Mail::to('muherezajoel40@gmail.com')->send(new ContactFormMail($data));

            return response()->json([
                'success' => true,
                'message' => 'Message sent successfully!'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to send message.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
