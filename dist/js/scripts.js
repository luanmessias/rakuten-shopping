var breakPoint = 1000;

function setActive(e) {
    $(e).toggleClass('active');
}

function myMenu() {
    scrtop = $(window).scrollTop();
    offbtm = $foot.offset().top - (margin * 2 + $stick.height());

    if ($(window).outerWidth() >= breakPoint) {
        if (scrtop > offtop && $stick.hasClass('mymenu')) {
            $stick.addClass('fixed').css('top', margin);
        }
        if (offtop > scrtop && $stick.hasClass('fixed')) {
            $stick.removeClass('fixed').css('top', 'auto');
        }
        if (scrtop > offbtm && $stick.hasClass('fixed')) {
            $stick.removeClass('fixed').addClass('bottom').css('top', offbtm + margin);
        }
        if (offbtm > scrtop && $stick.hasClass('bottom')) {
            $stick.removeClass('bottom').addClass('fixed').css('top', margin);
        }
    }
}

//On ready functions
$(document).ready(function () {
    $(".nrk_menu").clone().prependTo(".navmob__cont");
    $(".nrk_header__top").clone().appendTo(".navmob__cont");

    $('.nrk_header__mobsearch').click(function () {
        $('.nrk_header__mobsearch__bt, .nrk_header__search, #header').toggleClass('active');
    });

    $('.nrk_header__mobmenu').click(function () {
        $(this).toggleClass('active');
        $('.navmob').toggleClass('active');
    });

    $('.nrk_menu__item').click(function () {
        $(this).toggleClass('active');
    });

    $('.hicons__flags').click(function () {
        $(this).toggleClass('active');
    });

    $('.nrk_header__user__menu').click(function () {
        $(this).toggleClass('active');
    });

    $('.mymenu__mob').click(function () {
        $(this).toggleClass('active');
    });

   

    //FIXED ASIDE - MY ACCOUNT
    if ($('.mymenu').length == 1) {
        $stick = $('.mymenu');
        $foot = $('#footer');
        margin = 60;
        offtop = $stick.offset().top - margin;
        offbtm = $foot.offset().top - (margin * 2 + $stick.height());

        $(window).scroll(function () {
            myMenu();
        });

        $(window).resize(function () {
            myMenu();
        });
    }

});


//On Load responsive functions
$(window).on('load', function () {
    if ($(window).outerWidth() <= breakPoint) {
        $(".wrapper > .nrk_header__user").appendTo($(".navmob__welcome"));
    }
});

//On resize functions
$(window).resize(function () {

    if ($(window).outerWidth() <= breakPoint && $('.nrk_header .wrapper > .nrk_header__user').length == 1) {
        $('.nrk_header .wrapper > .nrk_header__user').appendTo($(".navmob__welcome"));
    }

    if ($(window).outerWidth() > breakPoint && $('.navmob__welcome > .nrk_header__user').length == 1) {
        $('.navmob__welcome > .nrk_header__user').appendTo($(".nrk_header__middle > .wrapper"));
    }
});

//Scroll functions
jQuery(window).scroll(function (event) {
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 118 & $(window).outerWidth() >= breakPoint) {
        jQuery('.nrk_header').addClass('active');
    } else if (scroll <= 117 & $(window).outerWidth() >= breakPoint) {
        jQuery('.nrk_header').removeClass('active');
    }

    if (scroll >= 40 & $(window).outerWidth() <= breakPoint) {
        jQuery('.nrk_header').addClass('active');
    } else if (scroll <= 39 & $(window).outerWidth() <= breakPoint) {
        jQuery('.nrk_header').removeClass('active');
    }

});

