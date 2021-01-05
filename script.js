function gettingJSON(){
  $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=32.9378235&lon=-117.1758679&exclude=minutely,hourly,daily&appid=c05d20f7f255132342f6351f13d710b4",
  function(json){     

//retreves weather data from weather condition number and sorts in switch
//key for weather conditions: https://openweathermap.org/weather-conditions
  switch(Math.trunc(json.current.weather[0].id/100)) {
  case 1:
    console.log("class 1 weather");
    disRain()
    break;
  case 2:
  //thunderstorm
    console.log("class 2 weather");
    disRain()
    break;
  case 3:
  //Drizzle
    console.log("class 3 weather");
    disRain()
    break;
  case 4:
    console.log("class 4 weather");
    disRain()
    break;
  case 5:
  //Rain
    console.log("class 5 weather");
    disRain()
    break;
  case 6:
  //snow
    console.log("class 6 weather");
    disRain()
    break;
  case 7:
  //varible atomosphere conditions
    console.log("class 7 weather");
    break;
  case 8:
  //when it is clear
    console.log("class 8 weather");
  switch(json.current.weather[0].id) {
  case 800:
    console.log("clear");
    disClear();
    document.getElementById("Dryness").innerHTML = "It is Dry";
    break;
  case 801:
    console.log("few clouds: 11-25%");
    disCloud();
    break;
  case 802:
    console.log("scattered clouds: 25-50%");
    disCloud();
    break;
  case 803:
    console.log("	broken clouds: 51-84%");
    disCloud();
    break;
  case 804:
    console.log("overcast clouds: 85-100%");
    disCloud();
    break;

}
    break;
  case 9:
    console.log("class 9 weather");
    break;
  }


        });
    }
    function disClear() {
    document.body.style.backgroundImage = "url('backgrounds/clearCanyon.png')";
    document.getElementById("Dryness").innerHTML = "It is Dry";
    }
    function disCloud(){
    document.body.style.backgroundImage = "url('backgrounds/cloudCanyon.png')";
    document.getElementById("Dryness").innerHTML = "It is Possibly Wet";
    }
    function disRain(){
    document.body.style.backgroundImage = "url('backgrounds/rainCanyon.png')";
    document.getElementById("Dryness").innerHTML = "It is Wet'";
    }