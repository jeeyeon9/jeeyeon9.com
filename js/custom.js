
// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); //지속 시간을 설정.   
});

/* HTML문서가 로드되었습니다. DOM이 준비되었습니다.. 
-------------------------------------------*/
$(function(){

  // ------- WOW ANIMATED ------ //
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // ------- JQUERY PARALLAX ---- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#gallery').parallax("100%", 0.1);
    $('#menu').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();


  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  $('#gallery a').nivoLightbox({
        effect: 'fadeScale',
    });

});

