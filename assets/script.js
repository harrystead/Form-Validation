//entire orm submitted on one click
//function to run five problems

$( document ).ready(function (){
    function validateNameForm() {
        var nameInput = $("#name-input").val().toLowerCase();
        var containsDigit = /\d/;
        var invalid = [];
      
        if (nameInput.length === 0 || nameInput.length < 6 || nameInput.length > 12) {
          console.log(false);
      
          invalid.push("error: username must be between 6 and 12 letters long");
          console.log(invalid);
        } else {
          console.log(true);
        }
      
        if (containsDigit.test(nameInput)) {
          console.log(true);
        } else {
          invalid.push("error: password must contain a number (1-10)");
          console.log(invalid);
        }

        if(nameInput.indexOf(' ') > 0) {
            console.log(true);
            invalid.push("error: password must not contain spaces")
            console.log(invalid);
        }
        else{
            console.log(false);
        }

      
        $("#error-list").append(invalid);
      }
      
      function validatePhoneForm() {
      
      }
      
      $("#submit-btn").on("click", function (e) {
        e.preventDefault();
      
        validateNameForm();
        validatePhoneForm();
      });



});


