// dom elements
const inputElement = document.querySelector(".header input");
const headerDiv = document.querySelector(".header");

const addBtn = document.querySelector(".addBtn");
const listUl = document.querySelector(".list");


// parsing localstorage

let dataInLocalStorage = JSON.parse(localStorage.TodoList)



// an array for list items...single source for information
let itemArr;

//checking if there is data in localstorage

if(dataInLocalStorage){
    itemArr = dataInLocalStorage
}else {
    itemArr = []
}

// an id to give each item a specific id
let id;
if(itemArr.length !== 0 ){
    id = itemArr[itemArr.length - 1].id + 1;

}else{
    id = 0
}

// if there is items in the item array then print them when website is loading..
if(itemArr.length > 0 ){
    itemArr.forEach(({text, id, done}) => {
        addTodo(text, id)
       
    })
    itemArr.forEach((everyObj) => {
        if(everyObj.done === true){
            let id = everyObj.id;
            const theCheckBox = document.getElementById(id).firstElementChild;
            theCheckBox.checked = true
            console.log(theCheckBox)
        }else{
            let id = everyObj.id;
            const theCheckBox = document.getElementById(id).firstElementChild;
            theCheckBox.checked = false
        }
       
    })
    
    




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
            itemArr.push({text: text, id: id, done: false})
            // increasing id ...and giving every item a separete id..
            id++;
            localStorage.setItem("TodoList", JSON.stringify(itemArr))
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
        itemArr.push({text: text, id: id, done: false})
            // increasing id ...and giving every item a separete id..
        id++;
        localStorage.setItem("TodoList", JSON.stringify(itemArr))
        inputElement.value = ""
    }
});

// a function to add item to the list
function addTodo(text, id) {
    const html = `
    <li class="item" id=${id}>
                    <input type="checkbox" job="checkBox">
                    <p>${text}</p>
                    <i class="bi bi-trash-fill" job="delete"></i>
                </li>
    `;

    listUl.insertAdjacentHTML("afterbegin", html);
}





// removing todo.
// first checking if user clicking delete button

listUl.addEventListener("click", (event) => {
    let element = event.target;
    let button = element.getAttribute("job")
    if(button === "delete" ){
        let confirmation = confirm("Are you sure to delete this item from list?")
        if(confirmation)
            removeItem(element)
        else
            return;
    }else if(button === "checkBox"){
        checkItemInItemArr(element)
    }



})

function removeItem(element){
    element.parentElement.parentElement.removeChild(element.parentElement)
    let id = element.parentElement.id;
    let theObj;
    //checking wich object is deleting user from list 
    itemArr.forEach((everyObj) => {
        if(everyObj.id == id){
            //and getting the index of that item
            theObj = itemArr.indexOf(everyObj) 
            return;
        }
    })
    //and removing from the item array the item.
    itemArr.splice(theObj, 1)
    localStorage.setItem("TodoList", JSON.stringify(itemArr))
}

// checking item in the array

function checkItemInItemArr(element){
    // getting the element id
    let id = element.parentElement.id;
    let theObj;
    //checking which object is checking user from list 
    itemArr.forEach((everyObj) => {
        if(everyObj.id == id){
            //and getting the index of that item
            theObj = itemArr.indexOf(everyObj) 
            return;
        }
    })
    if(itemArr[theObj].done === false){
        itemArr[theObj].done = true

    }else{
        itemArr[theObj].done = false
    }
    localStorage.setItem("TodoList", JSON.stringify(itemArr))
}
