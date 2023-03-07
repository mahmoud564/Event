$(function () {
    let slider=$(".sidenav")
$(".closebtn").click(function(){
    slider.animate({width: '0px'})
    $(".sp").animate({marginLeft: '0'})
    $("#main").animate({marginLeft: '0'})})
$(".sp").click(function(){
    if (slider.css('width')=='0px') {
       slider.animate({width: '250px'})
       $("#main").animate({marginLeft: '250'})}
       else{
        slider.animate({width: '0px'})
        $(".sp").animate({marginLeft: '0'})
       $("#main").animate({marginLeft: '0'})}
       })
       $("#singers h3").click(function (e) {   
        nextElement=$(e.target).next()
        $(e.target).siblings("div").slideUp(500)
        if (nextElement.css("display")=="none") {
            nextElement.slideDown(500)}
        else{nextElement.slideUp(500)}})
       let textarea=$(".col-md-6 textarea")
       textarea.on('input', function() {
        let textLength=$(".col-md-6 textarea").val().length;
        $("#char").text(100-textLength);
        if ($("#char").text()>0) {
            $("#char").text(100-textLength)
        }else{$("#char").text("your available character finished ")}});
    $(".sidenav a").click(function(e){
       let href=$(e.target).attr("href");
       let top = $(href).offset().top;
       $("body,html").animate({scrollTop:top},1000)
       });
       let dateEvent=new Date(2023,4,3)/1000/60/60/24
       let Datetoday=new Date()/1000/60/60/24
       let days=dateEvent-Datetoday-30
       let minutes=59-(new Date().getMinutes())
       let hours=23-(new Date().getHours())
       let seconds=59-(new Date().getSeconds())
       setInterval(() => {
        seconds--
        if (seconds<0) {
            seconds=59
             minutes--}
        if (minutes<0) {
            minutes=59}
            if (hours<0) {  
                hours=23}
            if (days<0) {
              alert("time is Over")}
        $("#seconds").text(`${seconds.toFixed(0)} s`)
        $("#minutes").text(`${minutes.toFixed(0)} m`)
       $("#hours").text(`${hours.toFixed(0)} h`)
       $("#days").text(`${days.toFixed(0)} D`)
       }, 1000);
      
       

});

