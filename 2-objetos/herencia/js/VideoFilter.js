var VideoFilter = function(videoSelector) {
	this.video = $(videoSelector||'video');
};

VideoFilter.prototype.init = function() {
	if(this.supportedVideoFormat()) {
		var _this = this;
		this.setCanvas();

		(function gameLoop() {
			var context = _this.canvas[0].getContext('2d');
			_this.drawScreen.call(_this, context);
			_this.applyFilter.call(_this, context);
			requestAnimationFrame(gameLoop);
		})();
	}
	else alert.log('No hay soporte de vídeo...');
};

VideoFilter.prototype.setCanvas = function() {
	var container = this.video.parent();

	this.canvas = $('<canvas>')
		.attr('width', this.video.width())
		.attr('height', this.video.height());
	
	this.video.after(this.canvas);
};

VideoFilter.prototype.drawScreen = function(context) {
	var cw = this.canvas.width();
	var ch = this.canvas.height();
	var vInfo = this.videoCrop(cw, ch);

	context.drawImage(this.video[0], vInfo.vx, vInfo.vy, vInfo.vw, vInfo.vh, 0, 0, cw, ch);
};

VideoFilter.prototype.videoCrop = function(cw, ch) {
	var vw = this.video.width();
	var vh = this.video.height();

	var vx = 0;
	var vy = 0;

	var ratioC = cw/ch;
	var ratioV = vw/vh;

	if(ratioC>ratioV) {
		var h = vw/ratioC;
		vy = (vh-h)/2;
		vh = h;
	}
	else {
		var w = vh*ratioC;
		vx = (vw-w)/2;
		vw = w;
	}

	return { vx: vx, vy: vy, vw: vw, vh: vh};
};

VideoFilter.prototype.applyFilter = function(context) { };

VideoFilter.prototype.supportedVideoFormat = function() {
	if(this.canPlayType('video/webm')) return 'webm';
	if(this.canPlayType('video/mp4'))  return 'mp4';
	if(this.canPlayType('video/ogg'))  return 'ogg';
};

VideoFilter.prototype.canPlayType = function(type) {
	return this.video[0].canPlayType(type)=='probably' || this.video[0].canPlayType(type)=='maybe';
};

var requestAnimationFrame = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame    ||
	window.oRequestAnimationFrame      ||
	window.msRequestAnimationFrame     ||
	function(callback) { window.setTimeout(callback, 1000/60); };