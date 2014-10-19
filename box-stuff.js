/*$(document).ready(function()
	{ 
		$("add_button").click(function()
			{
				$("#entry_box").html("<h3> What?!</h3>");
								
			}
		);
	}
); */

$(document).ready(function()
	{ 
		$("#print_button").click(function()
			{
				console.log("such success many click");
//				$("#entry_box").html("<button id=\"cancel\">Cancel</button><input type=\"text\"></input><button id=\"submit\">Submit</button>");
				$("#entry_box").html("wow");
				textval = $("#textbox").val ();
				console.log("we've actually done something" + textval);
			}
		);

		// You have to add the permission for tabs access //
		function print_urls(tabs)
		{
			for( i = 0; i < tabs.length ; i++)
			{
				console.log(i);
				console.log(tabs[i].url);
			}
		}

		chrome.tabs.query( {}, print_urls);
						
/*		chrome.tabs.getCurrent(function(tab){
												alert(tab.url);
											});
*/											
	}
);





/*
$( "#add_button" ).onclick(function() {
	string = "<input type=\"text\" name=\"URL\">";
});
*/