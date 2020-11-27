//dob
//local storage for name
//alert at the end of success
//style


$(document).ready(function () {
  function validateNameForm() {
    var nameInput = $("#name-input").val().toLowerCase();
    var containsDigit = /\d/;
    var invalid = [];

    if (
      nameInput.length === 0 ||
      nameInput.length < 6 ||
      nameInput.length > 12 ||
      !containsDigit.test(nameInput) || //exclamtion mark reverses the method.
      nameInput.indexOf(" ") > 0
    ) {
      console.log(false);
      invalid.push("error: username must be between 6 and 12 letters long and contain a number and no spaces");
      console.log(invalid);
    } 
    else {
      console.log("success");
    }

    $("#error-list").append(invalid);
  }

  function validatePhoneForm() {
    var phoneInput = $("#phone-input").val();
    var invalidTwo = [];

    if (!/^[0-9]{11}$/.test(phoneInput)) {
      invalidTwo.push("error: please input exactly 11 numbers");
      console.log(invalidTwo);
    } else {
      console.log(true, "9");
      localStorage.setItem("phone-number: ", phoneInput);
    }

    $("#error-list").append(invalidTwo);
  }

  function validateEmailForm() {
    var emailInput = $("#email-input").val();
    var invalidThree = [];
    var re = /\S+@\S+\.\S+/;

    if (re.test(emailInput)) {
      console.log("email-input", true);
      localStorage.setItem("email: ", emailInput);
    } else {
      invalidThree.push("error: please enter a valid email address");
      console.log(invalidThree);
    }
  }

  function validateAgeForm() {
    var ageInput = $("#age-input").val();
    var invalidFour = [];

    if(ageInput < 18) {
    invalidFour.push("error: you must be over 18 years old to gain full access")
    console.log(invalidFour);
    }
    else {
      console.log("success");
      localStorage.setItem("age: ", ageInput);
    }


}

  function validateGenderForm() {
    var genderInput = $("#gender-select").val();

    if(genderInput) {
        localStorage.setItem("gender: ", genderInput);
    }
  }

  $("#submit-btn").on("click", function (e) {
    e.preventDefault();

    validateNameForm();
    validatePhoneForm();
    validateEmailForm();
    validateAgeForm();
    validateGenderForm();
  });
});
