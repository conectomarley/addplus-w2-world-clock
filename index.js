setInterval(function () {
  let saoPauloElement = document.querySelector("#sao-paulo");
  let saoPauloDateElement = saoPauloElement.querySelector(".date");
  let saoPauloTimeElement = saoPauloElement.querySelector(".time");
  let saoPauloTime = moment().tz("America/Sao_Paulo");

  saoPauloDateElement.innerHTML = saoPauloTime.format("dddd, Do MMMM YYYY");
  saoPauloTimeElement.innerHTML = saoPauloTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("dddd, Do MMMM YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  let baliElement = document.querySelector("#bali");
  let baliDateElement = baliElement.querySelector(".date");
  let baliTimeElement = baliElement.querySelector(".time");
  let baliTime = moment().tz("Asia/Makassar");

  baliDateElement.innerHTML = baliTime.format("dddd, Do MMMM YYYY");
  baliTimeElement.innerHTML = baliTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityTime = moment().tz(cityTimezone);
  console.log(cityTime.format("dddd, Do MMMM YYYY"));
}
let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
