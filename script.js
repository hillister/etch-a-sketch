
const container = document.body.appendChild(document.createElement("div"));
container.classList.add("container");

for (i=0; i<16; i++){
    const row = document.createElement("div")
    row.classList.add("row");
    container.appendChild(row);
    for (j=0; j<16; j++){
        const column = document.createElement("div")
        column.classList.add("column");
        row.appendChild(column); 
    }

}