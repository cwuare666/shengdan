

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
})

$('#snow').let_it_snow({
	speed: 0.5,
	count: 10,
	size: 10,
	image: './image/xuehua.png'
})
$(window).load(function(){

	$('.center-people').one('animationend', function(){
		$('.star-first').addClass('fs-one');
		$('.peoplehide').removeClass('peoplehide');
		$('.tophide').removeClass('tophide');

		$('.fs-one').one('animationend', function(){
			$(this).addClass('fs-two');
			$('.fs-two').one('animationend', function(){
				$('.star-second').addClass('ss-one');
				$(this).removeClass('fs-two').addClass('fs-two-shadow fs-two-yan');
			})
			
		})
		setTimeout(function(){
			$('.pdao').removeClass('pdao');
			$('.fstran').removeClass('fstran');
			
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
})




