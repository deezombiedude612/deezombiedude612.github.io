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

		// // Scroll down
		// if (st > lastScrollTop) {
		// 	navbar.fadeOut();
		// }
		// // Scroll up but still lower than 200 (change that to whatever suits your need)
		// else if (st < lastScrollTop && st > 200) {
		// 	navbar.fadeIn();
		// 	navbar.removeClass('navbar-light bg-transparent').addClass('navbar-dark bg-custom');
		// }
		// // Reached top
		// else {
		// 	navbar.removeClass('navbar-dark bg-custom').addClass('navbar-light bg-transparent');
		// }
		lastScrollTop = st;
	});

})(jQuery);

// Reference for animation on dropdown: https://webdesign.tutsplus.com/tutorials/how-to-make-the-bootstrap-navbar-dropdown-work-on-hover--cms-33840

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", () => {
	if (this.matchMedia("(min-width: 768px)").matches) {
		$dropdown.hover(
			function () {
				// this.console.log("HI!");
				const $this = $(this);
				$this.addClass(showClass);
				$this.find($dropdownToggle).attr("aria-expanded", "true");
				$this.find($dropdownMenu).addClass(showClass);
			},
			function () {
				const $this = $(this);
				$this.removeClass(showClass);
				$this.find($dropdownToggle).attr("aria-expanded", "false");
				$this.find($dropdownMenu).removeClass(showClass);
			}
		);
	} else {
		$dropdown.off("mouseenter mouseleave");
	}
});
