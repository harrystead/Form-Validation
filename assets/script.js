//entire orm submitted on one click
//function to run five problems

$(document).ready(function () {
  function validateNameForm() {
    var nameInput = $("#name-input").val().toLowerCase();
    var containsDigit = /\d/;
    var invalid = [];

    if (
      nameInput.length === 0 ||
      nameInput.length < 6 ||
      nameInput.length > 12
    ) {
      console.log(false);

      invalid.push("error: username must be between 6 and 12 letters long");
      console.log(invalid);
    } else {
      console.log(true);
    }

    if (containsDigit.test(nameInput)) {
      console.log(true);
    } else {
      invalid.push("error: username must contain a number (1-10)");
      console.log(invalid);
    }

    if (nameInput.indexOf(" ") > 0) {
      console.log(true);
      invalid.push("error: username must not contain spaces");
      console.log(invalid);
    } else {
      console.log(false);
    }

    $("#error-list").append(invalid);
  }

  function validatePhoneForm() {
    var phoneInput = $("#phone-input").val();
    var invalidTwo = [];

    if (!/^[0-9]{11}$/.test(phoneInput)) {
      invalidTwo.push("error: please input exactly 11 numbers");
      return false;
    }

    $("#error-list").append(invalidTwo);
  }

  function validateEmailForm() {
    var emailInput = $("#email-input").val();
    var invalidThree = [];
    var re = /\S+@\S+\.\S+/;

    if(re.test(emailInput)) {
        console.log("email-input", true);
    }
    else {
        invalidThree.push("error: please enter a valid email address");
        console.log(invalidThree);
    }


  }

  $("#submit-btn").on("click", function (e) {
    e.preventDefault();

    validateNameForm();
    validatePhoneForm();
    validateEmailForm();
  });
});
