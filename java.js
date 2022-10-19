let containerDiv = document.querySelector('.container');
let colorSelector = document.querySelector('.colorSelector');
let botones = document.querySelectorAll('.boton');
let rainbowButton = document.querySelector('#rainbowmode');
let colorModeButton = document.querySelector('#colormode');
let clearButton = document.querySelector('#clear');
let colorInitialize = true;
const randomColor = () => {//Genera un color aleatoriamente
    let maxColorValue = 0xFFFFFF;
    let colorRandom = Math.floor(Math.random() * maxColorValue );
    colorRandom = colorRandom.toString(16);
    let randomColorFull = colorRandom.padStart(6,0);
    return `#${randomColorFull.toUpperCase()}`
}
let color;
const getColor = () => {
    if(colorInitialize === true)  {//Color picker selector mode
        color = document.getElementById('colorPicker').value;
    }
    else if(colorInitialize === false) {//Rainbow mode
        color = randomColor();
    }
    return color;
}

rainbowButton.addEventListener('click', () => {
    colorInitialize = false;
});

colorModeButton.addEventListener('click', () => {
    colorInitialize  = true;
});
let sizeInitial = 500/16;
//Crea y coloca los cuadros en la pantalla
for(let i = 0; i < 256; i++) {//16^2 = 256 
    const div = document.createElement('div');
    div.classList.add('square');//Agregar clase a un nodo
    div.style.cssText = `width: ${sizeInitial}px; height: ${sizeInitial}px`//El tamaño de cada cuadro
    containerDiv.appendChild(div);
}

//Crea una lista de todos los cuadros
let squares = document.querySelectorAll('.square');
    
//Agrega un evento a todos los cuadros
squares.forEach(square => {
    square.addEventListener('mouseover', () => {

        let color = getColor();
        square.style.backgroundColor = color;
    })
})

colorSelector.addEventListener('mouseover', () => {
    colorSelector.classList.toggle('is-active');//Activa la clase cuando el mouse entra al elemento
})

botones.forEach(boton => {
    boton.addEventListener('mouseover', () => {
        boton.classList.toggle('is-active-botones');
    })

    boton.addEventListener('mouseout', () => {
        boton.classList.toggle('is-active-botones');
    })
})

colorSelector.addEventListener('mouseout', () => {
    colorSelector.classList.toggle('is-active');//Desactiva la clase cuando el mouse sale del elemento
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
    let size = 500/tamano;
    console.log(size);
    if(squares.length !== 0) { 
        for(let i = 0; i < (tamano*tamano); i++) {
        
            const div = document.createElement('div');
            div.classList.add('square');//Agregar clase a un nodo
            div.style.cssText = `width: ${size}px; height: ${size}px`
            containerDiv.appendChild(div);
            }
        
            squares = document.querySelectorAll('.square');
        console.log(squares);
        
        squares.forEach(square => {
            square.addEventListener('mouseover', () => {
                let color = getColor();
                square.style.backgroundColor = color;
            })
        })
    } console.log(squares);
    }

    clearButton.addEventListener('click', () => {//Limpia el grid actual
        squares.forEach(square => {
            square.style.backgroundColor = 'papayawhip';
        })
    });