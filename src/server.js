const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000; 

app.use(express.json());

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/convert', (req, res) => {
    const { value, fromUnit, toUnit } = req.body;

    console.log('Request data:', req.body);

    try {
        const convertedValue = convertTemperature(value, fromUnit, toUnit);
        res.json({ convertedValue });
    } catch (error) {
        console.error('Conversion Error:', error.message);
        res.status(400).json({ error: error.message });
    }
});

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
