 
//creating the object (with properties: key & value)
//in order to know where the hero is position on the screen it reflects exactly the css
//using the value later it will reprint where the hero is

var hero = {
	top: 700,
	left: 550
};

var missiles = [];

var enemies  = [
	{left: 200, top: 100},
	{left: 300, top: 100},
	{left: 400, top: 100},
	{left: 500, top: 100},
	{left: 600, top: 100},
	{left: 700, top: 100},
];

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

function moveMissiles() {
	for(var missile = 0; missile < missiles.length; missile = missile + 1){
		missiles[missile].top = missiles[missile].top -5 ;
	}
}

function drawEnemies() {
	//alert('drawMissiles invoked');
	document.getElementById('enemies').innerHTML = "";
	for( var enemy = 0; enemy < enemies.length; enemy = enemy +1){
		document.getElementById('enemies').innerHTML += 
		`<div class='enemy' style='left:${enemies[enemy].left}px; top:${enemies[enemy].top}px;'></div>`;
	}
}

function moveEnemies() {
	for(var enemy = 0; enemy < enemies.length; enemy = enemy + 1){
		enemies[enemy].top = enemies[enemy].top +3 ;
	}
}

function collisionDetection() {
	for(var enemy = 0; enemy < enemies.length; enemy = enemy +1){
		for(var missile = 0; missile < missiles.length; missile = missile +1){
			if(
				(missiles[missile].top <= enemies[enemy].top + 50) &&
				(missiles[missile].top >= enemies[enemy].top) &&
				(missiles[missile].left >= enemies[enemy].left) &&
				(missiles[missile].left <= enemies[enemy].left + 50)
			){
				console.log("HIT!");
			}
		}
	}
}


function gameLoop() {
	setTimeout(gameLoop, 100)
	moveMissiles();
	drawMissiles();
	moveEnemies();
	drawEnemies();
	collisionDetection();

}

gameLoop();
