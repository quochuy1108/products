// globe
$(".background .bigframe .globe").click(function (e) {
    e.preventDefault();
    $(".background .bigframe .unit").removeClass("out2");
    $(".background .bigframe .unit").toggleClass("dilen");
    $(".background .bigframe .signinup").removeClass("dilen2");



});

// user
$(".background .bigframe .user").click(function (e) {
    e.preventDefault();
    $(".background .bigframe .signinup").toggleClass("dilen2");
    $(".background .bigframe .unit").addClass("out2");
    $(".background .bigframe .unit").removeClass("dilen");

});


// inb
$(".inb").click(function (e) {
    e.preventDefault();
    $(".chat").toggleClass("ok");
    $(".inb").addClass("out3");

});
// X
$(".chat .X").click(function (e) {
    e.preventDefault();
    $(".chat").removeClass("ok");

    $(".chat").removeClass("ok");
    $(".inb").removeClass("out3");

});
