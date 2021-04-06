//Excersice 1
for (var n = 0; n < 20; n = n + 1) {
	if (n % 2 == 0) { //Conditional uses Modulo "%". It returns the remainder of a division. If it 0, the number must have been even.
		console.log( n + " is even");
	} else {
		console.log( n + " is odd.")
	}
}
//Excersice 2
var cars = ["Fred", "Mary","Joe"];
for ( var i = cars.length-1; i >= 0 ; i=i-1 ) { //The loop starts at the length of the array -1 and decrements by 1 until 0.
	console.log(cars[i]);
  // Below I ouput the data to the webpage. I take the innerHTML of "jOutput" and add a space and then the value of cars[i] with every iteration of the loop.
  document.getElementById("jOutput").innerHTML = document.getElementById("jOutput").innerHTML + " " + cars[i];
}

//Excersice 3
// Below 3 arrays are created. One is empty.
var myArray1 = [10,9,8,7,6,5,4,3,2,1];
var myArray2 = [100,200,300,400,500,600,700,800,900,1000];
var myArray3 = [];
for (var p=0; p<10; p++) {
	myArray3[p] = myArray1[p] + myArray2[p]; //Add the two arrays and put the answer in the third array.
	console.log(myArray3[p]);
}

//Excersice 4
var myVariable = "backwards";
const myString = Array.from(myVariable); //This makes an array from a string.
console.log(myString);
for (var r=0; r<10; r++) {
	if (r % 2 != 0) {//This is the same conditional as before but != is 'not equals' so it is checking for odd numbers.
	myString[r] = 'Z'; //Since it is odd we make it a 'Z'.
	}
console.log(myString[r]);
}
