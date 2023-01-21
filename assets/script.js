// Display the day
var today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM"));

var currentHour = today.format("ha");

console.log(currentHour);
