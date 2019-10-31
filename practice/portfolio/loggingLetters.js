//Praticing stuff in JavaScript

// Logging Letters
/*
var sentence = "I love learning software development";

for (var i=0; i < sentence.length; i++){
	if(sentence[i] !== " "){
		console.log(sentence[i]);
	}
}

// Random 
var n = 25;
var result = 0;
var sum = 0;

if (n % 2 == 0){
	result = result + 10;
}
else{
	result = result - n;
}

for(var i = 1;i < n; i++){
	sum = sum + i;
}

// Counting Characters
function countingCharacters(stringToCount){
	console.log(stringToCount + " has " + stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind){
	var characterCount = 0;
	for (var characterPosition = 0; characterPosition < stringToCount.length;
	characterPosition++){
		if(stringToCount[characterPosition] == characterToFind){
			characterCount++;
		}
	}
	console.log("String to search in: " + stringToCount);
	console.log("Character to find: " + characterToFind);
	console.log("Number of times the character appears: " + characterCount);
}

function countingCharacters3(str, search){
	var count = 0;
	var numChars = search.length;
	var lastIndex = str.length - numChars;
	for (var index = 0; index <= lastIndex; index++){
		var current = str.substring(index, index + numChars);
		if(current == search){
			count++;
		}
	}
	return count;
}

// Rolling Dice
function rollDice(numSides){
	return Math.floor(Math.random() * numSides) + 1;
}

for (var i = 0; i < 100; i++){
	console.log(rollDice());
}

function addTwoNumbers(firstNumber, secondNumber){ 
    return firstNumber + secondNumber;
}

// Comparing Elements
var testArray = [0, 1, 1, '1', 3, '311'];

for (var arrayPosition = 0; arrayPosition < testArray.length - 1; arrayPosition++){
	var currentElement = testArray[arrayPosition];
	var nextElement = testArray[arrayPosition + 1];
	
	console.log("Testing " + currentElement + " and " + nextElement + "(greater than): "
	+ (currentElement > nextElement));
	console.log("Testing " + currentElement + " and " + nextElement + "(less than or equal to): " 
	+ (currentElement <= nextElement));

    if (currentElement == nextElement) 
	{
        console.log("Testing " + currentElement + " and " + nextElement + "(strictly equal to): " 
		+ (currentElement === nextElement));
        
        if (currentElement !== nextElement) 
		{
            console.log(currentElement + " is " + typeof(currentElement)); 
            console.log(nextElement  + " is " +  typeof(nextElement));
        }
    } 
	else {
        console.log("Testing " + currentElement + " and " + nextElement + "(equal to): false");

    }
}
*/
// Sum of Range and Find MIN_VALUE
function findMax(sampleArray){
	var maxNum = 0;
	for (index = 0; index < sampleArray.length; index++){
		current = sampleArray[index];
		if(maxNum < current){
			maxNum = current;
		}
	}
	return maxNum;
}

var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
var sum = 0;

for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++){
	sum += testArray[arrayPosition];
}
console.log("The sum of " + testArray + " is: " + sum);















