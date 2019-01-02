function myFunction(x) {
	x.classList.toggle("change");
}

function toggleHamburger(x) {
	// Toggle class "is-active"
	x.classList.toggle("is-active");
	// Do something else, like open/close menu

	// var menu = document.querySelector(".ul-toggle");
	// menu.classList.toggle("ul-revealed");

	$("ul.ul-toggle").toggle(200);
}