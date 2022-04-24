function menu(){
    document.getElementById('menulist').style.display="flex"
}
// close.addEventListener('click',()=>{
//     document.getElementById('menulist').style.display="none"
// })
function setTime(){
let hr = document.getElementById("sethr")
let min = document.getElementById("setmin")
let sec = document.getElementById("setsec")
let selecthr = hr.options[hr.selectedIndex].value;
let selectmin = min.options[min.selectedIndex].value;
let selectsec = sec.options[sec.selectedIndex].value;
const alarmtime = selecthr + ":" + selectmin + ":" + selectsec ;
console.log(alarmtime);
}
function hourmenu() {
    var option = document.getElementById("sethr");
    var hrs = 12;
    for (i = 0; i <= hrs; i++) {
        option[option.length] = new Option(i < 10 ? "0" + i : i);
    }
}
hourmenu()
function minmenu() {
    var option = document.getElementById("setmin");
    var hrs = 59;
    for (i = 0; i <= hrs; i++) {
        option[option.length] = new Option(i < 10 ? "0" + i : i);
    }
}
minmenu()
function secmenu() {
    var option = document.getElementById("setsec");
    var hrs = 59;
    for (i = 0; i <= hrs; i++) {
        option[option.length] = new Option(i < 10 ? "0" + i : i);
    }
}
secmenu()
