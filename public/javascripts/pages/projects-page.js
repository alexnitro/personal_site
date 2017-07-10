//@codekit-prepend "/../main.js"
(function(){
	var button = document.getElementsByClassName('button-clear')[0];
	$(button).click(function(){
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