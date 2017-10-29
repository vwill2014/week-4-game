
$(document).ready(function() {


var number=[10, 12, 25, 36, 15, 200, 45];
var crystalNumber=[];
var displayNumber = null;

// var ytally = [];
// // var winResults = alert("YOU WIN!!!");
// // var loseResults = alert("BORN LOSER!!");
// var win = 0;
// var losses =0;

var updatedisplayNumber = function(){
displayNumber = number[Math.floor(Math.random() * number.length)];

document.querySelector("#crystalNumber").innerHTML = displayNumber;
document.querySelector("#crystalNumber").style.color = "white";
};
});

// document.onkeyup = function (event){
// var choice = event.key
// }

// }