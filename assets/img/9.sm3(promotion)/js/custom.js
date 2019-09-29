$(document).ready(function(){	
	
	// 첫번째 오브젝트 등록
	var $obj1 = $(".contents");
	var X1 = "margin-left";
	var Y1 = "margin-top";
	var curX1 = parseInt($obj1.css(X1));	
	var curY1 = parseInt($obj1.css(Y1));	
	
	// 두번째 오브젝트 등록
	var $obj2 = $(".land");
	var X2 = "right";
	var Y2 = "bottom";
	var curX2 = parseInt($obj2.css(X2));
	var curY2 = parseInt($obj2.css(Y2));	
	
	// 세번째 오브젝트 등록
	var $obj3 = $(".tree_right");
	var X3 = "right";
	var Y3 = "bottom";
	var curX3 = parseInt($obj3.css(X3));
	var curY3 = parseInt($obj3.css(Y3));	
	
	// 네번째 오브젝트 등록
	var $obj4 = $(".tree_left");
	var X4 = "left";
	var Y4 = "bottom";
	var curX4 = parseInt($obj4.css(X4));
	var curY4 = parseInt($obj4.css(Y4));
	
	// 다섯번째 오브젝트 등록
	var $obj5 = $(".cloud");
	var X5 = "right";
	var Y5 = "top";
	var curX5 = parseInt($obj5.css(X5));
	var curY5 = parseInt($obj5.css(Y5));
	
	//움직임 감도
	var wt = 30;

	
	$(".wrap").on("mousemove",function(e){
		var posX = e.pageX/wt;
		var posY = e.pageY/wt;		
		$obj1.css({"margin-left":curX1  +  posX , "margin-top":curY1  -  posY });
		$obj2.css({"right":curX2  +  posX , "bottom":curY2  -  posY });	
		$obj3.css({"right":curX3  -  posX , "bottom":curY3  -  posY });		
		$obj4.css({"left":curX4  -  posX , "bottom":curY4  -  posY });
		$obj5.css({"right":curX5  +  posX , "top":curY5  -  posY });			
	});
	



});
