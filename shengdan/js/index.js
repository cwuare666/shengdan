

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

$('.center-people').one('animationend', function(){
	$('.star-first').addClass('fs-one');
	$('.peoplehide').removeClass('peoplehide');
	$('.tophide').removeClass('tophide');
	$('.star-second').addClass('ss-one');

	$('.fs-one').one('animationend', function(){
		$(this).addClass('fs-two');

		$('.fs-two').one('animationend', function(){
			$(this).removeClass('fs-two').addClass('fs-two-shadow fs-two-yan');
		})
		
	})

	setTimeout(function(){
		$('.pdao').removeClass('pdao');
		$('.fstran').removeClass('fstran');
		setTimeout(function(){
			$('.ptran').removeClass('ptran');
		}, 1000);
	}, 1000)
})

