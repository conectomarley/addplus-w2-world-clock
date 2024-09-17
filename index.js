let saoPauloElement = document.querySelector("#sao-paulo");
let saoPauloDateElement = saoPauloElement.querySelector(".date");
let saoPauloTimeElement = saoPauloElement.querySelector(".time");
let saoPauloTime = moment().tz("America/Sao_Paulo");

saoPauloDateElement.innerHTML = saoPauloTime.format("MMMM Do YYYY");
saoPauloTimeElement.innerHTML = "h:mm:ss [<small>A</small>]";
