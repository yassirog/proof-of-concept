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
// NIUEWWWWWWWWWWWWWWWWWWWWW
  var buttons = document.querySelectorAll('.svg-button');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      if (button.classList.contains('active')) {
        button.classList.remove('active');
      } else {
        buttons.forEach(function(btn) {
          btn.classList.remove('active');
        });
        button.classList.add('active');
      }
    });
  });

  var closeIcons = document.querySelectorAll('.close-icon');

  closeIcons.forEach(function(icon) {
    icon.addEventListener('click', function(event) {
      event.preventDefault();
      var dataId = icon.closest('article').id.split('-')[1];
      var button = document.querySelector('.svg-button[data-id="' + dataId + '"]');
      if (button) {
        button.classList.remove('active');
      }
    });
  });
