globalApp.totalAnimateComplete();

function preventSubmit(evt){
	evt.preventDefault();
}
(function(){
	document.getElementById('form-button').addEventListener('click', preventSubmit, false);

})();
function submitForm(){
	var firstName = document.getElementById('firstNameInput').value;
	var lastName = document.getElementById('lastNameInput').value;
	var email = document.getElementById('emailInput').value;
	var help = document.getElementById('helpInput').value;
	var fieldArray = [];
	var formGood = false;
	fieldArray.push(firstName, lastName, email, help);
	console.log(fieldArray);
	for(var i = 0; i < fieldArray.length; i++){
		if(fieldArray[i] === ""){
			alert("Not all forms filled in");
			return false;
		} else {
			continue;
		}
	}
	formGood = true;
	if(formGood){
		console.log("GOOD SUBMIT");
	}
	return false;
};