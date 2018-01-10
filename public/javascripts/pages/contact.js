globalApp.totalAnimateComplete();


document.getElementById('form-button').addEventListener('click', preventSubmit, false);

function preventSubmit(evt){
	evt.preventDefault();
	var formData = {
		name:document.getElementById('firstNameInput').value
	}
	submitPost(formData);
}

function submitPost(obj){
	console.log('ATTEMPTING SUBMIT');
	$.ajax({
		url:'/contact',
		type:'POST',
		data:obj,
		success:function(res){
			console.log(res);
		}
	}).fail(function(){
		console.log('MAJOR ERROR');
	})
}