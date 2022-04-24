let alarmring = new Audio("ringtone.wav");
alarmring.loop = true;
let element = document.querySelector(".notes")
let clocktime = document.getElementById("clock")
let time = setInterval(function () {
    let date = new Date();
    let hour = (12 - (date.getHours()));
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm = (date.getHours()) < 12 ? 'AM' : 'PM';

    if (hour < 0) {
        hour = hour * -1;
    }
    else if (hour == 0) {
        hour = 12;
    }
    else {
        hour = hour;
    }
    clocktime.textContent = addZero(hour) + ":" + addZero(minute) + ":" + addZero(second) + ":" + ampm;
}, 1000)
function addZero(zero) {
    return (zero < 10) ? "0" + zero : zero;
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
function setAlarm() {
    document.getElementById('Alarmset-alert').style.display='block'
    function timeout(){
    document.getElementById('Alarmset-alert').style.display='none'
    }
    setTimeout(timeout,2000)
// location.reload()
    let hr = document.getElementById("sethr")
    let min = document.getElementById("setmin")
    let sec = document.getElementById("setsec")
    let ap = document.getElementById("ampm")
    let selecthr = hr.options[hr.selectedIndex].value;
    let selectmin = min.options[min.selectedIndex].value;
    let selectsec = sec.options[sec.selectedIndex].value;
    let selectap = ap.options[ap.selectedIndex].value;
    const alarmtime = selecthr + ":" + selectmin + ":" + selectsec + ":" + selectap;
    document.getElementById('Alarmset-alert').innerHTML="Alarm Set For "+alarmtime

    console.log(alarmtime);
 let clock = document.getElementById("clock")

    setInterval(function () {
        let date = new Date();
        let hour = (12 - (date.getHours()));
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let ampm = (date.getHours()) < 12 ? 'AM' : 'PM';

        if (hour < 0) {
            hour = hour * -1;
        }
        else if (hour == 0) {
            hour = 12;
        }
        else {
            hour = hour;
        }
        let time = clocktime.textContent = addZero(hour) + ":" + addZero(minute) + ":" + addZero(second) + ":" + ampm;

        if (alarmtime == time) {

            alarmring.play()
            document.getElementById('clockactive').style.display="block"
           document.getElementById('stopindicate').style.backgroundColor='red'
        }
    }, 1000)
}

function clearalarm() {
    alarmring.pause()
    document.getElementById('clockactive').style.display="none"
    document.getElementById('stopindicate').style.backgroundColor='white'



}
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
    notes.forEach(element => {
        addNotes(element)
    });
}
setbtn.addEventListener('click', (e) => {
    e.preventDefault()
    addNotes()
})
function addNotes(obj) {
    const card = document.createElement("div")
    card.classList.add("card")
    const hr = document.getElementById("sethr")
    const min = document.getElementById("setmin")
    const sec = document.getElementById("setsec")
    const ap = document.getElementById("ampm")
    const selecthr = hr.options[hr.selectedIndex].value;
    const selectmin = min.options[min.selectedIndex].value;
    const selectsec = sec.options[sec.selectedIndex].value;
    const selectap = ap.options[ap.selectedIndex].value;
    const alarmtime = selecthr + ":" + selectmin + ":" + selectsec + ":" + selectap;
    let titleVal = alarmtime
    
    document.getElementById('activetime').innerHTML=titleVal
    if (obj) {

        titleVal = obj.date;
    }
    console.log(titleVal);


    card.innerHTML = ` <h3>Alarm Set</h3>
        <p>${titleVal}</p>
        <button class="delete">Delete</button>
        `
    element.appendChild(card)
    updateLs()
    const dele = card.querySelector(".delete");
    dele.addEventListener('click', () => {
        card.remove();
        updateLs();
    })

}

function updateLs() {
    let card = document.querySelectorAll(".card");
    let arr = [];

    card.forEach(element => {
        arr.push({
            title: element.children[0].innerText,
            date: element.children[1].innerText,
        })
    });
    localStorage.setItem("notes", JSON.stringify(arr));
}
refresh.addEventListener('click',()=>{
    location.reload()
})


