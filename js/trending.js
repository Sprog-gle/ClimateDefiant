   $(function() {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v5.0/news/trendingtopics",
            type: "GET",
            datatype: 'application/json',
            data: "{body}",
             headers: {
                "Ocp-Apim-Subscription-Key" : "5e0807dc266b4f90ba19bc22898e541a",
              //  "count" : "5",
              //  "headlineCount" : "4"
            },


            
        })
        
        .done(function(data) {
            alert("success");
          //  $('#trending').append;
           // $("#trending").html(data)
           // $("#testing").append("Testing...");
            console.log(data);
        })
        .fail(function() {
            alert("error");
        });
    });