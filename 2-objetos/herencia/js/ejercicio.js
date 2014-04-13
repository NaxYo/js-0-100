var BWFilter = function() {

};

/*
 * Implementa un filtro que herede de VideoFilter
 * y sobreescriba su metodo ApplyFilter generando
 * una copia en blanco y negro del vídeo original
 */

$(function(){
	var filter = new VideoFilter(); // new BWFilter();
	filter.init();
});