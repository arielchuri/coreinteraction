console.log("Hello world.")
document.getElementById("myButton").onclick = function() {
  console.log("yes");
  document.getElementById("word1").innerHTML = document.getElementById("field1").value;
  document.getElementById("word1").innerHTML = "another word";
  document.getElementById("word2").innerHTML = document.getElementById("field2").value;
  document.getElementById("word3").innerHTML = document.getElementById("field3").value;
  document.getElementById("story").style.display = "block";
  document.getElementById("questions").style.display = "none";
  document.getElementById("myButton").style.display = "none";

//  make word1 = field1 times field2;
  document.getElementById('word1').innerHTML = document.getElementById("field1").value * document.getElementById("field2").value;
  if (document.getElementById('field3').value == "+") {
    document.getElementById('word1').innerHTML = document.getElementById("field1").valueAsNumber + document.getElementById("field2").valueAsNumber;
  } else if (document.getElementById('field3').value == "-")  {
    document.getElementById('word1').innerHTML = document.getElementById("field1").valueAsNumber - document.getElementById("field2").valueAsNumber;
  }
}
