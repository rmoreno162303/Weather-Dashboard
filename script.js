// WHEN I view current weather conditions for that city
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city


var apiKey = '998614a34ea2ab5d0ca92dccf188d81e'
var userSearch = "austin"
var weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
geoAPIUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&limit={5}&appid=${apiKey}`
// document.getElementById('searchTerm').value
// top will be value from search form

var lat;
var lon;

function getLatLon() {

fetch(geoAPIUrl)
.then(function(response) {
return response.json();

}).then(function(data){
    console.log(data);
    console.log("lat",data[0].lat)
    console.log("lon",data[0].lon)
    lat = data[0].lat
    lon = data[0].lon
    currentForecast();
})
}

function currentForecast(){
fetch(weatherAPIUrl)
.then(function(response) {
return response.json();
}).then(function(data){
    console.log(data);
    // append to page action 
})
}

// for loops


