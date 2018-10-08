
// BELOW CODE IS CRITICAL. IT HANDLES HOW FORM DATA IS SENT TO OUR SERVER -->

    // In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
    // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
//  Start Game on click.
$(document).ready(function(){
    $(".submit").on("click", function(event) {
      event.preventDefault();

      // Grab the form elements
      var newFriend = {
        customerName: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: {
        bigThinker : $("#bigThinker").val().trim(),
        creative: $("#creative").val().trim(),
        emotions: $("#emotions").val().trim(),
        meat: $("#meat").val().trim(),
        spiritual: $("#spiritual").val().trim(),
        lgroups: $("#lgroups").val().trim(),
        sgroups: $("#sgroups").val().trim(),
        books: $("#books").val().trim(),
        movies: $("#movies").val().trim(),
        stalwartness: $("#stalwartness").val().trim(),
        }
    };

      console.log(newFriend);

      $.post("/api/friends", newFriend,
        function(data) {
          if (data) {
            alert("Yay! You are officially booked!");
          }
          else {
            alert("Sorry you are on the wait list");
          }

          // Clear the form when submitting
          $("#name").val(""),
          $("#photo").val(""),
          $("#bigThinker").val(""),
          $("#creative").val(""),
          $("#emotions").val(""),
          $("#meat").val(""),
          $("#spiritual").val(""),
          $("#lgroups").val(""),
          $("#sgroups").val(""),
          $("#books").val(""),
          $("#movies").val(""),
          $("#stalwartness").val("")
        });

    });
});
