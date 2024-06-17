
const usuarios = [
    {nombre:"victor",apellido:"estevez"},
    {nombre:"maikol",apellido:"estevez"},
    {nombre:"justin",apellido:"orrillos"},
    {nombre:"maikol",apellido:"estevez"},
    {nombre:"victor",apellido:"orrillos"},
]

function nombreDeUsuarios () {
    return usuarios.map(u => u.nombre)

    
}

console.log(nombreDeUsuarios())

function nombreRepetidos () {

    const cantidadNombre =[]

    nombreDeUsuarios().forEach( nombre => {
        const nombres = nombreDeUsuarios().filter( n => n === nombre)

        if(nombres.length > 1) {
            cantidadNombre.push(nombre)
        }

    })


    return cantidadNombre
}

console.log(nombreRepetidos())

function cantidadNombreRepetidos () {
    return nombreRepetidos().length
}

console.log(cantidadNombreRepetidos() + " nombres Repetidos")