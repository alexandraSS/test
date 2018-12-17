$(document).ready(function() {

	// touch for carousel
	$(".carousel").on("touchstart", function(event){
		var xClick = event.originalEvent.touches[0].pageX;
		$(this).one("touchmove", function(event){
			var xMove = event.originalEvent.touches[0].pageX;
			if( Math.floor(xClick - xMove) > 5 ){
				$(this).carousel('next');
			}
			else if( Math.floor(xClick - xMove) < -5 ){
				$(this).carousel('prev');
			}
		});
		$(".carousel").on("touchend", function(){
			$(this).off("touchmove");
		});
	});

	// scroll Up

	$('.scrollUp').hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$('.scrollUp').fadeIn('slow');
		} else {
			$('.scrollUp').fadeOut('slow');
		}
	});
	$('.scrollUp').click(function () {
		$("html, body").animate({scrollTop: 0}, 1000);
		return false;
	});


	/////
	$('#myNavmenu  ul li').hover(
		function () {
			$('ul', this).stop().slideDown(400);
		},
		function () {
			$('ul', this).stop().slideUp(400);
		}
	);






});