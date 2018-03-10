
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


//Change the main content on the homepage to slowly load

//Add Animation Function
var animateComplete = function(){
	$('#homepage-content').addClass('animate-complete');
}

var addOpacity = function(){
	$('#homepage-content').css({'opacity':'1'})
}

var skillAppear = function(){
	$('#header-skills').css({'opacity':'1'});
}


setTimeout(animateComplete, 400) ;
setTimeout(addOpacity, 450);

var headerSkills = $('#header-skills li');

function skillsAppear(i,num){
	setTimeout(function(){
		headerSkills.eq(i).css({'opacity':'1'})
	}, num)
}

var delayNum = 800;

for(var i = 0; i < headerSkills.length; i++){
	skillsAppear(i,delayNum);
	delayNum += 500;
}

//This loads other main body elements on the page once users have reached a particular part during their scroll
$('.skill-type').click(function(){

	if($(this).hasClass('active')){
		return false;
	} else {
		$(this).siblings().removeClass('active')
		$(this).addClass('active')
	}

	if($('.skill-type').eq(1).hasClass('active')){
		$('#marketing-skills').children().removeClass('animate-complete');
		$('#marketing-skills').removeClass('view',function(){
			$(this).siblings().addClass('view').delay(350).queue(function(next){
				$(this).children().addClass('animate-complete');
				next();
			});

		});


	} else {
		$('#dev-skills').children().removeClass('animate-complete');
		$('#dev-skills').removeClass('view', function(){
			$(this).siblings().addClass('view').delay(350).queue(function(next){
				$(this).children().addClass('animate-complete');
				next();
			});

		});
	}
});

