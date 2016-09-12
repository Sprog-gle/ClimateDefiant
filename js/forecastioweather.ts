
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
            manualLocation(); // Reverts to user's IP location (less accurate)
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable. Using closest estimate."
            manualLocation();
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            manualLocation();
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


function manualLocation() {

    $("loadingText").html("Sorry, we couldn't detect your location. Please type your location in the box below.");
}
// if the html5 location services do not work
// haven't added it to do anything else after this yet'


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

            // end the loading animation
            $(".se-pre-con").fadeOut("slow");
        }
    })
}

function setWeatherConditions() {
    console.log('setSongMood');
    if (currentCondition === 'clear-day') {
         $("#requirementImage").html("<img id='theImg' src='./images/sunscreen.png'   width='10%' height='10%'/>");
         $("#requirementReason").html("It looks like the sun will be out in full force. It's going to be a stinger without your sunscreen. Be sure to slip, slop, slap and wrap.");
        songMood = 'https://soundcloud.com/samueljhunt/sets/sunnyday';
        randomMaxValue = Math.floor((Math.random() * 14) + 1);
        getSounds();
    } else if (currentCondition === 'clear-night') {
         $("#requirementImage").html("<img id='theImg' src='./images/night.png'   width='10%' height='10%'/>"); // make icon for night
         $("#requirementReason").html("It looks like tonight is going to be a beautiful one, look up and count the stars. Have a good night.");
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy-night';
        randomMaxValue = Math.floor((Math.random() * 7) + 1);
        getSounds();
    } else if (currentCondition === 'rain') {
         $("#requirementImage").html("<img id='theImg' src='./images/umbrella.png'  width='20%' height='20%'/>");
         $("#requirementReason").html("Ah, looks like today may not be as bright as expected. You may want to take an umbrella.");
        songMood = 'https://soundcloud.com/samueljhunt/sets/rainyday';
        randomMaxValue = Math.floor((Math.random() * 11) + 1);
        getSounds();
    } else if (currentCondition === 'snow') {
         $("#requirementImage").html("<img id='theImg' src='./images/jacket.png'  width='20%' height='20%'/>");
         $("#requirementReason").html("Brr, it must be very cold outside. It also may/be snowing so prepare a jacket.");
        songMood = 'https://soundcloud.com/samueljhunt/sets/snow';
        randomMaxValue = Math.floor((Math.random() * 5) + 1);
        getSounds();
    } else if (currentCondition === 'sleet') {
         $("#requirementImage").html("<img id='theImg' src='./images/jacket.png'  width='20%' height='20%'/>");
         $("#requirementReason").html("Brr, it must be very cold outside. It also may/be snowing so prepare a jacket.");
        songMood = 'https://soundcloud.com/samueljhunt/sets/snow';
        randomMaxValue = Math.floor((Math.random() * 5) + 1);
        getSounds();
    } else if (currentCondition === 'wind') {
         $("#requirementImage").html("<img id='theImg' src='./images/jacket.png'  width='20%' height='20%'/>");
         $("#requirementReason").html("Hold on to your hat! It's looking a little windy out there. Snuggle up with some warm clothes too, it may be cold.");
        songMood = 'https://soundcloud.com/samueljhunt/sets/wind-1';
        randomMaxValue = Math.floor((Math.random() * 7) + 1);
        getSounds();
    } else if (currentCondition === 'fog') {
        $("#requirementImage").html("<img id='theImg' src='./images/jacket.png'  width='20%' height='20%'/>");
        $("#requirementReason").html("Can you see anything? I feel like the visibility has been reduced. Take care out there.");
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy';
        randomMaxValue = Math.floor((Math.random() * 11) + 1);
        getSounds();
    } else if (currentCondition === 'cloudy') {
         $("#requirementImage").html("<img id='theImg' src='./images/sunscreen.png' width='10%' height='10%'/>"); // make one for cloudy
         $("#requirementReason").html("Well it looks like the clouds have come to say hello. Don't forget you can still get burnt.");
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy';
        randomMaxValue = Math.floor((Math.random() * 11) + 1);
        getSounds();
    } else if (currentCondition === 'partly-cloudy-day') {
        $("#requirementImage").html("<img id='theImg' src='./images/sunscreen.png'  width='10%' height='10%'/>");
        $("#requirementReason").html("Hey, it's a little cloudy but the sun will be peaking out during the day. Keep yourself safe, and take some sunscreen.");
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy';
        randomMaxValue = Math.floor((Math.random() * 11) + 1);
        console.log('if statement');
        getSounds();
    } else if (currentCondition === 'partly-cloudy-night') {
         $("#requirementImage").html("<img id='theImg' src='./images/night.png'   width='10%' height='10%'/>"); // also change this one
         $("#requirementReason").html("It looks like the stars may be slightly obscured by the clouds tonight. You won't need too much (unless the temperature drops) Have a good night.");
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