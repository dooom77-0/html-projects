const input = document.getElementById('countryName');
const button = document.getElementById('searchBtn');
const countryInfo = document.getElementById('result');

button.addEventListener('click', () => {
    const countryName = input.value.trim();
    if (countryName === '') {
        alert('Please enter a country name.');
        return;
    }
    getCountryInfo(countryName);
});

async function getCountryInfo(name) {
    const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Country not found');
        }
        const data = await response.json();
        displayCountryInfo(data[0]);
        
    } catch (error) {
        countryInfo.innerHTML = `<p>${error.message}</p>`;
    }
    
    function displayCountryInfo(country) {
        countryInfo.innerHTML = `
        <h2>${country.name.common}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Region: ${country.region}</p>
        <p>Subregion: ${country.subregion}</p>
        <p>Population: ${country.population.toLocaleString()}</p>
        <img src="${country.flags.png}" alt="${country.name.common} Flag">

        `;
        // Add any additional information or styling as needed
        countryInfo.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'my-5');
        countryInfo.querySelector('img').classList.add('w-32', 'h-auto', 'mt-2', 'border', 'border-gray-300', 'text-center', 'mx-auto');
    }
}