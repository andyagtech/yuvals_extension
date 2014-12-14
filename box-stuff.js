    $(document).ready(function()
	{

	// click handler, this changes hey to wow, grabs content from text box
		$("#add_button").click(function()
			{
				textval       = $("#textbox").val();
                console.log(textval);


				if(textval != "")
					{
						new_site_item =  "<li><input type=\"checkbox\"> " + textval + " </input></li>" ;
						$("#site_list").append(new_site_item);
					}
				else
					{
						$("#button").after("<p style=\"color:red;\" class=\"beepboop\">Please enter a value.</p>");
						setTimeout(function()
											{
												console.log("beep boop destroying");
												$(".beepboop").remove();
											}, 
								   1000);
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

        try {
            var test = 'setLocalStorageCheck';


            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            var obj = {};
            Object.defineProperty(obj, 'prop', {
                get: function() {
                },
                set: function() {
                "wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow wow "}
            });
        }
        catch(e) {
            alert('Your browser is not supported, sorry!');
            throw e;
        }



    }
);




//				$("#entry_box").html("<button id=\"cancel\">Cancel</button><input type=\"text\"></input><button id=\"submit\">Submit</button>");

/*
$( "#add_button" ).onclick(function() {
	string = "<input type=\"text\" name=\"URL\">";
});
*/