    $(document).ready(function()
	{

    $("#listadd_button").click(function()
    {

        sitedict = {};
        list_of_sites = $("li").toArray();
        siteList = [];

        for (item of list_of_sites){
            // Current Site List //
            siteList.push(item.innerText);
            var current_item = item.innerText.trim();

            // Map current_item to its check property in sitedivt //
            var current_prop = $('#'+ current_item).prop("checked");

            sitedict[current_item] = current_prop;

        }

        console.log(sitedict);
        //console.log(siteList);

    });

    // The remove button needs 3 steps
        // 1. Find the index we want to remove
        // 2. Splice
        // 3. Update the HTML



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