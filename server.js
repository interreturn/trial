const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;


app.use(bodyParser.json());


let userData = [];

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


app.get('/userdata', (req, res) => {
    res.status(200).json(userData);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
