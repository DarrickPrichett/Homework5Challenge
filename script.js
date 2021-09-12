$("#currentDay").text(moment().format("dddd, MMMM Do"))
$(".saveBtn").on("click", function(){
    var input=$(this).siblings(".description").val()
    console.log("This is first this", $(this))
    var time=$(this).parent().attr("id")
    localStorage.setItem(time, input)
})

hourCheck()
var interval = setInterval(hourCheck, 15000)
$("#hour-7 .description").val(localStorage.getItem("hour-7"))
$("#hour-8 .description").val(localStorage.getItem("hour-8"))
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))
$("#hour-18 .description").val(localStorage.getItem("hour-18"))

function hourCheck () {
    var currentHour = moment().hour()
    $(".time-block").each(function(){
        var compareHour = parseInt($(this).attr("id").split("-")[1]);
    

    console.log("This our currentHour", currentHour)
    console.log("this is compareHour", compareHour)
    
    if (currentHour === compareHour) {
        console.log("This is present block")
        $(this).addClass('present')
    } else if (currentHour > compareHour) {
        console.log("This is past block")
        $(this).removeClass('present')
        $(this).addClass('past')
    } else if (currentHour < compareHour) {
        console.log("This is future block")
        $(this).removeClass('present')
        $(this).removeClass('past')
        $(this).addClass('future')
    }
})
}

