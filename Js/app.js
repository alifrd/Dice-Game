
var scores , roundScore , activePleyer , step;

init();

document.querySelector(".btn-new").addEventListener("click", init );


document.querySelector(".btn-roll").addEventListener("click", function () {


	var  dice = Math.floor((Math.random() * 6 )+1);
	document.querySelector("#current-"+activePleyer).textContent = dice;

	var diceDom = document.querySelector(".dice");
	diceDom.style.display = 'block';	
	diceDom.src = "Images/dice-"+dice+".png";

	if (dice !== 1){
		roundScore +=(dice*step);
		document.querySelector("#current-"+activePleyer).textContent = roundScore;
		step++;
	}
	else{
		Next_pleyer();
	}
});


document.querySelector(".btn-hold").addEventListener("click",function () {
	scores[activePleyer] += roundScore;
	document.querySelector("#score-"+activePleyer).textContent = scores[activePleyer] ;
	if (scores[activePleyer] >= 200 ) {
		document.querySelector("#name-"+activePleyer).innerHTML = "<b style='color : red'>WINNER</b>" ;
		document.querySelector(".dice").style.display = 'none';		
	};
	Next_pleyer();
});

function Next_pleyer() {
	activePleyer ===0 ? activePleyer = 1 : activePleyer = 0 ; 
	roundScore = 0;
	document.getElementById("current-0").textContent = 0 ;
	document.getElementById("current-1").textContent = 0 ;
	document.querySelector(".player-1-panel").classList.toggle("active");
	document.querySelector(".player-0-panel").classList.toggle("active");
	document.querySelector(".dice").style.display = 'none';		
	step = 1 ;	
}

function init() {
	scores = [0,0];
	roundScore = 0;
	activePleyer = 0 ;
	step = 1 ;

	document.querySelector(".dice").style.display = 'none';
	document.getElementById("score-0").textContent = 0 ;
	document.getElementById("score-1").textContent = 0 ;
	document.getElementById("current-0").textContent = 0 ;
	document.getElementById("current-1").textContent = 0 ;
	document.getElementById("name-0").innerHTML = "Player 1";
	document.getElementById("name-1").innerHTML	= "Player 2";
}
