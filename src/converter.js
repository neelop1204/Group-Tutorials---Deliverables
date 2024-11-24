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

document.getElementById('convertButton').addEventListener('click', async () => {
    const resultElement = document.getElementById('result');
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const convertFrom = document.getElementById('convertFrom').value;
    const convertTo = document.getElementById('convertTo').value;

    if (isNaN(inputTemp)) {
        resultElement.textContent = 'Please enter a valid number.';
        document.body.className = 'neutral'; 
        return;
    }

    try {
        // Sending POST request to backend API
        const response = await fetch('/api/convert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value: inputTemp, fromUnit: convertFrom, toUnit: convertTo }),
        });
        const data = await response.json();
        const convertedValue = data.convertedValue;

        // Update result text
        resultElement.textContent = `${inputTemp}° ${convertFrom} is converted to ${convertedValue.toFixed(2)}° ${convertTo}`;

        // Update background
        if (convertedValue <= 10) {
            document.body.className = 'cool';
        } else if (convertedValue >= 30) {
            document.body.className = 'warm';
        } else {
            document.body.className = 'neutral';
        }
    } catch (error) {
        resultElement.textContent = 'Error in conversion. Please try again.';
        console.error('Error:', error);
    }
});
