["mouseover", "click"].forEach((img) => {
	document.querySelector("#intro-img").addEventListener(img, function() {
		this.src = "../assets/images/intro_waving.png";
		this.alt = "Waving Intro Image";
	});
});

// document.querySelector("#intro-img").addEventListener("mouseover", function() {
// 	this.src = "../assets/images/intro_waving.png";
// 	this.alt = "Waving Intro Image";
// });

["mouseout", "mouseleave"].forEach((img) => {
	document.querySelector("#intro-img").addEventListener(img, function() {
		this.src = "../assets/images/intro_idle.png";
		this.alt = "Idle Intro Image";
	});
});

// document.querySelector("#intro-img").addEventListener("mouseout", function() {
// 	this.src = "../assets/images/intro_idle.png";
// 	this.alt = "Idle Intro Image";
// });
