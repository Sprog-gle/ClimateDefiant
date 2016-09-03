var trending = $("#trending");
$(function () {
    var params = {};
    $.ajax({
        crossDomain: true,
        url: "https://api.cognitive.microsoft.com/bing/v5.0/news/trendingtopics?",
        headers: { 'Ocp-Apim-Subscription-Key': '5e0807dc266b4f90ba19bc22898e541a' },
        //   beforeSend: function(xhrObj){
        // xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{5e0807dc266b4f90ba19bc22898e541a}");
        //  xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "8e651058825440fc8ea6ff1a5eb5fc13");
        //    },
        type: "GET",
        dataType: 'json',
        // dataType: 'jsonp',
        data: "{body}",
        contentType: "application/json",
    })
        .done(function (data) {
        $('#trending').append('<li>' + data.name + '</li>');
        console.log("it worked!");
        // console.log(data);
        console.log(data);
        // insert done code here
    })
        .fail(function (error) {
        console.log(error.getAllResponseHeaders());
    });
});
