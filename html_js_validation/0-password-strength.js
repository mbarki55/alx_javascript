document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("passwordForm");
    var errorElement = document.getElementById("error");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var password = document.getElementById("password").value;
        var errorMessage = validatePassword(password);
        if (errorMessage === "") {
            // If password meets criteria, allow form submission
            form.submit();
        } else {
            // If password doesn't meet criteria, display error message
            errorElement.textContent = errorMessage;
        }
    });

    function validatePassword(password) {
        var errorMessage = "";

        // Check if password is at least 8 characters long
        if (password.length < 8) {
            errorMessage += "Password must be at least 8 characters long. ";
        }

        // Check if password contains at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            errorMessage += "Password must contain at least one uppercase letter. ";
        }

        // Check if password contains at least one lowercase letter
        if (!/[a-z]/.test(password)) {
            errorMessage += "Password must contain at least one lowercase letter. ";
        }

        // Check if password contains at least one numeric digit
        if (!/\d/.test(password)) {
            errorMessage += "Password must contain at least one numeric digit. ";
        }

        // Check if password contains at least one special character
        if (!/[!@#$%^&*]/.test(password)) {
            errorMessage += "Password must contain at least one special character (!@#$%^&*). ";
        }

        return errorMessage.trim();
    }
});
