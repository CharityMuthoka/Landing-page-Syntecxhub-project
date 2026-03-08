const apiKey ="5591c080d88997c88df27d27b00afa2e";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const weatherIcon = document.getElementById("weatherIcon");
const weatherCard = document.getElementById("weatherCard");

//fetch weather data using async/await
async function getWeather(city){
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

        );
        if (!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        cityName.textContent =`${data.name}`;
        temperature.textContent = `Temperature: ${data.main.temp} °C`;
        humidity.textContent = `Humidity: ${data.main.humidity} %`;

        const iconCode = data.weather[0].icon;
        weatherIcon.src=`https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        weatherCard.style.display = "block";

    } catch(error){
        alert(error.message);
    }
    }

    //search button click
    searchBtn.addEventListener("click", () =>{
        const city = cityInput.value.trim();
        if (city !== ""){
            getWeather(city);
        }
    });

    //enter key support
    cityInput.addEventListener("keypress",(e) =>{
        if (e.key === "Enter"){
            searchBtn.click();
        }
    });




