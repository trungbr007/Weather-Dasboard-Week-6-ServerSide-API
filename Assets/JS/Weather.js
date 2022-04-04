var searchBtn=document.getElementById("search-btn");
var inputValue=document.getElementById("cityname");
const baseUrl= "https://api.openweathermap.org/data/2.5/forecast?q=";
const apiKey= "7406347c68cf592e6562563f43b31ea4";
var cityName= document.getElementById('city-name');
var weather=document.getElementById('weather');
var temp=document.getElementById('temp');
var humidity=document.getElementById('humidity');
var wind=document.getElementById('wind');
var displayCity=document.getElementById('display-city');
var displayWeather=document.getElementById('display-weather');
var day1=document.getElementById("1");
var day2=document.getElementById("2");
var day3=document.getElementById("3");
var day4=document.getElementById("4");
var day5=document.getElementById("5");






searchBtn.addEventListener('click',function(){
  
 fetch(`${baseUrl}${inputValue.value}&appid=${apiKey}`)
.then(resposne=>resposne.json())
.then(data=>{  

    console.log(data);
    var timestamp =data.list[0].dt *1000;
    var date = new Date(timestamp);
    // weather.=data.weather;
    temp.innerHTML="Temp: "+ Math.floor((parseInt(data.list[0].main.temp)-272.15)).toString() + "°C";
    humidity.innerHTML="Humidity: " + data.list[0].main.humidity
    wind.innerHTML="Wind: "+data.list[0].wind.speed;
    cityName.innerHTML=data.city.name + " "+date;

    displayWeather.innerHTML = "";

for(i=1;i<=5;i++){
    var card= document.createElement('div');
    var dateForecast=document.createElement('p');
    var tempForecast=document.createElement('p');
    var iconForecast=document.createElement('img');
    var humidityForecast=document.createElement('p');
    var windForecast=document.createElement('p');
    var iconCode=data.list[i].weather[0].icon;
    var iconURL= "http://openweathermap.org/img/wn/"+iconCode+"@2x.png";

    

    card.appendChild(dateForecast);
    card.appendChild(iconForecast);
    card.appendChild(tempForecast);
    card.appendChild(humidityForecast);
    card.appendChild(windForecast);

    card.setAttribute('style','background-color: lightyellow; margin:10px;border-radius:10px;border:1px solid;text-align:center');
    iconForecast.setAttribute('src',iconURL);
    tempForecast.innerHTML="Temp: "+ Math.floor((parseInt(data.list[i].main.temp)-272.15)).toString() + "°C";
    humidityForecast.innerHTML="Humidity: " + data.list[i].main.humidity
    windForecast.innerHTML="Wind: "+data.list[i].wind.speed;
    dateForecast.innerHTML= new Date (data.list[i].dt*1000);


    displayWeather.appendChild(card);
  
    

};
//local storage

var storeCityName= document.createElement('li');
storeCityName.innerHTML=inputValue.value;
console.log(inputValue)
storeCityName.setAttribute('style','list-style-type: none;border:1px solid black;background-color:lightgrey;border-radius:10px;margin:20px;padding 5px;text-align:center;')
displayCity.appendChild(storeCityName);



localStorage.setItem(storeCityName," ");
// storeCityName.val(localStorage.getItem('storeCityName'));
displayCity.localStorage.getItem('storeCityName');

})

.catch(err=>console.log(err))

});













