var ipaddr;
$.ajax({
    'url': 'freegeoip.net/json/?callback=?',
    'async': false,
    'dataType': "json",
    'success': function (data) {
        ipaddr = data.ip;
        console.log(ipaddr);
        return ipaddr;
    }
});
if (ipaddr !== null(function () {
    // take ip and put it into the api call for weather data
}))
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
    ;
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
