// JavaScript Document for All Custom Pages

document.getElementById("year").innerHTML = new Date().getFullYear();

(function ($) {

	var navbar = $('.navbar');
	var lastScrollTop = 0;
	var preferredHeight = 35;

	$(window).scroll(function () {
		var st = $(this).scrollTop();
		if (st > lastScrollTop && st > preferredHeight) navbar.fadeOut();
		else if (st < lastScrollTop && st > preferredHeight) {
			navbar.fadeIn();
			navbar.addClass('bg-dark');
		} else {
			navbar.removeClass('bg-dark');
		}
		lastScrollTop = st;
	});

})(jQuery);