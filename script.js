// get refereneces to the two color inputs
const colorOne = document.getElementById('color1');
// const colorTwo = document.getElementById('color2');
const number = document.getElementById('number');
const hueNum = document.getElementById('hueNum');


console.log(hueNum.value);
console.log(number);

// get reference to the color container
const colorContainer = document.getElementById('container');

// add event listeners to our color inputs to fire function when we change color
colorOne.addEventListener('change', () => {
	generateColors(colorOne.value, number.value);
});

number.addEventListener('change', () => {
	generateColors(colorOne.value, number.value);
});

hueNum.addEventListener('change', () => {
	generateColors(colorOne.value, number.value);
});

// create generateColors function
const generateColors = (color1, number0) => {
	// remove any previous child nodes
	colorContainer.innerHTML = '';

	// create radial color variation array with the same s, l value 
	let hueVariation = [];
	const hueInterval = 360 / hueNum.value;

	for(i=0; i < hueNum.value ; i++){
		hueVariation.push(chroma.hsl((chroma(color1).hsl()[0]+ (hueInterval * (i+1) ) + 180 ) % 360, chroma(color1).hsl()[1], chroma(color1).hsl()[2]).hex());
	}

	hueVariation.forEach(color => {

		const colorPalette = chroma.scale(['white', color, 'black']).colors(number0);

		// create a div for each color
		const colorItem0 = document.createElement('div');
		// add a class to each div
		colorItem0.classList.add('row');
		// append the div to the container
		colorContainer.appendChild(colorItem0);
		
		colorPalette.forEach(color1 => {
			// create a div for each color
			const colorItem = document.createElement('div');
			// add a class to each div
			colorItem.classList.add('container-item');
			// give each div a background color
			colorItem.style.background = color1;
			// append the div to the container
			colorItem0.appendChild(colorItem);
		});
		
	});
	


		

};

// call the generateColors function initially
generateColors(colorOne.value, number.value);


// correctLightness 적용 유무가 궁금
// chroma.scale(['black','red','yellow','white'])
//     .correctLightness();
