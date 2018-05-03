

$(document).ready(function() {
    var sh=$(window).height();
	var sw=$(window).width();
	$("").css({height:sh,width:sw});
	$(".boxBscroll").css({
		"-webkit-perspective":sw,
		perspective:sw
	});
	$("<img>",{
		src:"images/png/dessert2.png",
		width:"100%" 
		}).addClass("img2").appendTo(".img-fd");
	$(".img2").css({"opacity":"0","position":"absolute","z-index":10,left:-50, top:-50,width:"100%"});
	$(".img-fd").on({
		mouseenter:function(){
			$(".img1",this).fadeOut();
			$(".img2",this).fadeIn();

		},
		mouseleave:function(){
			$(".img1",this).fadeIn();
			$(".img2",this).fadeOut();
		}
	
	});
	
	var top=0;
	$(window).scroll(function(){
	top=$(window).scrollTop();
	});
	
	var up=0;
	var down=0;
	
$(document).ready(function() {
    var sh=$(window).height();
	$(".boxBscroll").css({height:sh});
	var top=0;
	$(window).scroll(function(){
	top=$(window).scrollTop();
	});
	
	var up=0;
	var down=0;
	
	// 마우스 휠 이벤트 작성
	$(window).on("DOMMouseScroll mousewheel", function(e){
	up=top-sh;
	down=top+sh;
	
		 if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
		// 마우스 휠을 올렸을 때
		$("html,body").stop().animate({scrollTop:up},500);
		$("h1").stop().animate({left:"-100%"},500,function(){
		$("h1").stop().animate({left:"0%"},500);
		});
		}else{
		// 마우스 휠을 내렸을 때
		$("html,body").stop().animate({scrollTop:down},500);
		$("h1").stop().animate({left:"-100%"},500,function(){
		$("h1").stop().animate({left:"0%"},500);
		});
		}
	
	});
	
});
	
});
