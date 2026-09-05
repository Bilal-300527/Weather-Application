let mainCard = document.querySelector(".weather-card");
let currentTime = new Date();
let days = [
  "null",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const API_KEY = "c27af44c8277f0b14d1000299eff81b2";

let searchCity = () => {
  let input = document.querySelector("#input-box").value;
  console.log("🚀 ~ searchCity ~ input:", input);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`,
  )
    .then((data) => data.json())
    .then((converted) => {
      console.log(converted);
      let item = converted;
      mainCard.innerHTML = `
        <div class="weather-top">
            <div>
              <p class="weather-label">CURRENT WEATHER</p>
              <h1>${item.name}</h1>
              <p class="date">${days[currentTime.getDay()]}, ${months[currentTime.getMonth()]} ${currentTime.getDay()} , ${currentTime.getFullYear()}</p>
            </div>
            <div class="weather-icon">
              <i class="fa-solid fa-cloud-sun"></i>
            </div>
        </div>
        <div class="temperature-area">
            <div class="temperature">${Math.floor(item.main.temp)}<span>°C</span></div>
            <div class="weather-description">
              <h2>${item.weather[0].main}</h2>
              <p>Feels like ${Math.floor(item.main.feels_like)}°C</p>
            </div>
        </div>
        <div class="weather-details">
            <div class="detail">
              <div class="detail-icon">
                <i class="fa-solid fa-droplet"></i>
              </div>
              <div>
                <span>Humidity</span>
                <strong>${item.main.humidity}%</strong>
              </div>
            </div>
            <div class="detail">
              <div class="detail-icon">
                <i class="fa-solid fa-wind"></i>
              </div>

              <div>
                <span>Wind</span>
                <strong>${item.wind.speed}km/h</strong>
              </div>
            </div>

            <div class="detail">
              <div class="detail-icon">
                <i class="fa-solid fa-eye"></i>
              </div>

              <div>
                <span>Visibility</span>
                <strong>${item.visibility / 1000} km</strong>
              </div>
            </div>

            <div class="detail">
              <div class="detail-icon">
                <i class="fa-solid fa-gauge-high"></i>
              </div>

              <div>
                <span>Pressure</span>
                <strong>${item.main.pressure} hPa</strong>
              </div>
            </div>
          </div>

        `;
    })
    .catch((error) => console.error(error));
};
