const container = document.querySelector("#container");

const button = document.querySelector("button");

// for loop to create 16x16 grid of divs
function makeDivs(size) {
    let num = size * size;
    for (let i = 0; i < num ; i++) {
        let square = document.createElement("div");
        square.id = "square";
        square.textContent = "";
        container.appendChild(square);

        // putting this event listener inside works for some reason, is it because of the for loop?
        square.addEventListener('mouseover', () => { 
            square.style.backgroundColor = "blue";
        }) 

    }
};


makeDivs(16); // creating standard 16x16 grid

function deleteGrid() {
    var el = document.getElementById('container');
    while (el.firstChild) el.removeChild(el.firstChild);
} // shoutout to stackoverflow guy


// button which deletes original 16x16 grid and generates a new grid using user input
button.addEventListener('click', () => {
    let numSquares = prompt("Number of squares per side?")

    deleteGrid()
    makeDivs(numSquares);
});

