// JavaScript Document

// Scroll

 var pagescroll = new SmoothScroll('a[href*="#"]', {
     updateURL: false,
     speed: 200,
 });

$(document).ready(function() {
	var pagetop = $('.pagetop');
	
	if ($(window).scrollTop() > 200) {
		pagetop.addClass('pagetop-visible');
	} else {
		pagetop.removeClass('pagetop-visible');
	}
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			pagetop.addClass('pagetop-visible');
		} else {
			pagetop.removeClass('pagetop-visible');
		}
	});
});
