function playSomeSound(genre) {
    SC.get('/tracks', {
        genres: genre,
        bpm: {
            from: 100
        }
      }, function(tracks) {
          var random = Math.floor(Math.random() * 49);
          Screen.oEmbed(tracks[random].uri, {auto_play: true}, document.getElementById('target'));
    });
}

window.onload = function() {
    SC.initialise({
        client_id: *********;
    })
}