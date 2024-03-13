// Create a function to handle form submission
function handleFormSubmit(event) {
    // Prevent default form submission behavior
    event.preventDefault();
  
    // Retrieve form field values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
  
    // Validate form fields
    if (name.trim() === '' || email.trim() === '') {
      // If any required field is empty, display error message
      alert('Please fill in all required fields.');
    } else {
      // If all validations pass, display success message
      alert('Form submitted successfully!');
     
    }
  }
  
  // Add an event listener to the form element to listen for the "submit" event
  document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);
  