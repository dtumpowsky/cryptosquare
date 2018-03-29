var length;
var squaredNum;
var letters=[];
var rows;
var columns;
var intSquare;
var finalLetters=[];
var finalString="";
var i=0;
var j=0;
var counter=0;
function resetVariables(){
  //letters=[];
  //finalLetters=[];
  finalString="";
  counter=0;
}
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    resetVariables();
    event.preventDefault();
    var sentence = $("input#decimal").val();
    sentence=sentence.toLowerCase();
    sentence=sentence.replace(/\s/g, ''); //removes spaces
    letters=sentence.split("")
    length=letters.length;
    squaredNum=Math.sqrt(length);
    intSquare=parseInt(squaredNum);

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

    letters.reverse();

    //reads the letters into a two dimensional array that is similar to a cryptosquare
    while (letters.length!=0){
      for(i=0; i<rows;i++){
        finalLetters[i]=new Array(j); //makes an array of arrays
        for(j=0; j<columns; j++){
          if (letters.length===0){
            finalLetters[i][j]="";
          } else {
            finalLetters[i][j]=letters.pop();
          }
        }
      }
    }

    //reads through the cryptosquare from top to bottom, then left to right
    for(x=0; x<columns; x++) {
      for(y=0; y<rows; y++) {
        if(finalLetters[y][x]===""){}
        else{
          counter++;
          if (counter%5==0) { //adds spaces after every 5th letter
            finalString=finalString + finalLetters[y][x] + " ";
          } else {
            finalString=finalString + finalLetters[y][x];
          }
        }

      }
    }
    $("#result").text(finalString); //displays final result

  });
});
