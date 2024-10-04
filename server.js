const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000; // Use the port provided by Render or fallback to 5000

app.use(express.json()); // Use express built-in body-parser

let userData = [];

// Endpoint for the home page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Live Call Server</h1>');
});

// Endpoint to store user data
app.post('/storeuserdata', (req, res) => {
    const { phoneNumber, time, deviceId } = req.body;

    if (!phoneNumber || !time || !deviceId) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    userData.push({
        phoneNumber: phoneNumber,
        time: time,
        deviceId: deviceId
    });

    res.status(201).json({ message: 'User data stored successfully.' });
});

// Endpoint to retrieve user data
app.get('/userdata', (req, res) => {
    res.status(200).json(userData);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
