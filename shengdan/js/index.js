

/*
object_show.render({
	dom: '#cvsObj',
	image: true,
	w: 194,
	h: 331,
	x: 0,
	y: 0
})
*/
$('#snowSmall').let_it_snow({
	speed: 1,
	count: 100,
	size: 1
});

$('#snow').let_it_snow({
	speed: 0.5,
	count: 10,
	size: 10,
	image: './dist/image/xuehua.png'
});
var name = getParam('name');
var content = getParam('content');
var showcont = (name ? name + '：' : '') + (content ? content : '');
if(showcont.length > 40){
	showcont = showcont.substring(0, 40);
}
showcont = showcont ? showcont : '祝大家圣诞快乐！！'
var contArr = showcont.split('');
var showi = 0;
window.onload = function(){
	$('.center-people').addClass('center-people-show');
	$('#audioid')[0].play();
	$('.start').slideUp();

	$('.center-people').one('animationend', function(){
		$('.peoplehide').removeClass('peoplehide');
		$('.tophide').removeClass('tophide');
		$('.star-first').addClass('fs-one');
		$('.start').remove();

		$('.fs-one').one('animationend', function(){
			$(this).addClass('fs-two');
			$('.fs-two').one('animationend', function(){
				$('.star-second').addClass('ss-one');
				$(this).removeClass('fs-two').addClass('fs-two-shadow fs-two-yan');
			})
			
		});
		setTimeout(function(){
			$('.pdao').removeClass('pdao');
			$('.fstran').removeClass('fstran');
			showCont(contArr);
		}, 1000)
		setTimeout(function(){
			$('.ptran').removeClass('ptran').addClass('pptran');
			$('.pptran').addClass('pdaotwo');
			setTimeout(function(){
				$('.pptran').removeClass('pdaotwo');
				$('.snower').addClass('xueren-one');
				setTimeout(function(){
					$('.pptran').removeClass('pptran').addClass('move');
				}, 2000);
			}, 1200)
		}, 2500)
	})
	$('#audioid')[0].onended = function(){
		$('.title').remove();
		$('.snower').remove();
		$('.center-people').remove();
		$('.snower').remove();
		$('.star-first').remove();
		$('.star-second').remove();
		$('.people-first').remove();
		$('.people-second').remove();
		$('.people-third').remove();
		$('.people-fourth').remove();
		$('.people-fifth').remove();
		$('.people-sixth').remove();
		$('#audioid').remove();
		$('.end').removeClass('endhide');
	}
}
function getParam(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  decodeURIComponent(r[2]); return null;
}
function showCont(cont){
	setTimeout(function(){
		if(cont.length < showi){
			return false;
		}
		var word = cont[showi];
		$('.word').append(word);
		showi ++;
		showCont(cont)
	},500)
}


