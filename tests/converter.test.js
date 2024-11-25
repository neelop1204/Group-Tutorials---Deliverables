const {
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToCelsius,
  fahrenheitToKelvin,
  kelvinToCelsius,
  kelvinToFahrenheit,
} = require('../src/converter');

test('Converts 0°C to 32°F', () => {
  expect(celsiusToFahrenheit(0)).toBe(32);
});

test('Converts 100°C to 212°F', () => {
  expect(celsiusToFahrenheit(100)).toBe(212);
});

test('Converts 0°C to 273.15K', () => {
  expect(celsiusToKelvin(0)).toBe(273.15);
});

test('Converts 32°F to 0°C', () => {
  expect(fahrenheitToCelsius(32)).toBeCloseTo(0);
});

test('Converts 32°F to 273.15K', () => {
  expect(fahrenheitToKelvin(32)).toBeCloseTo(273.15);
});

test('Converts 273.15K to 0°C', () => {
  expect(kelvinToCelsius(273.15)).toBe(0);
});

test('Converts 273.15K to 32°F', () => {
  expect(kelvinToFahrenheit(273.15)).toBeCloseTo(32);
});
