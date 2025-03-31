// Attach an event listener to the form submission
document.getElementById("myForm").addEventListener("submit", function (event) {
  // Prevent the default form submission behavior (which would refresh the page)
  event.preventDefault();

  // ----- 1. GETTING INPUT VALUES -----

  // Get the value of the input field with ID "name"
  const nameName = document.getElementById("name").value;

  // ----- 2. HANDLING RADIO BUTTON SELECTION -----

  // Get all radio buttons with the name "familiar"
  const radioButtons = document.getElementsByName("familiar");
  let selectedRadio; // Variable to store the selected radio button value

  // Loop through all radio buttons
  for (const radio of radioButtons) {
    if (radio.checked) {
      // If the radio button is checked
      selectedRadio = radio.value; // Store its value
      break; // Exit the loop once a selection is found
    }
  }

  // ----- 3. GETTING DROPDOWN VALUE -----

  // Get the selected value from the dropdown with ID "role"
  const selectedDropdown = document.getElementById("role").value;

  // ----- 4. UPDATING MULTIPLE ELEMENTS WITH CLASS NAMES -----

  // Find all elements with the class "nameSpan" and update their content
  document.querySelectorAll(".nameSpan").forEach((element) => {
    console.log(element.innerHTML); // Log the current content
    element.innerHTML = nameName; // Update with the entered name
  });

  // Find all elements with the class "roleSpan" and update their content
  document.querySelectorAll(".roleSpan").forEach((element) => {
    console.log(element.innerHTML); // Log the current content
    element.innerHTML = selectedDropdown; // Update with the selected dropdown value
  });

  // Find all elements with the class "familiarSpan" and update their content
  document.querySelectorAll(".familiarSpan").forEach((element) => {
    console.log(element.innerHTML); // Log the current content
    element.innerHTML = selectedRadio; // Update with the selected radio button value
  });

  // ----- 5. SHOWING A HIDDEN DIV -----

  function showDiv() {
    // Change the display property of the div with ID "story" to "flex" to make it visible
    document.getElementById("story").style.display = "flex";
  }

  // Call the function to reveal the hidden div
  showDiv();
});
