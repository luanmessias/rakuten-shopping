var breakPoint = 1000;
var windowWidth = $(window).innerWidth();

function setActive(e) {
    $(e).toggleClass('active');
}

//On ready functions
$(document).ready(function () {

    $( ".nrk_menu" ).clone().prependTo( ".navmob__cont" );
    $( ".nrk_header__top" ).clone().appendTo( ".navmob__cont" );
    
    $('.nrk_header__mobsearch').click(function(){
        $('.nrk_header__mobsearch__bt').toggleClass('active');
        $('.nrk_header__search').toggleClass('active');
    });

    $('.nrk_header__mobmenu').click(function(){
        $(this).toggleClass('active');
        $('.navmob').toggleClass('active');
    });

    $('.nrk_menu__item').click(function(){
        $(this).toggleClass('active');
    });

    $('.hicons__flags').click(function(){
        $(this).toggleClass('active');
    });

    $('.nrk_header__user__menu').click(function(){
        $(this).toggleClass('active');
    });
    
});


//On Load responsive functions

$(window).on('load', function() {
    if($(window).innerWidth() <= breakPoint){
        $( ".wrapper > .nrk_header__user" ).appendTo( $(".navmob__welcome") );
    }
});

//On resize functions
$( window ).resize(function() {

    if($(window).innerWidth() <= breakPoint && $('.nrk_header .wrapper > .nrk_header__user').length == 1){ 
        $('.nrk_header .wrapper > .nrk_header__user').appendTo( $(".navmob__welcome") );
    }
    
    if($(window).innerWidth() > breakPoint && $('.navmob__welcome > .nrk_header__user').length == 1){ 
        $('.navmob__welcome > .nrk_header__user').appendTo( $(".nrk_header__middle > .wrapper") );
    }
});


//Scroll functions
jQuery(window).scroll(function (event) {
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 118 & $(window).innerWidth() >= breakPoint) {
        jQuery('.nrk_header').addClass('active');
    } else if (scroll <= 117 & $(window).innerWidth() >= breakPoint) {
        jQuery('.nrk_header').removeClass('active');
    }

    if (scroll >= 40 & $(window).innerWidth() <= breakPoint) {
        jQuery('.nrk_header').addClass('active');
    } else if (scroll <= 39 & $(window).innerWidth() <= breakPoint) {
        jQuery('.nrk_header').removeClass('active');
    }

});
