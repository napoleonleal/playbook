console.log('Objetos')

// Ex. 1: Crear un objeto
const myObject = {} //Obj vacio
console.log('Ejemplo1: Crear un objeto vacio')
console.log(myObject)

// Ex. 2: Crear un obj con propiedades
const myObj2 = {
    name: "Napillo Barra",
    age: 23,
    reason_to_do_this: 'I need to learn backend for work & its fun i guess'
}
console.log("Ejemplo2: Crear un objeto con propiedades")
console.log(myObj2)

// Ex. 3: Objeto con diff propiedades
const myObj3 = {
    name: "Sergio",
    age: 23,
    nicknames: [
        'Serch',
        'Sergi',
        'Ser'
    ],
    address: {
        zip_code: '10000', // fake obviously
        street: "21 Jump Street",
        city: "Culichi Town"
    }
}
console.log('Ejemplo 3: Obj con diferentes propiedades')
console.log(myObj3)
console.log(myObj3.name)
console.log(myObj3['address'])

// Ex. 4: Obj con metodos
const pet = {
    name: "Oso",
    // Funcion que se guarda como propiedad
    sayHello: function () {
        console.log(`${this.name} say hi in dog lang`)
    }
}
console.log('Ejemplo4: Obj con metodos')
pet.sayHello()

// Ex. 5: Obj con metodo que recibe parametros
const pet2 = {
    name: 'Franklin',
    sayHelloToMyPet: function (yourPet) {
        console.log(`${this.name} says hello to ${yourPet}`)
    }
}
console.log('Ejemplo5: Obj con metodo que recibe parametros')
pet2.sayHelloToMyPet('Oso')