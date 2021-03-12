const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=cb1e61a118d4bf7f7b819f989206909f';

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing   
    let temp = jsonObject['main']['temp'];
    let max_temp = jsonObject['main']['temp_max'];
    let wind_speed = jsonObject['wind']['speed']
    let humidity = jsonObject['main']['humidity'];

    // current temperature
    let current_temp = parseFloat(temp);
    current_temp = current_temp.toFixed(2);
    document.getElementById("currentTemp").textContent = current_temp;

    //max temperature
    let maxtemp = parseFloat(max_temp);
    maxtemp = maxtemp.toFixed(2);
    console.log(max_temp);
    document.getElementById("highTemp").textContent = maxtemp;


    //Calculating wind chill
    var windchill = document.getElementById("windchill");
    document.getElementById("wind").textContent = wind_speed;
    var wind = wind_speed ** 0.16;

    var value = 35.74 + (0.6215 * current_temp) - (35.75 * wind) + (0.4275 * current_temp * wind);
    var windValue = value.toFixed(2);
    windchill.innerHTML = windValue;

    // placing the Humidity
    document.getElementById("humidity").textContent = humidity;

  });