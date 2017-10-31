

//I attempted to code the crystal number to display a random number from the array. I couldn't get it to work.

// var targetNumber =[50, 16, 25, 35, 40, 53, 45, 20, 18];

// $(".image").on("click", function(){
// for (var targetNumber = [Math.floor(Math.random() * targetNumber.length)]){
// }

// $("#crystalNumber").html(targetNumber);

// ======================================================================================================

// I attempted to code each crystal with a different number. But I had no success. This will something I go over and review againa and again until I can execute the code.
// var targetNumber=53;
// $("#crystalNumber").html(targetNumber);


// var counter = 0;

// var numberOptions =[10, 5, 3, 7];
// for (var i = 0; i<numberOptions.length; i++){

// var imageCrystal = $(".image");
// imageCrystal.attr("data-crystalvalue", numberOptions [i]);
// (".image").append(imageCrystal);






// below I am returning to an early version of the code so that you can see I was able to make the crystals click and have a value.


var targetNumber = 50;
$("#crystalNumber").html(targetNumber);

var counter = 0;
$(".image").on("click", function(){


counter += 10;
$("#userTally").html(counter);


if(counter===targetNumber){

alert("You win!!!");

}

else if (counter>=targetNumber) {

 alert("Loser!!!!");

}


});














