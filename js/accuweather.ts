
var ipaddr;
var iplocation;

{
    $.ajax({
        'url': '//freegeoip.net/json/?callback=?',
        // 'async': false,
        'dataType': "json",
        'success': function (data) {
            ipaddr = data.ip;
            iplocation = data.city;
            console.log(ipaddr);
            console.log("Obtained IP/Location");
            useIPLocation();
        }

    })
}

function useIPLocation() {
    if (ipaddr !== undefined) {
        // take ip and put it into the api call for weather data
        $("#ipaddress").html("Your current IP address is: " + ipaddr + ".");
        $("#location").html("Your current location is: " + iplocation + ".");
        console.log("here is the variable output");
        console.log(ipaddr);


        $.ajax({
            url: 'http://apidev.accuweather.com/locations/v1/search?q=' + iplocation + "&apikey=RK5LNtVj4ohC0rWnXWszuPMTMalyMMOC",
            type: "GET",
            dataType: 'json',
            contentType: "application/json",
        })
            .done(function (weatherData) {
                console.log("it worked!");
                $('#weather').html(weatherData.WeatherIcon + weatherData.WeatherText);
            })

            .fail(function (error) {
                



                alert("Oops! Something went wrong.");
                console.log(error.getAllResponseHeaders());
                $('#trending').append('<li>' + error.title + '</li>');
            });
    }
}


// 


//    $.ajax({

// url: "http://dataservice.accuweather.com/locations/v1/cities/ipaddress",

//             type: "GET",
//             //dataType: 'json',
//             dataType: 'jsonp',
//           //  data: "{body}",
//             contentType: "application/json",


//    })

//   .done(function (data){

//  $('#trending').append('<li>'+data.name+'</li>');
//  console.log("it worked!");
// // console.log(data);
//  console.log(data.getAllResponseHeaders);
//    })

//    .fail (function (error) {

//    console.log(error.getAllResponseHeaders());
//     $('#trending').append('<li>'+error.title+'</li>');
// });
// })

