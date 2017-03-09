
//Global Varible 
var loss = 0;
var win = 0;
var crystalValue = Math.floor(Math.random() * (102)+ 19)
var gemArray = [];
var adder = 0;

//making sure the DOM is ready
$(document).ready(function(){
	//function to generate gem values
	function gemFunc() {

		for (var i = 0; i < 4; i++){

		var gem = Math.floor(Math.random() * 12) + 1 ;
		
		gemArray.push(gem);
	}
};

gemFunc();
$('.numberToMatch').html(crystalValue);
 

$(".gemPics").on("click", "img", function(event){
	event.preventDefault();
	gemFunc();
	var gem1value = (gemArray[0]);
	adder = adder + gem1value;
	$('.score').html(adder);
	checkit();

})

function checkit(){
	if (crystalValue === adder) {
		$("#winlossmessage").html("You won that round!");
		win = win + 1;
		$("#wins").html(win);
		reset();
		}
	else if (crystalValue < adder) {
		$("#winlossmessage").html("You loss that round!");
		loss = loss + 1;
		$("#losses").html(loss);
		reset();
		}
};
function reset(){
	gemArray.length = 0;
	gemFunc();
	crystalValue = Math.floor(Math.random() * (102)+ 19);
	$('.numberToMatch').html(crystalValue);
	adder = 0;
	$('.score').html(adder);
	console.log(gemArray);
}

});