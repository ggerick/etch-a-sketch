
let containerDiv = document.querySelector('.container');
 

//Crea y coloca los cuadros en la pantalla
for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('square');//Agregar clase a un nodo
    containerDiv.appendChild(div);
}
//Crea una lista de todos los cuadros
let squares = document.querySelectorAll('.square');


//Agrega un evento a todos los cuadros
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'purple';
    })
})

const newGrid = () => {
    console.clear();
    let tamano = prompt('Cuantos cuadros de cada lado ocupa tu grid?');
    if (tamano  >  100 ) {
        alert("Elige un número menor a 100");
        return;
    }
    deleteGrid();
    createNewGrid(tamano)
}


function deleteGrid () {//Elimina todos los cuadros dentro del grid
    squares.forEach(square => {
        containerDiv.removeChild(square);

    })
}

const createNewGrid = (tamano) => {//Crea un nuevo grid cuando ya está vacío
    if(squares.length !== 0) { 
        for(let i = 0; i < (tamano*tamano); i++) {
        
            const div = document.createElement('div');
            div.classList.add('square');//Agregar clase a un nodo
            containerDiv.appendChild(div);
            }
        
            squares = document.querySelectorAll('.square');
        console.log(squares);
        
        squares.forEach(square => {
            square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = 'purple';
            })
        })
    } console.log(squares);
    }

    
    