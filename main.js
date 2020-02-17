console.log("hola mundo");

const button = document.getElementById("ejemplo");
const title = "titulo";

button.addEventListener("click",changeTitle);

function changeTitle(e){
    debugger
    e.preventDefault();

    var text_new = "Cambio gg"

    document.getElementById(title).innerHTML = text_new

    
}