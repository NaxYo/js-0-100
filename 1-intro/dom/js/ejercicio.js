var EJERCICIO = (function() {
	function ordenar() {
		// Ordena los diferentes span dentro del parrafo según la clase a la que pertenecen
		var versos = document.querySelectorAll('span');

		var parraf = document.body.querySelector('p');
		while (parraf.firstChild) {
		    parraf.removeChild(parraf.firstChild);
		}

		//console.log(versos);
		var versosOrdenados = new Array();
		for(i=0; i<=versos.length; i++){
			for(j=0; j<versos.length; j++){
				if(versos[j].classList[0].split('-')[1] == i){
					versosOrdenados[i] = versos[j];
				}
			}
		}
		console.log(versosOrdenados);
		for(i=1; i<versosOrdenados.length; i++)
			parraf.appendChild(versosOrdenados[i]);
		//parraf.appendChild(versosOrdenados[1]);
	}

	function addSaltos() {
		// Edita el estilo de los span o añade una clase para que se realice un salto de linea entre cada verso
		var versos = document.querySelectorAll('span');

		for(i=0; i<versos.length; i++){
			versos[i].classList.add('linea');
		}
	}

	function addVerso(verso) {
		// Añade el verso final de la poesía de Almafuerte
		var totalVersos = document.querySelectorAll('span').length+1;

		var newVerso = document.createElement('span');
		newVerso.classList.add('verso-'+totalVersos);
		newVerso.appendChild(document.createTextNode(verso));

		var pVersos = document.body.querySelector('p');
		pVersos.appendChild(newVerso);

	}

	return function() {
		addVerso('ya rodando en el polvo, tu cabeza!');
		addSaltos();
		ordenar();
	};
})();