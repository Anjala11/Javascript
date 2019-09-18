var id = document.getElementById("click");

id.addEventListener('click', function(){
/* Retrieve code value from input box */
var code = document.getElementById("code").value;

/* Set the code value as the background colour of 'div' */
document.getElementById("colour-frame").style.backgroundColor = code;
});
