// var nav = responsiveNav("nav.header-menu");

$(function listaCasas(){
  $('section.cuadro-paso4 #info').owlCarousel({
    responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
        }
  });
});
$(function listaCasas(){
  $('section.cuadro-pasoTerrenos .cuadro-info').owlCarousel({
    responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
        }
  });
});

$(function slider(){
  $("#section-casas .casa-imagenes").responsiveSlides({
    manualControls: '.casa-imagenes-control',
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,             // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,            // Boolean: Show pager, true or false
    nav: false,             // Boolean: Show navigation, true or false
    random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: false,           // Boolean: Pause on hover, true or false
    pauseControls: true,    // Boolean: Pause when hovering controls, true or false
    });
});
$(function slider(){
  $("#section-casas .terrenos-imagenes").responsiveSlides({
    manualControls: '.casa-imagenes-control',
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 500,             // Integer: Speed of the transition, in milliseconds
    timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
    pager: true,            // Boolean: Show pager, true or false
    nav: false,             // Boolean: Show navigation, true or false
    random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: false,           // Boolean: Pause on hover, true or false
    pauseControls: true,    // Boolean: Pause when hovering controls, true or false
    });
});


function miles(donde,caracter){
  pat = /[\*,\+,\(,\),\?,\,$,\[,\],\^]/
  valor = donde.value
  largo = valor.length
  crtr = true
  if(isNaN(caracter) || pat.test(caracter) == true){
    if (pat.test(caracter)==true){ 
      caracter = "\" + caracter "
    }
    carcter = new RegExp(caracter,"g")
    valor = valor.replace(carcter,"")
    donde.value = valor
    crtr = false
  }
  else{
    var nums = new Array()
    cont = 0
    for(m=0;m<largo;m++){
      if(valor.charAt(m) == "." || valor.charAt(m) == " ")
        {continue;}
      else{
        nums[cont] = valor.charAt(m)
        cont++
      }
    }
  }
  var cad1="",cad2="",tres=0
  if(largo > 3 && crtr == true){
    for (k=nums.length-1;k>=0;k--){
      cad1 = nums[k]
      cad2 = cad1 + cad2
      tres++
      if((tres%3) == 0){
        if(k!=0){
          cad2 = "." + cad2
        }
      }
    }
    donde.value = cad2
  }
};






$(function(){
  $('#cont-pasos section.cuadro-paso2').addClass('is-hidden');
  $('#cont-pasos section.cuadro-paso3').addClass('is-hidden');
  $('#cont-pasos section.cuadro-pasoTerrenos').addClass('is-hidden');
  $('#cont-pasos section.cuadro-paso4').addClass('is-hidden');
  $('#cont-pasos section.casas').addClass('is-hidden');
  $('#cont-pasos section.terrenos').addClass('is-hidden');
  $('#cont-pasos section.cuadro-paso5').addClass('is-hidden');


  $('#id_lugar').on('keyup change', function(){
  $lugar = $(this);
  if ($lugar !== 0) {

    // $('.cuadro-paso2 h3').html($lugar.val());
    $('#cont-pasos section.cuadro-paso2').removeClass('is-hidden');

    $('html, body').animate({
      scrollTop: $("#cont-pasos section.cuadro-paso2").offset().top
        }, 500);

   } else {}

   });
  $('#aPaso3').click(function(){
    $('#cont-pasos section.cuadro-paso3').removeClass('is-hidden');
    $('html, body').animate({
      scrollTop: $("#cont-pasos section.cuadro-paso3").offset().top
        }, 500);
  });
});

function tieneTerreno() {
  $('#cont-pasos section.cuadro-paso4').removeClass('is-hidden');
  $('#cont-pasos section.casas').removeClass('is-hidden');
  $('#cont-pasos section.cuadro-pasoTerrenos').addClass('is-hidden');
  $('#cont-pasos section.terrenos').addClass('is-hidden');
  $('html, body').animate({
    scrollTop: $("#cont-pasos section.cuadro-paso4").offset().top
      }, 500);
};
function noTieneTerreno() {
  $('#cont-pasos section.cuadro-pasoTerrenos').removeClass('is-hidden');
  $('#cont-pasos section.terrenos').removeClass('is-hidden');
  $('#cont-pasos section.cuadro-paso4').addClass('is-hidden');
  $('#cont-pasos section.casas').addClass('is-hidden');
  $('html, body').animate({
    scrollTop: $("#cont-pasos section.cuadro-pasoTerrenos").offset().top
      }, 500);
};

$('#aPaso5').click(function(){
  $('#cont-pasos section.cuadro-paso5').removeClass('is-hidden');
  $('html, body').animate({
    scrollTop: $("#cont-pasos section.cuadro-paso5").offset().top
      }, 500);
})
$('#aPaso4').click(function(){
  $('#cont-pasos section.cuadro-paso4').removeClass('is-hidden');
  $('#cont-pasos section.casas').removeClass('is-hidden');
  $('html, body').animate({
    scrollTop: $("#cont-pasos section.cuadro-paso4").offset().top
      }, 500);
})


var casaMatriz = (function () {
  var myLatlng = new google.maps.LatLng(-25.315644,-57.598487),
      mapCenter = new google.maps.LatLng(-25.315644,-57.598487),
      mapCanvas = document.getElementById('mapa'),
      mapOptions = {
        center: mapCenter,
        zoom: 17,
        scrollwheel: false,
        draggable: true,
        disableDefaultUI: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      },
      map = new google.maps.Map(mapCanvas, mapOptions),
      contentString =
        '<div class="content">'+
        '<div class="siteNotice">'+
        '</div>'+
        '<h6 id="firstHeading" class="firstHeading">Prohogar</h6>'+
        // '<div class="bodyContent"'+
        // '<p>Avda. Curupayty c/Adrián Jara, Edif.Globo P.B.</p>'+
        // '</div>'+
        '</div>',
      infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
      }),
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Casa Matriz'
      });

  return {
    init: function () {
      map.set('styles', [{
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          { hue: '#ffff00' },
          { saturation: 30 },
          { lightness: 60}
        ]}
      ]);

      google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map,marker);
      });
    }
  };
}());
casaMatriz.init();