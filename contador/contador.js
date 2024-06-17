const label = document.getElementById("number")

let number = 0;

function aumentar() {
    number++

    label.textContent = number

    if (number > 0) {
        label.style.color = "green"
    }
}

function desminuir() {
    number--
    label.textContent = number

    if (number < 0) {
        label.style.color = "red"
    }
}

function reiniciar() {
    number = 0
    label.textContent = number

    label.style.color = "black"
}

