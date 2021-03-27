console.log("Hello world.");
document.getElementById('mybutton').onclick = function() {
  console.log("test");
  document.getElementById('bigtext').innerHTML =
  document.getElementById('field1').value;
}
