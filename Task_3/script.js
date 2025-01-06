document.getElementById("convert-btn").addEventListener("click", function () {
    const tempInput = parseFloat(document.getElementById("temperature").value);
    const type = document.getElementById("conversion-type").value;
    const resultSpan = document.getElementById("result");
  
    if (isNaN(tempInput)) {
      resultSpan.textContent = "Please enter a valid number.";
      return;
    }
  
    let result;
  
    if (type === "fahrenheit") {
      // Convert Fahrenheit to Celsius and Kelvin
      const celsius = ((tempInput - 32) * 5) / 9;
      const kelvin = celsius + 273.15;
      result = `${celsius.toFixed(2)} °C / ${kelvin.toFixed(2)} K`;
    } else if (type === "celsius") {
      // Convert Celsius to Fahrenheit and Kelvin
      const fahrenheit = (tempInput * 9) / 5 + 32;
      const kelvin = tempInput + 273.15;
      result = `${fahrenheit.toFixed(2)} °F / ${kelvin.toFixed(2)} K`;
    } else if (type === "kelvin") {
      // Convert Kelvin to Celsius and Fahrenheit
      const celsius = tempInput - 273.15;
      const fahrenheit = (celsius * 9) / 5 + 32;
      result = `${celsius.toFixed(2)} °C / ${fahrenheit.toFixed(2)} °F`;
    }
  
    resultSpan.textContent = result;
  });
  