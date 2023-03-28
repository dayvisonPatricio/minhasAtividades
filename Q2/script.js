function validatePassword() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === password) {
      document.getElementById("error-message").style.display = "block";
      return false;
    }
    return true;
}