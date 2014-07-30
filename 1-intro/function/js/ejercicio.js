var EJERCICIO = (function() {
	var canvas  = document.getElementById('lienzo');
	var height  = canvas.offsetHeight;
	var width   = canvas.offsetWidth;
	var context = canvas.getContext('2d');

	function tapaDeAPoco() {
		context.beginPath();
		context.rect(0, 0, width, height);
		context.fillStyle = 'rgba(255, 255, 255, .1)';
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

		 if(arguments.length == 0){
		 	for(var i=1; i<=Math.floor((Math.random()*100)+1); i++){
		 		var x = Math.floor((Math.random()*400)+1);
		 		var y = Math.floor((Math.random()*200)+1);
		 		var radio = Math.floor((Math.random()*30)+1);
		 		var color = {r: Math.floor((Math.random()*255)+1), g: Math.floor((Math.random()*255)+1), b: Math.floor((Math.random()*255)+1)};

		 		dibujaCirculo(x,y,radio,color);
		 	}
		 }else{
		 	for(var i=0; i<arguments.length; i++){
		 		var color = {r: Math.floor((Math.random()*255)+1), g: Math.floor((Math.random()*255)+1), b: Math.floor((Math.random()*255)+1)};
		 		if(arguments[i][2] != undefined)
		 			dibujaCirculo(arguments[i][0], arguments[i][1], arguments[i][2], color);
		 		else
		 			dibujaCirculo(arguments[i][0], arguments[i][1], 0, color);
		 	}
		 }
	};
})();

// Llamadas de ejemplo
EJERCICIO([100, 20, 5], [30, 50], [80, 120]);
EJERCICIO([150, 80], [60, 150, 30]);
