
const containerDiv = document.querySelector('.container');
 

//Crea y coloca los cuadros en la pantalla
for(let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('square');//Agregar clase a un nodo
    containerDiv.appendChild(div);
}
//Crea una lista de todos los cuadros
const squares = document.querySelectorAll('.square');


//Agrega un evento a todos los cuadros
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'purple';
    })
})

const hola = () => {
    console.clear();
    console.log(squares);
    console.log("HOLA!!");
    let tamano = prompt('Cuantos cuadros de cada lado ocupa tu grid?');
    createNewGrid(tamano)
}


function deleteGrid () {
    squares.forEach(square => {
        containerDiv.removeChild(square);

    })
    
}

const createNewGrid = (tamano) => {
    
    squares.forEach(square => {
        containerDiv.removeChild(square);

    })
    if(squares.length !== 0) { 
        for(let i = 0; i < (tamano*tamano); i++) {
        
            const div = document.createElement('div');
            div.classList.add('square');//Agregar clase a un nodo
            containerDiv.appendChild(div);
            }
        
            const squares = document.querySelectorAll('.square');
        console.log(squares);
        
        squares.forEach(square => {
            square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = 'purple';
            })
        })
    } 
    }

    
    