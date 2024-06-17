
const usuarios = [
    {nombre:"victor",apellido:"estevez"},
    {nombre:"maikol",apellido:"estevez"},
    {nombre:"justin",apellido:"orrillos"},
    {nombre:"maikol",apellido:"estevez"},
    {nombre:"victor",apellido:"orrillos"},
]

usuarios.forEach( (usuario,index) => {
    //console.log(`${index + 1} ${usuario.nombre} ${usuario.apellido} `)
})

let cantidadNombre = 0

usuarios.forEach( usuario => {
    const nombres = usuarios.filter(u => u.nombre === usuario.nombre).length

    if(nombres > 1) {
        cantidadNombre++
    }
})
//console.log(cantidadNombre + " nombres repetidos")

let cantidadApellido = 0

for( const usuario of usuarios) {

    const apellidos = usuarios.filter(u => u.apellido === usuario.apellido).length

    if(apellidos > 1) {
        cantidadApellido++
    }
}

//console.log(cantidadApellido + " apellidos repetidos")

function buscarNombre (usuario) {

    const nombre = usuarios.filter( u => u.nombre === usuario)

    console.log(nombre)
}

buscarNombre("victor")