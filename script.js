let color = "black";
const gridRange = document.getElementById("gridRange")
const gridValue = document.getElementById("gridValue")

gridRange.onmousemove = (e) => updateSizeValue(e.target.value)
gridRange.onchange = (e) => changeSize(e.target.value)

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
})


function changeSize(value) {
    updateSizeValue(value)
    createBoard(value)
    erase()
}

function updateSizeValue(value) {
    gridValue.innerHTML = `Grid size: ${value} x ${value}`
}


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

function erase(){
    let divs = document.querySelectorAll(".grid-container > div");
    divs.forEach((div) => div.style.backgroundColor = '#95949d');
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