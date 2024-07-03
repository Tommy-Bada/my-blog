//Time
const timeElement = document.getElementById("currentTimeInUTC");
function updateTime() {
  const now = new Date();
  const time = now.getTime();
  const clockStr = time.toString();
  timeElement.innerText = clockStr;
}
updateTime();
setInterval(updateTime, 1000);

//Day
const dateElement = document.getElementById("currentDayOfTheWeek");
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
let day = weekday[d.getDay()];
dateElement.innerText = day;
