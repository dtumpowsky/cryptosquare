
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#decimal").val();
    console.log(sentence.length);



    $("#result").text(sentence);

  });
});
