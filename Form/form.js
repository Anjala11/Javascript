var btn = document.getElementById("btn");

btn.addEventListener('click', function(){

	/* Retrieving values from input boxes */
	var name = document.getElementById("name").value;
	var pass = document.getElementById("pass").value;
	var confirm = document.getElementById("confirm").value;
	var email = document.getElementById("email").value;
	var city = document.getElementById("select").value;

	if (name == "")
	{
		var msg = document.getElementById("msg").innerHTML = "Please enter your name!";
	}
	else if (pass == "")
	{
		document.getElementById("msg").innerHTML = "Please enter your password!";
	}
	else if (confirm == "")
	{
		document.getElementById("msg").innerHTML = "Please re-enter password to confirm!";
	}
	else if (pass != confirm)
	{
		document.getElementById("msg").innerHTML = "Enter same passwords in both the fields!";
	}
	else if (email == "")
	{
		document.getElementById("msg").innerHTML = "Enter your email address!";		
	}
	else if (city == "default")
	{
		document.getElementById("msg").innerHTML = "Select a city. Don't leave at default!";
	}
	else
	{
		document.getElementById("msg").innerHTML = "Successful form submission.";
	}
});
