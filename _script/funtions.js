// var navigation = responsiveNav(".header-menu");

$(function(){
    // $('.casa-imagenes').owlCarousel({
    //     autoplay: true,
    //     autoplayTimeout: 20000,
    //     autoplayHoverPause: true,
    //     center: true,
    //     loop: true,
    //     margin: 0,
    //     nav: false,
    //     items: 1
    // })
      
    // $('.casa-imagenes').owlCarousel({
    //     autoplay: true,
    //     autoplayTimeout: 5000,
    //     autoplayHoverPause: true,
    //     autoWidth: true,
    //     center:  true,
    //     loop: true,
    //     margin: 50,
    //     dots: true,
    //         navText:  [ 'anterios', 'siguiente' ],
    //     responsive: {
    //         0: {
    //             items: 2
    //         },
    //         600: {
    //             items: 3
    //         },
    //         1000: {
    //             items: 4
    //         }
    //     }
    // })
    $("#casa-imagenes").responsiveSlides({
        manualControls: '#casa-imagenes-control',
        auto: true,             // Boolean: Animate automatically, true or false
        speed: 500,            // Integer: Speed of the transition, in milliseconds
        timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
        pager: true,           // Boolean: Show pager, true or false
        nav: false,             // Boolean: Show navigation, true or false
        random: false,          // Boolean: Randomize the order of the slides, true or false
        pause: false,           // Boolean: Pause on hover, true or false
        pauseControls: true,    // Boolean: Pause when hovering controls, true or false
        });

});
