var navigation = responsiveNav(".header-menu");
$(function(){
      
    $('.pictures').owlCarousel({
        autoplay: true,
        autoplayTimeout: 20000,
        autoplayHoverPause: true,
        center: true,
        loop: true,
        margin: 0,
        nav: false,
        items: 1
    })
      
    $('.actividades').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoWidth: true,
        center:  true,
        loop: true,
        margin: 50,
        dots: true,
            navText:  [ 'anterios', 'siguiente' ],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    

});