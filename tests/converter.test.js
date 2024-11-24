const {
    celsiusToFahrenheit,
    celsiusToKelvin,
    fahrenheitToCelsius,
    fahrenheitToKelvin,
    kelvinToCelsius,
    kelvinToFahrenheit,
  } = require('../src/converter');
  
  test('Celsius to Fahrenheit', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit(100)).toBe(212);
  });
  
  test('Celsius to Kelvin', () => {
    expect(celsiusToKelvin(0)).toBe(273.15);
  });
  
  test('Fahrenheit to Celsius', () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
  });
  
  test('Fahrenheit to Kelvin', () => {
    expect(fahrenheitToKelvin(32)).toBeCloseTo(273.15);
  });
  
  test('Kelvin to Celsius', () => {
    expect(kelvinToCelsius(273.15)).toBe(0);
  });
  
  test('Kelvin to Fahrenheit', () => {
    expect(kelvinToFahrenheit(273.15)).toBeCloseTo(32);
  });
  