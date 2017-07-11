$(document).ready(function() {

  $("form#grocery").submit(function(event){
    alert("hi");
    var items = $("#item").val().toUpperCase().split(",");
    var alphOrderArray = items.sort();
    alphOrderArray.forEach(function(alpha) {
      $("ul").append("<li>" + alpha);
    });
    $("#grocery").hide();

      event.preventDefault();
  });
});
