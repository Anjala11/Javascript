/* Getting ID of buttons */
var a = document.getElementById("add");
var b = document.getElementById("sub");
var c = document.getElementById("mult");
var d = document.getElementById("divide");

a.addEventListener('click', function(){
	/* Obtaining values from input field */
	var first = parseInt(document.getElementById('first').value, 10);
	var second = parseInt(document.getElementById('second').value, 10);
	var result = first + second;
	alert("Result of Addition is: "+result);
});

b.addEventListener('click', function(){
	/* Obtaining values from input field */
	var first = parseInt(document.getElementById('first').value, 10);
	var second = parseInt(document.getElementById('second').value, 10);
	var result = first - second;
	alert("Result of Subtraction is: "+result);
});

c.addEventListener('click', function(){
	/* Obtaining values from input field */
	var first = parseInt(document.getElementById('first').value, 10);
	var second = parseInt(document.getElementById('second').value, 10);
	var result = first * second;
	alert("Result of Multipliction is: "+result);
});

d.addEventListener('click', function(){
	/* Obtaining values from input field */
	var first = parseInt(document.getElementById('first').value, 10);
	var second = parseInt(document.getElementById('second').value, 10);
	var result = first / second;
	alert("Result of Division is: "+result);
});
