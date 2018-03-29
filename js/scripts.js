var romanNumeral;
var tens;
var romanString;

function ones(remainder){
  if (remainder===1){
    romanString=romanString+"I";
  } else if (remainder===2){
    romanString=romanString+"II";
  } else if(remainder===3){
    romanString=romanString+"III";
  } else if(remainder===4){
    romanString=romanString+"IV";
  } else if (remainder===5) {
    romanString=romanString+"V";
  } else if (remainder===6){
    romanString=romanString+"VI";
  } else if (remainder===7){
    romanString=romanString+"VII";
  } else if (remainder===8){
    romanString=romanString+"VIII";
  } else if (remainder===9){
    romanString=romanString+"IX";
  }
}



$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#decimal").val());
    romanString="";
    tens=parseInt(number/10);
    console.log(tens);
    if (tens===0){}
    else if (tens===4){
      romanString=romanString+"XL";
    } else if(tens==9){
      romanString=romanString+"XC";
    }
    else if (tens>4){
      tens=tens-5;
      romanString=romanString+"L";
        for (i=1; i<=tens; i++){
          romanString=romanString+"X";
        }
    }  else{
      for (i=1; i<=tens; i++){
        romanString=romanString+"X";
      }
    }
    remainder=number%10;
    ones(remainder);



    // } else if (number===10) {
    //   romanNumeral="X";
    // }
    //
    // else if (number===20){
    //   romanNumeral="XX"
    // } else if (number===30) {
    //   romanNumeral="XX"
    // }




    $("#result").text(romanString);
  //console.log(romanNumeral);
  });
});
