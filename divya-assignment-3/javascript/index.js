//const declaration
const form = document.querySelector(".form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const error = document.querySelector(".error");
const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//function for error
function showError(field, n, message) {
  document.querySelector(`#${field}`).style.border = "1px solid red";
  document.querySelector(`.error${n}`).style.cssText =
    "visibility:visible; color: red;";
  document.querySelector(`.error${n}`).innerHTML = message;
}

//function for validation
function showValidated(field, n) {
  document.querySelector(`#${field}`).style.border = "2px solid green";
  document.querySelector(`.error${n}`).style.visibility = "hidden";
}

//validating all values
function CheckValidation(e) {
  e.preventDefault();

  var valid = {
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  };

  //Username check
  if (username.value === "") {
    showError("username", 1, "Enter Username");
  } else if (username.value.trim().length < 4) {
    showError("username", 1, "Username should be min 3 Characters");
  } else {
    showValidated("username", 1);
    valid.username = true;
  }

  //email check
  if (email.value === "") {
    showError("email", 2, "Enter Email");
  } else if (!emailCheck.test(email.value.trim())) {
    showError("email", 2, "Email is not valid");
  } else {
    showValidated("email", 2);
    valid.email = true;
  }

  //password check
  if (password.value === "") {
    showError("password", 3, "Enter Password");
  } else if (password.value.length < 8) {
    showError("password", 3, "Password should be minimum 8 characters");
  } else {
    showValidated("password", 3);
    valid.password = true;
  }

  //password confirm and match
  if (confirmPassword.value === "") {
    showError("confirmPassword", 4, "Confirm Password");
  } else if (confirmPassword.value !== password.value) {
    showError("confirmPassword", 4, "Passwords do not match");
  } else {
    showValidated("confirmPassword", 4);
    valid.confirmPassword = true;
  }
  //setting timer for 3s
  if (
    valid.username === true &&
    valid.email === true &&
    valid.password === true &&
    valid.confirmPassword === true
  ) {
    setTimeout(function () {
      form.reset();
      username.style.border = "2px solid rgb(218, 214, 214)";
      email.style.border = "2px solid rgb(218, 214, 214)";
      password.style.border = "2px solid rgb(218, 214, 214)";
      confirmPassword.style.border = "2px solid rgb(218, 214, 214)";
    }, 3000);
  }
}
