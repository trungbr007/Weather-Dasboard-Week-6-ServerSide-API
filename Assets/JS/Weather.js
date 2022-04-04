var searchBtn=document.getElementById("search-btn");
var inputValue=document.getElementById("cityname");
const baseUrl= "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey= "7406347c68cf592e6562563f43b31ea4";
var cityName= document.getElementById('city-name');
var weather=document.getElementById('weather');
var temp=document.getElementById('temp');
var humidity=document.getElementById('humidity');
var wind=document.getElementById('wind');

var displayWeather=document.getElementById('display-weather');

var baseWeatherUrl="http://openweathermap.org/img/wn/"
var weatherTail="@2x.png"




searchBtn.addEventListener('click',function(){
  
 fetch(`${baseUrl}${inputValue.value}&appid=${apiKey}`)
.then(resposne=>resposne.json())
.then(data=>{  

    console.log(data);
    var timestamp =data.dt *1000;
    var date = new Date(timestamp);
    // weather.=data.weather;
    temp.innerHTML="Temp: "+ Math.floor((parseInt(data.main.temp)-272.15)).toString() + "°C";
    humidity.innerHTML="Humidity: " + data.main.humidity
    wind.innerHTML="Wind: "+data.wind.speed;
    cityName.innerHTML=data.name + " "+date;

    
    

    
})

.catch(err=>console.log(err))

})




var weatherCode= data.icon;
var day1=document.getElementById("1");
var day2=document.getElementById("2");
var day3=document.getElementById("3");
var day4=document.getElementById("4");
var day5=document.getElementById("5");


fetch(`${baseWeatherUrl}${weatherCode}${weatherTail}`)
.then(resposne=>resposne.json())
.then(data=>{  

   day1.innerHTML=weatherCode;
   day2.innerHTML=weatherCode.

    
    

    
})

.catch(err=>console.log(err))

})



