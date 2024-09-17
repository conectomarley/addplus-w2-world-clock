let saoPauloElement = document.querySelector("#sao-paulo");
let saoPauloDateElement = saoPauloElement.querySelector(".date");
let saoPauloTimeElement = saoPauloElement.querySelector(".time");
let saoPauloTime = moment();

saoPauloDateElement.innerHTML = saoPauloTime.format("MMMM Do YYYY");
saoPauloTimeElement.innerHTML = "6:57:25 <small>PM</small>";
