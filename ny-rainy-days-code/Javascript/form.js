const form = document.querySelector("form");
const nameField = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const emailAddress = document.querySelector("#e-mail");
const emailError = document.querySelector("#emailError");

function validateForm() {
  event.preventDefault();

  if (checkLength(nameField.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validateEmail(emailAddress.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  console.log("hello");
}

form.addEventListener("submit", validateForm);

function checkLength(value, characters) {
  if (value.trim().length > characters) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

const message = document.querySelector("textarea");
characterCount = document.querySelector(".character-count span");

message.onkeyup = function () {
  console.log(event.target.value);

  const len = event.target.value.length;
  characterCount.innerHTML = len;

  if (len >= 100) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
};
