
/*

var defaults = {
	object: [],
	size: [],
}

function(options){
	var opt = $.extend({}, defaults, options)
}
*/

var object_show = {
	defaults: {
		dom: '',
		image: false,
		w: 2,
		h: 2,
		x: 0,
		y: 0,
		z: 0
	},
	render: function(options){
		var self = this,
			opt = $.extend({}, self.defaults, options),
			$el = $(opt.dom),
			canvas = $el.get(0),
			ctx = canvas.getContext('2d'),
			mW =opt.w,
			mH = opt.h,
			mX = opt.x,
			mY = opt.y,
			mZ = opt.z;

		//ctx.clearRect(0, 0);

		ctx.drawImage($('.tree img').get(0), mX, mY, mW, mH);
	}
}















