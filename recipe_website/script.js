document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check for simple validation
    if (username === "" || password === "") {
        showErrorMessage("Both fields are required.");
    } else if (username === "admin" && password === "1234") {
        // Replace this condition with your actual validation logic
        alert("Login successful!");
        window.location.href = "mini1.html";
        // Redirect or perform any action after login
    } else {
        showErrorMessage("Invalid username or password.");
    }
});

function showErrorMessage(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}
