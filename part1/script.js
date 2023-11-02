function verifyPasswords() {
    // Get the password inputs
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;

    // Check if passwords meet the criteria
    if (password1.length < 8 || password1 !== password2) {
        alert("Passwords must be at least eight characters long and match.");
    } else {
        alert("Passwords match!");
    }
}
