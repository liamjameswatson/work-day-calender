// Display the day
var today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM"));

var currentHour = today.format("ha");

currentHour = "12pm";

console.log(currentHour);

workArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// For each hour create a div, with a class of the hour and text of the hour
$(workArray).each(function (index) {
  var hourRow = $("<div>").addClass("row " + workArray[index]);
  $(".container").append(
    hourRow
      .addClass([index])
      .append(
        "<div class='col-2'></div><textarea class='col-8'></textarea><button class='col-2 saveBtn'></button>"
      )
  );
});
