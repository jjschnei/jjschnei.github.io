$(document).ready(function(){

	$('.popdown').popdown({width:800});


	$('img').hover(

		function(){
		$(this).animate({opacity: '.5'});
	}, function() {
		$(this).animate({opacity: '1'});
	} 

	);

	




	$('#img-1').hover(
		function() {
		$('.fig-1').toggle();
	})

	$('#img-2').hover(
		function() {
		$('.fig-2').toggle();
	})

	$('#img-3').hover(
		function() {
		$('.fig-3').toggle();
	})

	$('#img-4').hover(
		function() {
		$('.fig-4').toggle();
	})

	$('#img-5').hover(
		function() {
		$('.fig-5').toggle();
	})

	$('#img-6').hover(
		function() {
		$('.fig-6').toggle();
	})

});