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
	$("#add").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#resultAdd").text(result);
	});
	// Subtract
	$("#subtract").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#subtract1").val());
		var number2 = parseInt($("#subtract2").val());
		var result = subtract(number1, number2);
		$("#resultSubtract").text(result);
	});
	// Multiply
	$("#multiply").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#multiply1").val());
		var number2 = parseInt($("#multiply2").val());
		var result = multiply(number1, number2);
		$("#resultMultiply").text(result);
	});
	// Divide
	$("#divide").submit(function(event){
		event.preventDefault();
		var number1 = parseInt($("#divide1").val());
		var number2 = parseInt($("#divide2").val());
		var result = divide(number1, number2);
		$("#resultDivide").text(result);
	});

});
