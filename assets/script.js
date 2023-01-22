// Display the day
var today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM"));
var currentHour = today.format("ha");
workArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
currentHour = "1pm";
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

// for each row - compare each hour to the current hour and add past, present or future classes.
$("textarea").each(function (index) {
  // change 9am to 09am for string comparison
  $(".hour")[0].textContent = "09am";
  // hour = text in the hour class
  var hour = $(".hour")[index].textContent;
  if (hour === currentHour) {
    $(this).addClass("present");
  } else if ($(".hour")[index].textContent < currentHour) {
    $(this).addClass("past");
  } else {
    $(this).addClass("future");
  }
  console.log($(".hour")[index].textContent);
  // change back to 9am
  $(".hour")[0].textContent = "9am";
});
