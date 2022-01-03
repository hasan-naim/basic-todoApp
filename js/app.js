// dom elements
const inputElement = document.querySelector(".header input");
const headerDiv = document.querySelector(".header");


const addBtn = document.querySelector(".addBtn");
const listUl = document.querySelector(".list");


inputElement.addEventListener("focus",() => {
    headerDiv.classList.add("big-width")

} )
inputElement.addEventListener("blur", () => {
    headerDiv.classList.remove("big-width")
})
addBtn.addEventListener("click", ()=> {
    if(inputElement.value === ""){
        inputElement.focus()
    }
 
})
addBtn.addEventListener("mouseover", ()=> {
    inputElement.blur()
    headerDiv.classList.add("big-width")
})











/// adding todo












document.addEventListener("keypress", (event)=> {
    if(event.key ==="Enter"){
        if(!inputElement.value === ""){

            addTodo()
        }else{
            inputElement.focus()
        }
    }else{

        inputElement.focus()
    }
})











// document.addEventListener("keyup", (event)=> {
//     if(event.key ==="Enter"){
//         addTodo()
//     }
// })
addBtn.addEventListener("click", addTodo)

function addTodo(text){
    console.log("hello")
}