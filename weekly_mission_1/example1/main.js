// 1. Creacion de un objeto

let myCar = new Object(); // Cracion de un objeto
myCar.maker = 'Kia'; // Guardando un valor dentro del objeto creado
myCar.model = 'Rio'; 
myCar.year = 2018;

console.log(myCar) // Imprimiendo un objeto

// 2. Declaracion de un objeto con variables locales y publicas

const myModule = (() => {

    // Variables de contexto local
    const privateFoo = 'Soy un valor privado, solo me usan dentro de un objeto'
    const privateBar = [1,2,3,4]
    const baz = 'Soy un valor que va ser expuesto'

    // Variable para guardar las variables locales
    const exported = {
        publicFoo: 'valor publico, pueden verme desde donde me llaman',
        publicBar: 'Otro valor publico',
            publicBaz: baz
    }

    // Exposicion de variables locales
    return exported
})()

console.log(myModule)