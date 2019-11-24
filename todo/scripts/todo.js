/*
	Alex White
	11-19-2019
	Revision
*/

function createAlert(){
	var taskInfo = document.forms["list"]["task"].value;
    var dateInfo = document.forms["list"]["date"].value;
	
	var newAlert = document.createElement("div");
	newAlert.className = "alert alert-dismissable col-auto";

	var br = document.createElement("br");
	
	//Add task text
	var newText = document.createTextNode(taskInfo);
	newAlert.appendChild(newText);
	//Add close button
	newAlert.insertAdjacentHTML('beforeend', '<button type="button" class="btn close" data-dismiss="alert" aria-label="Close" style="marginLeft: 10px"> <span aria-hidden="true">×</span> </button>');
	newAlert.appendChild(br);
	//Add days text
	if(dateInfo == 1){
		newText = document.createTextNode(dateInfo + " day");
	}
	else{
		newText = document.createTextNode(dateInfo + " days");
	}
	newAlert.appendChild(newText);

	if(dateInfo < 3){
		newAlert.style.backgroundColor = "#FF7272";
	}
	else if(dateInfo < 7){
		newAlert.style.backgroundColor = "#FFFF72";
	}
	else{
		newAlert.style.backgroundColor = "#E2E0BE";
	}
	
	var element = document.getElementById("boxes");
	element.appendChild(newAlert);
	
	
	return false;
}

function validateInfo(){
	var taskInfo = document.forms["list"]["task"].value;
    var dateInfo = document.forms["list"]["date"].value;
	
	document.forms["list"]["task"].setCustomValidity('');
	document.forms["list"]["date"].setCustomValidity('');
	
	if(taskInfo == "") {
		document.forms["list"]["task"].setCustomValidity('Please fill out this field.');
        return false;
    }
	else if(dateInfo % 1 != 0 || dateInfo == ""){
		document.forms["list"]["date"].setCustomValidity('Please enter a whole number.');
        return false;
	}
	else if(dateInfo < 1) {
		document.forms["list"]["date"].setCustomValidity('Please select a value no less than 1.');
        return false;
    }
}

