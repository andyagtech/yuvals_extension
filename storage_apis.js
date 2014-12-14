// Local Storage Tests //

$("#local_storage_get").click(function(){
        desired_key = "wh-" + $("#local_storage_text").val();
        var local_storage_result = localStorage.getItem(desired_key);
        console.log(local_storage_result);
        $("local_storage_output").append(local_storage_result);
    }
);

$("#local_storage_set").click(function(){
        desired_key   = "wh-" + $("#local_storage_key").val();
        desired_value = $("#local_storage_value").val();
        var local_storage_result = localStorage.setItem(desired_key, desired_value);
        console.log(local_storage_result);
//            $("local_storage_output").append(local_storage_output);
    }
);



//     chrome section

$("#chrome_storage_get").click(function(){
        desired_key = "wh-" + $("#chrome_storage_text").val();
        chrome.storage.sync.get(desired_key,
            function(result){
                console.log('Get success!');
                console.log(result);
            }
        );
        $("chrome_storage_output").append(chrome_storage_result);
    }
);


$("#chrome_storage_set").click(function(){
        desired_key   = "wh-" + $("#chrome_storage_key").val();
        desired_value = $("#chrome_storage_value").val();
        chrome.storage.sync.set({desired_key:desired_value},
            function(){
                console.log("Saved to Chrome Storage");
            }
        );
    }
);

// end chrome section
