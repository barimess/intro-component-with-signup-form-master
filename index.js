function validateForm(event) {
  event.preventDefault();
  let data = {
    firstName: {
      element: document.getElementById("firstName"),
      value: document.forms["form"]["firstName"].value,
      error: document.getElementById("firstNameError"),
      errorIcon: document.getElementById("firstNameErrorIcon"),
    },
    lastName: {
      element: document.getElementById("lastName"),
      value: document.forms["form"]["lastName"].value,
      error: document.getElementById("lastNameError"),
      errorIcon: document.getElementById("lastNameErrorIcon"),
    },
    email: {
      element: document.getElementById("email"),
      value: document.forms["form"]["email"].value,
      error: document.getElementById("emailError"),
      errorIcon: document.getElementById("emailErrorIcon"),
    },
    password: {
      element: document.getElementById("password"),
      value: document.forms["form"]["password"].value,
      error: document.getElementById("passwordError"),
      errorIcon: document.getElementById("passwordErrorIcon"),
    },
  };

  for (const dataEntry in data) {
    console.log(data[dataEntry].value);
    if (data[dataEntry].value == "" || data[dataEntry].value == null) {
      //  do something
    }
  }
}

// document.getElementById("submitButton").addEventListener("click", validateForm);

let form = document.getElementById("form");
console.log(form);
form.addEventListener("submit", validateForm);
