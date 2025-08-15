const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
  // Focus input on click
  input.addEventListener("click", () => {
    input.focus();
  });

  // Handle key presses
  input.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
      e.preventDefault(); // Prevent multiple characters

      input.value = e.key; // Insert the digit

      // Move focus to next input
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } else if (e.key === "Backspace") {
      input.value = ""; // Clear current

      // Move focus to previous input if not first
      if (index > 0) {
        inputs[index - 1].focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputs[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < inputs.length - 1) {
      inputs[index + 1].focus();
    } else {
      e.preventDefault(); // Ignore other keys
    }
  });
});

// Focus first input on load
inputs[0].focus();
