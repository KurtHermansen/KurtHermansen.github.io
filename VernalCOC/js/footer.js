
//This is the footer script

const date = new Date();
var weekDay = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var day = date.getDay();
var dayN = date.getDate();
var month = date.getMonth();
var year = date.getUTCFullYear();
document.getElementById("currentDate").innerHTML = weekDay[day] + ", " + dayN + " " + monthName[month] + " " + year;
document.getElementById("currentYear").innerHTML = year;

//This is the Menu Toggle

function toggleMenu() {
    document.getElementsByClassName('menu')[0].classList.toggle('burger');
}

//This is the Vernal Weather Data

const apiURL2 = 'https://api.openweathermap.org/data/2.5/weather?q=Vernal&units=imperial&appid=cb1e61a118d4bf7f7b819f989206909f';

fetch(apiURL2)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    //console.table(jsonObject); // temporary checking for valid response and data parsing   
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

  //this is the directory card JSON creation 
  
  fetch("json/vernal.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {

    console.table(jsObject); // temporary checking for valid response and data parsing   
    const vernal = jsObject['vernal'];
    for (let i = 0; i < vernal.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let a = document.createElement('a');
      let image = document.createElement('img');

      h2.textContent = vernal[i].name;
      image.setAttribute('src', '/VernalCOC/images/' + vernal[i].logo);
      image.setAttribute('alt', vernal[i].name + "LOGO");
      p1.textContent = 'ADDRESS: ' + vernal[i].address; 
      p2.textContent = 'CONTACT: ' + vernal[i].phone;
      a.setAttribute('href', vernal[i].website);
      a.textContent = 'VISIT: ' + vernal[i].name + "'s Website";

      card.appendChild(h2);
      card.appendChild(image);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(a);
      
      document.querySelector('div.cards').appendChild(card);
    }
    
  });

  //This is the list and grid toggle fundtions. 
  function listToggle() {
    if (document.getElementById('card').classList.contains('list')){
      alert("Already in list view.");
    } else if (document.getElementById('card').classList.contains('grid')){
      document.getElementById("card").classList.remove('grid');
      document.getElementsByClassName('cards')[0].classList.toggle('list');
    } else {
      document.getElementsByClassName('cards')[0].classList.toggle('list');
    }

}
  function gridToggle() {
    if (document.getElementById('card').classList.contains('grid')){
      alert("Already in grid view.");
    } else if (document.getElementById('card').classList.contains('list')){
      document.getElementById('card').classList.remove('list');
      document.getElementsByClassName('cards')[0].classList.toggle('grid');
    } else {
      document.getElementsByClassName('cards')[0].classList.toggle('grid');
    }

  }
  
function alertForm() {
  alert("Thank you for your commnet! we will get back to you as soon as possible.");
}