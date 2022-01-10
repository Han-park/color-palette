// get refereneces to the two color inputs
const colorOne = document.getElementById('color1');
// const colorTwo = document.getElementById('color2');
const number = document.getElementById('number');

// get reference to the color container
const colorContainer = document.getElementById('container');

const colorContainer2 = document.getElementById('container-2');
// const colorContainer3 = document.getElementById('container-3');

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

	// colorContainer2.innerHTML = '';
	colorContainer2.innerHTML = '';

	// get array of colors from chroma.js
	const colorPalette = chroma.scale(['black', color1, 'white']).correctLightness().colors(number0);

	const color1Hue = chroma(color1).hsl()[0];

	console.log(chroma({h: (chroma(color1).hsl()[0]+180) % 360, s: chroma(color1).hsl()[1], l: chroma(color1).hsl()[2]}));
	// console.log(chroma(color1).lch());
	console.log(colorPalette);
	// console.log(chroma.hsl(330, 1, 0.6).hex());
	// console.log(chroma('#ff3399'));

	const colorHelix = chroma.cubehelix().start(color1Hue);
	// const colorPalette2 = chroma.scale(colorHelix).colors(6);
	

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

	// colorPalette2.forEach(color => {
	// 	// create a div for each color
	// 	const colorItem = document.createElement('div');
	// 	// add a class to each div
	// 	colorItem.classList.add('container-item');
	// 	// give each div a background color
	// 	colorItem.style.background = color;
	// 	// append the div to the container
	// 	colorContainer2.appendChild(colorItem);
	// });

const hueNum = 6;

let hueVariation = [];
const hueInterval = 360 / hueNum;

	for(i=0; i < hueNum; i++){
		hueVariation.push(chroma.hsl((chroma(color1).hsl()[0]+ (hueInterval* (i+1) ) ) % 360, chroma(color1).hsl()[1], chroma(color1).hsl()[2]).hex());
	}
	console.log(hueVariation);

	hueVariation.forEach(color => {
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