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
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    document.getElementById("nameError").innerText =
      name === "" ? "Please enter your name" : "";
    document.getElementById("emailError").innerText =
      email === "" ? "Please enter your email" : "";
  } else {
    // Form is valid, you can submit the data or perform other actions here
    // alert('Form submitted successfully!');
    displayText();
    form.reset();
  }
});

const slider = document.getElementById("mySlider");
const sliderValue = document.getElementById("sliderValue");
const colorBox = document.getElementById("colorBox");

slider.addEventListener("input", function () {
  const redValue = slider.value;
  const color = `rgb(${redValue}, 0, 0)`;
  colorBox.style.backgroundColor = color;
  sliderValue.innerText = redValue;
});
