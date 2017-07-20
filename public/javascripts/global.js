'use strict';

//THIS IS THE GLOBAL JS FILE WHICH WILL LOAD ON EACH PAGE
//All new methods, functions, or JS code that needs to load on each page should be written here.

//MOBILE MENU DROP DOWN ANIMATIONS

var globalApp = function () {
	return {
		init: function init() {
			this.mobileMenu();
			this.navDropDownActive();
		},
		totalAnimateComplete: function totalAnimateComplete() {
			setTimeout(function () {
				$('.animate-left,.animate-right').addClass('animate-complete');
			}, 300);
		},
		elementAnimateComplete: function elementAnimateComplete(el) {
			setTimeout(function () {
				$(el).addClass('animate-complete');
			}, 300);
		},
		mobileMenu: function mobileMenu() {
			$(".black-menu").click(function () {
				$("#mobile-menu").animate({ top: '0px' }, 500);
			});

			$(".hamburger-menu").click(function () {
				$("#mobile-menu").animate({ top: '0px' }, 500);
			});

			$(".white-x").click(function () {
				$("#mobile-menu").animate({ top: '-400px' }, 500);
			});
		},
		aboutComplete: function aboutComplete() {
			$(window).scroll(function () {
				if ($(window).scrollTop() > $('#skills').offset().top - 300) {
					$('#skills').css('opacity', 1);
					globalApp.elementAnimateComplete('#skills .skill-text');
				}
				if ($(window).scrollTop() > $('#fun-facts').offset().top - 300) {
					$('#fun-facts').css('opacity', 1);
					globalApp.elementAnimateComplete('#fun-facts .animate-target');
				}
			});
		},
		navDropDownActive:function(){
			$('.desktop-nav .right-nav > li a').hover(function(){
				$(this).children();
			});
		},
	};
}();
globalApp.init();
