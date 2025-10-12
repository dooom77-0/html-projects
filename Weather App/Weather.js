const input = document.getElementById('location');
const button = document.getElementById('get-weather');
const weatherInfo = document.getElementById('weather-info');

button.addEventListener('click', () => {
    const location = input.value.trim();
    if (location === '') {
        alert('Please enter a location.');
        return;
    }
    getWeather(location);
});

async function getWeather(location) {
    const apiKey = 'a447f0192a9de576397cbf724f3f0062';
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
        const data = await res.json();

        if (data.cod === 200) {
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}، ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Condition: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            weatherInfo.querySelector('h2').className = `text-xl text-slate-900 font-bold mb-4`;
            weatherInfo.querySelectorAll('p').forEach(p => {
                p.className = `text-lg text-slate-900 font-semibold mb-2`;
            });
        } else {
            weatherInfo.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        weatherInfo.innerHTML = `<p>Error fetching weather data</p>`;
        console.error('Error:', error);
    }
}