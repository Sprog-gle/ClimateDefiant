var jqxhr = $.get( "https://newsapi.org/v1/articles", { 
    source: "associated-press", 
    apiKey: "c12d63774bce44eb861dc4623aef92a3", 
    sortBy: "top",
}, function(e) {
    console.log(e);
    $('body').append('<ul id="results">') ;

    for(var k of e.articles){
        $('#results').append('<li>'+k.url+'</li>');
    }
//  alert( "success" );
})
  .done(function(e) {
    //console.log(e);
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });
 