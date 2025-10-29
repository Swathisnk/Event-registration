const express = require('express')
const app = express()
app.use(express.json());

let events = [];

/*
events.push({
    "title":"Treasure Hunt",
    "desc":"Treasure hunt game for 3 hrs",
    "image":" ",
    "capacity":100,
    "date":Date.parse('2025-11-06')
})

events.push({
    "title":"Hackthon",
    "desc":"hackthon for 3 hrs",
    "image":" ",
    "capacity":100,
    "date":Date.parse('2025-10-06')
})

events.push({
    "title":"Synergia",
    "desc":"Synergia for 3 days",
    "image":" ",
    "capacity":100,
    "date":Date.parse('2025-18-06')
})

events.push({
    "title":"Airophilia",
    "desc":"Airophilia for 3 hrs",
    "image":" ",
    "capacity":100,
    "date":Date.parse('2025-7-06')
})

events.push({
    "title":"Sinchana",
    "desc":"Cultural program for 3 hrs",
    "image":" ",
    "capacity":100,
    "date":Date.parse('2025-12-12')
})

//update

let eventIndex = events.findIndex((event) => event.title === "Hackthon")
if (eventIndex !== -1) {
    events[eventIndex] = {
        "title": "Sahyadri hacks 2025",
        "desc": "hackthon for 3 hrs",
        "image": " ",
        "capacity": 100,
        "date": Date.parse('2025-10-06')
    }
}

console.log(events)
*/

// POST route
app.post('/events', (request, response) => {
    const title = request.body.title;
    const desc = request.body.desc;
    const date = request.body.date;
    const capacity = request.body.capacity;

    // store the data
    const newEvent = { title, desc, date, capacity };
    events.push(newEvent);

    // send response
    response.status(201).json({
        message: "Event added successfully!",
        event: newEvent
    });
});

//  GET route
app.get('/events', (request, response) => {
    response.json(events);
});

app.delete('/deleteevents/:title', (request, response) => {
    const eventTitle = request.params.title;
    const initialLength = events.length;
    events = events.filter((event) => event.title !== eventTitle);

    if (events.length === initialLength) {
        response.status(404).json({ message: "Event not found!" });
    } else {
        response.json({ message: "Event deleted successfully!" });
    }
});

app.listen(3000, () => {
    console.log("server started!!")
});
