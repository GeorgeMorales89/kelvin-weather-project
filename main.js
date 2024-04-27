// Setting the Kelvin forecast to 293 
const kelvin = 293; 

// Celsius is 273 degrees less than Kelvin
const celsius = kelvin - 273;

// Setting equation Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9/5) + 32;

// Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
