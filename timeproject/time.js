// Setup End Date for Countdown (getTime == Time in Milleseconds)
let now =new Date().getTime;
let days=[
   "days", "monday","tuesday","wednesday","thursday","friday","saturday","sunday"

];
let dayswriten=document.getElementById('days');
console.log(days[3]);
let d;
d= new Date();
d= new Date();
console.log(d);
now=new Date().getTime;
 var date=new Date(2021,7,12,11,30,27,0);
var count=document.getElementById("count");
var timer = new Date();
var time = new Date().setTime("1:37") ;
console.log(timer.getTime());
var date=timer.getMonth()+1;
console.log(date);
var min=document.getElementById("min");
let today= new Date();

let getMonth=today.getMonth()+1;
let year=today.getUTCFullYear();
let getdate=today.getDate();



    // date
    let current_date=`${getMonth}/${getdate}/${year}`
    console.log(current_date);
    //hours
    let min12=document.querySelector(".min12");
    let hours= addzero(today.getHours());
    let minutes=addzero( today.getMinutes());
    let seconds=addzero( today.getSeconds());
    let currenttime=`${hours}:${minutes}:${seconds}`
    console.log(currenttime);
    function addzero(num){
        return num<10? `0${num}`:num;
    }
    setInterval(() => {
    
        var time = new Date();
        let hours= addzero(time.getHours());
        let minutes=addzero( time.getMinutes());
        let seconds=addzero( time.getSeconds());
   if(hours>12){
       let min12=document.querySelector(".min12");
       let dayswriten=document.getElementById('days');
       hours-=12;
       min12.innerText="PM"
   }
        let currenttime=`${hours}:${minutes}:${seconds}`
       // console.log(currenttime);
        function addzero(num){
            return num<10? `0${num}`:num;
        }
        min.innerText=currenttime;   
     let day=time.getDay();
    
      let outputday=days[day];
        dayswriten.innerText=`${ outputday}`
       
       // console.log("date"+time.getTime());
          
         
            
            
    }, 1000);
    
    console.log();
    //console.log("date"+time.getDate());
    console.log(date.getTime);
    console.log(d.getFullYear());
    console.log(d.getHours());
     console.log(d.getDay());
function load(){
    var overlay=document.querySelector(".overlay");
    
    setTimeout(() => {
           overlay.classList.add("overlay-none");
    }, 3000);
}