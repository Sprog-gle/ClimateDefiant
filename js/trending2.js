// JavaScript Document

   $(function() {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v5.0/news/trendingtopics?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{subscription key}");
                xhrObj.setRequestHeader("count", "5" );
                xhrObj.setRequestHeader("headlineCount", "4");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            alert("success");
            $('#trending').append('<li>'+data.name+'</li>');
        })
        .fail(function() {
            alert("error");
        });
    });