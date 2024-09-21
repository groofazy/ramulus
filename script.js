const container = document.querySelector("#container");

// for loop to create 16x16 grid of divs
function makeDivs(num) {
    for (let i = 0; i < num; i++) {
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

makeDivs(256);

