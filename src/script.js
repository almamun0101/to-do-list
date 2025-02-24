let input = document.getElementById("input_value")
let totall = document.getElementById("count_list")
let complete = document.getElementById("count_done")
let left = document.getElementById("count_left")

let ul = document.getElementById("list")
input.onkeypress = function (e) {
    if (e == "Enter") {
        console.log("mamun")
    }
};
input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        create_list()
    }
});

function create_list(){
    let i_value = input.value
    let li = document.createElement("li")
    let span = document.createElement("span")
    let icon = document.createElement("i")
    let t = i_value.charAt(0).toUpperCase() + i_value.slice(1) 
    let text = document.createTextNode(t)
    if(!i_value){
        return
    }

    icon.className = "fa-solid fa-check"
    li.className = "list-style"
    
    li.appendChild(text)
    span.appendChild(icon)
    li.appendChild(span)
    ul.appendChild(li)
    input.value = ""

    counts()

    li.addEventListener("click", ()=>{
        li.className += " list-done"
        icon.className = "fa-solid fa-trash"
        counts()
    })
    
    icon.addEventListener("dblclick",()=>{
        li.parentNode.removeChild(li);
        counts()
    })
    
}

function counts(){
    let list_length = ul.getElementsByClassName("list-style").length
    let done_length = ul.getElementsByClassName("list-done").length

    totall.innerHTML = list_length
    complete.innerHTML = done_length
    left.innerHTML = list_length - done_length;
    
}