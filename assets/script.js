// Display the day
var today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM"));
var currentHour = today.format("ha");
workArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
currentHour = "12pm";
// For each hour create a div, with a class of the hour and text of the hour
$(workArray).each(function (index) {
  // create a div = add classes row timeblock and the hour - append to container
  var hourRow = $("<div>").addClass("row time-block" + workArray[index]);
  $(".container").append(
    hourRow
      .addClass([index])
      .attr("id", [index])
      // to each row - append a div, textarea and button
      .append(
        "<div class='col-2 hour'>" +
          workArray[index] +
          "</div><textarea class='col-8'></textarea><button class='col-2 saveBtn'></button>"
      )
  );
});

// for each row
$(".row").each(function (index) {
  // if the current hour === text
  if (currentHour === $(this).text()) {
    // store the hourIndex = currentHour[index]
    var hourIndex = [index][0];
    console.log(hourIndex);
    // change colour to red
    $(this).css("background-color", "red");
    console.log(hourIndex);
  } else {
    console.log($(".row")[index]);
    if (hourIndex < $(this).index) {
      console.log("greater");
    }
  }
});
