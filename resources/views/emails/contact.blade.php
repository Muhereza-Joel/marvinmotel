@component('mail::message')

# 📬 New Contact Message

You’ve received a new inquiry from **Marvin Motels’s website**.

---

## 👤 Customer Details
- **Client Name:** {{ $data['firstName'] }} {{ $data['lastName'] }}
- **Client Email:** {{ $data['email'] }}

---

### ✉️ Message:
> {{ $data['message'] }}

---






## 📍 Our Location
Marvin Motel Katunguru is a few kilometers from
Queen Elizabeth National Park. We ensure that our
customers relax and enjoy the stay. Book now and
feel right at home!

📧 **info@marvinmotel.com**
📧 **sales@marvinmotel.com**
📧 **mwesigyerobert83@yahoo.com**
📞 **+256 772 623 456 / +256 758 262 114**
🕘 **Mon–Fri · 9am – 6pm**

---

© {{ date('Y') }} Marvin Motel.
Powered by [MOELS GROUP](https://moelsgroup.com)

@endcomponent