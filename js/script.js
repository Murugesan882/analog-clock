let hours =document.querySelector(".hrs");
let minitues = document.querySelector('.min');
let seconds = document.querySelector('.sec');
setInterval(setTime,1000);
function setTime(){
   let time = new Date();
   let sec = time.getSeconds()/60;
   let min =(sec+time.getMinutes())/60;
   let hrs =(min+time.getHours())/12;
   hours.style.setProperty('--rotation',hrs*360);
   minitues.style.setProperty('--rotation',min*360);
   
   seconds.style.setProperty('--rotation',sec*360);
   
  
 }
 setTime();