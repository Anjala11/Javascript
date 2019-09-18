var counter = 1;
function increment()
{
	var val = parseInt(document.querySelector("h1").innerHTML);
	document.querySelector("h1").innerHTML = 	parseInt(counter + val);
}
