console.log( document.getElementById("field01").value );
document.getElementById("myButton").onclick = function() {
  document.getElementById("word01").innerHTML = document.getElementById("field01").value;
  document.getElementById("word02").innerHTML = document.getElementById("field02").value;
  document.getElementById("word03").innerHTML = document.getElementById("field03").value;
  document.getElementById("word04").innerHTML = document.getElementById("field04").value;
  document.getElementById("word05").innerHTML = document.getElementById("field05").value;
  document.getElementById("story").style.display = "block";
  document.getElementById("questions").style.display = "none";
}
