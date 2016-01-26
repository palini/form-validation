
$("#validationform").submit(function(event){
var errorMessage = "";
event.preventDefault();//the form is not submitted

function isvalidName(name) {
	return /^[A-Za-z ]+$/.test(name);
};//isvalidName


function isValidEmailAddress(emailAddress) {
	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	return pattern.test(emailAddress);
};//isvalidemail address

//var email = document.getElementById("email").value;
//console.log(email);
if(!isValidEmailAddress($("#email").val())){
	
	errorMessage = "Email Addredd is invalid";//html == text
}

function validatePhone(phone) {
    var a = document.getElementById("phone").value;
    var filter= /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}//end of valiatePhone

if(!validatePhone($("#phone").val())){

	errorMessage = errorMessage + "<br / >Please enter a valid phone number";
}

//Password
if($("#password").val() != $("#confirmPassword").val()){
	errorMessage = errorMessage + "</br>Please enter correct password" 
}

//name
if(!isvalidName($("#name").val())){
	errorMessage = errorMessage + "</br>Please enter valid name" 
}

if(errorMessage == ''){
	$("#error").html("Your form is submitted");
}
else {
	$("#error").html(errorMessage);
}
});//end validationform
$("#foodChoices").accordion();
$("#nv").accordion();
$("#veg").accordion();

$(".continue").click(function(){
	console.log("done");
	window.open(" "," ","width : 100%","height : 100%");
});







