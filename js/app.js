// dom elements
const inputElement = document.querySelector(".header input");
const headerDiv = document.querySelector(".header");

const addBtn = document.querySelector(".addBtn");
const listUl = document.querySelector(".list");


// an array for list items...single source for information

let itemArr = [
    
]
let id
if(itemArr.length !== 0 ){
    id = itemArr[itemArr.length - 1].id + 1;

}else{
    id = 0
}

// when click on input box it will be wider .. cool transition
inputElement.addEventListener("focus", () => {
    headerDiv.classList.add("big-width");
});

// when click on anywhere except input box it will be less wider .. cool transition
inputElement.addEventListener("blur", () => {
    headerDiv.classList.remove("big-width");
});

// when mouse enter the add button then input box will be unfocus and input box /// remain wider...
addBtn.addEventListener("mouseover", () => {
    inputElement.blur();
    headerDiv.classList.add("big-width");
    
});

/// adding todo

// if i press any key of my keyboard input box will be focused and it will start typing
document.addEventListener("keypress", (event) => {
            inputElement.focus();
        
});

// press enter key
document.addEventListener("keyup", (event)=> {
    if(event.key ==="Enter"){
        if (inputElement.value === "") {
            inputElement.focus();
            return;
        }else {
            const text = inputElement.value
            addTodo(text, id)
            itemArr.push({text: text, id: id})
            // increasing id ...and giving every item a separete id..
            id++;
            inputElement.value = ""
        }
    }
})

// what will happen when user click on add button
addBtn.addEventListener("click", () => {
    if (inputElement.value === "") {
        inputElement.focus();
        return;
    }else {
        const text = inputElement.value
        addTodo(text, id)
        id++;
        inputElement.value = ""
    }
});

function addTodo(text, id) {
    const html = `
    <li class="item" id=${id}>
                    <input type="checkbox">
                    <p>${text}</p>
                    <i class="bi bi-trash-fill" job="delete"></i>
                </li>
    `;

    listUl.insertAdjacentHTML("afterbegin", html);
}


itemArr.forEach(({text, id}) => {
    addTodo(text, id)
})


// removing todo.
// first checking if user clicking delete button

listUl.addEventListener("click", (event) => {
    let element = event.target;
    let button = element.getAttribute("job")
    if(button === "delete" ){
        removeItem(element)
    }

    console.log(element.parentElement.parentElement)

})

function removeItem(element){
    element.parentElement.parentElement.removeChild(element.parentElement)
    let id = element.parentElement.id;
    let theObj
    itemArr.forEach((everyObj) => {
        if(everyObj.id == id){
            theObj = itemArr.indexOf(everyObj)
            return;
        }
    })
    itemArr.splice(theObj, 1)
    console.log(theObj)
}
