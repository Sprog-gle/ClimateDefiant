   $(function() {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://api.cognitive.microsoft.com/bing/v5.0/news/trendingtopics?" + $.param(params),
            headers: {
                "Ocp-Apim-Subscription-Key":"{5e0807dc266b4f90ba19bc22898e541a}",
                "count" : "5",
                "headlineCount" : "4"
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