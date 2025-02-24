let input = document.getElementById("input_value")
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
    let text = document.createTextNode(i_value)
    let btn = 

    icon.className = "fa-solid fa-check"
    li.className = "list-style"

    li.appendChild(text)
    span.appendChild(icon)
    li.appendChild(span)
    ul.appendChild(li)
    input.value = ""
    li.addEventListener("dblclick", ()=>{
        li.className = "list-done"
        icon.className = "fa-solid fa-trash"
    })
    
    icon.addEventListener("dblclick",()=>{
        li.parentNode.removeChild(li);
    })
    // console.log(i_value)
  
}