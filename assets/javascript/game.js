
var targetNumber = 50;
$("#crystalNumber").html(targetNumber);


var counter = 0

$(".image").on("click", function(){

counter +=10;

$("#userTally").html(counter);


if(counter===targetNumber){

alert("You win!!!");


}

});














