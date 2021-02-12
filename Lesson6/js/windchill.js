    let temp = parseInt(document.getElementById("temp").innerHTML);
    let wind = parseInt(document.getElementById("wind").innerHTML); 
    let windchill = windChill(temp, wind)
    document.getElementById("output").innerHTML = windchill + "&#8457";
    document.getElementById("temp").innerHTML = temp + "&#8457";
    document.getElementById("wind").innerHTML = `${wind} mph`;

  function windChill(t, s) {
    if (t < 50 && s > 3){
    let s1 = Math.pow(s, 0.16)
    let ts = 0.4275 * t * s1;
    let f = 35.74 + 0.6215 * t - (35.75 * s1) + ts;
    return f.toFixed(0);
  } else {
    return "N/A"
  }
}