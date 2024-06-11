document.addEventListener("DOMContentLoaded", () => {
  // Select all the buttons
  const buttons = document.querySelectorAll(".svg-button");

  // Add click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the data-id attribute from the button
      const id = button.getAttribute("data-id");

      // Find the popup message with the corresponding popup id
      const popupMessage = document.getElementById("popup-" + id);

      // Log the popup message for debugging

      // Toggle the 'shown' class to display or hide the popup message
      if (popupMessage) {
        popupMessage.classList.toggle("shown");
      }
    });
  });


  // Select all close icons
  const closeIcons = document.querySelectorAll(".close-icon");

  // Add click event listener to each close icon
  closeIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      // Find the closest popup message
      const popupMessage = icon.closest(".popup-message");

      // Remove the 'shown' class to hide the popup message
      if (popupMessage) {
        popupMessage.classList.remove("shown");
      }
    });
  });
});
