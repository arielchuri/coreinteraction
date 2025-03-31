
function displayText() {
  const walkingInput = document.getElementById("walkingInput").value;
  const dogInput = document.getElementById("dogInput").value;
  const catInput = document.getElementById("catInput").value;
  document.getElementById("walking").innerText = walkingInput;
  document.getElementById("dog").innerText = dogInput;
  document.getElementById("cat").innerText = catInput;
  document.getElementById("story").style.visibility = "visible";
}

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
    displayText();
    form.reset();
  }
});
