
const container = document.body.appendChild(document.createElement("div"));
container.classList.add("container");

function createGrid(rows, columns){
    container.innerHTML = "";
    for (i=0; i<rows; i++){
        let row = document.createElement("div")
        row.classList.add("row");
        container.appendChild(row);

        for (j=0; j<columns; j++){
            let column = document.createElement("div")
            column.classList.add("column");
            row.appendChild(column); 


            column.addEventListener("mouseenter", function(){
                let randomColor = "rgb(" + 
                    Math.floor(Math.random()* 256) + "," +
                    Math.floor(Math.random()* 256) + "," +
                    Math.floor(Math.random()* 256) + ")";
                column.style.backgroundColor = randomColor;
            });
        }
    }
}
createGrid(16, 16);

const button = document.createElement("button");
button.classList.add("button");
button.textContent = "New Grid"
document.body.appendChild(button);
document.body.insertBefore(button, document.body.firstChild);

button.addEventListener("click", function(){
    let rows = parseInt(prompt("Enter new grid size"));
    let columns = rows;
    createGrid(rows, columns);
})
