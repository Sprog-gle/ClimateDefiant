// defining Longitude and Latitude
var long;
var lat;
var fTemp;
var cTemp;
var kTemp;

// Get the user's geolocation
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        long = position.coords.longitude;
        lat = position.coords.latitude;
        $("#data").html("Latitude: " + lat + "<br>Longitude: " + long);



var api = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=071f8cf08a2358a2ab1d5378044cfda9';


$.getJSON(api, function(data){
    //var weatherType = data.weather[0].description;
     kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;

    // Convert temp to Fareighneight rip spelling
    fTemp = (kTemp)*(9/5)-459.67;

    // Convert Temp To Celcius :)
    cTemp = kTemp-273;



console.log(city);
console.log(api);
 $("#location").html("Your current location is:" + city + ".");

})




    }); // add a select location box if user doesn't have location services on
}

// Create API with gelocation
