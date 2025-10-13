const HUE_MAX = 360

let hue = 0
let lightness_direction = 1

async function change_bg_with_hsl() {
	while (true) {
		hue = (hue + 2) % HUE_MAX

		const color1 = `hsl(0, 100%, 0%)`
		const color2 = `hsl(${hue + 180}, 100%, 10%)`

		document.body.style.backgroundImage = `linear-gradient(to bottom right, ${color1}, ${color2})`

		await new Promise(resolve => setTimeout(resolve, 200))
	}
}

change_bg_with_hsl()
