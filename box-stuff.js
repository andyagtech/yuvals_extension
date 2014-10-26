$(document).ready(function()
	{ 
	// click handler, this changes hey to wow, grabs content from text box
		$("#print_button").click(function()
			{
				textval       = $("#textbox").val();			
				if(textval != "")
					{
						new_site_item =  "<li><input type=\"checkbox\"> " + textval + " </input></li>" ;
						$("#site_list").append(new_site_item);
					}
				else
					{
						$("#button").after("<p style=\"color:red;\">Please enter a value.</p>");
					}
				
				console.log("such success many click");
				$("#entry_box").html("wow");			
				console.log("we've actually done something " + textval);
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




//				$("#entry_box").html("<button id=\"cancel\">Cancel</button><input type=\"text\"></input><button id=\"submit\">Submit</button>");

/*
$( "#add_button" ).onclick(function() {
	string = "<input type=\"text\" name=\"URL\">";
});
*/