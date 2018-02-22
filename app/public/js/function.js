// When user chirps (clicks addBtn)
  $(":button").on("click", function (event) {
    event.preventDefault();

    // Make a newChirp object
    var surveyInput = {
      /*
      firstName: $("#firstName").val().trim(),
      lastName: $("#lastName").val().trim(),
      email: $("#email").val().trim(),
      photo: $("#photo").val().trim(),
      smoking: $("form input[type='radio'][name='smoking']:checked").val(),
      */
      q1: $("form input[type='radio'][name='question-1']:checked").val(),
      q2: $("form input[type='radio'][name='question-2']:checked").val(),
      q3: $("form input[type='radio'][name='question-3']:checked").val(),
      q4: $("form input[type='radio'][name='question-4']:checked").val(),
      q5: $("form input[type='radio'][name='question-5']:checked").val(),
      q6: $("form input[type='radio'][name='question-6']:checked").val(),
      q7: $("form input[type='radio'][name='question-7']:checked").val(),
      q8: $("form input[type='radio'][name='question-8']:checked").val(),
      q9: $("form input[type='radio'][name='question-9']:checked").val(),
      q10: $("form input[type='radio'][name='question-10']:checked").val()
    };

    // Send an AJAX POST-request with jQuery
    $.post("/api/new", surveyInput)

      .then(function () {
        alert("Survey successfully completed");
        console.log(surveyInput.firstName + " created successfully");
      });
  });