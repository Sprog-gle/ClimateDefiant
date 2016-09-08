 // The weather icons code does not work with typescript, so I have written it in JS itself. 
 var setIcon;


  var skycons = new Skycons({"color": "darkgrey"});

  // you can add a canvas by it's ID...
  skycons.set("weatherIcon", Skycons.setIcon);

  if (currentCondition === 'wind') {
      setIcon = Skycons.RAIN;
  };

  // if you're using the Forecast API, you can also supply
  // strings: "partly-cloudy-day" or "rain".

  // start animation!
  skycons.play();

