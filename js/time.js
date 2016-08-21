var localDate = $("#localDate");

setInterval(function(){
    localDate.get(0).innerHTML=(new Date()).toString();

}, 1000);
