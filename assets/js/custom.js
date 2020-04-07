$(function () {

	/* header fixed */
	$(window).on("scroll", function () {
		var ht = $(this).scrollTop();
		
		if (ht <= 40) {
			$("#header").removeClass("on");
		} else {
			$("#header").addClass("on");
		}
	});
	$(window).on("load",function(){

		/* Desktop PC check */
		var mobileArray = /Mobile|iPhone|od|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/;
		
		if(!navigator.userAgent.match(mobileArray)){
			$('#container2').sliphover({
				target : '.box',
				caption : 'data-caption'
			});
		}else{
			// mobile scroll position
			setTimeout(function(){
				window.scrollTo(0, 25);
			},100)
		}
	});
	/* tooltip */
	$(".tooltip").each(function(){
		$(this).children(".btn-tooltip").on("click",function(){

			$(this).next(".tooltip-pop").toggle();

			if( $(this).next(".tooltip-pop").css("display") == "block" ){
				$("body").click(function(body){
					if(!$(body.target).hasClass("btn-tooltip")){
						$(".tooltip-pop").hide()
					}
				})
		    }
		})
	});

});