$(document).ready(function(){
  // First image form.
  $("#waffle").click(function(event){
    $(".confirm-order").fadeToggle();
  });

  // Second image form.
  $("#ursula").click(function(event){
    $(".confirm-order").fadeToggle();
  });

  // Third image form.
  $("#stitch").click(function(event){
    $(".confirm-order").fadeToggle();
  });

  // Fourth image form.
  $("#pixar").click(function(event){
    $(".confirm-order").fadeToggle();
  });

  // Fifth image form.
  $("#mickey").click(function(event){
    $(".confirm-order").fadeToggle();
  });

  // Sixth image form.
  $("#poohBear").click(function(event){
    $(".confirm-order").fadeToggle();
  });

  // Section that runs when form is submitted
  $("#blanks form").submit(function(event){
    // Information Variables
    let nameInput = $("input#inputName").val();
    let addressInput = $("input#inputAddress").val();

    $(".inputName").text(nameInput);
    $(".inputAddress").text(addressInput);

    $(".theSite").hide();

    $(".confirmation").fadeIn("slow").show();


    event.preventDefault();
  });

});
