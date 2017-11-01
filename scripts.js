


function changeBackground() {
	const letters = '0123456789abcdef';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	document.body.style.background = color;
}

document.getElementById('color-picker').addEventListener("click", changeBackground);
