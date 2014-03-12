var EJERCICIO = (function() {
	var canvas  = document.getElementById('lienzo');
	var height  = canvas.offsetHeight;
	var width   = canvas.offsetWidth;
	var context = canvas.getContext('2d');

	function tapaDeAPoco() {
		context.beginPath();
		context.rect(0, 0, width, height);
		context.fillStyle = 'rgba(255, 255, 255, .15)';
		context.fill();
	}

	function dibujaCirculo(x, y, radio, color) {
		var radio = radio || 15;
		var color = color || { r: 100, g: 20, b: 210 };

		context.beginPath();
		context.arc(x, y, radio, 0, 2*Math.PI, false);
		context.fillStyle = 'rgb('+color.r+','+color.g+','+color.b+')';
		context.fill();
	}

	// 4. Incluye una linea para llamar a la función tapaDeAPoco cada 1/4 de segundo
	setInterval(tapaDeAPoco, 250);

	return function() {
		/*
		 * 1. Usa la función dibujaCirculo para dibujar todos los circulos pasados por parametro
		 * 
		 * 2. Si no se pasan parametros, dibuja un numero aleatorio de circulos, con un radio
		 *    aleatorio y una posición aleatoria dentro del canvas
		 *
		 * 3. Dibuja cada circulo en un color aleatorio
		 */
		 var nextColor = function() {
		 	return {r:Math.floor(Math.random()*255), g:Math.floor(Math.random()*255), b:Math.floor(Math.random()*255)};
		 }

		 if(arguments.length > 0) {
		 	for(var x in arguments) {
		 		var arg = arguments[x];
		 		var color = nextColor();
		 		if(arg.length < 3) {
		 			dibujaCirculo(arg[0], arg[1], 15, color);
		 		} else {
		 			dibujaCirculo(arg[0], arg[1], arg[2], color);
		 		}
		 	}
		 } else {
		 	var numCirculos = Math.floor(Math.random()*20);
		 	for(var x=0;x<numCirculos;x++) {
		 		color = nextColor();
		 		dibujaCirculo(Math.random()*width, Math.random()*height, 15, color);
		 	}
		 }
	};
})();

// Llamadas de ejemplo
EJERCICIO([100, 20, 5], [30, 50], [80, 120]);
EJERCICIO([150, 80], [60, 150, 30]);