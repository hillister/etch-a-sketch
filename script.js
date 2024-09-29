
const container = document.body.appendChild(document.createElement("div"));
container.classList.add("container");

for (i=0; i<16; i++){
    let row = document.createElement("div")
    row.classList.add("row");
    container.appendChild(row);

    for (j=0; j<16; j++){
        let column = document.createElement("div")
        column.classList.add("column");
        row.appendChild(column); 


        column.addEventListener("mouseenter", function(){
            let randomColor = "rgb(" + 
                Math.floor(Math.random()* 256) + "," +
                Math.floor(Math.random()* 256) + "," +
                Math.floor(Math.random()* 256) + ")";
            console.log(`Hovered over column at row ${i}, column ${j}. Color: ${randomColor}`); // Debugging info
            column.style.backgroundColor = randomColor;
        });
    }

}

const button = document.createElement("button");
button.classList.add("button");
button.textContent = "New Grid"
document.body.appendChild(button);
document.body.insertBefore(button, document.body.firstChild);

button.addEventListener("click", function(){
    prompt("Enter new grid size: ");
} );
