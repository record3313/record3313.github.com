$( document ).ready( function(){

	mainPage();

	function mainPage() {

		scroll();

		function scroll() {
			window.addEventListener("scroll", parallaxWork );	
			// window.addEventListener("scroll", nonparallaxWork );	
			window.addEventListener("scroll", opacityWork );	
		};

		function parallaxWork() {


			var top = $(this).scrollTop();
			console.log(top);

			$('.parallax').each( function() {

				var yPos = -( top * $(this).data('speed') / 100 );
				$(this).css({ transform:'translate(0px,' + yPos + 'px)' });
			});
		};//parallaxWork end

		function nonparallaxWork() {

			$(".nonparallax_wrap").css('display','block');
			$(".parallax_wrap").css('display','none');
		};//nonparallaxWork end


		function opacityWork() {

			var top = $(this).scrollTop();

			var backgroundOpacity = ( top > 350 ? (top - 350) / 750 : 0);
			console.log(backgroundOpacity);

			$('.scrim').css('opacity', backgroundOpacity);	

		};//opacityWork end

	}

});


