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
	$("#add").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#result").text(result);
	});
});
