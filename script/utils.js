function toggleFallingText(button) {
	button.classList.toggle("active");
	const fallingText =
		button.parentNode.parentNode.querySelector(".falling-text");
	fallingText.classList.toggle("active");
}

document.addEventListener("submit", (event) => {
	event.preventDefault();
});
