$(function() {
	var $photo = $('.photo');
	$photo.append(  '<span class="graphic top"></span>' + 
					'<span class="graphic right"></span>' +
					'<span class="graphic bottom"></span>' +
					'<span class="graphic left"></span>' +
					'<span class="graphic tlc"></span>' +
					'<span class="graphic trc"></span>' +
					'<span class="graphic brc"></span>' +
					'<span class="graphic blc"></span>');

	$("a[data-media='video']").colorbox({iframe:true, innerWidth:450, innerHeight:350});

	if(!Modernizr.cssgradients){
		$('body.sq').append('<span class="graphic gradient_top"></span><span class="graphic gradient_bottom"></span>');
	};	
});