$(function () {

    // Menu Scroll
    $(window).scroll(function () {
        if ($('html,body').scrollTop() > 180) {
            $('.menuduoi .container ').addClass('menu-scroll');
        }
        else {
            $('.menuduoi .container ').removeClass('menu-scroll');

        }

    })
    // het window 1
    $(window).scroll(function () {
        if ($('html,body').scrollTop() > 250) {
            $('.chapter2 .intro').addClass('phongto');


        }
    })
    // het window 2
    $(window).scroll(function () {
        if ($('html').scrollTop() > 500) {
            $('a.nut').addClass('phongto2');
        }

    })
    $('.nd7 .len').click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: 0 })
    });

});