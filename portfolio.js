$(document).ready(function(){
	$('.entry').hover(function(){



		$(this).animate({opacity: '.5'});
	},
	function() {
		$(this).animate({opacity: '1'});
	}

	);
});