setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");

  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment();

  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd MMMM D, YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss"
  )}<small>${losAngelesTime.format("A")}</small>`;

  let TokyoElement = document.querySelector("#tokyo");

  let TokyoDateElement = TokyoElement.querySelector(".date");
  let TokyoTimeElement = TokyoElement.querySelector(".time");
  let TokyoTime = moment().tz("Asia/Tokyo");

  TokyoDateElement.innerHTML = TokyoTime.format("dddd MMMM D, YYYY");
  TokyoTimeElement.innerHTML = `${TokyoTime.format(
    "h:mm:ss"
  )}<small>${TokyoTime.format("A")}</small>`;
}, 100);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd MMMM D, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
