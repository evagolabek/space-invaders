 
//creating the object (with properties: key & value)
//in order to know where the hero is position on the screen it reflects exactly the css
//using the value later it will reprint where the hero is

var hero = {
	top: 700,
	left: 550
};

var missiles = [];

//detecting on keybord what the user is doing, which key is pressed

//console.log(e.keyCode); //gives exact code of the key 
// console.log(document);

document.onkeydown = function(e) {
	
	if (e.keyCode === 37){
		console.log("LEFT");
		hero.left = hero.left - 10;
		moveHero()
	}
	else if (e.keyCode === 39){
		console.log("RIGHT");
		hero.left = hero.left + 10;
		moveHero()
	}

	else if (e.keyCode === 32){
		console.log("FIRE");
		missiles.push({
			left: hero.left + 15,
			top: hero.top 
		})

		drawMissiles()
	}
}


function moveHero() {
	document.getElementById("hero").style.left = hero.left + "px";
}

function drawMissiles() {
	//alert('drawMissiles invoked');
	document.getElementById('missiles').innerHTML = "";
	for( var missile = 0; missile < missiles.length; missile = missile +1){
		// alert('forloop invoked');
		document.getElementById('missiles').innerHTML += 
		`<div class='missile' style='left:${missiles[missile].left}px; top:${missiles[missile].top}px;'></div>`;
	}
}

function moveMissiles(){
	for(var missile = 0; missile < missiles.length; missile = missile + 1){
		missiles[missile].top = missiles[missile].top -5 ;
	}
}

function gameLoop(){
	setTimeout(gameLoop, 1000)
	moveMissiles();
	drawMissiles();

}

gameLoop();
