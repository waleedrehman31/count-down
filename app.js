const dayElement = document.querySelector(".day");
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const selectedDate = document.getElementById("selectDate");

const formSubmit = document.getElementById("form");

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  const getDate = formSubmit.selectDate.value;
  const counter = () => {
    const selectedTime = new Date(getDate).getTime();
    const presentTime = new Date().getTime();
    const timeGap = selectedTime - presentTime;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const calculateDays = Math.floor(timeGap / day);
    const calculateHours = Math.floor((timeGap % day) / hour);
    const calculateMintues = Math.floor((timeGap % hour) / minute);
    const calculateSeconds = Math.floor((timeGap % minute) / second);

    dayElement.innerText = calculateDays;
    hourElement.innerText = calculateHours;
    minuteElement.innerText = calculateMintues;
    secondElement.innerText = calculateSeconds;
  };
  formSubmit.reset();
  counter();
  setInterval(counter, 1000);
});
