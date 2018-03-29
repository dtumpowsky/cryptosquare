var romanNumeral;
var tens;
var romanString;

function onesFunction(remainder){
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

function tensFunction(tensNum){
  if (tensNum===0){}
  else if (tensNum===4){
    romanString=romanString+"XL";
  } else if(tensNum==9){
    romanString=romanString+"XC";
  }
  else if (tensNum>4){
    tensNum=tensNum-5;
    romanString=romanString+"L";
      for (i=1; i<=tensNum; i++){
        romanString=romanString+"X";
      }
  }  else{
    for (i=1; i<=tensNum; i++){
      romanString=romanString+"X";
    }
  }
}

function hundredsFunction(hundredsNum){
  if (hundredsNum===0){}
  else if (hundredsNum===4){
    romanString=romanString+"CD";
  } else if(hundredsNum==9){
    romanString=romanString+"CM";
  }
  else if (hundredsNum>4){
    hundredsNum=hundredsNum-5;
    romanString=romanString+"D";
      for (i=1; i<=hundredsNum; i++){
        romanString=romanString+"C";
      }
  }  else{
    for (i=1; i<=hundredsNum; i++){
      romanString=romanString+"C";
    }
  }
}

function thousandsFunction(thousandsNum){
  if (thousandsNum===0){}

  else{
    for (i=1; i<=thousandsNum; i++){
      romanString=romanString+"M";
    }
  }
}


$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#decimal").val());
    romanString="";

    thousands=parseInt(number/1000);
    thousandsFunction(thousands);
    number=number%1000;

    hundreds=parseInt(number/100);
    hundredsFunction(hundreds);
    number=number%100;

    tens=parseInt(number/10);
    tensFunction(tens);

    ones=number%10;
    onesFunction(ones);



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
