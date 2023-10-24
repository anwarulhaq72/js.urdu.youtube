<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="new.css">
    <script src="new.js" defer></script>
    <title>Professional Blog</title>
</head>
<body>
  
    <div class="card">
<div class="search">
<input type="text" placeholder="enter city name"
spellcheck="false">
<button><img src="search.png"></button>
</div>

<div class= weather >
    <img src="rain.png" class="weather-icon">
    <h1 class="temp">22°c</h1>
    <h2 class="city">New York</h2>
      <div class="details">
         <div class="col">
           <img src="humidity.png">
             <div>
                <p class="humidity">50%</p>
                <p>Humidity</p>
             </div>
         </div>
         <div class="col">
            <img src="wind.png">
              <div>
                 <p class="wind">15 km/h</p>
                 <p>wind speed</p>
              </div>
          </div>
       </div>
    </div>
</div>

<script>
    const apikey="7c77dfd2e23648a8fcbc96586b647f92";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox=document.querySelector('.search input');
    const searchBtn=document.querySelector('.search button');
    const weatherIcon=document.querySelector('.weather-icon');


    async function checkWeather(city){
        let response = await fetch(apiUrl + city+ `&appid=${apikey}`);
        var data= await response.json();
        console.log(data)
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
        document.querySelector('.wind').innerHTML=Math.round(data.wind.speed) + " km/h";

        if(data.weather[0].main== "Clouds"){
            weatherIcon.src='cloudy.png';
        }
        else if (data.weather[0].main =="Rain") {
            weatherIcon.src='rainy.png';
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src='clear.png';
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src='drizzle.png';
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src='mist.png';
        }

    }
    searchBtn.addEventListener('click',()=>{
        checkWeather(searchBox.value);
    });
       

    
    
     </script>
                    


</body>
</html>
