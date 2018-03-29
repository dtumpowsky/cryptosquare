var romanNumeral;



$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#decimal").val());
    if (number===1){
      romanNumeral="I";
    }


    $("#result").text(romanNumeral);
  });
});
