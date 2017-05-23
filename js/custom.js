$(document).ready(function() {

	// SCROLLED
	$(window).scroll(function() {
		$('.headermain').toggleClass('headermain-scrolled1', $(this).scrollTop() > 10);
		$('.headermain').toggleClass('headermain-scrolled2', $(this).scrollTop() > 130);
	});


	// RESPONSIVE MENU
	$('.responsive-button').click(function() {
		$('#responsive-menu').addClass('responsive-menu-show');
	});
	$('.responsive-button-close').click(function() {
		$('#responsive-menu').removeClass('responsive-menu-show');
	});


	// BACK TO TOP
	$('#totop').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 1000);
		return false;
	});


});