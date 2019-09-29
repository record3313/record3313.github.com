$(document).ready(function(){		
	
	//isotope
	$(".container").isotope({	
		itemSelector : '.item', //움직일 박스들의 클래스명
		masonry : {
			columnWidth : 320, //작은 박스의 넓이
			rowHeight: 200 //작은 박스의 높이
		}		  
	});	

	//sort
	$(".filter").children("li").children("a").on("click",function(e){

		e.preventDefault();

		$(this).removeClass("on");
		$(this).addClass("on");

	    var selector = $(this).attr('data-filter');

	    $(".container").isotope({ filter: selector });	

	});	

});
