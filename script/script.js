function myFunction() 
{
	var x = document.getElementById("navigation");
	if (x.className === "navigate brackets") 
	{
	    x.className += " responsive";
	} 
	else 
	{
	    x.className = "navigate brackets";
	}
}



$(document).ready(function() 
{

  	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  	particlesJS.load('particles-js', 'script/particlesjs-config.json', function() {
  	console.log('callback - particles.js config loaded');});

});

// function changePage()
// {
//    console.log("change_page");
//    $('body').load("about.html");
// } 

// $('#about').on('click',function(){

	// 	changePage();
	// });