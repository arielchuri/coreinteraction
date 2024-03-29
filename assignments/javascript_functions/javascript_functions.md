# Javascript Functions

Let's learn about *functions* in javascript.

Functions are just chunks of code that you write and want to be able to use easily.
You give the chunk of code a name like *fredfunction*. 
In your code, you can just write *fredfunction();* and the code will run.
Create a function and then run it like this:

```javascript
function fredfunction() {
    console.log('fredfunction has run');
}

fredfunction();
```

Here we use the function to modify a variable and print its value both before, and after we run the function.

```javascript

function maryfun() {
  x = x + 1;
}

var x = 42;

console.log( "x = " + x );

maryfun();

console.log( "x = " + x );

```

## Arguments

Functions are more powerful because you can send information for the code in the function to act on.
Take a look at the following code.

```javascript

function sumfun(n) {
  console.log(n);
}

sumfun(x);

```

First, we write the function.
This time, we tell the function to expect an argument by adding a new variable name in the parenthesis.
The value we send to this function will be saved in the variable *n*.
The code in the function can use *n*.

When we call the code with *sumfun(x)* we are sending the value of *x* to the function. 

If we try to use *n* outside of the function we get an error. 
As shown below.
Variables have a *scope*. A function variable only works inside the function.

```javascript

function sumfun(n) {
  console.log(n);
}

sumfun(x);

console.log(n);

```

## Returning a value

If we want to get a value back out of a function, we need to "return" it.

```javascript

function sumfun(y) { // a function that multiplies a value by 7.
  y = y * 7;
  return y // and returns it.
}

var i = sumfun(x); // create a var with the value of whatever comes back when you send sumfun the value of x.

console.log('i = ' + i);

console.log("sumfun(x) returns " + sumfun(x)); // we can use the function call directly.

document.getElementById("my_div").innerHTML = sumfun(x); // We can set a div to contain the result of a function.

```

## Putting it together

Lets make a function that adds two values.

```javascript

function addFunc(a,b) { 
  var c = a + b;
  return c;
}

console.log(addFunc(6,12)); // Test the addFunc

```

Lets hook it into the html. This sends the values in the fields when you press the test button.

```javascript

document.getElementById("testButton").onclick = function() {
  x = document.getElementById("field01").value;
  y = document.getElementById("field02").value;
  console.log(addFunc(x,y)); 
}

```

There is a problem with this however. The javascript taken in *strings* from the text boxes so the math does not work.

Lets turn the numbers in the text boxes into integers this time.

```javascript

document.getElementById("addButton").onclick = function() { // Here it is again but the javascript changes the strings to numbers.
  x = parseInt(document.getElementById("field01").value);
  y = parseInt(document.getElementById("field02").value);
  document.getElementById("my_div").innerHTML = addFunc(x,y);
}

```
