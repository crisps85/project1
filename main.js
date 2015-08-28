$(document).ready(function(){

	//when i click on the menu icon
	//show the nav
	//when i click on the menu icon again
	//hide the nav
	$('.first').on('mouseenter', function(){
		$('.first a').slideToggle({direction:"up"});
		$(".first a").show();
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