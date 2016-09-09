
SC.initialize({
  client_id: "a8d5228ca716551510abb70e88c78d10",
});


function playSomeSound(genre) {
    SC.get('/tracks', {
        genres: genre,
        bpm: {
            from: 100
        }
      }, function(tracks) {
          var random = Math.floor(Math.random() * 49);
          SC.oEmbed(tracks[random].uri, {auto_play: true}, document.getElementById('target'));
    });
}

window.onload = function() {
    SC.initialise({
        client_id: *********;
    })
}

