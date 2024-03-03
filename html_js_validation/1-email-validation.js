document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("emailForm");
    var errorElement = document.getElementById("error");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        if (validateEmail(email)) {
            // If email format is correct, allow form submission
            form.submit();
        } else {
            // If email format is incorrect, display error message
            errorElement.textContent = "Please enter a valid email address.";
        }
    });

    function validateEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
