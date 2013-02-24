/*
============================================================
  SLIDE
============================================================
*/

$(function(){
  var slider = $('#slider').bxSlider({
	auto: true,
    pause: 8000,
    controls: false,
    randomStart: true
  });

  $('#go-prev').click(function(){
    slider.goToPreviousSlide();
    return false;
  });

  $('#go-next').click(function(){
    slider.goToNextSlide();
    return false;
  });
  slider.reloadShow();
});	

/*
============================================================
  CUFON
============================================================
*/

Cufon.replace('#slider .slide-1 h1', { fontFamily: 'Terminal Dosis' });


Cufon.replace('#slider .slide-2 h1', { fontFamily: 'Terminal Dosis' });

Cufon.replace('#slider .slide-3 h1', { fontFamily: 'Terminal Dosis' });

Cufon.replace('#slider .slide-4 h1', { fontFamily: 'Terminal Dosis' });

Cufon.replace('#content .section-title h1', { fontFamily: 'Terminal Dosis' });

Cufon.replace('#content .call-to-action .promo h1', { fontFamily: 'Terminal Dosis' });

Cufon.replace('#pricing-table .plan .header h2', { fontFamily: 'Terminal Dosis' });

Cufon.replace('#get-in-touch .section-title h1', { fontFamily: 'Terminal Dosis' });

Cufon.replace('#updates .section-title h1', { fontFamily: 'Terminal Dosis' });

Cufon.replace('#about-us .section-title h1', { fontFamily: 'Terminal Dosis' });


/*
============================================================
  STICKY SIDEBAR
============================================================
*/

$(function () {
$("#sidebar").stickySidebar({
    timer: 400
  , easing: "easeInOutBack"
});
});

/*
============================================================
  COLORBOX
============================================================
*/

jQuery(document).ready(function () {
    jQuery('a.screenshots').colorbox({ opacity:0.5 , rel:'screenshots' });
});

jQuery(document).ready(function () {
    jQuery('#nav-01').colorbox({ inline:true, href:"#about-us" });
});

jQuery(document).ready(function () {
    jQuery('#nav-02').colorbox({ inline:true, href:"#updates" });
});


jQuery(document).ready(function () {
    jQuery('#nav-03').colorbox({ inline:true, href:"#get-in-touch" });
});