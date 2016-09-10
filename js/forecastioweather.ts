
var ipaddr;
var iplocation;
var lat;
var long;
var acculocation;
var currentCondition;
var currentTemp;
var feelsLike;
var setIcon;
var humidity;
var windSpeed;

var randomMaxValue;

var songMood;

var x = document.getElementById("location");

window.onload = function () {
    console.log('sc');
    SC.initialize({
        client_id: "a8d5228ca716551510abb70e88c78d10",
    });
}

// calls the get location function
getLocation();

// get location functions and error handling
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log("getLocation run");
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";

    }
}
function showPosition(position) {
    //   x.innerHTML = "Latitude: " + position.coords.latitude +
    //        "<br>Longitude: " + position.coords.longitude;
    lat = position.coords.latitude;
    long = position.coords.longitude;
    console.log("showPos run");
    getWeather();

}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            getIPLocation(); // Reverts to user's IP location (less accurate)
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable. Using closest estimate."
            getIPLocation();
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            getIPLocation();
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
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
        })
    }

    function useIPLocation() {
        if (ipaddr !== undefined) {
            // take ip and put it into the api call for weather data
            //   $("#ipaddress").html("Your current IP address is: " + ipaddr + ".");
            //    $("#citylocation").html("Your current location is: " + iplocation + ".");
            console.log("here is the variable output");
            console.log(ipaddr);
        }
    }
}

// using the geolocation information with accuweather
function getWeather() {
    console.log("get weather run");

    $.ajax({
        'url': 'https://api.forecast.io/forecast/b9b6583bd4214676a38808a223e86e5a/' + lat + ',' + long + '?units=uk',
        crossDomain: true,
        // 'async': false,
        'dataType': "jsonp",
        'success': function (data) {
            //   location = data.LocalizedName;
            var summary = data.daily.summary;
            $("#citylocation").html(summary);
            console.log("Got Weather Data");
            console.log(data);

           

            // change var to data from the api call
            summary = data.currently.summary;
            currentCondition = data.currently.icon;
            console.log(currentCondition);
             currentTemp = data.currently.temperature.toFixed(0);
            feelsLike = data.currently.apparentTemperature.toFixed(0);
            humidity = data.currently.humidity * 100;
            windSpeed = data.currently.windSpeed.toFixed(0);
            setIcon = data.currently.icon; // set the icon string to the api data. Then use that to set the icon (NEEDS TO BE DONE)

             // Set the weather icon to the correct forecast.
  var skycons = new Skycons({"color": "darkgrey"});

  
  skycons.set("weatherIcon", currentCondition);

  // start animation!
  skycons.play();


            // Change HTML elements to reflect weather
            $("#currentCondDesc").html(summary);
            $("#temp").html("The temperature is currently " + currentTemp + "&deg;C");
            $("#feelsLike").html("It currently feels like it is " + feelsLike + "&deg;C"); // add option to change later.
            $("#windSpeed").html("Winds are currently peaking at: " + windSpeed + " KM/h");
            $("#humidity").html("Humidity is currently: " + humidity + "%");
            setWeatherConditions();
        }
    })
}

function setWeatherConditions() {
    console.log('setSongMood');
    if (currentCondition === 'clear-day') {
        songMood = 'https://soundcloud.com/samueljhunt/sets/sunnyday';
        randomMaxValue = Math.floor((Math.random() * 14) + 1);
        getSounds();
    } else if (currentCondition === 'clear-night') {
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy-night';
        randomMaxValue = Math.floor((Math.random() * 7) + 1);
        getSounds();
    } else if (currentCondition === 'rain') {
        songMood = 'https://soundcloud.com/samueljhunt/sets/rainyday';
        randomMaxValue = Math.floor((Math.random() * 11) + 1);
        getSounds();
    } else if (currentCondition === 'snow') {
        songMood = 'https://soundcloud.com/samueljhunt/sets/snow';
        randomMaxValue = Math.floor((Math.random() * 5) + 1);
        getSounds();
    } else if (currentCondition === 'sleet') {
        songMood = 'https://soundcloud.com/samueljhunt/sets/snow';
        randomMaxValue = Math.floor((Math.random() * 5) + 1);
        getSounds();
    } else if (currentCondition === 'wind') {
        songMood = 'https://soundcloud.com/samueljhunt/sets/wind-1';
        randomMaxValue = Math.floor((Math.random() * 7) + 1);
        getSounds();
    } else if (currentCondition === 'fog') {
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy';
        randomMaxValue = Math.floor((Math.random() * 11) + 1);
        getSounds();
    } else if (currentCondition === 'cloudy') {
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy';
        randomMaxValue = Math.floor((Math.random() * 11) + 1);
        getSounds();
    } else if (currentCondition === 'partly-cloudy-day') {
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy';
        randomMaxValue = Math.floor((Math.random() * 11) + 1);
        console.log('if statement');
        getSounds();
    } else if (currentCondition === 'partly-cloudy-night') {
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy-night';
        randomMaxValue = Math.floor((Math.random() * 7) + 1);
        getSounds();
    }
}

function getSounds() {
    console.log('before oEmbed');
    SC.oEmbed(songMood, { maxheight: 200, auto_play: false, show_comments: false, start_track: randomMaxValue }).then(function (oEmbed) {
        console.log('oEmbed response: ', oEmbed);
        $("#player").html(oEmbed.html);
        console.log('setplayer');
    });
}