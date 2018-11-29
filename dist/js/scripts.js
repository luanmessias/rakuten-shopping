var windowWidth = window.innerWidth;

$(document).ready(function () {
    $('.header__mobsearch').click(function(){
        $('.header__mobsearch__bt').toggleClass('active');
        $('.header__search').toggleClass('active');
    });

    $('.header__mobmenu').click(function(){
        $(this).toggleClass('active');
        $('.navmob').toggleClass('active');
    });

    $('.mobmenu__item').click(function(){
        $(this).toggleClass('active');
    });
});


