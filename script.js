
//creating the object (with properties: key & value)
//in order to know where the hero is position on the screen it reflects exactly the css
//using the value later it will reprint where the hero is

var hero = {
	top: 700,
	left: 550
};

//detecting on keybord what the user is doing, which key is pressed


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
}


function moveHero() {
	document.getElementById("hero").style.left = hero.left + "px";
}

