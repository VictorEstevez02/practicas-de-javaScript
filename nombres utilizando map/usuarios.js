
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

//console.log(nombreDeUsuarios())

function nombreRepetidos () {

    const contador ={}

    nombreDeUsuarios().forEach( nombre => {
        if(contador[nombre]) {
            contador[nombre]++
        }else { contador[nombre] = 1}
    })
    const nombres = [
        {nombre:"niry"},
        {nombre:"maikol"}
    ]
    return Object.keys(contador).filter(nombre => nombres.some(nombres => nombres.nombre === nombre))
}

console.log(nombreRepetidos())

function cantidadNombreRepetidos () {
    //return nombreRepetidos().length
}

//console.log(cantidadNombreRepetidos() + " nombres Repetidos")