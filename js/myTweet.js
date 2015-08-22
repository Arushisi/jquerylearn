$(function(){
  console.log('Running my java script');
  $("#tweetButton").click(function(){
  	var textEntered = $("#tweetarea").val();
  	alert('Your text is ' + textEntered);
  });

  $.ajax("http://api.openweathermap.org/data/2.5/weather?q=Bangalore,india").done(function(data){

  	var city = data.name;
  	var temp = data.main.temp;
  	var tempMax= data.main.temp_max;
  	var tempMin = data.main.temp_min;
  	var weatherDesc = data.weather[0].description;
    console.log('data is', data);
    $("#weatherData").append("<span> city is" +city + "temp is" +temp + "Max temp is" +tempMax + "Min temp is" +tempMin + "weatherDescription is " +weatherDesc +"</span>");
 
  })
  .fail(function(errorData){
  console.log('error data is ', errorData);
  });



});