const add = document.querySelector(".submit");
const title = document.getElementById("title");
const note = document.getElementById("discription");
const udate = document.getElementById("date");
const element = document.querySelector('.notes');
const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
    notes.forEach(element => {
        addNotes(element)
    });
}

add.addEventListener("click", (clicking) => {
    clicking.preventDefault();
    addNotes()
})

function addNotes(obj) {
    let box = document.createElement("div");
    box.classList.add("box");
    let titlevalue = title.value;
    let notevalue = note.value;
    let udatevalue = udate.value;
    if (obj) {
        titlevalue = obj.title;
        notevalue = obj.desc;
        udatevalue = obj.date;
    }

    if (titlevalue || notevalue) {
        document.getElementById("addnote").style.display = "none"
        box.innerHTML = `
        <p id="setdate">${udatevalue}</p>
        <h2 id="heading">${titlevalue}</h2>
            <p id="pera">${notevalue} </p>
            <div id="btn">
            <div class="delete"><i class='fa fa-trash'></i></div>
            <div><a href="#scroll" class="edit" id="edit" ><i class='fa fa-pencil'></i></a></div>
            <div><a href="#scroll" class="see delete" onclick="preview()" ><i class='fa fa-eye'></i></a></div>
            </div> `;
        element.appendChild(box);
        updateLs()
    }

    const update = box.querySelector(".edit");
    update.addEventListener("click", () => {
        title.value = titlevalue;
        note.value = notevalue;
        document.getElementById("updatetext").innerText = "Edit"
    })
    const see = box.querySelector(".see");
    see.addEventListener("click", () => {
        title.value = titlevalue;
        note.value = notevalue;
        document.getElementById("updatetext").innerText = ""
    })
    const dele = box.querySelector(".delete");
    dele.addEventListener('click', () => {
        box.remove();
        location.reload()
        updateLs();
    })
}
reset.addEventListener('click', () => {
    document.getElementById("updatetext").innerText = ""
    location.reload()
})
add.addEventListener("click", (clicking) => {
    const update = document.getElementById("date");
    const date = update.innerText;
    document.getElementById("setdate").innerText = date
    location.reload()
})


function updateLs() {
    let box = document.querySelectorAll(".box");
    let arr = [];

    box.forEach(element => {
        arr.push({
            title: element.children[1].innerText,
            desc: element.children[2].innerText,
            date: element.children[0].innerText
        })
    });
    localStorage.setItem("notes", JSON.stringify(arr));
}
function preview(){
    document.getElementById('main-title').style.border=" 5px solid red"
    function timing(){
        document.getElementById('main-title').style.border="2px solid black"
    
    }
    setTimeout(timing,1000)
}


