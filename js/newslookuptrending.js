$(function () {
    //  var secret = "99de9c9a5f64ed980fcff0deb3784176";
    $.ajax({
        url: "https://api.newslookup.com/feed/live?fmt=&limit=20&region=gp17913&output=json&client_id=17119&secret=99de9c9a5f64ed980fcff0deb3784176",
        type: "GET",
        //dataType: 'json',
        dataType: 'jsonp',
        //  data: "{body}",
        contentType: "application/json",
    })
        .done(function (data) {
        $('#trending').append('<li>' + data.name + '</li>');
        console.log("it worked!");
        // console.log(data);
        console.log(data.getAllResponseHeaders);
    })
        .fail(function (error) {
        console.log(error.getAllResponseHeaders());
        $('#trending').append('<li>' + error.title + '</li>');
    });
});
