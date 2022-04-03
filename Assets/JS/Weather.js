var searchBtn=document.getElementById("search-btn");
var inputValue=document.getElementById("cityname");
const baseUrl= "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey= "7406347c68cf592e6562563f43b31ea4";
var cityName= document.getElementById('city-name');
var weather=document.getElementById('weather');
var temp=document.getElementById('temp');
var humidity=document.getElementById('humidity');
var wind=document.getElementById('wind');
var timestamp = 1648961485000
var date = new Date(timestamp);



searchBtn.addEventListener('click',function(){
  
 fetch(`${baseUrl}${inputValue.value}&appid=${apiKey}`)
.then(resposne=>resposne.json())
.then(data=>{  

    console.log(data);

    // weather.=data.weather;
    temp.innerHTML="Temp: "+ Math.floor((parseInt(data.main.temp)-272.15)).toString() + "°C";
    humidity.innerHTML="Humidity: " + data.main.humidity
    wind.innerHTML="Wind: "+data.wind.speed;
    cityName.innerHTML=data.name;
    

    
})

.catch(err=>console.log(err))

})



