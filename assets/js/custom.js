$(function () {

	/* header fixed */
	$(window).on("scroll", function () {
		var ht = $(this).scrollTop();
		
		if (ht <= 0) {
			$("#header").removeClass("on");
		} else {
			$("#header").addClass("on");
		}
	});
	$(window).on("load",function(){

		/* Desktop PC check */
		var mobileArray = /Mobile|iPhone|od|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/;
		if(!navigator.userAgent.match(mobileArray)){
			$(".wrap").toggleClass("mob");
		}
		
		/* PC browser resize */
	    $(window).resize(function(){
	    	$(".mob").each(function pcOnly(){
			});
	    })
	    /* PC layout */
	    $(".mob").each(function pcOnly(){

		});

		/* fitText */
	    $.fn.fitText = function($kompressor, $option){
	        var compressor = $kompressor || 1,

	        setting = $.extend({
	            "minFontSize":Number.NEGATIVE_INFINITY,
	            "maxFontSize":Number.POSITIVE_INFINITY
	        }, $option);
	        
	        return $(this).each(function(){
	            var $this = $(this);

	            var resizer = function(){
	                var number = Math.max(Math.min($this.width() / (compressor*10), parseFloat(setting.maxFontSize)), parseFloat(setting.minFontSize));
	                $this.css({
	                    "font-size":number+"px",
	                    "line-height":number+"px"
	                })
	            };
	            resizer();
	            $(window).on("resize.fittext orientationchange.fittext",resizer)
	        })
	    };
	    $(".wrap").fitText(2,{minFontSize:"16px",maxFontSize:"32px"})
	});

	$('#container2').sliphover({
		target : '.box',
		caption : 'data-caption'
	});

});