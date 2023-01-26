// Display the day
var today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM"));
var currentHour = today.format("ha");

workArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
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
          "</div><textarea class='col-8 description'></textarea><button class='col-2 saveBtn'></button>"
      )
  );
});

// for each row - compare each hour to the current hour and add past, present or future classes.
$(".row").each(function (index) {
  // change 9am to 09am for string comparison
  // console.log($(".hour")[0]);
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
  // console.log($(".hour")[index].textContent);
  // change back to 9am
  $(".hour")[0].textContent = "9am";
});
// Save textarea and time to local storage
$(".saveBtn").on("click", function (event) {
  // Get the local storage
  for (var i = 0; i < localStorage.length; i++) {
    // logging local storage[i]
    // console.log(Object.values(localStorage)[i]);
    // logging hour
    // console.log($(this).siblings(".hour").text());
    // if they're the same
    if (Object.values(localStorage)[i] === $(this).siblings(".hour").text()) {
      // remove item
      localStorage.removeItem([i]);
    }
  }
  // console.log(localStorage);
  // Get text from text area
  var textToSave = $(event.target).prev().val();
  // get time
  var hourToSave = $(this).siblings(".hour").text();

  // save to local storage
  localStorage.setItem(hourToSave, textToSave);
});

$(".hour").each(function (index) {
  for (var i = 0; i < localStorage.length; i++) {
    var textToDisplay = localStorage.key(i);
    var hourToDisplay = localStorage.getItem(textToDisplay);

    if ($(this).text() === hourToDisplay) {
      $(this).siblings(".description").val(textToDisplay);
    }
  }
});

textToCheck = $(this).siblings(".hour").text();
console.log($(".time-block9am>textarea"));

$(".time-block9am>textarea").val(localStorage.getItem("9am"));
$(".time-block10am>textarea").val(localStorage.getItem("10am"));
$(".time-block11am>textarea").val(localStorage.getItem("11am"));
$(".time-block12pm>textarea").val(localStorage.getItem("12pm"));
$(".time-block1pm>textarea").val(localStorage.getItem("1pm"));
$(".time-block2pm>textarea").val(localStorage.getItem("2pm"));
$(".time-block3pm>textarea").val(localStorage.getItem("3pm"));
$(".time-block4pm>textarea").val(localStorage.getItem("4pm"));
$(".time-block5pm>textarea").val(localStorage.getItem("5pm"));
