'use strict';

import $ from 'jquery';

window.$ = $;
window.jQuery = $;

import 'bootstrap';

//THIS IS THE GLOBAL JS FILE WHICH WILL LOAD ON EACH PAGE
//All new methods, functions, or JS code that needs to load on each page should be written here.

//MOBILE MENU DROP DOWN ANIMATIONS

var globalApp = function () {
	return {
		init: function init() {
			this.mobileMenu();
			this.navDropDownActive();
		},
		totalAnimateComplete(){
			setTimeout(function () {
				$('.animate-left,.animate-right').addClass('animate-complete');
			}, 300);
		},
		elementAnimateComplete(el){
			setTimeout(function () {
				$(el).addClass('animate-complete');
			}, 300);
		},
		mobileMenu(){
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
		aboutComplete(){
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
		navDropDownActive(){
			$('.desktop-nav .right-nav > li').hover(function(){
				if($(this).children().hasClass('dropdown-contain')){
					let $dropDown = $(this);
					$dropDown.children('.dropdown-contain').css('display','block');
					setTimeout(function(){
						$dropDown.children('.dropdown-contain').addClass('active');
					},100)
				}
			}, function(){
				if($(this).children().hasClass('dropdown-contain')){
					let $dropDown = $(this);
					setTimeout(function(){
						$dropDown.children('.dropdown-contain').css('display','none')
					},400)
					$dropDown.children('.dropdown-contain').removeClass('active');
				}
			});
		}
	};
}();


globalApp.init();
window.globalApp = globalApp;
