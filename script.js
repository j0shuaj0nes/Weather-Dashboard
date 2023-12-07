var APIKey = "efc1dcca827cbcc85306b3c4c39e2f4f";
var searchInputValue = localStorage.getItem('searchInput') || '';
var searchInput = document.querySelector('#citySearch')
var searchButton = document.querySelector('#searchButton')
var searchHistory = document.querySelector('#searchHistory')
//let currentDate = new Date().toJSON().slice(0, 10);
//console.log(currentDate);

searchButton.addEventListener('click', () => searchWeather( searchInput.value))


function searchWeather(cityName) {
    
    localStorage.setItem('APIKey', APIKey);
    localStorage.setItem('searchInput', searchHistory.value);


    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey + '&units=metric')
        .then(data => data.json())
        .then(res => {
            console.log(res)
            document.querySelector('#currentTemp').textContent = `${res.main.temp}°C`
            document.querySelector('#currentWind').textContent = `${res.wind.speed} m/s`
            document.querySelector('#currentHum').textContent = `${res.main.humidity}%`

        });
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput.value + "&appid=" + APIKey + '&units=metric')
        .then(data => data.json())
        .then(res => {
            console.log(res)
            document.querySelector('#FCD1Temp').textContent = `${res.list[9].main.temp} °C`
            document.querySelector('#FCD1Wind').textContent = `${res.list[9].wind.speed} m/s`
            document.querySelector('#FCD1Hum').textContent = `${res.list[9].main.humidity}%`

            document.querySelector('#FCD2Temp').textContent = `${res.list[17].main.temp} °C`
            document.querySelector('#FCD2Wind').textContent = `${res.list[17].wind.speed} m/s`
            document.querySelector('#FCD2Hum').textContent = `${res.list[17].main.humidity}%`

            document.querySelector('#FCD3Temp').textContent = `${res.list[25].main.temp} °C`
            document.querySelector('#FCD3Wind').textContent = `${res.list[25].wind.speed} m/s`
            document.querySelector('#FCD3Hum').textContent = `${res.list[25].main.humidity}%`

            document.querySelector('#FCD4Temp').textContent = `${res.list[33].main.temp} °C`
            document.querySelector('#FCD4Wind').textContent = `${res.list[33].wind.speed} m/s`
            document.querySelector('#FCD4Hum').textContent = `${res.list[33].main.humidity}%`

            document.querySelector('#FCD5Temp').textContent = `${res.list[39].main.temp} °C`
            document.querySelector('#FCD5Wind').textContent = `${res.list[39].wind.speed} m/s`
            document.querySelector('#FCD5Hum').textContent = `${res.list[39].main.humidity}%`
        });
}



