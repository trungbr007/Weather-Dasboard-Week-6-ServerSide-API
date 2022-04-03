var searchBtn=document.getElementById("btn");
var inputValue=document.getElementById("cityname");

searchBtn.addEventListener('click',function(){
 fetch('api.openweathermap.org/data/2.5/forecast/daily?q='+inputValue.value+'&appid=7406347c68cf592e6562563f43b31ea4')
.then(response=>response.json())
.then(data=>console.log(data))

.catch(err=>alert("Wrong city name !"))

})



