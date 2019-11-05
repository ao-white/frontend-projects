/*
	Alex White
	11-3-2019
	Revision:
*/

function validateInfo(){
	var nameInfo = document.forms["contactForm"]["name"].value;
    var emailInfo = document.forms["contactForm"]["email"].value;
	var phoneInfo = document.forms["contactForm"]["phone"].value;
    var additionalInfo = document.forms["contactForm"]["info"].value;
	var mCheck = document.forms["contactForm"]["monday"].checked;
	var tCheck = document.forms["contactForm"]["tuesday"].checked;
	var wCheck = document.forms["contactForm"]["wednesday"].checked;
	var hCheck = document.forms["contactForm"]["thursday"].checked;
	var fCheck = document.forms["contactForm"]["friday"].checked;

	
	if (nameInfo == "" || emailInfo == "" || phoneInfo == "") {
        alert("Name, Phone, and Email must be filled.");
        return false;
    }
	if (additionalInfo == "") {
        alert("Additional Info must be filled. Put N/A otherwise.");
		nameInfo = document.forms["contactForm"]["info"].focus();
        return false;
    }
	if (!mCheck && !tCheck && !wCheck && !hCheck && !fCheck){
		alert("Please select at least one day of the week to best contact you.");
        return false;
	}
	
	alert("Valid submission. Thank you for contacting us!");
	return false;
}