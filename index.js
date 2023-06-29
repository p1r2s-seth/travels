// hamburger-navbar
$(document).ready(function(){
	$(".hamburger").click(function(){
		$(".hamul").show()
	});
});
$(document).ready(function(){
	$(".cross").click(function(){
		$(".hamul").hide()
	});
});

// line

  	  	$(document).ready(function(){
  $(".masthead-heading").on({
    mouseenter: function(){
      $(".line").css("width", "110px");
    },  
    mouseleave: function(){
      $(".line").css("width", "75px");
    }  
  });
});


        $(document).ready(function(){
  $("#i1").on({
    mouseenter: function(){
      $(".line1").css("width", "75px");
    },  
    mouseleave: function(){
      $(".line1").css("width", "50px");
    }  
  });
});

                $(document).ready(function(){
  $("#i2").on({
    mouseenter: function(){
      $(".line2").css("width", "75px");
    },  
    mouseleave: function(){
      $(".line2").css("width", "50px");
    }  
  });
});

                        $(document).ready(function(){
  $("#i3").on({
    mouseenter: function(){
      $(".line3").css("width", "75px");
    },  
    mouseleave: function(){
      $(".line3").css("width", "50px");
    }  
  });
});

// smoothscroll

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});

// about us
$(document).ready(function(){
  $(".button").click(function(){
    $(".panel").slideToggle("slow");
  });
});

// navscroll
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 150){
            $(".navbar").css({"background-color":"#101010"});   
        }
        else{
            $(".navbar").css({"background-color":"transparent"});
        }

    });
});

var submitted=false;

// $(document).ready(function(){
//     $(window).scroll(function(){
//         if($(window).scrollTop() > 150){
//             $(".headerimg").css({"max-width":"20%"});   
//         }
//         else{
//             $(".headerimg").css({"max-width":"25%"});
//         }

//     });
// });




// ScrollReveal

// const sr = ScrollReveal({
//     distance: '60px',
//     duration: 2800,
//     // reset: true,
// })

// sr.reveal('.masthead-subheading, .masthead-heading'{
//     origin: 'top',
//     interval: 100,

// })

//CONTACT FORM
function closeForm() {
  $('.form-popup-bg').removeClass('is-visible');
}

$(document).ready(function($) {
  
  /* Contact Form Interactions */
  $('#btnOpenForm').on('click', function(event) {
    event.preventDefault();

    $('.form-popup-bg').addClass('is-visible');
  });
  
    //close popup when clicking x or off popup
  $('.form-popup-bg').on('click', function(event) {
    if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  
  });

  //CONTACT FORM FOR HOTEL 1
function closeForm() {
  $('.form-popup-bg').removeClass('is-visible');
}

$(document).ready(function($) {
  
  /* Contact Form Interactions */
  $('#btnOpenForm1').on('click', function(event) {
    event.preventDefault();

    $('.form-popup-bg').addClass('is-visible');
  });
  
    //close popup when clicking x or off popup
  $('.form-popup-bg').on('click', function(event) {
    if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  
  });


    //CONTACT FORM FOR HOTEL 2
function closeForm() {
  $('.form-popup-bg').removeClass('is-visible');
}

$(document).ready(function($) {
  
  /* Contact Form Interactions */
  $('#btnOpenForm2').on('click', function(event) {
    event.preventDefault();

    $('.form-popup-bg').addClass('is-visible');
  });
  
    //close popup when clicking x or off popup
  $('.form-popup-bg').on('click', function(event) {
    if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  
  });



      //CONTACT FORM FOR HOTEL 3
function closeForm() {
  $('.form-popup-bg').removeClass('is-visible');
}

$(document).ready(function($) {
  
  /* Contact Form Interactions */
  $('#btnOpenForm3').on('click', function(event) {
    event.preventDefault();

    $('.form-popup-bg').addClass('is-visible');
  });
  
    //close popup when clicking x or off popup
  $('.form-popup-bg').on('click', function(event) {
    if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  
  });