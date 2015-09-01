$(document).ready(function(){

	$('.first').on('mouseenter', function(){
		$('.first a').slideToggle({direction:"up"});
		$(".first a").show();
	});

	$('.first').on('mouseleave', function(){
		$('.first a').slideToggle({direction:"down"});
		$(".first a").hide();
	});

	$('.first').on('mouseenter', function(){
		$('.first .heart img').slideToggle({direction:"up"});
		$(".first .heart img").show();
	});

	$('.first').on('mouseleave', function(){
		$('.first .heart img').slideToggle({direction:"down"});
		$(".first .heart img").hide();
	});

	$('.second').on('mouseenter', function(){
		$('.second a').slideToggle({direction:"up"});
		$(".second a").show();
		$(".second .heart img").show();
	});

	$('.second').on('mouseleave', function(){
		$('.second a').slideToggle({direction:"down"});
		$(".second a").hide();
	});

	$('.second').on('mouseleave', function(){
		$('.second .heart img').slideToggle({direction:"down"});
		$(".second .heart img").hide();
	});

	$('.third').on('mouseenter', function(){
		$('.third a').slideToggle({direction:"up"});
		$(".third a").show();
		$(".third .heart img").show();
	});

	$('.third').on('mouseleave', function(){
		$('.third a').slideToggle({direction:"down"});
		$(".third a").hide();
	});

	$('.third').on('mouseleave', function(){
		$('.third .heart img').slideToggle({direction:"down"});
		$(".third .heart img").hide();
	});
/*	$('.first').on('mouseleave'),function(){
		$('.first a').slideToggle({direction:"up"});
		$('.first a').hide();

	});
*/
/*	//when i resize the window large
	//show the menu and hide the icon
	//when i resize the window small
	//show the icon and hide the menu
	$(window).on('resize', function(){
		var width = $(window).width();
		var breakpoint = 640;
		if (width>breakpoint){
			$('.first').hide();
			$('.first a').show();
		}else{
			$('.first').show();
			$('.first a').hide();
		}

	});*/

});