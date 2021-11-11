["mouseover", "click"].forEach((img) => {
	document.querySelector("#intro-img").addEventListener(img, function() {
		this.src = "assets/images/intro_waving.png";
		this.alt = "Waving Intro Image";
	});
});

["mouseout", "mouseleave"].forEach((img) => {
	document.querySelector("#intro-img").addEventListener(img, function() {
		this.src = "assets/images/intro_idle.png";
		this.alt = "Idle Intro Image";
	});
});
