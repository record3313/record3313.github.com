//page2
$(document).ready(function(){	

	//main클릭시 page보여짐

	$("#main").css({"display":"block"});
	$("#main").on("click",function(){
		$("#main").fadeOut(3000);
		$(".logo").fadeOut(1500);
		$("h1").fadeIn(1500);
	});
	
	//(1) 풀잎1
	var $obj1 = $(".forest_left");
	var X1 = "left";
	var Y1 = "top";
	var curX1 = parseInt($obj1.css(X1));	
	var curY1 = parseInt($obj1.css(Y1));	
	
	//(2) 풀잎2
	var $obj2 = $(".forest_top");
	var X2 = "left";
	var Y2 = "top";
	var curX2 = parseInt($obj2.css(X2));
	var curY2 = parseInt($obj2.css(Y2));	
	
	//(3) 풀잎3
	var $obj3 = $(".forest_right");
	var X3 = "right";
	var Y3 = "top";
	var curX3 = parseInt($obj3.css(X3));
	var curY3 = parseInt($obj3.css(Y3));	
	
	//(4) 풀잎4
	var $obj4 = $(".banner_top");
	var X4 = "left";
	var Y4 = "top";
	var curX4 = parseInt($obj4.css(X4));
	var curY4 = parseInt($obj4.css(Y4));	
	
	//(5) 낙하산1
	var $obj5 = $(".effect1");
	var X5 = "left";
	var Y5 = "top";
	var curX5 = parseInt($obj5.css(X5));
	var curY5 = parseInt($obj5.css(Y5));	
	
	//(6) 낙하산2
	var $obj6 = $(".effect6");
	var X6 = "left";
	var Y6 = "top";
	var curX6 = parseInt($obj6.css(X6));
	var curY6 = parseInt($obj6.css(Y6));	
	
	//(7) 블루베리1
	var $obj7 = $(".effect3");
	var X7 = "left";
	var Y7 = "top";
	var curX7 = parseInt($obj7.css(X7));
	var curY7 = parseInt($obj7.css(Y7));	
	
	//(8) 블루베리2
	var $obj8 = $(".effect4");
	var X8 = "left";
	var Y8 = "top";
	var curX8 = parseInt($obj8.css(X8));
	var curY8 = parseInt($obj8.css(Y8));	
	
	//(9) 나뭇잎1
	var $obj9 = $(".effect5");
	var X9 = "left";
	var Y9 = "top";
	var curX9 = parseInt($obj9.css(X9));
	var curY9 = parseInt($obj9.css(Y9));	
	
	//(10) 나뭇잎2
	var $obj10 = $(".effect6");
	var X10 = "left";
	var Y10 = "top";
	var curX10 = parseInt($obj10.css(X10));
	var curY10 = parseInt($obj10.css(Y10));	
	
	//(11) 나뭇잎3
	var $obj11 = $(".effect7");
	var X11 = "left";
	var Y11 = "top";
	var curX11 = parseInt($obj11.css(X11));
	var curY11 = parseInt($obj11.css(Y11));	
	
	//(12) 나뭇잎4
	var $obj12 = $(".effect8");
	var X12 = "left";
	var Y12 = "top";
	var curX12 = parseInt($obj12.css(X12));
	var curY12 = parseInt($obj12.css(Y12));	
	
	//(13) 바람1
	var $obj13 = $(".effect9");
	var X13 = "left";
	var Y13 = "top";
	var curX13 = parseInt($obj13.css(X13));
	var curY13 = parseInt($obj13.css(Y13));	
	
	//(14) 바람2
	var $obj14 = $(".effect10");
	var X14 = "left";
	var Y14 = "top";
	var curX14 = parseInt($obj14.css(X14));
	var curY14 = parseInt($obj14.css(Y14));	
	
	//(15) 바람3
	var $obj15 = $(".effect11");
	var X15 = "left";
	var Y15 = "top";
	var curX15 = parseInt($obj15.css(X15));
	var curY15 = parseInt($obj15.css(Y15));	
	
	var wt = 50;
	
	$("#page2").on("mousemove",function(e){
		var posX = e.pageX/wt;
		var posY = e.pageY/wt;		
		$obj1.css({"left":curX1  -  posX , "top":curY1  -  posY });		//풀잎1
		$obj2.css({"left":curX2  +  posX , "top":curY2  +  posY });		//풀잎2
		$obj3.css({"right":curX3  +  posX , "top":curY3  -  posY });		//풀잎3
		$obj4.css({"left":curX4  +  posX , "top":curY4  +  posY });		//풀잎4
		$obj5.css({"left":curX5  -  posX , "top":curY5  +  posY });		//낙하산1
		$obj6.css({"left":curX6  +  posX , "top":curY6  -  posY });		//낙하산2
		$obj7.css({"left":curX7  -  posX , "top":curY7  -  posY });		//블루베리1
		$obj8.css({"left":curX8  +  posX , "top":curY8  +  posY });		//블루베리2
		$obj9.css({"left":curX9  +  posX , "top":curY9  -  posY });		//나뭇잎1
		$obj10.css({"left":curX10  +  posX , "top":curY10  -  posY });		//나뭇잎2
		$obj11.css({"left":curX11  -  posX , "top":curY11  +  posY });		//나뭇잎3
		$obj12.css({"left":curX12  -  posX , "top":curY12  +  posY });		//나뭇잎4
		$obj13.css({"left":curX13  -  posX , "top":curY13  +  posY });		//바람1
		$obj14.css({"left":curX14  +  posX , "top":curY14  -  posY });		//바람2
		$obj15.css({"left":curX15  -  posX , "top":curY15  +  posY });		//바람3
				
		});
});


//page4
$(document).ready(function(){	

	//(16) 풀잎1
	var $obj16 = $(".leaf1");
	var X16 = "left";
	var Y16 = "top";
	var curX16 = parseInt($obj16.css(X16));	
	var curY16 = parseInt($obj16.css(Y16));	
	
	//(17) 풀잎2
	var $obj17 = $(".leaf2");
	var X17 = "right";
	var Y17 = "top";
	var curX17 = parseInt($obj17.css(X17));
	var curY17 = parseInt($obj17.css(Y17));	
	
	var wt = 50;
	
	$("#page4").on("mousemove",function(e){
		var posX = e.pageX/wt;
		var posY = e.pageY/wt;		
		$obj16.css({"left":curX16  -  posX , "top":curY16  -  posY });		//풀잎1
		$obj17.css({"right":curX17  -  posX , "top":curY17  -  posY });		//풀잎2
		
	});

});


//page4
$(document).ready(function(){	

	//(18) 물방울1
	var $obj18 = $(".waterdrop1");
	var X18 = "left";
	var Y18 = "top";
	var curX18 = parseInt($obj18.css(X18));	
	var curY18 = parseInt($obj18.css(Y18));	
	
	//(19) 물방울2
	var $obj19 = $(".waterdrop2");
	var X19 = "left";
	var Y19 = "top";
	var curX19 = parseInt($obj19.css(X19));
	var curY19 = parseInt($obj19.css(Y19));	
	
	//(20) 바위알갱이1
	var $obj20 = $(".rocks_ss1");
	var X20 = "left";
	var Y20 = "bottom";
	var curX20 = parseInt($obj20.css(X20));
	var curY20 = parseInt($obj20.css(Y20));	
	
	//(21) 바위알갱이2
	var $obj21 = $(".rocks_ss2");
	var X21 = "left";
	var Y21 = "bottom";
	var curX21 = parseInt($obj21.css(X21));
	var curY21 = parseInt($obj21.css(Y21));	
	
	//(22) 바위알갱이3
	var $obj22 = $(".rocks_ss3");
	var X22 = "left";
	var Y22 = "bottom";
	var curX22 = parseInt($obj22.css(X22));
	var curY22 = parseInt($obj22.css(Y22));	
	
	//(23) 물방울들
	var $obj23 = $(".waterdrops");
	var X23 = "left";
	var Y23 = "bottom";
	var curX23 = parseInt($obj23.css(X23));
	var curY23 = parseInt($obj23.css(Y23));	
	
	var wt = 120;
	
	$("#page4").on("mousemove",function(e){
		var posX = e.pageX/wt;
		var posY = e.pageY/wt;		
		$obj18.css({"left":curX18  -  posX , "top":curY18  +  posY });		//물방울1
		$obj19.css({"left":curX19  +  posX , "top":curY19  +  posY });		//물방울2
		$obj20.css({"left":curX20  -  posX , "bottom":curY20  -  posY });		//바위알갱이1
		$obj21.css({"left":curX21  +  posX , "bottom":curY21  +  posY });		//바위알갱이2
		$obj22.css({"left":curX22  -  posX , "bottom":curY22  +  posY });		//바위알갱이3
		$obj23.css({"left":curX23  +  posX , "bottom":curY23  -  posY });		//물방울들
		
	});

});


//page5
$(document).ready(function(){	

	//(24) 쌀알1
	var $obj24 = $(".grain1");
	var X24 = "left";
	var Y24 = "top";
	var curX24 = parseInt($obj24.css(X24));
	var curY24 = parseInt($obj24.css(Y24));	
	
	//(25) 쌀알2
	var $obj25 = $(".grain2");
	var X25 = "left";
	var Y25 = "top";
	var curX25 = parseInt($obj25.css(X25));
	var curY25 = parseInt($obj25.css(Y25));	
	
	//(26) 쌀알3
	var $obj26 = $(".grain3");
	var X26 = "left";
	var Y26 = "top";
	var curX26 = parseInt($obj26.css(X26));
	var curY26 = parseInt($obj26.css(Y26));	
	
	//(27) 쌀알4
	var $obj27 = $(".grain4");
	var X27 = "left";
	var Y27 = "top";
	var curX27 = parseInt($obj27.css(X27));
	var curY27 = parseInt($obj27.css(Y27));	
	
	//(28) 쌀알5
	var $obj28 = $(".grain5");
	var X28 = "left";
	var Y28 = "top";
	var curX28 = parseInt($obj28.css(X28));
	var curY28 = parseInt($obj28.css(Y28));	
	
	//(29) 쌀알6
	var $obj29 = $(".grain6");
	var X29 = "left";
	var Y29 = "top";
	var curX29 = parseInt($obj29.css(X29));
	var curY29 = parseInt($obj29.css(Y29));	
			
	//(30) 쌀알7
	var $obj30 = $(".grain7");
	var X30 = "left";
	var Y30 = "top";
	var curX30 = parseInt($obj30.css(X30));
	var curY30 = parseInt($obj30.css(Y30));	
			
	//(31) 쌀알8
	var $obj31 = $(".grain8");
	var X31 = "left";
	var Y31 = "top";
	var curX31 = parseInt($obj31.css(X31));
	var curY31 = parseInt($obj31.css(Y31));	
	
	var wt = 400;
	
	$("#page5").on("mousemove",function(e){
		var posX = e.pageX/wt;
		var posY = e.pageY/wt;		
		$obj24.css({"left":curX24  +  posX , "top":curY24 +  posY });		//쌀알1
		$obj25.css({"left":curX25  -  posX , "top":curY25  -  posY });		//쌀알2
		$obj26.css({"left":curX26  -  posX , "top":curY26  +  posY });		//쌀알3
		$obj27.css({"left":curX27  -  posX , "top":curY27  +  posY });		//쌀알4
		$obj28.css({"left":curX28  -  posX , "top":curY28  -  posY });		//쌀알5
		$obj29.css({"left":curX29  +  posX , "top":curY29  -  posY });		//쌀알6
		$obj30.css({"left":curX30  -  posX , "top":curY30  +  posY });		//쌀알7
		$obj31.css({"left":curX31  +  posX , "top":curY31  -  posY });		//쌀알8
		
	});

});