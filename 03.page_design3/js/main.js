$(function () {
	// 硫붿씤鍮꾩＜�� 
	var slider1 = $('#main_visual .slider_wrap ul').bxSlider({		
		auto : true,
		mode:'vertical',
		pager : true,
	});

	$(document).on('click','#main_visual',function() {
		slider1.stopAuto();
		slider1.startAuto();
	});
	var pInterval;
	$('.btn_store_pop').on('click',function(e){
		e.preventDefault();
		$('#store_pop').addClass('on');
		clearInterval(pInterval);
		pInterval = setTimeout(storePopClose,2000);
	});
	function storePopClose(){
		$('#store_pop').removeClass('on');
	}
	$('#store_pop').on('click',function(e){
		$('#store_pop').removeClass('on');
	});


	

	$('.bubble_container').snowfall({image : 'images/bubble.png', minSize: 40, maxSize:300, flakeCount : 25});

});



(function( $ ) {




})( jQuery );