const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=cb1e61a118d4bf7f7b819f989206909f';

fetch(apiURL2)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    console.table(jsonObject); // temporary checking for valid response and data parsing   
    const day_list = document.querySelector("#forecastDay")
    const temp_list = document.querySelector("#forecastImg")
    const temp_icon = document.querySelector("#forecastTemp")
    const list = jsonObject['list'];

    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    for (let i = 0; i < list.length; i++) {
      if (jsonObject.list[i].dt_txt.includes('18:00:00')) {
        console.log(list[i].dt_txt);
        let d = new Date(list[i].dt_txt)

        //Creating the Dates for the five days
        const day = document.createElement("th")
        day_detail = daysOfWeek[d.getDay()]
        day.innerHTML = day_detail
        day_list.append(day)

        // creating the temperate forcast
        const temp_detail = document.createElement('th')

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