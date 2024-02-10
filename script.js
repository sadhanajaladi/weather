async function getWeather() {
    const apiKey = '2a451d409061b841a5813c80c0e44904'; // Replace with your API key
    const city = document.getElementById('city').value;
    const resultDiv = document.getElementById('result');

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            const temperature = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
            const description = data.weather[0].description;

            resultDiv.innerHTML = `<p>Temperature: ${temperature}°C</p>
                                   <p>Description: ${description}</p>`;
        } else {
            resultDiv.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
