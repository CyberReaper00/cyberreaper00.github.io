const HUE_MAX = 360

let hue = 0
let lightness_direction = 1

// function that creates the background color change effect
async function change_bg_with_hsl() {
	while (true) {
		hue = (hue + 2) % HUE_MAX

		const color1 = 'black'
		const color2 = `hsl(${hue + 180}, 100%, 10%)`

		document.body.style.backgroundImage = `linear-gradient(to bottom right, ${color1}, ${color2})`

		await new Promise(resolve => setTimeout(resolve, 200))
	}
}
change_bg_with_hsl()

// code for the under construction sign
const keyframes = {
	opacity: [0, 1, 0],
	backgroundColor: ["yellow", "transparent", "yellow"],
}

const timing = {
	duration: 1000,
}

incomplete_pieces = document.querySelectorAll('.warn')
warning_box = document.querySelector('.warning_box')

incomplete_pieces.forEach(piece => {
	piece.addEventListener("click", () => {
		warning_box.animate(keyframes, timing)
	})
})
