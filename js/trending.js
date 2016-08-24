   $(function() {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v5.0/news/trendingtopics?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{5e0807dc266b4f90ba19bc22898e541a}");
                xhrObj.setRequestHeader("count", "5" );
                xhrObj.setRequestHeader("headlineCount", "4");
            },
            type: "GET",
            // Request body
            data: "{body}",
            crossDomain: true,
            dataType: 'jsonp',
        })
        .done(function(data) {
            alert("success");
            $('#trending').append('<li>'+value.name+'</li>');
        })
        .fail(function() {
            alert("error");
        });
    });