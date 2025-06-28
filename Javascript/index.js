// Global variable to track the selected city
let selectedCityTimeZone = null;
let selectedCityInterval = null;

function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Selected city from dropdown
  if (selectedCityTimeZone) {
    let cityTime = moment().tz(selectedCityTimeZone);
    let cityName = selectedCityTimeZone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");

    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
      " A"
    )}</small></div>
      </div>
      <a href="/">All cities</a>
    `;
  }
}

function updateCity(event) {
  // Set the selected time zone
  selectedCityTimeZone = event.target.value;
  if (selectedCityTimeZone === "current") {
    selectedCityTimeZone = moment.tz.guess();
  }

  updateTime(); // Immediately update the selected city display
}

// Initial updates and interval setup
updateTime();
setInterval(updateTime, 1000);

// Dropdown change listener
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
