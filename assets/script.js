//entire orm submitted on one click
//function to run five problems

function validateForm() {
  var nameInput = $("#name-input").val().toLowerCase();
  var containsDigit = /\d/;
  var containsCap = /[A-Z]/;
  var invalid = [];

  if (nameInput.length === 0 || nameInput.length < 6 || nameInput.length > 12) {
    console.log(false);

    invalid.push(
      "error: username must be between 6 and 12 letters long and must also include a number"
    );
  }
  else{
      console.log(true);
  }

  if (containsDigit.test(nameInput)) {
    console.log(true);
  }
  else {
    invalid.push(
        "error: password must contain a number (1-10)"
        );
        console.log(invalid);
  }

  $("#error-div").append(invalid);
}

$("#submit-btn").on("click", function (e) {
  e.preventDefault();

  validateForm();
});
