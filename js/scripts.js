// Business (backend) logic
var add = function(number1, number2){
	return number1 + number2;
};
var subtract = function(number1, number2){
	return number1 - number2;
};
var multiply = function(number1, number2){
	return number1 * number2;
};
var divide = function(number1, number2){
	return number1 / number2;
};

// User Interface (Front End) logic
$(function(){
	// Add
	$("#calculator").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
		var result;
		$("#output").text("Result: " + result);
	});
});
