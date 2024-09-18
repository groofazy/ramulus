const container = document.querySelector("#container");

// for loop to create 16x16 grid of divs
function makeDivs(num) {
    for (let i = 0; i < num; i++) {
        let square = document.createElement("div");
        square.id = "square";
        square.textContent = "s";
        container.appendChild(square);
    }
};

makeDivs(256);


