let color = "black";

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
    
})

function createBoard(size){
    let gridContainer = document.querySelector(".grid-container");
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        gridContainer.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let size = prompt("Please enter grid size:", 16)
    while (size < 16 || size > 100 ){
        size = prompt("Size must be between 16 and 100 inclusive")
    }
    createBoard(size);
}

function reset(){
    let divs = document.querySelectorAll(".grid-container > div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}

function colorDiv(){
    if (color == "rainbow") {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        this.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
    else {
        this.style.backgroundColor = 'black'
    }
}

function setColor(colorChoice){
    color = colorChoice;
}