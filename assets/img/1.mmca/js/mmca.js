$(document).ready( function(){

		slider();
		navi();
		allMenu();
		language();
		extraNavi();

		/* bxSlider */
		function slider(){

			$('.e_banner .bxslider').bxSlider({
				// mode: 'vertical',
	  			slideMargin: 0,
	  			pager: false,
	  			controls: true,
	  			auto: true,
	  			autoControls: true
			});
		} //bxSlider end

		/* gnb */
		function navi() {

			$(".depth1").children("li").on("mouseenter", overWork);
			$(".depth1").children("li").on("mouseleave", outWork);

			function overWork(){
				// console.log("You ready?")
				$(this).find(".sub_navi").fadeIn(0.5);
			};

			function outWork(){
				$(this).find(".sub_navi").fadeOut(0.5);
			};
		} //navi end

		/* sitemap */
		function allMenu() {

			$(".openmenu_wrap").css("display","none");

			$(".all_menu").on("click",menuToggle);
			$(".btn_close").on("click",close);

			function menuToggle(e){

				e.preventDefault();

				var target = $(this).children(".openmenu_wrap");

				if ( target.css("display") === "none") { 
					target.css("display","block"), 
					$(this).css({
						"background-image":"url('images/all_menu_more_icon_on.gif')",
						"background-position":"0 22px"
					})
				} else { 
					target.css("display","none"), 
					$(this).css({
						"background-image":"url('images/all_menu_more_icon.gif')",
						"background-position":"0 20px"
					})
				};
			};

			function close(){

				$(this).children(".openmenu_wrap").css("display","none")
			};

		} //allMenu end
		
		/* language */
		function language() {

			$(".language").on("click",overWork);
			$(".language").on("mouseleave",outWork);

			function overWork(e){
				e.preventDefault();
				$(this).children("ul").fadeToggle(0.5);
			};

			function outWork(e){
				e.preventDefault();
				$(this).children("ul").css({"display":"none"});
			};

		} //Language end

		/* lnb - extraNavi */
		function extraNavi() {

			$(".extra_navi").find(".depth2").css("display","none");
			$(".extra_navi").children("li").on("click",overWork);

			function overWork(e){
				e.preventDefault();

				var target = $(this).children(".depth2");

				if ( target.css("display") === "none") { 
					target.css("display","block"), 
					target.parent().css({
						"background-image":"url('images/btn_minus.gif')",
						"background-position":"right 20px"
					})
				} else { 
					target.css("display","none"), 
					target.parent().css({
						"background-image":"url('images/btn_plus.gif')",
						"background-position":"right 16px"
					}) 
				};
				// console.log(target.css("display"));
			};

		} //extraNavi end

	}); // onload event end