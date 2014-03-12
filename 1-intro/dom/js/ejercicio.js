var EJERCICIO = (function() {
	function ordenar() {
		// Ordena los diferentes span dentro del parrafo según la clase a la que pertenecen
		var versos = document.querySelectorAll("span");
		var ordenados = [];

      	for(var i=0;i<versos.length;i++) {
	        var spamClass = versos[i].className;
	        var num = parseInt(spamClass.split("-")[1]);
	        ordenados[num] = versos[i];
      	}

      	var parrafo = document.querySelector("p");

		while ( parrafo.hasChildNodes() && parrafo.childNodes.length >= 1 ) {
			parrafo.removeChild( parrafo.firstChild );
		}

      	for(var i=0;i<ordenados.length;i++) {
      		if(ordenados[i] != undefined) {
      			parrafo.appendChild(ordenados[i]);
      		}
      	}

	}

	function addSaltos() {
		// Edita el estilo de los span o añade una clase para que se realice un salto de linea entre cada verso
		var nodos = document.querySelectorAll("span");
		for(var x in nodos) {
			var clases = nodos[x].classList;
			if( clases != undefined) {
				clases.add("linea");
			}
		}
	}

	function addVerso(verso) {
		// Añade el verso final de la poesía de Almafuerte
		var parrafo = document.querySelector("p");
		var span = document.createElement("span");
		var text = document.createTextNode(verso);
		span.appendChild(text);
		span.className = "verso-14";
		parrafo.appendChild(span);
	}

	return function() {
		addVerso('ya rodando en el polvo, tu cabeza!');
		addSaltos();
		ordenar();
	};
})();