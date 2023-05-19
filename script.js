
let defaultCity = "jammu";
const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");

const cityName = document.getElementById("cityname");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");

function getWeather(namee) {
  async function fetchWeather() {

    let fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${namee}&appid=dda26109be2e21c827819fa96320454e&units=metric`)
    let data = await fetchData.json();
    return data;
  }

  fetchWeather().then(data => {
    if (data.name == undefined) {
      cityName.textContent = data.message;
      temp.textContent = `Temperature: `;
      humidity.textContent = `Humidity: `;
      wind.textContent = `Wind Speed: `;
    } else {
      cityName.textContent = data.name;
      temp.textContent = `Temperature: ${data.main.temp}°C`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    }

  })
}

getWeather(defaultCity);

submitBtn.addEventListener('click', () => {
  const city = input.value.trim();
  if (city) {
    getWeather(city);
    input.value = '';
  }
});
