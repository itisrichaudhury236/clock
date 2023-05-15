const hourE1 =document.querySelector(".hours");
const minutesE1 =document.querySelector(".minutes");
const secondsE1 =document.querySelector(".seconds");

function updateClock() {
    const currentDate= new Date().getHours();
    setTimeout(updateClock, 1000);
    console.log(currentDate);
    const hours = currentDate.getHours();
    const minutes= currentDate.getMinutes();
    const seconds= currentDate.geteconds();
    const hourDeg= (hour/12) *360;
    hourE1.style.transform = ''


}
updateClock();