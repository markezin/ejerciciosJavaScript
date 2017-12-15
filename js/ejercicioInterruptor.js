var myCabron = true;

function toggle() {

var myTarget = document.getElementById("myButton");

// Si el INTERRUPTOR está apagado...

if( myCabron == true )
{
	myCabron = false; // ... encienda el INTERRUPTOR

	myTarget.style.backgroundColor = "darkgreen";

	myTarget.innerHTML = "JoPuta";

	myImage.src = "img/barSimpson.png";

}

// Si no...
	else
	{
		myCabron = true; // ... apague el INTERRUPTOR

		myTarget.style.backgroundColor = "darkred";

		myTarget.innerHTML = "Cabrón";

		myImage.src = "img/GokuVegeta.png";
	}
}