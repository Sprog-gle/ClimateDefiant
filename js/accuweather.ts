
var ipaddr;
var iplocation;

$.ajax({
    'url' : '//freegeoip.net/json/?callback=?',
    'async': false,
    'dataType': "json",
    'success': function(data){
        ipaddr = data.ip;
        iplocation = data.city;
        console.log(ipaddr);
        return ipaddr, iplocation;

    }
});



if (ipaddr !== null){
    // take ip and put it into the api call for weather data
    $("#ipaddress").html("Your current IP address is:" + ipaddr + ".");
    $("#location").html("Your current location is:" + iplocation + ".");
} 



// 




// $(function() {



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

