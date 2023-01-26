const clock = document.querySelector("#clock-container");
const divMediriem = document.createElement("div");
const divNum = document.createElement("div");
divMediriem.id = "clockmediriem";
divNum.id = "clock-num";
clock.appendChild(divMediriem);
clock.prepend(divNum);

function timereset() {
  const time = new Date();
  let hour = String(time.getHours()).padStart(2, "0");
  const min = String(time.getMinutes()).padStart(2, "0");
  let mediriem = "AM";
  if (hour >= 12 && hour <= 23) {
    mediriem = "PM";
  }
  if (hour == 0) {
    hour = 12;
  } else if (hour > 13) {
    hour = String(parseInt(hour) - 12).padStart(2, "0");
  }

  divMediriem.innerText = `${mediriem}`;
  divNum.innerText = `${hour}:${min}`;
}
timereset();
setInterval(timereset, 1000);
