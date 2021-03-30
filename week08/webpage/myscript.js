var cars = ["Fred", "Mary","Joe"];
console.log(cars.length);
for ( var i = 0; i < cars.length ; i++ ) {
//	console.log(i);
	console.log(cars[i]);
  console.log(i);
  // Below I ouput the data to the webpage. I take the innerHTML of "jOutput" and add a space and then the value of cars[i] with every iteration of the loop.
  document.getElementById("jOutput").innerHTML = document.getElementById("jOutput").innerHTML + " " + cars[i];
}
