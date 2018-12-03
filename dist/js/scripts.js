var windowWidth = window.innerWidth;

$(document).ready(function () {

    $( ".allcat" ).clone().prependTo( ".navmob__cont" );
    $( ".header__top" ).clone().appendTo( ".navmob__cont" );

    $('.header__mobsearch').click(function(){
        $('.header__mobsearch__bt').toggleClass('active');
        $('.header__search').toggleClass('active');
    });

    $('.header__mobmenu').click(function(){
        $(this).toggleClass('active');
        $('.navmob').toggleClass('active');
    });

    $('.allcat__item').click(function(){
        $(this).toggleClass('active');
    });
});


