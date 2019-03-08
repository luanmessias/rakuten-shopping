$(document).ready(function () {
    
    /*
    if (windowWidth < 1000) {
        $('.banner-horizontal').addClass('banners owl-carousel owl-theme');

        $('.banner-horizontal').owlCarousel({
            loop: true,
            nav: true,
            items: 1
        });
    }
    */

    $('.banner-slider').owlCarousel({
        loop: true,
        nav: true,
        items: 1
    });

    $('.listprod').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 4
            }
        }
    });


});
