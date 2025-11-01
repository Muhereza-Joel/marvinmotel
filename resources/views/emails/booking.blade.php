@component('mail::message')

# 🏨 New Booking Request — Marvin Motel Katunguru

A guest has submitted a new booking request through the **Marvin Motel Katunguru** website.

---

## 👤 Guest Information
- **Full Name:** {{ $data['fullName'] }}
- **Email:** {{ $data['email'] }}
- **Phone:** {{ $data['phone'] }}
- **Guest Type:** {{ $data['guestType'] }}

---

## 🛏️ Booking Details
- **Room Type:** {{ $data['roomType'] }}
- **Meal Plan:** {{ $data['mealPlan'] }}
- **Air Conditioning:** {{ $data['acOption'] === 'Yes' ? 'With AC' : 'No AC' }}
- **Check-In Date:** {{ \Carbon\Carbon::parse($data['checkIn'])->format('F j, Y') }}
- **Check-Out Date:** {{ \Carbon\Carbon::parse($data['checkOut'])->format('F j, Y') }}
- **Number of Nights:** {{ $data['numberOfNights'] }}

---

## 💰 Pricing Summary
@php
$currency = $data['guestType'] === 'Resident' ? 'UGX' : 'USD';
@endphp

- **Nightly Rate:** {{ $currency }} {{ number_format($data['nightlyRate'], 0) }}
- **Total Cost:** **{{ $currency }} {{ number_format($data['totalCost'], 0) }}**

> Please confirm this reservation and get in touch with the guest as soon as possible.

---

@component('mail::button', ['url' => 'mailto:' . $data['email']])
Reply to Guest
@endcomponent

---

## 📍 About Marvin Motel Katunguru
Nestled near **Queen Elizabeth National Park**, Marvin Motel Katunguru offers a serene environment perfect for travelers and nature lovers.
Relax, unwind, and enjoy warm Ugandan hospitality.

---

### 📞 Contact Details
📧 **info@marvinmotel.com**
📧 **sales@marvinmotel.com**
📧 **mwesigyerobert83@yahoo.com**
📞 **+256 772 623 456 / +256 758 262 114**
🕘 **Open 24/7**

---

© {{ date('Y') }} **Marvin Motel Katunguru**
Powered by [MOELS GROUP](https://moelsgroup.com)

@endcomponent