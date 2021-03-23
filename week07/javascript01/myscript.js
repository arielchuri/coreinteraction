console.log("Hello world.")
document.getElementById("myButton").innerHTML = "Yahoo!";
document.getElementById("myButton").onclick = function() {
  document.getElementById("myButton").innerHTML = "DO NOT PRESS!";
  document.getElementById('myButton').style.color = "#00ff00";
}
