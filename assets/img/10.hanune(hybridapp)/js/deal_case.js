/* 
*   @Version    : 0.1
*   @Name       : deal_case.js
*   @page       : 거래사례열람
*   @Writer     : 2020-03-14 Doeon_Kim
* - - - - - - - - - - - - - - - - - - -
*   @update     : 2020-03-14 최초작성
* - - - - - - - - - - - - - - - - - - -
*/

/******************************
           common
******************************/
/* popup open */
function layerpopupOpen(target){
	$(".popup"+"."+target).stop().css({"display":"flex","opacity":"0"}).animate({"opacity":"1"},350).addClass('active');
}

(function($){

	$(window).on("load",function(){

		/* PC browser resize */
	    $(window).resize(function(){
	    	$(".pc-only").each(function pcOnly(){
			});
	    })

		/* Desktop PC check */
		var mobileArray = /Mobile|iPhone|od|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/;
		if(!navigator.userAgent.match(mobileArray)){
			$(".wrap").addClass("pc-only").next(".popup").addClass("pc-only");
		}

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

	    /* PC layout */
	    $(".pc-only").each(function pcOnly(){
			
			var aside_wid = $(".wrap").find(".popup.aside").width();
			var default_popup = $(".popup.default").find(".popup-layer");

			$(this).find(".map-cont .btn-popup").on("click",function(){

				$(".popup.aside").addClass("active");
				default_popup.css("width","100%").css("width","-=" + aside_wid + "px")

				$(window).resize(function(){

			    	if( $(".popup.aside").hasClass("active") ){
						default_popup.css("width","100%").css("width","-=" + aside_wid + "px")
					}else{
						default_popup.css("width","100%")
					}
			    })
			})
			$(this).find(".map .tab-button .btn-popup").on("click",function(){

				if( $(".popup.aside").hasClass("active") ){
					default_popup.css("width","100%").css("width","-=" + aside_wid + "px")
				}else{
					default_popup.css("width","100%")
				}
				$(window).resize(function(){
				})
			})
			$(this).find(".popup.aside .btn-x").not(".popup.fullscreen .btn-x").on("click",function(){
				$(".popup.aside").removeClass("active");
				default_popup.css("width","100%")
			});
			$(this).find(".popup.default .btn-x").on("click",function(){
				$(".popup.aside").removeClass("active");
				default_popup.css("width","100%")
			});
		});

	  	/* popup close */
		$(".popup .dim").on("click",function(dim){
			$(dim.target).closest(".popup").each(function(){
				if( $(this).css("display") == "block" || $(this).css("display") == "flex" ){
					$(this).fadeOut(350);
					$(this).removeClass("active");	
				}
			});
		});
		$(".popup .btn-x").on("click",function(){
			$(this).closest(".popup").fadeOut(350);	
			$(this).closest(".popup").removeClass("active");
		});

	    /* tooltip */
		$(".tooltip").each(function(){
			$(this).children(".btn-tooltip").on("click",function(){

				$(this).next(".tooltip-pop").toggle();

				if( $(this).next(".tooltip-pop").css("display") == "block" ){
					$(".wrap").click(function(wrap){
						if(!$(wrap.target).hasClass("btn-tooltip")){
							$(".tooltip-pop").hide()
						}
					})
			    }
			})
		});

		/* toggle */
		$(".btn-division").bind("click",function(){
			$(this).toggleClass("active");
		})

		/* btn-filter */
		$(".btn-filter").bind("click",function(){
			if( !$(this).hasClass("active") ){
				$(this).toggleClass("active").closest(".map-menu").siblings(".tab-button").children("li").removeClass("active")
			}
		});

		/* tab-button */
		$(".tab-button li").bind("click",function(){
			if( !$(this).hasClass("active") ){
				$(this).toggleClass("active").siblings().removeClass("active")
				$(this).closest(".tab-button").siblings(".map-menu").children(".btn-filter").removeClass("active");
			}
		});

		/* tab-anchor */
		$(".tab-anchor li").bind("click",function(){
			if( !$(this).hasClass("active") ){
				$(this).toggleClass("active").siblings().removeClass("active")
			}
		});

	    /* roadview */
	    $(".btn-roadview").bind("click",function(){
	    	if( !$(".tab-anchor").children("li:eq(0)").hasClass("active") ){
				$(".tab-anchor").children("li:eq(0)").toggleClass("active").siblings().removeClass("active")
			}
	    })

		// $(".contents").on("scroll",function(){
		// 	var scroll = $(this).scrollTop();
		// 	var $cont01 = $("#cont01").offset().top;
		// 	var $cont02 = $("#cont02").offset().top;
		// 	var $cont03 = $("#cont03").offset().top;
		// 	var $cont04 = $("#cont04").offset().top;
		// 	var $cont05 = $("#cont05").offset().top;//175
		// 	var $cont06 = $("#cont06").offset().top;//175
		// 	var $cont07 = 2802;
		// 	var www = 208;//176

		// 	// if( scroll>=$cont01+www && scroll <$cont02+www){
		// 	// 	$(".tab-anchor").children("li").removeClass("active");
		// 	// 	$(".tab-anchor").children("li").eq(0).addClass("active");
		// 	// }//0
		// 	// if( scroll>=$cont02+www && scroll <$cont03+www){
		// 	// 	$(".tab-anchor").children("li").removeClass("active");
		// 	// 	$(".tab-anchor").children("li").eq(1).addClass("active");
		// 	// }//516
		// 	// if( scroll>=$cont03+www && scroll <$cont04+www){
		// 	// 	$(".tab-anchor").children("li").removeClass("active");
		// 	// 	$(".tab-anchor").children("li").eq(2).addClass("active");
		// 	// }//1130
		// 	// if( scroll>=$cont04+www && scroll <$cont05+www){
		// 	// 	$(".tab-anchor").children("li").removeClass("active");
		// 	// 	$(".tab-anchor").children("li").eq(3).addClass("active");
		// 	// }//1777
		// 	// if( scroll>=$cont05+www && scroll <$cont06+www){
		// 	// 	$(".tab-anchor").children("li").removeClass("active");
		// 	// 	$(".tab-anchor").children("li").eq(4).addClass("active");
		// 	// }//2376
		// 	// if( scroll>=$cont06+www && scroll <$cont07+www){
		// 	// 	$(".tab-anchor").children("li").removeClass("active");
		// 	// 	$(".tab-anchor").children("li").eq(4).addClass("active");
		// 	// }//2802

		// 	console.log( "윈도우"+':'+scroll );
		// 	console.log( "토지"+':'+$cont01 );
		// 	console.log( "건물"+':'+$cont02 );
		// 	console.log( "통계"+':'+$cont03 );
		// 	console.log( "계산"+':'+$cont04 );
		// 	console.log( "결과"+':'+$cont05 );
		// 	console.log( "시세"+':'+$cont06 );
		// 	console.log( "**********************************스크롤바높이:80***************************************" );
		// });

	    /* accordion */
	    $(".accordion").each(function(){
	    	var $btn = $(this).find(".btn-accordion");
	    	var $cont = $(this).find(".accordion-cont");
	    	var icon = $btn.children("img");
		    
		    $btn.on("click",function(){
		    	if( $cont.is(":visible") ){
		    		$cont.slideUp();
			    	icon.css("transform","rotate(180deg)")
		    	}else{
		    		$cont.slideDown();
			    	icon.css("transform","")
		    	}
		    })
	    })

		/* checkbox */
		$("input[type=checkbox].allck-button").each(function(){
			var $target = $(this).closest(".popup-head").next(".popup-cont").find("input[type=checkbox]"); 

			$(this).on("click",function(){

		        if( $(this).prop("checked") ){
		            $target.prop("checked",true); 
		        	$target.on("click",function(){
						$(this).parents(".popup-cont").siblings(".popup-head").find("input[type=checkbox].allck-button").prop("checked",false)
		        	});
		        } else{
		            $target.prop("checked",false);
		        }
		    })
		    $target.on("click",function(){
				var $CheckSize = $target.length;
				var $selectCheckSize = $target.is(":checked").length;
		    })
		})

		/* select */
	    $("select").each(function(){

			$(this).on("click",function(){
		        $(this).toggleClass("active");
		    });
	    });

		$(".switch.btn-control").each(function(){	
	    	var $btn = $(this).find(".btn-switch");
	    	var $txt = $btn.closest("label").siblings(".switch-txt").children();
	    	var $data = $(this).closest(".temp").next(".temp").find(".switch-data");
		    
		    $(this).find(".btn-switch").on("click",function(){
		    	if( $(this).prop("checked") ){
		            $txt.eq(0).addClass("active"); 
		            $txt.eq(1).removeClass("active"); 
		            $data.show(); 
		    	}else{
		            $txt.eq(0).removeClass("active"); 
		            $txt.eq(1).addClass("active"); 
		            $data.hide();
		    	}
		    })
	    })
	    /* control range */
	    $(".range").each(function(range){
	    	
		    var $range = $(this).find("input[type=range]");
		   	var $fill = $(this).find(".bar-range .fill");
	    	var val = $(this).find("input[type=range]").val()

	    	// first value
    		$range.next(".output").html(val + "%");
    		$fill.css("width",$range.val() + "%");
	    	
	    	//direction value
	    	$(this).on('input', function(){
	    	
		    	var val = $(this).find("input[type=range]").val()

		    	$range.next(".output").html(val + "%");
		    	$fill.css("width",$range.val() + "%");
		  	});
	    });
	});
})(jQuery);