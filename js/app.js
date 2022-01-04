// dom elements
const inputElement = document.querySelector(".header input");
const headerDiv = document.querySelector(".header");

const addBtn = document.querySelector(".addBtn");
const listUl = document.querySelector(".list");
let id = 0;
inputElement.addEventListener("focus", () => {
    headerDiv.classList.add("big-width");
});
inputElement.addEventListener("blur", () => {
    headerDiv.classList.remove("big-width");
});

addBtn.addEventListener("mouseover", () => {
    inputElement.blur();
        headerDiv.classList.add("big-width");
    
});

/// adding todo


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
            id++;
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
    }
});

function addTodo(text, id) {
    const html = `
    <li class="item" id=${id}>
                    <input type="checkbox">
                    <p>${text}</p>
                    <i class="bi bi-trash-fill"></i>
                </li>
    `;

    listUl.insertAdjacentHTML("afterbegin", html);
}
