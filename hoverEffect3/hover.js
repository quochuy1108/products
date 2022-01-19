$(function () {
    TweenMax.staggerFrom($('.col-3'),1,{top:100,opacity:0},0.1)
    $('.container.seemore .col-3').slideUp(0)
    $('button').click(function (e) { 
        e.preventDefault();
        $('.container.seemore .col-3').slideToggle(5)
        TweenMax.staggerFrom($('.container.seemore .col-3'),1,{left:-200,opacity:0},)
        $('html,body').animate({scrollTop:1000,})
    });
});