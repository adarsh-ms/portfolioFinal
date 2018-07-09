$(document).ready(function() {

  	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  	particlesJS.load('particles-js', 'script/particlesjs-config.json', function() {
  	console.log('callback - particles.js config loaded');});

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

	// $('#navigation.icon').on('click','.icon',function(){

	// 	myFunction();
	// });

});

