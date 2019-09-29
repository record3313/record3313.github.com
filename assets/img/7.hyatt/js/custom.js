$(document).ready(function(){	

	//스크롤 디자인 변경
	$(".naviWrap").mCustomScrollbar({
		theme:"minimal",
		scrollButtons:{ enable: false },
		autoHideScrollbar: false,
		setLeft : "0px"
	});

		//숫자 카운트
		var total = $(".navi li").length;
			
			$(".txtBox span").text(total);

			
	$(".navi li").on("click",function(e){
		e.preventDefault();
		
		//배경 변경
		var ur = $(this).children("a").attr("href");
		//on
		$(".navi li").removeClass("on");
		$(this).addClass("on");
		
		//fadeOut
		$(".bg").before( '<div class="bg"></div>');
		
		$(".bg").eq(0).css({"background-image":"url(" + ur +")"});
		$(".bg").eq(1).fadeOut(500,function(){
			$(this).remove();
		});
		
		//mask toggle
		$(".mask").show();
		
		//오류방지
		setTimeout(function(){
			$(".mask").hide();
		},600);
	
		//숫자 카운트
		var i = $(this).index() +1;
		$(".txtBox strong").text(i);
		
		//title 띄워주기
		var title = $(this).children("a").children("img").attr("alt");
		$(".txtBox h2").text(title);
	
	
	});
	
});



