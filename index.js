$("h1").css("color", "Red");

$(".top-div").css({"margin": "auto", "width": "500px"});

$(".logo").css({"width": "100px", "display": "block"});

$(".btn-1").css({"margin-bottom": "15px", "margin-top": "15px"});

//Dissapear .intro on .btn click

$(".btn-1").click(function () {
    $(".intro").hide();
});

$("h1").dblclick(function () {
    $(".btn-2").hide();
});

$(".logo").click(function () {
    $(this).hide();
});

$(".span-2").click(function () {
    $(".span-1").hide();
});

// get alert on hover

$(".p-2").mouseenter(function () {
   alert("created using .mouseenter");
});

$(".p-3").mouseleave(function () {
   alert("created using .mouseleave");
});


// hide and show

$(".p-4").click(function () {
   $(".p-5").hide();
});

$(".p-6").click(function () {
   $(".p-5").show(3000);
});

$(".btn-3").click(function(){
   $(".p-7").toggle();
});

$("btn-4").click(function(){
   $("p-8").fadeIn(1000);
   $("p-9").fadeIn(2000);
   $("p-10").fadeIn(3000);
});




