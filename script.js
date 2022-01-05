// get refereneces to the two color inputs
const colorOne = document.getElementById('color1');
// const colorTwo = document.getElementById('color2');
const number = document.getElementById('number');

// get reference to the color container
const colorContainer = document.getElementById('container');

const colorContainer2 = document.getElementById('container-2');

// add event listeners to our color inputs to fire function when we change color
colorOne.addEventListener('change', () => {
	generateColors(colorOne.value, number.value);
});

number.addEventListener('change', () => {
	generateColors(colorOne.value, number.value);
});

// create generateColors function
const generateColors = (color1, number0) => {
	// remove any previous child nodes
	colorContainer.innerHTML = '';

	colorContainer2.innerHTML = '';

	// get array of colors from chroma.js
	const colorPalette = chroma.scale(['black', color1, 'white']).correctLightness().colors(number0);

	const color1Hue = chroma(color1).hsl()[0];

	// console.log(chroma(color1).hsl());

	const colorHelix = chroma.cubehelix().start(color1Hue).lightness(0.5);
	const colorPalette2 = chroma.scale(colorHelix).colors(number0);

	colorPalette.forEach(color => {
		// create a div for each color
		const colorItem = document.createElement('div');
		// add a class to each div
		colorItem.classList.add('container-item');
		// give each div a background color
		colorItem.style.background = color;
		// append the div to the container
		colorContainer.appendChild(colorItem);
	});

	colorPalette2.forEach(color => {
		// create a div for each color
		const colorItem = document.createElement('div');
		// add a class to each div
		colorItem.classList.add('container-item');
		// give each div a background color
		colorItem.style.background = color;
		// append the div to the container
		colorContainer2.appendChild(colorItem);
	});

};

// call the generateColors function initially
generateColors(colorOne.value, number.value);


// correctLightness 적용 유무가 궁금
// chroma.scale(['black','red','yellow','white'])
//     .correctLightness();