// src/server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Serve static files from 'src' directory
app.use(express.static(path.join(__dirname)));

// Serve index.html on root request
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Temperature conversion endpoint
app.post('/api/convert', (req, res) => {
    const { value, fromUnit, toUnit } = req.body;

    try {
        const convertedValue = convertTemperature(value, fromUnit, toUnit);
        res.json({ convertedValue });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Conversion logic
function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === toUnit) return value;

    switch (fromUnit + toUnit) {
        case 'CF':
            return (value * 9) / 5 + 32;
        case 'CK':
            return value + 273.15;
        case 'FC':
            return ((value - 32) * 5) / 9;
        case 'FK':
            return ((value - 32) * 5) / 9 + 273.15;
        case 'KC':
            return value - 273.15;
        case 'KF':
            return ((value - 273.15) * 9) / 5 + 32;
        default:
            throw new Error('Invalid conversion');
    }
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
