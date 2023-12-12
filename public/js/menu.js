document.addEventListener("DOMContentLoaded", () => {
	document
		.querySelector("header .hamburger")
		.addEventListener("click", () => {
			document.querySelector(".ham-background").style.display = "block";
		});
	document
		.querySelector(".ham-background .cross")
		.addEventListener("click", () => {
			document.querySelector(".ham-background").style.display = "none";
		});
});
