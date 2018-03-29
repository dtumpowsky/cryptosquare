var length;
var squaredNum;
var letters=[];
var rows;
var columns;
var intSquare;
var finalLetters=[];
var i=0;
var j=0;

$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#decimal").val();
    sentence=sentence.replace(/\s/g, ''); //removes spaces

    letters=sentence.split("")

    console.log("size of letters array" +letters.length);

    length=letters.length;
    squaredNum=Math.sqrt(length);
    intSquare=parseInt(squaredNum);
    console.log(squaredNum);

    if (squaredNum%1==0){ //if the number of characters has an even square
      rows=squaredNum;
      columns=squaredNum;
    }
    else{
      if ((intSquare+1)*intSquare >= length){ //will adding an extra row be enough to fit all of the characters
        rows=intSquare+1;
        columns=intSquare;
      }
      else{ //needs an extra row and an extra column
        rows=intSquare+1;
        columns=intSquare+1;
      }
    }

    console.log ("The square needs " +rows+ " rows and "+columns+" columns.");

    letters.reverse();

    for(i=0; i<rows;i++){
      finalLetters[i]=new Array(j); //makes an array of arrays
      for(j=0; j<columns; j++){
        finalLetters[i][j]=letters.pop();
      }
    }
    console.log(finalLetters);




    $("#result").text(sentence);

  });
});
