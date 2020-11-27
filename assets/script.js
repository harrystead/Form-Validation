//entire orm submitted on one click
//function to run five problems

function validateForm() {
  var nameInput = $("#name-input").val().toLowerCase();

  if (nameInput.length === 0 || nameInput.length < 6 || nameInput.length > 12) {
    console.log(false);

    var errorName = $("<p>").text("username must be between 6 and 12 letters long and must also include a number");
    $("#error-div").append(errorName);
    errorName.css("color", "red");

  }
  else {
      //save to local storage
      console.log(true);
  }
}

$("#submit-btn").on("click", function (e) {
    e.preventDefault();

  validateForm();
});
