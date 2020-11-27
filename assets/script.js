
//local storage for name
//alert at the end of success
//style

$(document).ready(function () {
  function validateNameForm() {
    var nameInput = $("#name-input").val().toLowerCase();
    var containsDigit = /\d/;

    if (
      nameInput.length === 0 ||
      nameInput.length < 6 ||
      nameInput.length > 12 ||
      !containsDigit.test(nameInput) || //exclamtion mark reverses the method.
      nameInput.indexOf(" ") > 0
    ) {
        var nameList = $("<li>").text("error: username must be between 6 and 12 letters long and contain a number and no spaces");
        $("#error-list").append(nameList);
        nameList.attr("id", "list-items");
        console.log(false);
    } else {
      console.log("success");
      localStorage.setItem("name: ", nameInput);
    }

  }

  function validatePhoneForm() {
    var phoneInput = $("#phone-input").val();

    if (!/^[0-9]{11}$/.test(phoneInput)) {
      var phoneList = $("<li>").text("error: please input exactly 11 numbers");
      phoneList.attr("id", "list-items");
      $("#error-list").append(phoneList);
      console.log(false)
    } else {
      console.log(true, "9");
      localStorage.setItem("phone-number: ", phoneInput);
    }

  }

  function validateEmailForm() {
    var emailInput = $("#email-input").val();
    var re = /\S+@\S+\.\S+/;

    if (re.test(emailInput)) {
      console.log("email-input", true);
      localStorage.setItem("email: ", emailInput);
    } else {
      var emailList = $("<li>").text("error: please enter a valid email address");
        $("#error-list").append(emailList);
        emailList.attr("id", "list-items");
        console.log(false);
    }
  }

  function validateAgeForm() {
    var ageInput = $("#age-input").val();

    if (ageInput < 18 || ageInput === NaN) {
      var ageList = $("<li>").text("error: you must be over 18 years old to gain full access");
      $("#error-list").append(ageList);
      ageList.attr("id", "list-items");
      console.log(false);
    } else {
      console.log("success");
      localStorage.setItem("age: ", ageInput);
    }
  }
  function validateGenderForm() {
    var genderInput = $("#gender-select").val();

    if (genderInput) {
      localStorage.setItem("gender: ", genderInput);
    }
    else {
      var genderList = $("<li>").text("error: please select a gender");
      $("#error-list").append(genderList);
      genderList.attr("id", "list-items");
      console.log(false)
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
