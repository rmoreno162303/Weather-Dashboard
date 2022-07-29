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

// var lat;
// var lon;

//weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
//testApi = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={998614a34ea2ab5d0ca92dccf188d81e}'
//geoAPIUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${userSearch}&limit=5&appid=${apiKey}`
// document.getElementById('searchTerm').value
// top will be value from search form

var apiKey = '833acbcfd5452012e5dc8a39d32ea0ed'
var userSearchEl = document.getElementById('search-input');
var submitEl = document.getElementById('search-button');

var curIconEl = document.getElementById('icon-current');

var currentTempEl = document.querySelector('#current-temp');
var currentWindEl = document.querySelector('#set-wind');
var currentHumidityEl = document.querySelector('#set-humidity');
var currentUvEl = document.querySelector('#set-uvindex');

var iconMonEl = document.querySelector('#icon-monday')

var currentMonEl = document.querySelector('#current-monday');
var windMonEl = document.querySelector('#wind-monday');
var humMonEl = document.querySelector('#hum-monday');

var iconTueEl = document.querySelector('#icon-tuesday')
var currentTueEl = document.querySelector('#current-tuesday');
var windTueEl = document.querySelector('#wind-tuesday');
var humTueEl = document.querySelector('#hum-tuesday');

var iconWedEl = document.querySelector('#icon-wednesday')
var currentWedEl = document.querySelector('#current-wednesday');
var windWedEl = document.querySelector('#wind-wednesday');
var humWedEl = document.querySelector('#hum-wednesday');

var iconThuEl = document.querySelector('#icon-thursday')
var currentThuEl = document.querySelector('#current-thursday');
var windThuEl = document.querySelector('#wind-thursday');
var humThuEl = document.querySelector('#hum-thursday');

var iconFriEl = document.querySelector('#icon-friday')
var currentFriEl = document.querySelector('#current-friday');
var windFriEl = document.querySelector('#wind-friday');
var humFriEl = document.querySelector('#hum-friday');
// var lat;
// var lon;
console.log(apiKey)

function getLatLon(event) {
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
 lat = data.coord.lat;
 lon = data.coord.lon;
    
  console.log(data);
  console.log(lat);
  console.log(lon);
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=imperial`)
;

}) .then(function(response) {
    if(response.status === 200){
console.log(response);
return response.json();}
else {return Promise.reject(new Error(response.statusText)) }

}).then(function(data){

    console.log(data);
    // currentCity = new Date(data.dt * 1000).toISOString();
    // display = data.name
    currentIcon = data.current.weather[0].icon;
    console.log(currentIcon);
    iconCur = `https://openweathermap.org/img/wn/${currentIcon}.png`;
    currentTemp = data.current.temp;
    windSpeed = data.current.wind_speed;
    humidity = data.current.humidity;
    ultraViolet = data.current.uvi

    console.log(currentTemp)
    console.log(windSpeed)
    console.log(humidity)
    console.log(ultraViolet)

    curIconEl.setAttribute("src", iconCur);
    currentTempEl.append(currentTemp);
    currentWindEl.append(windSpeed);
    currentHumidityEl.append(humidity);
    currentUvEl.append(ultraViolet);

    mondayIcon = data.daily[0].weather[0].icon;
    iconMon = `https://openweathermap.org/img/wn/${mondayIcon}.png`;
    mondayTemp = data.daily[0].temp.day;
    mondayWind = data.daily[0].wind_speed;
    mondayHum = data.daily[0].humidity;
    console.log(typeof mondayIcon)
    //$(iconMonEl).attr('src', iconMon);
    iconMonEl.setAttribute("src", iconMon);

    currentMonEl.append(mondayTemp);
    windMonEl.append(mondayWind);
    humMonEl.append(mondayHum)

    tuesdayIcon = data.daily[1].weather[0].icon;
    iconTue = `https://openweathermap.org/img/wn/${tuesdayIcon}.png`;
    tuesdayTemp = data.daily[1].temp.day;
    tuesdayWind = data.daily[1].wind_speed;
    tuesdayHum = data.daily[1].humidity;
    currentTueEl.append(tuesdayTemp);
    windTueEl.append(tuesdayWind);
    humTueEl.append(tuesdayHum)
    iconTueEl.setAttribute("src", iconTue);


    wednesdayIcon = data.daily[2].weather[0].icon;
    iconWed = `https://openweathermap.org/img/wn/${wednesdayIcon}.png`;
    wednesdayTemp = data.daily[2].temp.day;
    wednesdayWind = data.daily[2].wind_speed;
    wednesdayHum = data.daily[2].humidity;
    currentWedEl.append(wednesdayTemp);
    windWedEl.append(wednesdayWind);
    humWedEl.append(wednesdayHum)
    iconWedEl.setAttribute("src", iconWed);


    thursdayIcon = data.daily[3].weather[0].icon;
    iconThu = `https://openweathermap.org/img/wn/${thursdayIcon}.png`;
    thursdayTemp = data.daily[3].temp.day;
    thursdayWind = data.daily[3].wind_speed;
    thursdayHum = data.daily[3].humidity;
    currentThuEl.append(thursdayTemp);
    windThuEl.append(thursdayWind);
    humThuEl.append(thursdayHum)
    iconThuEl.setAttribute("src", iconThu);



    fridayIcon = data.daily[4].weather[0].icon;
    iconFri = `https://openweathermap.org/img/wn/${fridayIcon}.png`;
    fridayTemp = data.daily[4].temp.day;
    fridayWind = data.daily[4].wind_speed;
    fridayHum = data.daily[4].humidity;
    currentFriEl.append(fridayTemp);
    windFriEl.append(fridayWind);
    humFriEl.append(fridayHum)
    iconFriEl.setAttribute("src", iconFri);


    function handleFormSubmit(event) {
    event.preventDefault();
    // currentTempEl = document.querySelector.append("#currentTemp").value
    return;
}})
}

submitEl.addEventListener("click", getLatLon);

//.then(function(data))
//     event.preventDefault();
//     fiveApi = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
// fetch(fiveApi)
// .then(function(response) {
//     if(response.status === 200){
// console.log(response);
// return response.json();}
// else {return Promise.reject( new Error(response.statusText)) }
// })
// for loops


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
