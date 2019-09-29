$(function(){	
	
	/*page4 navi*/
	$(".prev").on("click",function(e){
		e.preventDefault();

		$(".navi").children("li").eq(10).stop().animate({"opacity":"1"},350);
		$(".navi").stop().animate({ "margin-left" : "-144px" },500,function(){
			$(".navi").children("li").eq(0).appendTo(".navi");
			$(".navi").css({ "margin-left":"-72px" });
		});
		$(".navi").children("li").eq(1).stop().animate({"opacity":"0"},350);
	});
	
	$(".next").on("click",function(e){
		e.preventDefault();
		$(".navi").children("li").eq(0).stop().animate({"opacity":"1"},350);
		$(".navi").stop().animate({"margin-left":"0px"},500,function(){
			$(".navi").children("li").eq(10).prependTo(".navi");
			$(".navi").css({"margin-left":"-72px"});
		});
		$(".navi").children("li").eq(9).stop().animate({"opacity":"0"},350);
		
	});
	
});










