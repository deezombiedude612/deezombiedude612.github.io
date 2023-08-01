document.querySelectorAll(`.btn-copyData`).forEach((e) => {
    e.addEventListener(`click`, () => {
        navigator.clipboard.writeText(e.dataset.value).then(
            () => {
                alert(`Copied: ${e.dataset.value}`);
            },
            function () {
                alert(`Oops, something went wrong copying the value!`);
            }
        );
    });
});

["mouseover", "click"].forEach((img) => {
    document.querySelector("#intro-img").addEventListener(img, function() {
        this.src = "assets/images/intro_waving.webp";
        this.alt = "Waving Intro Image";
    });
});

["mouseout", "mouseleave"].forEach((img) => {
    document.querySelector("#intro-img").addEventListener(img, function() {
        this.src = "assets/images/intro_idle.webp";
        this.alt = "Idle Intro Image";
    });
});