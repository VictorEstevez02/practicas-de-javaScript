
const input = document.getElementById("input")
const listaDeProducto = document.getElementById("lista-producto")

if (!localStorage.getItem('productos')) {
    const productos = ["Manzana", "Platano", "Zanaoria", "Uva", "Piña"]
    localStorage.setItem('productos', JSON.stringify(productos))
}

const productosString = localStorage.getItem('productos')
const productosArray = JSON.parse(productosString)

console.log(productosArray)

function guardarproducto(producto) {
    const li = document.createElement('li')
    li.textContent = producto
    li.addEventListener('click', () => {
        li.classList.toggle('selected');
    });
    listaDeProducto.appendChild(li)
}

function mostarLista() {

    productosArray.forEach(producto => {
        guardarproducto(producto)
    });
}

function agregarProducto() {
    const nuevoProducto = input.value

    if (nuevoProducto) {
        productosArray.push(nuevoProducto)
        guardarproducto(nuevoProducto)
        localStorage.setItem('productos', JSON.stringify(productosArray));
        input.value = ""

    }
}

function eliminarProducto() {
    const productoSeleccionado = document.querySelector('.selected');

    if(productoSeleccionado){
        const productos = productoSeleccionado.textContent
        const index = productosArray.indexOf(productos)
        productosArray.splice(index,1)
    }
    productoSeleccionado.remove()
        
    localStorage.setItem('productos', JSON.stringify(productosArray));
}

mostarLista()