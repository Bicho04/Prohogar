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
        speed: 600
    });

});
