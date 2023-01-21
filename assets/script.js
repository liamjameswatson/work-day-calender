// Display the day
var today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM"));

var currentHour = today.format("ha");

console.log(currentHour);

workArray = [9, 10, 11, 12, 1, 2, 3, 4, 5];

$(workArray).each(function (index) {
  var hourDiv = $("<div>");

  $(".container").append(hourDiv.addClass([index]));
});
