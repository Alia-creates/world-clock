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
