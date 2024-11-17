
const color = document.querySelector(".color")

const colors = ["blue","yellow","green","red","brown"]

let indexColor = 0

function getColor () {
    document.body.style.backgroundColor = colors[indexColor]
    color.textContent = colors[indexColor]
    indexColor++

    if(indexColor >= colors.length) {
        indexColor = 0
    }
}