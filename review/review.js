const people = [
    {
        id:1,
        name:'Maikol Estevez',
        job:'Ing.Software',
        img:'./images/image-maikol.jpg',
        text:'Developer,Desarollador de paginas web,Angular Y sigue estudiando para superarse a si mismo'
    },
    {
        id:2,
        name:'Victor Estevez',
        job:'Programers',
        img:'./images/image-victor.jpg',
        text:'programador junior desarollandose en Riact,Angular Y JS, Estudio ingles para poder pasar al siguiente nivel en la programcion '
    },
    {
        id:3,
        name:'Carolina Muñoz',
        job:'Cashier',
        img:'./images/image-caro.jpg',
        text:'Cajera en una cadena de supermercados,Estudia contabilidad y Adm.De empresas en un año se gradua y va pasar al siguiente nivel'
    },
    {
        id:4,
        name:'Justin Estevez',
        job:'CEO',
        img:'./images/image-justin.jpg',
        text:'Dueño de una cadena de Farmacias economicas y Pronto va inculcionar en el negocio de productos tecnologicos'
    }
]

const img = document.getElementById('img')
const authour = document.getElementById('authour')
const job = document.getElementById('job')
const info = document.getElementById('info')

let personIndex = 0 

window.addEventListener('DOMContentLoaded', showPerson(personIndex))

function showPerson(person){
    const item = people[person]
    img.src = item.img
    authour.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

function btnLeft() {
    personIndex++
    if(personIndex > people.length -1) {
        personIndex = 0
    }

    showPerson(personIndex)
}

function btnRight() {
    personIndex--

    if(personIndex < 0) {
        personIndex = people.length-1
    }
    showPerson(personIndex)
}