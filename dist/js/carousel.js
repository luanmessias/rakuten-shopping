$(document).ready(function () {
    
    if (windowWidth < 1000) {
        $('.secprod__banner').addClass('banners owl-carousel owl-theme');

        $('.secprod__banner').owlCarousel({
            loop: true,
            nav: true,
            items: 1
        });
    }

    $('.banners').owlCarousel({
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
