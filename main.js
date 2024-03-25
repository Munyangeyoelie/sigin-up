function checkPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  console.log(password, confirmPassword);
  let message = document.getElementById("message").value;

  if (password.length != 0) {
    if (password != confirmPassword) {
      document.getElementById("message").value = "Passwords do not match";
    } else {
      document.getElementById("message").value = "Password match";
    }
  }
}
