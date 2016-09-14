
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
var req;
var summary;
var todaytonight;

var randomMaxValue;

var songMood;

var randomGreeting, randomGreetingVal;

if (location.protocol === 'http:') {
    window.location.replace("https://climatedefiant.azurewebsites.net");
}

randomGreetingGen();

var x = document.getElementById("location");



window.onload = function () {
    SC.initialize({
        client_id: "a8d5228ca716551510abb70e88c78d10",
    });


}

// calls the get location function
getLocation();

// get location functions and error handling
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError, { timeout: 8000 });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
        console.log("error");
    }
}


function showPosition(position) {
    //   x.innerHTML = "Latitude: " + position.coords.latitude +
    //        "<br>Longitude: " + position.coords.longitude;
    lat = position.coords.latitude;
    long = position.coords.longitude;
    getWeather();

}
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            getIPLocation(); // Reverts to user's IP location (less accurate)
            break;
        case error.POSITION_UNAVAILABLE:
            //   x.innerHTML = "Location information is unavailable. Using closest estimate."
            getIPLocation();
            break;
        case error.TIMEOUT:
            //   x.innerHTML = "The request to get user location timed out."
            getIPLocation();
            break;
        case error.UNKNOWN_ERROR:
            //   x.innerHTML = "An unknown error occurred."
            getIPLocation();
            console.log("error");
            break;
    }
}


function getIPLocation() {
    $("#loadingText").html("Sorry, we have had difficulty locating you. Reverting to less accurate location.");


    $.ajax({
        'url': 'https://freegeoip.net/json/?callback=?',
        // 'async': false,
        'dataType': "json",
        'success': function (data) {
            ipaddr = data.ip;
            iplocation = data.city;
            lat = data.latitude;
            long = data.longitude;
            getWeather();
        }

    })
}


// using the geolocation information with forecast.io

function getWeather() {

    $.ajax({
        'url': 'https://api.forecast.io/forecast/b9b6583bd4214676a38808a223e86e5a/' + lat + ',' + long + '?units=uk',
        crossDomain: true,
        // 'async': false,
        'dataType': "jsonp",
        'success': function (data) {
            //   location = data.LocalizedName;
            summary = data.daily.summary;
            $("#citylocation").html(summary);



            // change var to data from the api call
            summary = data.currently.summary;
            currentCondition = data.currently.icon;
            currentTemp = data.currently.temperature.toFixed(0);
            feelsLike = data.currently.apparentTemperature.toFixed(0);
            humidity = data.currently.humidity * 100;
            windSpeed = data.currently.windSpeed.toFixed(0);
            setIcon = data.currently.icon; // set the icon string to the api data. Then use that to set the icon (NEEDS TO BE DONE)

            // Set the weather icon to the correct forecast.
            var skycons = new Skycons({ "color": "darkgrey" });


            skycons.set("weatherIcon", currentCondition);

            // start animation!
            skycons.play();


            // Change HTML elements to reflect weather
            $("#currentCondDesc").html(summary);
            $("#temp").html("The temperature is " + currentTemp + "&deg;c");
            $("#feelsLike").html("It feels like " + feelsLike + "&deg;c outside"); // add option to change later.
            $("#windSpeed").html("Winds are currently peaking at: " + windSpeed + " KM/h");
            $("#humidity").html("Humidity is currently: " + humidity + "%");


            setWeatherConditions();


        }
    })
}

function setWeatherConditions() {
    if (currentCondition === 'clear-day') {
        $("#requirementImage").html("<img id='theImg' src='./images/sunscreen.png'   width='15%' height='15%'/>");
        $("#requirementReason").html("It looks like the sun will be out in full force. It's going to be a stinger without your sunscreen. Be sure to slip, slop, slap and wrap.");
        req = "sunscreen today";
        songMood = 'https://soundcloud.com/samueljhunt/sets/sunnyday';
        randomMaxValue = Math.floor((Math.random() * 14) + 1);
        $("#todaytonight").html("Today sounds like:");
        setTweet();
        getSounds();
    } else if (currentCondition === 'clear-night') {
        $("#requirementImage").html("<img id='theImg' src='./images/night.png'   width='15%' height='15%'/>");
        $("#requirementReason").html("It looks like tonight is going to be a beautiful one, look up and count the stars. Have a good night.");
        req = "a good night sleep";
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy-night';
        randomMaxValue = Math.floor((Math.random() * 7) + 1);
        $("#todaytonight").html("Tonight sounds like:");
        setTweet();
        getSounds();
    } else if (currentCondition === 'rain') {
        $("#requirementImage").html("<img id='theImg' src='./images/umbrella.png'  width='20%' height='20%'/>");
        $("#requirementReason").html("Ah, looks like today may not be as bright as expected. You may want to take an umbrella.");
        req = "an umbrella today";
        songMood = 'https://soundcloud.com/samueljhunt/sets/rainyday';
        randomMaxValue = Math.floor((Math.random() * 11) + 1);
        $("#todaytonight").html("Today sounds like:");
        setTweet();
        getSounds();
    } else if (currentCondition === 'snow') {
        $("#requirementImage").html("<img id='theImg' src='./images/jacket.png'  width='20%' height='20%'/>");
        $("#requirementReason").html("Brr, it must be very cold outside. It also may/be snowing so prepare a jacket.");
        req = "a jacket (or two) today";
        songMood = 'https://soundcloud.com/samueljhunt/sets/snow';
        randomMaxValue = Math.floor((Math.random() * 5) + 1);
        $("#todaytonight").html("Today sounds like:");
        setTweet();
        getSounds();
    } else if (currentCondition === 'sleet') {
        $("#requirementImage").html("<img id='theImg' src='./images/jacket.png'  width='20%' height='20%'/>");
        $("#requirementReason").html("Brr, it must be very cold outside. It also may/be snowing so prepare a jacket.");
        req = "a jacket (or two) today";
        songMood = 'https://soundcloud.com/samueljhunt/sets/snow';
        randomMaxValue = Math.floor((Math.random() * 5) + 1);
        $("#todaytonight").html("Today sounds like:");
        setTweet();
        getSounds();
    } else if (currentCondition === 'wind') {
        $("#requirementImage").html("<img id='theImg' src='./images/jacket.png'  width='20%' height='20%'/>");
        $("#requirementReason").html("Hold on to your hat! It's looking a little windy out there. Snuggle up with some warm clothes too, it may be cold.");
        req = "some warm clothes today";
        songMood = 'https://soundcloud.com/samueljhunt/sets/wind-1';
        randomMaxValue = Math.floor((Math.random() * 7) + 1);
        $("#todaytonight").html("Today sounds like:");
        setTweet();
        getSounds();
    } else if (currentCondition === 'fog') {
        $("#requirementImage").html("<img id='theImg' src='./images/jacket.png'  width='20%' height='20%'/>");
        $("#requirementReason").html("Can you see anything? I feel like the visibility has been reduced. Take care out there.");
        req = "to be careful right now";
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy';
        randomMaxValue = Math.floor((Math.random() * 11) + 1);
        $("#todaytonight").html("Today sounds like:");
        setTweet();
        getSounds();
    } else if (currentCondition === 'cloudy') {
        $("#requirementImage").html("<img id='theImg' src='./images/sunscreen.png' width='10%' height='10%'/>"); 
        $("#requirementReason").html("Well it looks like the clouds have come to say hello. Don't forget you can still get burnt.");
        req = "Sunscreen possibly today";
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy';
        randomMaxValue = Math.floor((Math.random() * 11) + 1);
        $("#todaytonight").html("Today sounds like:");
        setTweet();
        getSounds();
    } else if (currentCondition === 'partly-cloudy-day') {
        $("#requirementImage").html("<img id='theImg' src='./images/sunscreen.png'  width='15%' height='15%'/>");
        $("#requirementReason").html("Hey, it's a little cloudy but the sun will be peaking out during the day. Keep yourself safe, and take some sunscreen.");
        req = "Sunscreen possibly today";
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy';
        randomMaxValue = Math.floor((Math.random() * 11) + 1);
        $("#todaytonight").html("Today sounds like:");
        setTweet();
        getSounds();
    } else if (currentCondition === 'partly-cloudy-night') {
        $("#requirementImage").html("<img id='theImg' src='./images/night.png'   width='15%' height='15%'/>"); 
        $("#requirementReason").html("It looks like the stars may be slightly obscured by the clouds tonight. You won't need too much (unless the temperature drops) Have a good night.");
        req = "a good night sleep";
        songMood = 'https://soundcloud.com/samueljhunt/sets/cloudy-night';
        randomMaxValue = Math.floor((Math.random() * 7) + 1);
        $("#todaytonight").html("Tonight sounds like:");
        setTweet();
        getSounds();
    }
}

function getSounds() {
    SC.oEmbed(songMood, { maxheight: 200, auto_play: false, show_comments: false, show_user: false, start_track: randomMaxValue }).then(function (oEmbed) {
        $("#player").html(oEmbed.html);
        endLoading();
    });
}

function setTweet() {
console.log('settweet');
    // current tweet    
    twttr.widgets.createShareButton(
        'https://climatedefiant.azurewebsites.net/',
        document.getElementById('tweet-current'),
        {
            text: "It looks like I may need " + req + ". The temp is " + currentTemp + "\xB0, it's " + summary + ". I'm being #ClimateDefiant"
        }
    );

    // share tweet
    twttr.widgets.createShareButton(
        'https://climatedefiant.azurewebsites.net/',
        document.getElementById('tweet-share'),
        {
            text: "Check out this app that will save you time and energy! It's a lifesaver and a timesaver Let's be #ClimateDefiant"
        }
    );
}

function endLoading() {

    // end the loading animation
    $(".se-pre-con").fadeOut("slow");


}

function randomGreetingGen() {
randomGreetingVal = Math.floor((Math.random() * 20) + 1);

if (randomGreetingVal === 1){
randomGreeting = "loading page..."
} else if (randomGreetingVal === 2){
    randomGreeting = "Watching the news..."
} else if (randomGreetingVal === 3){
randomGreeting = "Googling for weather..."
} else if (randomGreetingVal === 4){
randomGreeting = "Chasing the sun..."
} else if (randomGreetingVal === 5){
randomGreeting = "Finding the remote..."
}else if (randomGreetingVal === 6){
randomGreeting = "Downloading the internet..."
}else if (randomGreetingVal === 7){
randomGreeting = "Locating the anchorman..."
}else if (randomGreetingVal === 8){
randomGreeting = "Changing the channel..."
}else if (randomGreetingVal === 9){
randomGreeting = "Looking outside..."
}else if (randomGreetingVal === 10){
randomGreeting = "Pushing the changes..."
}else if (randomGreetingVal === 11){
randomGreeting = "Watching cat videos..."
}else if (randomGreetingVal === 12){
randomGreeting = "Saving the files..."
}else if (randomGreetingVal === 13){
randomGreeting = "Watching youtube..."
}else if (randomGreetingVal === 14){
randomGreeting = "Defeating the boss..."
}else if (randomGreetingVal === 15){
randomGreeting = "Solving global issues..."
}else if (randomGreetingVal === 16){
randomGreeting = "Saving Jon Snow..."
}else if (randomGreetingVal === 17){
randomGreeting = "Waking up..."
}else if (randomGreetingVal === 18){
randomGreeting = "Hello, How are you today?"
}else if (randomGreetingVal === 19){
randomGreeting = "Status Code: Feeling Fantastic!"
}else if (randomGreetingVal === 20){
randomGreeting = "Scanning the matrix..."
}
    $("#loadingText").html(randomGreeting);
}