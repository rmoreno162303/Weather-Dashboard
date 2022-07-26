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

var lat;
var lon;

var apiKey = '833acbcfd5452012e5dc8a39d32ea0ed'
var userSearchEl = document.getElementById('search-input');
var submitEl= document.getElementById('search-button');

//weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
//testApi = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={998614a34ea2ab5d0ca92dccf188d81e}'
//geoAPIUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&limit=5&appid=${apiKey}`
// document.getElementById('searchTerm').value
// top will be value from search form

// var lat;
// var lon;
console.log(apiKey)

function getLatLon( event) {
    event.preventDefault();
    var cityName = userSearchEl.value.trim();
    console.log( "city name", cityName);
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`


fetch(apiUrl)
.then(function(response) {
    if(response.status === 200){
console.log(response);
return response.json();}
else {return Promise.reject( new Error(response.statusText)) }

}).then(function (data){
 lat= data. coord.lat;
 lon = data.coord.lon;
    
  console.log(data);
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=imperial`)
;

}) .then(function(response) {
    if(response.status === 200){
console.log(response);
return response.json();}
else {return Promise.reject( new Error(response.statusText)) }

}).then ( function (data){

    console.log(data);
}
)

}

// }).then(function(data){
//     console.log(data);
//     console.log("lat",data[0].lat)
//     console.log("lon",data[0].lon)
//     lat = data[0].lat
//     lon = data[0].lon
//     //currentForecast();
// })
//}

// function currentForecast(){
// fetch(testApi)
// //console.log(weatherAPIUrl)
// .then(function(response) {
// return response.json();
// }).then(function(data){
//     console.log(data);
//     //currentForecast.appendChild()
//     // append to page action 
// })
//}


submitEl.addEventListener("click", getLatLon);

// for loops