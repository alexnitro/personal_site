$(".hamburger-menu-desktop").click(function(){$("#right-nav").animate({right:"-100px"},500)}),$(".close").click(function(){$("#right-nav").animate({right:"-500px"},500)}),$(".black-menu").click(function(){$("#mobile-menu").animate({top:"0px"},500)}),$(".hamburger-menu").click(function(){$("#mobile-menu").animate({top:"0px"},500)}),$(".white-x").click(function(){$("#mobile-menu").animate({top:"-400px"},500)});var animateComplete=function(){$("#homepage-content").addClass("animate-complete")},addOpacity=function(){$("#homepage-content").css({opacity:"1"})},skillAppear=function(){$("#header-skills").css({opacity:"1"})};setTimeout(animateComplete,400),setTimeout(addOpacity,450),setTimeout(function(){$("#header-skills li").css("opacity",1)},1e3),$(".skill-type").click(function(){if($(this).hasClass("active"))return!1;$(this).siblings().removeClass("active"),$(this).addClass("active"),$(".skill-type").eq(1).hasClass("active")?($("#marketing-skills").children().removeClass("animate-complete"),$("#marketing-skills").removeClass("view",function(){$(this).siblings().addClass("view").delay(350).queue(function(e){$(this).children().addClass("animate-complete"),e()})})):($("#dev-skills").children().removeClass("animate-complete"),$("#dev-skills").removeClass("view",function(){$(this).siblings().addClass("view").delay(350).queue(function(e){$(this).children().addClass("animate-complete"),e()})}))});