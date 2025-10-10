
function fetch_data_from_file(url) {
	const req = new XMLHttpRequest()

	req.open('GET', url, false)

	try {
		req.send(null)

	} catch (error) {
		console.log(`Error occured while getting data: ${error}`)
		return null
	}

	if (req.status == 200) {
		return req.responseText
	} else {
		console.error(`Error fetching ${url}: HTTP Status ${xhr.status} ${xhr.statusText}`)
        return null
	}
}

document.body.style = `
	color: white;
	background: #222;
	margin: 0;
	padding: 0;
`;

content = document.createElement('table')
row     = document.createElement('tr')

sidebar_data = document.createElement('td')
sidebar_data.style.padding = 0

view_data    = document.createElement('td')
view_data.style.padding = 0

sidebar = document.createElement('div')
view    = document.createElement('div')

sidebar.style = `
	width: 15vw;
	height: 98vh;
	background: #234;
`;

sidebar_data.appendChild(sidebar)
row.appendChild(sidebar_data)

view.style = `
	width: 84vw;
	height: 98vh;
	background: #345;
`;

folder = "folder/*"
const file_data = []
const data_from_files = []

files = fetch_data_from_file(folder)
files.forEach(file => {
	data_from_files.push(file_data)
})

view.innerText = file_data[0]

view_data.appendChild(view)
row.appendChild(view_data)

content.appendChild(row)
document.body.appendChild(content)
