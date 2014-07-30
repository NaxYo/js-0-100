var BWFilter = function() {
	
};

/*
 * Implementa un filtro que herede de VideoFilter
 * y sobreescriba su metodo ApplyFilter generando
 * una copia en blanco y negro del vídeo original
 */

BWFilter.prototype = new VideoFilter;

BWFilter.prototype.applyFilter = function(context){ 
	var img = context.getImageData(0, 0, this.video.width(), this.video.height());

	for (var i = 0; i < img.data.length; i += 4) {
		var grayscale = img.data[i] * .2126 + img.data[i+1] * .7152 + img.data[i+2] * .0722;
		img.data[i] = grayscale; 	//r
		img.data[i+1] = grayscale; 	//g
		img.data[i+2] = grayscale; 	//b
	}
	context.putImageData(img, 0, 0);
};

$(function(){
	var filter = new BWFilter();
	filter.init();
});