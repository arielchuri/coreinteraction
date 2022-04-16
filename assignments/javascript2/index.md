# Comments

Commenting your code helps people read your code.

```javascript
// Two slashes make a comment.
// Always add comments to your code so you can read it later.
```

# Variables

Variables are the computer keeps track of informatation.

Variables save different types of information like integers, floating point numbers, and strings.

```javascript
var myVariableName; //Creating a variable.
myVariableName = 42; //Setting a variable to a number.
var anotherVariabl = "Hello world"; //Creating and setting another variable to a string.
```

Notice that lines of code in with a ";".

# Printing to the console.

This is the most important part of figuring out why your code does not work.
If you print to the console in your code then you know that line of code was run.
You can also print the value of variables.

```javascript
// The following line just prints the string to the console.
console.log("Hellow world.");

var my_num = 42;
console.log(my_num);
```

# Conditionals

```javascript
if ((n+1)%2==0){ // If the remainder of n + 1 is equal to zero than do this:
    console.log(n + " is odd.");
} else { // Otherwise do this:
    console.log(n);
 }
```

# Arrays

Arrays are lists of *variables*. We can keep a list of variables and then use each list item by its number.

```javascript
var name_set = ["Fred", "Mary", "Joe"];

console.log(name_set.length);
console.log(name_set[1]);
```

# Looping

A *For Loop* repeats the same piece of code with small changes.

```javascript
for ( var n = 0; n < 3;  ) { 
    console.log(name_set[n]);
}
```

# Exercises

Complete as many of the following as you can. Have the program write to the console and, if you are able, have it write to the html page.

## Counting loop

Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even"). 

## Reverse loop

Output the elements of an array backwards.

## Adding up

Given two arrays of integers. Add up each element in the same position and create a new array containing the sum of each pair. Assume both arrays are of the same length. Write out the contents of the new array.

## String loop

Given a string change the every second letter to an uppercase ‘Z’. Assume there are no spaces.

```javascript
let str1 = "javascript";
// Example output:
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use  if((i+1) % 2 == 0) to check for even 
```
