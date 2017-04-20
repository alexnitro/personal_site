$(document).ready(function() {

	$(".hamburger-menu-desktop").click(function() {
		$("#right-nav").animate({right: '-100px'}, 500);
	});

	$(".close").click(function() {
		$("#right-nav").animate({right: '-500px'}, 500);
	});


//MOBILE MENU DROP DOWN ANIMATIONS
	$(".black-menu").click(function() {
		$("#mobile-menu").animate({top: '0px'}, 500);
	});

	$(".hamburger-menu").click(function() {
		$("#mobile-menu").animate({top: '0px'}, 500);
	});


	$(".white-x").click(function(){
		$("#mobile-menu").animate({top: '-400px'}, 500);
	});


	var homeCompleteAnimation = function(){
		$('#about .animate-left').addClass('animate-complete'); 
		$('#about .animate-right').addClass('animate-complete');
	};

	var projectCompleteAnimation = function(){
		$('#current-projects .animate-left').addClass('animate-complete');
		$('#current-projects .animate-right').addClass('animate-complete');
	};

	setTimeout(homeCompleteAnimation, 100);
	setTimeout(projectCompleteAnimation, 100);


	$(window).scroll(function(){
		if(location.pathname.lastIndexOf('about') > -1){

		if($(window).scrollTop() > ($("#skills").offset().top - 300)){
			$('#skills').css({"opacity": "1"});
			setTimeout(function(){
				$('#skills .skill-text').addClass('animate-complete');
			}, 100);
		}

		if($(window).scrollTop() > ($("#fun-facts").offset().top - 300)){
			$('#fun-facts').css({"opacity": "1"});
			setTimeout(function(){
				$('#fun-facts .container .row').children().addClass('animate-complete');
			}, 100);
		}

		} else {
			return false;
		}		

	});


	$('.project-container').hover(
		function(){
			$(this).children('.project-caption').css({"bottom":"0px"});
		}, function(){
			$(this).children('.project-caption').css({"bottom":"-400px"});
		}

	)


});