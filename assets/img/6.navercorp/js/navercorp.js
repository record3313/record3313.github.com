$( document ).ready( function(){

	/* main slider */
	$('.summary .bxslider, .shortcut .bxslider, .recruit11 .bxslider').bxSlider({
			slideMargin: 0,
			pager: false
	});
	$('.visual_slide > .bxslider').bxSlider({
		slideMargin: 0,
		pager: true,
		controls: false
	});

	/* aside toggle */
	$(".open").on("click",function(e){
		e.preventDefault();
		$(".aside").children(".inner").toggleClass("on");
	});

});
