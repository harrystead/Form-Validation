$(document).ready(function () {
  var errorArray = [];

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
      var nameList = $("<li>").text(
        "ERROR: username must be between 6 and 12 letters long and contain a number and no spaces"
      );
      $("#error-list").append(nameList);
      nameList.attr("id", "list-items");

      //if there is an error, push error message to array.
      errorArray.push("error");
      console.log(errorArray);

      //border red
      $("#name-input").css({ border: "2px red solid" });

      console.log(false);
    } else {
      console.log("success");
      localStorage.setItem("name: ", nameInput);

      $("#name-input").css({ border: "2px green solid" });
    }
  }

  function validatePhoneForm() {
    var phoneInput = $("#phone-input").val();

    if (!/^[0-9]{11}$/.test(phoneInput)) {
      var phoneList = $("<li>").text("ERROR: please input exactly 11 numbers");
      phoneList.attr("id", "list-items");
      $("#error-list").append(phoneList);
      $("#phone-input").css({ border: "2px red solid" });
      errorArray.push("error");
      console.log(errorArray);
      console.log(false);
    } else {
      console.log(true);
      localStorage.setItem("phone-number: ", phoneInput);

      $("#phone-input").css({ border: "2px green solid" });
    }
  }

  function validateEmailForm() {
    var emailInput = $("#email-input").val();
    var re = /\S+@\S+\.\S+/;

    if (re.test(emailInput)) {
      console.log("email-input", true);
      $("#email-input").css({ border: "2px green solid" });
      errorArray.push("error");
      console.log(errorArray);
      localStorage.setItem("email: ", emailInput);
    } else {
      var emailList = $("<li>").text(
        "ERROR: please enter a valid email address"
      );
      $("#error-list").append(emailList);
      emailList.attr("id", "list-items");
      $("#email-input").css({ border: "2px red solid" });
      console.log(false);
    }
  }

  function validateAgeForm() {
    var ageInput = $("#age-input").val();

    if (ageInput < 18 || ageInput === NaN) {
      var ageList = $("<li>").text(
        "ERROR: you must be over 18 years old to gain full access"
      );
      $("#error-list").append(ageList);
      ageList.attr("id", "list-items");
      $("#age-input").css({ border: "2px red solid" });
      errorArray.push("error");
      console.log(errorArray);
      console.log(false);
    } else {
      console.log("success");
      localStorage.setItem("age: ", ageInput);
      $("#age-input").css({ border: "2px green solid" });
    }
  }
  function validateGenderForm() {
    var genderInput = $("#gender-select").val();

    if (genderInput) {
      localStorage.setItem("gender: ", genderInput);
      $("#gender-select").css({ border: "2px green solid" });
    } else {
      var genderList = $("<li>").text("ERROR: please select a gender");
      $("#error-list").append(genderList);
      genderList.attr("id", "list-items");
      $("#gender-select").css({ border: "2px red solid" });
      errorArray.push("error");
      console.log(errorArray);
      console.log(false);
    }
  }

  $("#submit-btn").on("click", function (e) {
    e.preventDefault();
    $("#error-list").empty();

    //call functions
    validateNameForm();
    validatePhoneForm();
    validateEmailForm();
    validateAgeForm();
    validateGenderForm();

    //if error array includes error wipe local storage
    if (errorArray.includes("error")) {
      localStorage.clear();
    }
  });

  //clear local storage upon refresh - ushing local storage as submission point
  window.onbeforeunload = function (e) {
    e.preventDefault();
    localStorage.clear();
  };
});

//
