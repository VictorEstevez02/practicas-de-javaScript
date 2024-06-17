

const colores = ["red","blue","green","black","yellow"]

let indice = 0

function cambiarColor () {
    const color = colores[indice]
    document.body.style.backgroundColor = color;
    indice++
    if(indice > colores.length -1) {
        indice = 0
    }
}