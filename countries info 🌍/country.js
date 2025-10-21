const input = document.getElementById('countryName');
const button = document.getElementById('searchBtn');
const countryInfo = document.getElementById('result');

button.addEventListener('click', () => {
    const countryName = input.value.trim();
    if (countryName === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter a country name',
            showConfirmButton: false,
            timer: 1500
        })
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
        console.log(Object.keys(data[0]));
        
    } catch (error) {
        countryInfo.innerHTML = `<p>${error.message}</p>`;
    }
    
    function displayCountryInfo(country) {
        countryInfo.innerHTML = `
        <h2>${country.name.common}</h2>
        <p>الحدود: ${country.borders.join(', ') || 'No borders'}</p>
        <p>الأسم الرسمي: ${country.name.official}</p>
        <p>العاصمة: ${country.capital}</p>
        <p>القارة: ${country.region}</p>
        <p>عدد السكان: ${country.population.toLocaleString()} <span>(الرقم غير دقيق)</span></p>
        <p>المساحة : ${country.area.toLocaleString()} km<sup>2</sup></p>
        <p>العملة: ${country.currencies[Object.keys(country.currencies)[0]].name}</p>
        <p>اللغات: ${Object.values(country.languages).join(', ')}</p>
        <p>المناطق الزمنية: ${country.timezones.join(', ')}</p>
        <img src="${country.flags.png}" alt="${country.name.common} Flag">

        `;
        // Add any additional information or styling as needed
        countryInfo.classList.add('bg-gray-100', 'p-4', 'rounded-lg', 'shadow-md', 'my-5');
        countryInfo.querySelector('img').classList.add('w-34', 'h-auto', 'mt-2', 'border', 'border-gray-300', 'text-center', 'mx-auto','shadow-lg');
        countryInfo.querySelector('span').classList.add('text-md', 'text-gray-500', 'italic');
    }
}