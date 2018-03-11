(function(){
	$('.button-clear').click(function(){
		$('html,body').animate({
			scrollTop: $('#current').offset().top
		}, 600);
	});
	$('#current .project-status span.category').click(function(){
		if($(this).hasClass('active')){
			return false;
		} else {
			$(this).toggleClass('active');
			$(this).siblings('.category').toggleClass('active');
		}
	});
}());