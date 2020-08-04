var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");
var a = document.getElementById("a");
var b = document.getElementById("b");
var demo = document.getElementById("demo");
var text = "Now change the background colors to generate random  numbers!!!"

function setGradient(){
	body.style.background = "linear-gradient(to right, " +
							color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background;
}

function addRandomA(){
	a.textContent = Math.random();
}

function addRandomB(){
	b.textContent = Math.random();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", function(){
	demo.textContent = text;
	color1.addEventListener("input", addRandomA);
	color2.addEventListener("input", addRandomB);
});