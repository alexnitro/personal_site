


var photolength = $('.photo-container').length;
var photosection = $('.photo-container');
var photoCategory = $('.photo-category-list');
var photoArray = [];
var themeArray = [];
var allPhotos = false;
var theme;
var themeLower;
var currentPhoto;
var photoposition;
var photoSrc;

//SELECTING THE THEME OF THE PHOTO 
$('.photo-category-list li').click(function(){
	if($(this).hasClass('active-photo-category')){
		$(this).removeClass('active-photo-category');
		allPhotos = true;
		
	} else {

		$('.photo-category-list li').removeClass('active-photo-category');
		$(this).addClass('active-photo-category');
		allPhotos = false;		
	}

	/*theme = $(this).text();
	themeLower = theme.toLowerCase();

	for(var i = 0; i < photolength; i++){
		if(allPhotos){
			$('.photo-container').css({"display":"block"});

		} else if($('.photo-container img').eq(i).attr('data-theme') !== themeLower){
			$('.photo-container').eq(i).css({"display":"none"});

		} else if($('.photo-container img').eq(i).attr('data-theme') === themeLower){
			$('.photo-container').eq(i).css({"display":"block"});

		}
	}*/
});


$(function(){
	$('#main-photo-area').mixItUp();

});


for(var i = 0; i < photolength; i++){
	photoArray.push(photosection.eq(i).children().attr('src'))

}


///////////////////ACTIVATE PHOTO BOX AND DISCOVER PHOTO LENGTH
$('.photo-container').click(function(){
	photoposition = 0;
	photoSrc = $(this).children().attr('src');
	
	for(var i = 0; i < photolength; i++){
		console.log(photoposition);
		if(photoSrc != photoArray[i]){
			photoposition += 1;
		} else {
			break;
		}
	}

	photoSource = photoArray[photoposition];

	$('#grey-area').fadeIn('fast').css({"display":"block"});
	$('.photo-area').fadeIn('fast').css({"display":"block"});
	$('.arrow img').fadeIn('fast').css({"display":"block"});

	$('.photo-frame').attr('src', photoSource);

});

$('.next-arrow').click(function(){
	increasePicture();

})

$('.back-arrow').click(function(){
	decreasePicture();

})


//////////////////INCREASE PICTURE INDEX

function increasePicture(){
	if(photoposition === photoArray.length - 1){
	
		return false;

		} else {

		photoposition += 1;
		$('.photo-frame').attr('src', photoArray[photoposition]);
		console.log(photoposition);

	}
}


///////////////////DECREASE PICTURE INDEX

function decreasePicture(){
	if(photoposition === 0){

		return false;

	} else {

	photoposition -= 1;
	$('.photo-frame').attr('src', photoArray[photoposition]);
	console.log	(photoposition);

	}
}


$(document).keydown(function(event){
	if(event.which === 39){
		increasePicture();

	} else if(event.which === 37){
		decreasePicture();

	}
})	
	

////////////////////HIDE THE SHADOW BOXES
$('#grey-area').click(function(){
	$(this).fadeOut('fast').css({"display":"none"});
	$('.photo-area').fadeOut('fast').css({"display":"none"});
	$('.arrow img').css({"display":"none"});

});


$('.x-button').click(function(){
	$('#grey-area').fadeIn().css({"display":"none"});
	$('.photo-area').fadeIn().css({"display":"none"});
	$('.arrow img').css({"display":"none"});

});


