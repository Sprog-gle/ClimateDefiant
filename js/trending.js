   $(function() {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v5.0/news/trendingtopics?" + $.param(params),
            type: "GET",

             headers: {
                "Ocp-Apim-Subscription-Key" : "5e0807dc266b4f90ba19bc22898e541a",
                "count" : "5",
                "headlineCount" : "4"
            },
                        // Request body
            data: "{body}",
        })
        .done(function(data) {
            alert("success");
          //  $('#trending').append;
           // $("#trending").html(data)
            $("#trending").html("Testing...");
        })
        .fail(function() {
            alert("error");
        });
    });