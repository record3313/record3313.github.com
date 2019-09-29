$( document ).ready( function(){

	scroll();

	function scroll(){ (window).addEventListener("scroll", scrollWork ); };	

	function scrollWork(){

		var scrollTop = $(this).scrollTop();
		var headerHight = $('.nav_etc_wrap').height();
		// a.style.opacity = scrollTop / 100;

		console.log("전체 스크롤값 : " + scrollTop );
		console.log("전체 헤더높이 : " + headerHight );
		// console.log($('main').css("marginTop"));

			if ( scrollTop == 0 ) {
				
				$("header").removeClass("fixed");
				// $( ".nav_etc_wrap" ).css({ 
				// 	"height":"300",
				// 	"opacity":"1",
				// 	"backgroundImage":"url('images/background_header.jpeg')"
				// });
				// $( ".sns_group" ).css({
				// 	"opacity":"1"
				// });
				// $( ".disney" ).css({
				// 	"display":"block"
				// });

				// $(" h1 ").css({ 
				// 	"transform":"scale(1)"
				// }, 0.5);
				$( "h1" ).find( "img" ).attr({ 
					"src":"images/logo_white2.png"
				});
				// $( "h1" ).css({ 
				// 	"top":"50%",
				// 	"marginTop":"-63px",
				// 	"marginLeft":"-146px"
				// });

				// $( ".util_group").children(".search_box").find("input[type=text]").css({
				// 	"display":"block"
				// });
				// $(".btn_search").css({
				// 	"backgroundPosition":"0 0",
				// 	"opacity":"1"
				// });
				// $( ".user_group").css({
				// 	"marginTop":"60px",
				// 	"marginRight":"5px",
				// 	"opacity":"1"
				// });

				console.log("스크롤이 0일 때 스크롤값 : " + scrollTop );
				console.log("스크롤이 0일 때 헤더 높이 : " + 300 );

			} else if ( scrollTop > 0 && scrollTop < 230 ) {
				
				
				$( ".nav_etc_wrap" ).css({
					"height": 300 - scrollTop, 
					"opacity" : ( 300 - scrollTop - 70 ) / 300
				});

				// $( ".sns_group" ).css({
				// 	"opacity":"1"
				// });
				// $( ".disney" ).css({
				// 	"display":"block"
				// });

				$(" h1 ").css({ 
					"transform":"scale(" + ( 300 - scrollTop -70 ) / 300 + ")"
				}, 0.5);

				$( "h1" ).find( "img" ).attr({ 
					"src":"images/logo_white2.png"
				});
				// $( "h1" ).css({ 
				// 	"top":"50%",
				// 	"marginTop":"-63px",
				// 	"marginLeft":"-146px"
				// });
				
				// $( ".util_group").children(".search_box").find("input[type=text]").css({
				// 	"display":"block"
				// });
				// $(".btn_search").css({
				// 	"backgroundPosition":"0 0",
				// 	"opacity":"1"
				// });
				// $( ".user_group").css({
				// 	"marginTop":"60px",
				// 	"marginRight":"5px",
				// 	"opacity":"1"
				// });
				
				console.log("스크롤이 0보다 크거나 200보다 작을 때 스크롤값 : " + scrollTop );
				console.log("스크롤이 0보다 크거나 200보다 작을 때 헤더 높이 : " + headerHight );

			} else if ( scrollTop >= 230 ) {

				$("header").addClass("fixed");
				
				// $( ".nav_etc_wrap" ).css({
				// 	"height" : "70",
				// 	"opacity" : "1",
				// 	"backgroundImage" : "none"
				// });

				// $( ".sns_group" ).css({
				// 	"opacity":"0.5"
				// });
				// $( ".disney" ).css({
				// 	"display":"none"
				// });

				// $( "h1" ).css({ 
				// 	"transform":"scale(1)" 
				// }),0.5;
				$( "h1" ).find( "img" ).attr({ 
					"src":"images/logo_white1.png"
				});
				// $( "h1" ).css({ 
				// 	"top":"0",
				// 	"marginTop":"16px",
				// 	"marginLeft":"-183px"
				// });
				
				// $( ".util_group").children(".search_box").find("input[type=text]").css({
				// 	"display":"none"
				// });
				// $(".btn_search").css({
				// 	"backgroundPosition":"0 -60px",
				// 	"opacity":"0.5"
				// });
				// $( ".user_group").css({
				// 	"marginTop":"8px",
				// 	"marginRight":"60px",
				// 	"opacity":"0.5"
				// });

				console.log("스크롤이 200과 같거나 클 때 스크롤값 : " + scrollTop );
				console.log("스크롤이 200과 같거나 클 때 헤더 높이 : " + headerHight );
			};
	}; //scrollWork end

});

