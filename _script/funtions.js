$(function listaCasas(){
  $('section.cuadro-paso4 .cuadro-info').owlCarousel();
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
  $('#input-ingreso').on('keyup change', function(){
    $t = $(this);

    var ingreso = '';
    $('#input-ingreso').each(function(){
      ingreso = $t.val();
      
    })
    
    var montoTotal_a_financiar= ingreso;

    $('#entrega .entreg-montoTotal').html(montoTotal_a_financiar);
  });
});

$(function(){
  $('section.cuadro-paso2').addClass('is-hidden');
  $('section.cuadro-paso3').addClass('is-hidden');
  $('section.cuadro-pasoTerrenos').addClass('is-hidden');
  $('section.cuadro-paso4').addClass('is-hidden');
  $('section.casas').addClass('is-hidden');
  $('section.terrenos').addClass('is-hidden');
  $('section.cuadro-paso5').addClass('is-hidden');


  $('#id_lugar').on('keyup change', function(){
  $lugar = $(this);
  if ($lugar !== 0) {

    // $('.cuadro-paso2 h3').html($lugar.val());
    $('section.cuadro-paso2').removeClass('is-hidden');

    $('html, body').animate({
      scrollTop: $("section.cuadro-paso2").offset().top
        }, 1000);

   } else {}

   });

  $('#input-ingreso').on('keyup change', function(){
  $t = $(this);
  if ($t !== 0) {

    // $('.cuadro-paso2 h3').html($lugar.val());
    $('section.cuadro-paso3').removeClass('is-hidden');
    $('html, body').animate({
      scrollTop: $("section.cuadro-paso3").offset().top
        }, 1000);

   } else {}

   });
  


});

function tieneTerreno() {
  $('section.cuadro-paso4').removeClass('is-hidden');
  $('section.casas').removeClass('is-hidden');
  $('section.cuadro-pasoTerrenos').addClass('is-hidden');
  $('section.terrenos').addClass('is-hidden');
  $('html, body').animate({
    scrollTop: $("section.cuadro-paso4").offset().top
      }, 1000);
};
function noTieneTerreno() {
  $('section.cuadro-pasoTerrenos').removeClass('is-hidden');
  $('section.terrenos').removeClass('is-hidden');
  $('section.cuadro-paso4').addClass('is-hidden');
  $('section.casas').addClass('is-hidden');
  $('html, body').animate({
    scrollTop: $("section.cuadro-pasoTerrenos").offset().top
      }, 1000);
};

$('#aPaso5').click(function(){
  $('section.cuadro-paso5').removeClass('is-hidden');
  $('html, body').animate({
    scrollTop: $("section.cuadro-paso5").offset().top
      }, 1000);
})



