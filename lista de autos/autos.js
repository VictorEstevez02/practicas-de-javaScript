
const autos = [
    {marca:"Mazda",modelo:"Evolution",año:2023},
    {marca:"Toyota",modelo:"Corolla",año:2024},
    {marca:"Honda",modelo:"Civic",año:2020},
    {marca:"Mazda",modelo:"CX-5",año:2023},
];

//Usar cualquier iterador para imprimir en consola los carros.
//Agregar enumerar la lista de autos y cambiar a string Interpolation.

autos.forEach((auto,index) => {
    //console.log(index +1 +" " + auto.marca +" " + auto.modelo +" " + auto.año)

    //mejora
    //console.log(`${index +1} ${auto.marca} ${auto.modelo} ${auto.año}`)
})

//Usar cualquier iterador con todas las propiedades sin el valor de el objeto carro.
//Imprimir los objetos solo una vez.

autos.forEach(auto => {
    const propiedades = Object.keys(auto)
    //console.log(propiedades)
})
//mejora
    const propiedades = Object.keys(autos[0])
    //console.log(propiedades)

//Mostrar en consola lista de carros con la misma marca filtrar  por mazda
const marcaDeAutos = autos.map(a => a.marca)
const marcaRepetida = []

marcaDeAutos.forEach(marca => {
    const marcaAuto = marcaDeAutos.filter(m => m === marca)
    if(marcaAuto.length > 1){
        marcaRepetida.push(marca)
    }
})
//console.log(marcaRepetida)

//mejora
const marcaDeLosAutos = autos.map(a => a.marca)
const marcaSelecionada = "Mazda"

const marcaDeAuto = marcaDeLosAutos.filter(m => m === marcaSelecionada)
//console.log(marcaDeAuto)

//Hacer console log de los valores de primer carro de la lista
//mejorarmla mejora para tomar el valor de las propiedades con los corchetes investigar

const primerAuto = autos[0]
const auto = Object.values(primerAuto).forEach(auto => {
    //console.log(auto)
})

//Mejora
console.log(`Primer Auto: ${primerAuto.marca} ${primerAuto.modelo} ${primerAuto.año}`)

// Hacer nuevamenten los ejercisios sin ivestigar en internet hacerlo con tus conocimientos y
//puedes usar como referencia usuarios.js