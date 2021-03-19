const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=cb1e61a118d4bf7f7b819f989206909f';

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   // console.table(jsonObject);  // temporary checking for valid response and data parsing   
    let temp = jsonObject['main']['temp'];
    let max_temp = jsonObject['main']['temp_max'];
    let wind_speed = jsonObject['wind']['speed']
    let humidity = jsonObject['main']['humidity'];
    let descript = jsonObject['weather']['0']['main'];

    // current temperature
    let current_temp = parseFloat(temp).toFixed(0);
    document.getElementById("currentTemp").textContent = descript + ' ' + current_temp;

    //max temperature
    let maxtemp = parseFloat(max_temp).toFixed(0);
    console.log(max_temp);
    document.getElementById("highTemp").textContent = maxtemp;


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

  const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=cb1e61a118d4bf7f7b819f989206909f';

fetch(apiURL2)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsnObject) {

    //console.table(jsonObject); // temporary checking for valid response and data parsing   
    const day_list = document.querySelector("#forecastDay")
    const temp_list = document.querySelector("#forecastImg")
    const temp_icon = document.querySelector("#forecastTemp")
    const list = jsnObject['list'];

    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    for (let i = 0; i < list.length; i++) {
      if (jsnObject.list[i].dt_txt.includes('18:00:00')) {
        //console.log(list[i].dt_txt);
        let d = new Date(list[i].dt_txt)

        //Creating the Dates for the five days
        const day = document.createElement("th")
        day_detail = daysOfWeek[d.getDay()]
        day.innerHTML = day_detail
        day_list.append(day)

        // creating the temperate forcast
        const temp_detail = document.createElement('td')

        let tempconvert = list[i].main.temp
        tempconvert = parseFloat(tempconvert).toFixed(1);
        temp_detail.innerHTML = `${tempconvert} &#8457`
        temp_list.append(temp_detail)

        // Placing the Icon
        let icon_table = document.createElement('td')
        let icon_img = document.createElement('img')

        icon_img.setAttribute('src', `https://openweathermap.org/img/w/${list[i].weather[0].icon}.png`)
        icon_img.setAttribute('alt', `This is the image of ${list[i].weather[0].description}`)

        icon_table.append(icon_img)
        temp_icon.append(icon_table)

      }


    }
  });

  const prestonEventURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(prestonEventURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsObject){
        //console.table(jsObject);
        const events = jsObject['towns']['6']['events'];
        for (let i = 0; i < events.length; i++) {
            let event = document.createElement('p');
            
            event.textContent = events[i];
      
            document.getElementById('jsEvents').appendChild(event);}
});