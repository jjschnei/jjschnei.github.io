$(document).ready(function(){

// creats popdown windown on click
	$('.popdown').popdown({width:800});


// animates the portoflio image on mouse hover
	$('img').hover(
		function(){
		$(this).animate({opacity: '.5'});
	}, function() {
		$(this).animate({opacity: '1'});
	});

	
// toggle the display of fig class on hover, which reveals the title of each project
	$('figure').hover(
		function(){
			$(this).children('.fig').toggle();
		})


});