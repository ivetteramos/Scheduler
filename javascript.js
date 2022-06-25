var currentDayEL = document.querySelector("#currentDay")
var EventEl = $("button")


currentDayEL.textContent =  moment().format("MMM Do YY");



function enterEvent() {
    // this is the button and pulls from the siblings text area value 
    var textContent = $(this).siblings("textarea").val()
    console.log(textContent)
    // pulls out the attribute of "ID"
    var saveEvent = $(this).siblings("div").attr("id")
//    variables dont get quetes when you invoke them
    localStorage.setItem(saveEvent, textContent)
    
}

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