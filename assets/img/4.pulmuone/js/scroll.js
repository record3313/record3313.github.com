$( function(){

	//클릭 시 해당 위치로 화면 스크롤
	$("#left_navi li,#gnb li").on("click",function(e){
		e.preventDefault();
		
		var i = $(this).children("a").attr("href");		
		var target = $(i).offset().top;
		var $doc = $("html,body");
		
		$doc.animate({"scrollTop": target },500,"swing");	
		
	});	
	
	
	//스크롤시 좌측메뉴 버튼 활성화 & 각 박스별로 모션제어
	$(window).on("scroll",function(){
		var scroll = $(window).scrollTop();		
		var posBox1 = $("#page2").offset().top;
		var posBox2 = $("#page3").offset().top;
		var posBox3 = $("#page4").offset().top;
		var posBox4 = $("#page5").offset().top;
		var posBox5 = posBox4 + 1500;
		var www = -400;

		
		$("p").removeClass("on");
		
		//스크롤시 메뉴버튼 on지우고 on추가
		if( scroll>=posBox1+www && scroll <posBox2+www){
			$("#left_navi").children("li").children("a").removeClass("on");
			$("#left_navi").children("li").eq(0).children("a").addClass("on");
		}
		
		if( scroll>=posBox2+www && scroll <posBox3+www){
			$("#left_navi").children("li").children("a").removeClass("on");
			$("#left_navi").children("li").eq(1).children("a").addClass("on");
		}
		if( scroll>=posBox3+www && scroll <posBox4+www){
			$("#left_navi").children("li").children("a").removeClass("on");
			$("#left_navi").children("li").eq(2).children("a").addClass("on");
		}
		
		if( scroll>=posBox4+www && scroll <posBox5+www){
			$("#left_navi").children("li").children("a").removeClass("on");
			$("#left_navi").children("li").eq(3).children("a").addClass("on");
		}
		
		
	});
	
	
});










