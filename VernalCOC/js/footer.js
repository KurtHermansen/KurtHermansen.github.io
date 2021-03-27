const date = new Date();
var weekDay = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var day = date.getDay();
var dayN = date.getDate();
var month = date.getMonth();
var year = date.getUTCFullYear();
document.getElementById("currentDate").innerHTML = weekDay[day] + ", " + dayN + " " + monthName[month] + " " + year;
document.getElementById("currentYear").innerHTML = year;

function toggleMenu() {
    document.getElementsByClassName('menu')[0].classList.toggle('burger');
}
const apiURL2 = 'https://api.openweathermap.org/data/2.5/weather?q=Vernal&units=imperial&appid=cb1e61a118d4bf7f7b819f989206909f';

fetch(apiURL2)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    console.table(jsonObject); // temporary checking for valid response and data parsing   
    let temp = jsonObject['main']['temp'];
    let max_temp = jsonObject['main']['temp_max'];
    let min_temp = jsonObject['main']['temp_min'];
    let wind_speed = jsonObject['wind']['speed']
    let humidity = jsonObject['main']['humidity'];
    let descript = jsonObject['weather']['0']['description'];

    // current temperature
    let current_temp = parseFloat(temp).toFixed(0);
    document.getElementById("currentTemp").textContent = descript + ', ' + current_temp;

    //max temperature
    let maxtemp = parseFloat(max_temp).toFixed(0);
    console.log(max_temp);
    document.getElementById("highTemp").textContent = maxtemp;

    //mmin temperature
    let mintemp = parseFloat(min_temp).toFixed(0);
    console.log(min_temp);
    document.getElementById("lowTemp").textContent = mintemp;


    //Calculating wind chill
    var windchill = document.getElementById("windchill");
    document.getElementById("wind").textContent = wind_speed.toFixed(0);
    var wind = wind_speed ** 0.16;

    var value = 35.74 + (0.6215 * current_temp) - (35.75 * wind) + (0.4275 * current_temp * wind);
    var windValue = value.toFixed(0);
    windchill.innerHTML = windValue;

    // placing the Humidity
    document.getElementById("humidity").textContent = humidity;

  });
