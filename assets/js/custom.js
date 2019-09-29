$(function () {

	/*header*/
	$(window).on("scroll", function () {
		var ht = $(this).scrollTop();
		
		if (ht <= 0) {
			$("#header").removeClass("on");
		} else {
			$("#header").addClass("on");
		}
	});

	$('#container2').sliphover({
		target : '.box',
		caption : 'data-caption'
	});

});