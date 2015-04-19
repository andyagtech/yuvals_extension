$(document).ready(function()
{

    // ************************************************ //

    // Test Data //
        // So we can test the local storage. //
//    localStorage.setItem('wh_checked', ['Wikipedia','Gamepedia']);
//    localStorage.setItem('wh_unchecked', ['Wikia']);

   // Look at local storage and see what we saved //

    var checked_sites   = localStorage.getItem('wh_checked');
    var unchecked_sites = localStorage.getItem('wh_unchecked');


    // If we have check and unchecked {} in local storage, continue
    if (!checked_sites) {
        // Define the default list of sites //
        checked_sites = [];
        checked_sites.push('Wikipedia');
        checked_sites.push('Gamepedia');
        checked_sites.push('Wikia');

        // Set them to be checked //
        $("#Wikipedia").prop("checked", true);
        $("#Gamepedia").prop("checked", true);
        $("#Wikia").prop("checked", true);
    } else {
        console.log('it exists!');
        // Generate the HTML elements for the popup ! //
    }
        // console.log('o no BibleThump');

    // What is our current site?! //
    var currentUrl;

    // chrome.tabs.query( object, function );
    chrome.tabs.query(
                        {'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
                        function(tabs){
                            // Print ALL the results //
                            tabs.forEach(
                                function(tab)
                                {
                                    console.log(tab.url);
                                }
                            )
                            // For l8er //
                            currentUrl = tabs[0].url;
                        }
    );

    console.log('current url',currentUrl);

    // Is said site checked?

        // If it is, apply the CSS

        // dont do nutin


    // Look at the checkboxes and update localStorage

//    localStorage.setItem('wh_checked', updated_site_list);


    // *********************************************** //

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
//            console.log(i);
            console.log(tabs[i].url);
        }
    }

//    chrome.tabs.query( {}, print_urls );



    // We need to do some work here //

/*
    var current_site = window.location.hostname.split('.')[1]; // current_site = "wikipedia";
    var re = new RegExp(current_site, "i");   // (pattern, flag)

    for (site of siteList)
        {
        console.log( site.match(re) );
    }
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