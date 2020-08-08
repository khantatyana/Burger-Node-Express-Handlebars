$(document).ready(function() {
  $(".change-devour").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devourIt = $(this).data("devour");

    var eatIt = {
      devoured: devourIt
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatIt
    }).then(
      function() {
        console.log("devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-devour").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log(id);

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});