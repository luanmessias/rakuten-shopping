var breakPoint = 1000;
var windowWidth = $(window).innerWidth();


//On ready functions
$(document).ready(function () {

    $( ".allcat" ).clone().prependTo( ".navmob__cont" );
    $( ".nrk_header__top" ).clone().appendTo( ".navmob__cont" );

    $('.nrk_header__mobsearch').click(function(){
        $('.nrk_header__mobsearch__bt').toggleClass('active');
        $('.nrk_header__search').toggleClass('active');
    });

    $('.nrk_header__mobmenu').click(function(){
        $(this).toggleClass('active');
        $('.navmob').toggleClass('active');
    });

    $('.allcat__item').click(function(){
        $(this).toggleClass('active');
    });
    
});

//On Load responsive functions
$( window ).load(function() {
    if(windowWidth <= breakPoint){
        $( ".nrk_header__user" ).appendTo( $(".navmob__welcome") );
    }
});

//On resize functions
$( window ).resize(function() {

    if(windowWidth <= breakPoint && $('.nrk_header .wrapper .nrk_header__user').length){ 
        $( ".nrk_header__user" ).appendTo( $(".navmob__welcome") );
    }
    
    if(windowWidth > breakPoint && $('.navmob__welcome .nrk_header__user').length){ 
        $( ".nrk_header__user" ).appendTo( $(".nrk_header .wrapper") );
    }
});


//Scroll functions
jQuery(window).scroll(function (event) {
    var scroll = jQuery(window).scrollTop();
    //console.log(scroll);
    if (scroll >= 118) {
        jQuery('.nrk_header').addClass('active');
    } else if (scroll <= 117) {
        jQuery('.nrk_header').removeClass('active');
    }
});
