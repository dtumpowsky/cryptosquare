var num;
var squaredNum;
var letters=[];



$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#decimal").val();
    sentence=sentence.replace(/\s/g, ''); //removes spaces

    letters=sentence.split("")

    console.log("size of letters array" +letters.length);

    num=letters.length;
    squaredNum=Math.sqrt(num);

    console.log(squaredNum);


    $("#result").text(sentence);

  });
});
