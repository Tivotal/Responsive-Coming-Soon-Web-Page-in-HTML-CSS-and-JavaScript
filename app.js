/* Created by Tivotal */

let days = document.querySelector(".days .number");
let hours = document.querySelector(".hours .number");
let minutes = document.querySelector(".minutes .number");
let seconds = document.querySelector(".seconds .number");

let dayVal = 10,
  hourVal = 21,
  minVal = 17,
  secVal = 51;

let updateUI = setInterval(() => {
  secVal--;

  if (secVal === 0) {
    minVal--;
    secVal = 60;
  }

  if (minVal === 0) {
    hourVal--;
    minVal = 60;
  }

  if (hourVal === 0) {
    dayVal--;
    hourVal = 60;
  }

  if (dayVal === 0) {
    clearInterval(updateUI);
  }

  //displaying data
  seconds.textContent = secVal < 10 ? `0${secVal}` : secVal;
  minutes.textContent = minVal < 10 ? `0${minVal}` : minVal;
  hours.textContent = hourVal < 10 ? `0${hourVal}` : hourVal;
  days.textContent = dayVal < 10 ? `0${dayVal}` : dayVal;
}, 1000);
