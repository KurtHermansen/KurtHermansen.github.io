const date = new Date();
var weekDay = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var day = date.getDay();
var dayN = date.getDate();
var month = date.getMonth();
var year = date.getUTCFullYear();
document.getElementById("currentDate").innerHTML = weekDay[day] + ", " + dayN + " " + monthName[month] + " " + year;
document.getElementById("currentYear").innerHTML = year;
