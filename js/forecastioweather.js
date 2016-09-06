var ipaddr;
var iplocation;
var lat;
var long;
var acculocation;
var x = document.getElementById("location");
// calls the get location function
getLocation();
// queries the accuweather API
// $.ajax({
//     url: 'https://apidev.accuweather.com/locations/v1/search?q=' + iplocation + "&apikey=RK5LNtVj4ohC0rWnXWszuPMTMalyMMOC",
//     type: "GET",
//     dataType: 'json',
//     contentType: "application/json",
// })
//     .done(function (weatherData) {
//         console.log("it worked!");
//         $('#weather').html(weatherData.WeatherIcon + weatherData.WeatherText);
//     })
//     .fail(function (error) {
//         alert("Oops! Something went wrong.");
//         console.log(error.getAllResponseHeaders());
//         $('#trending').append('<li>' + error.title + '</li>');
//     });
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
// get location functions and error handling
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log("getLocation run");
    }
    else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    lat = position.coords.latitude;
    long = position.coords.longitude;
    console.log("showPos run");
    getWeather();
}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation.";
            getIPLocation(); // Reverts to user's IP location (less accurate)
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable. Using closest estimate.";
            getIPLocation();
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out.";
            getIPLocation();
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred.";
            break;
    }
}
// if the html5 location services do not work
// haven't added it to do anything else after this yet'
function getIPLocation() {
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
        });
    }
    function useIPLocation() {
        if (ipaddr !== undefined) {
            // take ip and put it into the api call for weather data
            $("#ipaddress").html("Your current IP address is: " + ipaddr + ".");
            $("#citylocation").html("Your current location is: " + iplocation + ".");
            console.log("here is the variable output");
            console.log(ipaddr);
        }
    }
}
// using the geolocation information with accuweather
function getWeather() {
    console.log("get weather run");
    $.ajax({
        'url': 'https://api.forecast.io/forecast/b9b6583bd4214676a38808a223e86e5a/' + lat + ',' + long + '/units=si',
        crossDomain: true,
        // 'async': false,
        'dataType': "jsonp",
        'success': function (data) {
            //   location = data.LocalizedName;
            var summary = data.daily.summary;
            $("#citylocation").html(summary);
            console.log("Got Weather Data");
            console.log(data);
        }
    });
}
