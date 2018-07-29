
var scores , roundScore , activePleyer ;


scores = [0,0];
roundScore = 0;
activePleyer = 0 ;


document.querySelector(".dice").style.display = 'none';
document.getElementById("score-0").textContent = 0 ;
document.getElementById("score-1").textContent = 0 ;
document.getElementById("current-0").textContent = 0 ;
document.getElementById("current-1").textContent = 0 ;

document.querySelector(".btn-roll").addEventListener("click", function () {

	var  dice = Math.floor((Math.random() * 6 )+1);
	document.querySelector("#current-"+activePleyer).textContent = dice;

	var diceDom = document.querySelector(".dice");
	diceDom.style.display = 'block';	
	diceDom.src = "Images/dice-"+dice+".png";

	if (dice !== 1) {

	}
	else{

	}
}) 

console.log(dice);