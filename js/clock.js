const clock = document.querySelector("#clock");
const clockHours = document.querySelector("#clock span:first-child");
const clockDate = document.querySelector("#clock span:last-child");

function getClock() {
  const date = new Date(); // 괄호 추가

  //문자달을 위한 어레이,  Date method로는 문자달을 얻을수 있는 방법이 없으므로
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = date.getFullYear();
  const currentDate = date.getDate();
  // const currentMonth = date.getMonth() + 1;  // 1을 더해 실제 월을 표시
  // 어레이를 사용해 문자달을 출력하므로 위의 사항은 무시
  const currentMonth = date.getMonth();

  const dates = `${months[currentMonth]} ${currentDate}, ${currentYear}`;

  //   original version showing military hours
  //   const Hour = date.getHours().toString().padStart(2, "0");
  //   const Minute = date.getMinutes().toString().padStart(2, "0");
  //   const Seconds = date.getSeconds().toString().padStart(2, "0");
  //   const hours = `${Hour}:${Minute}:${Seconds}`;

  const Hour = date.getHours().toString().padStart(2, "0");
  const Minute = date.getMinutes().toString().padStart(2, "0");
  const Seconds = date.getSeconds().toString().padStart(2, "0");

  const hours = Hour > 12 ? 
  `${(Hour-12)}:${Minute}:${Seconds} PM` : 
  `${Hour}:${Minute}:${Seconds} AM`;

  clockHours.innerHTML = hours;
  clockDate.innerHTML = dates;
}

getClock();
setInterval(getClock, 1000);
