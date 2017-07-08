//MOBILE MENU DROP DOWN ANIMATIONS
var globalApp = (function(){
	return {
		init:function(){
			this.mobileMenu();
		},
		totalAnimateComplete:function(){
			setTimeout(function(){
				$('.animate-left,.animate-right').addClass('animate-complete'); 	
			}, 300);				
		},
		elementAnimateComplete:function(el){
			setTimeout(function(){
				$(el).addClass('animate-complete');
			}, 300);
		},
		mobileMenu:function(){
			$(".black-menu").click(function() {
				$("#mobile-menu").animate({top: '0px'}, 500);
			});

			$(".hamburger-menu").click(function() {
				$("#mobile-menu").animate({top: '0px'}, 500);
			});

			$(".white-x").click(function(){
				$("#mobile-menu").animate({top: '-400px'}, 500);
			});			
		},
		aboutComplete:function(){
			$(window).scroll(function(){
				if($(window).scrollTop() > ($('#skills').offset().top - 300)){
					$('#skills').css('opacity',1);
					globalApp.elementAnimateComplete('#skills .skill-text');
				}
				if($(window).scrollTop() > ($('#fun-facts').offset().top - 300)){
					$('#fun-facts').css('opacity',1);
					globalApp.elementAnimateComplete('#fun-facts .animate-target');
				}
			});		
		},
	};
}());
globalApp.init();