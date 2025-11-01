<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\BookingMail;

class BookingController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'fullName' => 'required|string|max:150',
            'email' => 'required|email',
            'phone' => 'required|string|max:20',
            'guestType' => 'required|string|in:Resident,Foreign',
            'roomType' => 'required|string|max:100',
            'mealPlan' => 'required|string|max:100',
            'acOption' => 'required|string|in:Yes,No',
            'checkIn' => 'required|date',
            'checkOut' => 'required|date|after:checkIn',
            'nightlyRate' => 'required|numeric',
            'numberOfNights' => 'required|numeric',
            'totalCost' => 'required|numeric',
        ]);

        try {
            Mail::to(['info@marvinmotel.com', 'sales@marvinmotel.com'])
                ->cc('mwesigyerobert83@yahoo.com')
                ->send(new BookingMail($validated));

            return response()->json([
                'success' => true,
                'message' => 'Booking email sent successfully!',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to send booking email.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
