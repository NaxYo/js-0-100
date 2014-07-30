function EJERCICIO() {
	var funciones = [];
	var salida = document.getElementById('salida');

	// Las funciones almacenadas en este bucle no son las que deseamos
	for(var i=1; i<=10; i++)
		funciones.push(function(num) { //agregamos un parametro a pasar a las funciones guardadas en el Array
			salida.innerHTML = salida.innerHTML+num+'&nbsp;';
		});

	salida.innerText = '';
	for(var f in funciones)
		funciones[f](parseInt(f)+1); //le pasamos ĺa posición que ocupa la función en el Array+1 (que es el número que se quiere mostrar)
}