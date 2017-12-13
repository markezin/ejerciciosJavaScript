// INPUT-----------------------------------------------


var i;



// Process--------------------------------------------


// for ( i = 1; i < 100 ; i++ ){

// 	if (i % 3 == 0) {

// 		console.log("fizz");

// 	}

// 	else if (i % 5 == 0) {

// 		console.log("buzz");

// 	}

// 	else {
// 		console.log(i);
// 	}

// }






function divisiblePor(n1,n2){
		
	if (n2 % n1 == 0) {
		return true;
	}
	else{
		return false;
	}
}



	// if(divisiblePor(3,i))
	// {
	// 	console.log("Fizz");
	// }
	// else
	// {
	// 	console.log("No lo es");
	// }



for (i=1; i < 100; i++)
{
	if(divisiblePor(3,i)) {
		console.log("FIZZ")
	}

	else if(divisiblePor(5,i)) {
		console.log("BUZZ")
	}
		else{
			console.log(i)
		}

}



// OUTPUT----------------------------------------------- 


	console.log(i);








