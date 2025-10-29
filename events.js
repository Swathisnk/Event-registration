const express = require('express');
const app = express();

app.use(express.json());

let bookings = [];
let nextId = 1;

// available events
let availableEvents = ["Devhack", "Bot sumo", "3D Vision", "Aerophilia", "Robosoccer"];

// 1. GET /api/bookings — Get all event bookings
app.get('/api/bookings', (request, response) => {
    response.json(bookings);
});

// 2. POST /api/bookings — Create a new booking
app.post('/api/bookings', (request, response) => {
    const { name, email, phone, eventName } = request.body;

    if (!name || !email || !phone || !eventName) {
        return response.status(400).json({ message: 'All fields are required!' });
    }

    // Checking if event exists
    if (!availableEvents.includes(eventName)) {
        return response.status(400).json({ message: `Event '${eventName}' does not exist!` });
    }

    const newBooking = {
        id: nextId++,
        name,
        email,
        phone,
        eventName
    };

    bookings.push(newBooking);
    response.status(201).json({ message: 'Booking created successfully!', booking: newBooking });
});

// 3. GET /api/bookings/:id — Get booking by ID
app.get('/api/bookings/:id', (request, response) => {
    const bookingId = parseInt(request.params.id);
    const booking = bookings.find(b => b.id === bookingId);

    if (!booking) {
        return response.status(404).json({ message: 'Booking not found!' });
    }

    response.json(booking);
});

// 4. PUT /api/bookings/:id — Update participant details
app.put('/api/bookings/:id', (request, response) => {
    const bookingId = parseInt(request.params.id);
    const booking = bookings.find(b => b.id === bookingId);

    if (!booking) {
        return response.status(404).json({ message: 'Booking not found!' });
    }

    const { name, email, phone, eventName } = request.body;

    // If eventName is provided->verify it exists
    if (eventName && !availableEvents.includes(eventName)) {
        return response.status(400).json({ message: `Event '${eventName}' does not exist!` });
    }

    if (name) booking.name = name;
    if (email) booking.email = email;
    if (phone) booking.phone = phone;
    if (eventName) booking.eventName = eventName;

    response.json({ message: 'Booking updated successfully!', booking });
});

// 5. DELETE /api/bookings/:id — Cancel a booking
app.delete('/api/bookings/:id', (request, response) => {
    const bookingId = parseInt(request.params.id);
    const initialLength = bookings.length;
    bookings = bookings.filter(b => b.id !== bookingId);

    if (bookings.length === initialLength) {
        return response.status(404).json({ message: 'Booking not found!' });
    }

    response.json({ message: `Booking with ID ${bookingId} cancelled successfully!` });
});

app.listen(3000, () => {
    console.log('Synergia Event Booking API running at http://localhost:3000');
});
