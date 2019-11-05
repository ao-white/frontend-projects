/*
	Alex White
	11-2-2019
	Revision
*/
function rollDice(){
	return Math.floor(Math.random() * 6) + 1;
}

function luckySevens(){
	var initBet = (document.forms["betForm"]["bet"].value);
	var betTotal = parseFloat(initBet);
	var maxWon = 0;
	var maxRolls = 0;
	var diceSum = 0;
	var rollCount = 0;
	
	if (initBet == "" || isNaN(initBet)) {
        alert("Please enter only a number.");
        document.forms["betForm"]["initBet"].focus();
        return false;
    }
	else if (initBet <= 0){
		alert("Starting Bet must be greater than 0.");
        document.forms["betForm"]["initBet"].focus();
        return false;
	}
	
	for(var i = 0; betTotal > 0; i++){
			diceSum = rollDice() + rollDice();
			console.log("sum: " + diceSum);
			rollCount++;
			console.log("roll: " + rollCount);
			if(diceSum === 7){
				betTotal += 4;
				if(betTotal > maxWon){
					maxWon = betTotal;
					maxRolls = rollCount;
				}
			}
			else{
				betTotal--;
			}
			console.log("maxRoll: " + maxRolls);
			console.log("amount: " + betTotal);
	}
	
	document.getElementById("results").style.display = "block";
	document.getElementById("submit").innerText = "Play Again";
	document.getElementById("initBet").innerText = "$"+ parseFloat(initBet).toFixed(2);
	document.getElementById("rollsBroke").innerText = rollCount;
	document.getElementById("highestWon").innerText = "$"+ maxWon.toFixed(2);
	document.getElementById("rollsHighest").innerText = maxRolls;
	return false;
}