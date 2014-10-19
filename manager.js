var village = {
  id: "1325848", 
  name : "village1"
};

print_console("hEY!");

var x = $("#wiki").checked;
if (x){
	console.log("check!")
}


$( "#add_button" ).onclick(function() {
	string = "<input type=\"text\" name=\"URL\">";
	$( "#entry-box" ).html(string);
});

$( "#add_button" ).click(
	function() {
		console.log(village.id); 
		console.log(village.name); 
	}
);

$( "#print_button" ).onclick(function() {
	$("checkbox").prop("checked", true);
});