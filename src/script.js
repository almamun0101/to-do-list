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
    let text = document.createTextNode(i_value)
    let text2 = document.createTextNode("x")
    li.className = "list-style"
    li.appendChild(text)
    li.appendChild(text2)
    ul.appendChild(li)
    input.value = ""
    // console.log(i_value)
  
}