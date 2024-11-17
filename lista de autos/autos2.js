// crear funciones en cada ejercisios y cambiar todo el codigo a ingles

function getCars() {
  const cars = [
    { brand: "Toyota", model: "Camrry", year: 2024 },
    { brand: "Honda", model: "Civic", year: 2019 },
    { brand: "Ferrari", model: "Roma", year: 2022 },
    { brand: "Toyota", model: "Hilux", year: 2022 },
    { brand: "Maclaren", model: "720", year: 2023 },
    { brand: "Toyota", model: "Corrolla", year: 2024 },
  ];
  return cars;
}

//Usar cualquier iterador para imprimir en consola los carros
function listOfCars() {
  return getCars().map((car, index) => {
    return `${index + 1} ${car.brand} ${car.model} ${car.year}`
  });
}

// hacer console log con todas las propiedades sin el valor de el objeto carro.
function propiertiesOfObjectCar() {
  return Object.keys(getCars()[0]);
}

//Hacer console log de los valores de ultimo carro
function lastObjectCar() {
  const lastIndex = getCars().length-1
  const lastCar = getCars()[lastIndex];
  return lastCar
}

//Mostrar en consola lista de carros con la misma marca,
//para esto agregar a la lista dos marca y hacer este ejercicio con esa marca.

function brandOfCars(brand) {
  return getCars().filter((c) => c.brand === brand);
}

