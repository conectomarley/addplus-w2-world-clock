setInterval(function () {
  let saoPauloElement = document.querySelector("#sao-paulo");
  let saoPauloDateElement = saoPauloElement.querySelector(".date");
  let saoPauloTimeElement = saoPauloElement.querySelector(".time");
  let saoPauloTime = moment().tz("America/Sao_Paulo");

  saoPauloDateElement.innerHTML = saoPauloTime.format("dddd, MMMM Do YYYY");
  saoPauloTimeElement.innerHTML = saoPauloTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("dddd, MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}, 1000);

setInterval(function () {
  let baliElement = document.querySelector("#bali");
  let baliDateElement = baliElement.querySelector(".date");
  let baliTimeElement = baliElement.querySelector(".time");
  let baliTime = moment().tz("Asia/Makassar");

  baliDateElement.innerHTML = baliTime.format("dddd, MMMM Do YYYY");
  baliTimeElement.innerHTML = baliTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);
