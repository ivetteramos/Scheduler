var currentDayEL = document.querySelector("#currentDay")
var EventEl = $("button")

//Format for time and date set below 

var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// WHEN I open the planner
// THEN the current day and time is displayed at the top of the calendar

function enterEvent() {
    var textContent = $(this).siblings("textarea").val()
    console.log(textContent)
    var saveEvent = $(this).siblings("div").attr("id")
    localStorage.setItem(saveEvent, textContent)   
}

// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

$("#09").siblings("textarea").val(localStorage.getItem("09"))
$("#10").siblings("textarea").val(localStorage.getItem("10"))
$("#11").siblings("textarea").val(localStorage.getItem("11"))
$("#12").siblings("textarea").val(localStorage.getItem("12"))
$("#13").siblings("textarea").val(localStorage.getItem("13"))
$("#14").siblings("textarea").val(localStorage.getItem("14"))
$("#15").siblings("textarea").val(localStorage.getItem("15"))
$("#16").siblings("textarea").val(localStorage.getItem("16"))
$("#17").siblings("textarea").val(localStorage.getItem("17"))

EventEl.on("click", enterEvent)