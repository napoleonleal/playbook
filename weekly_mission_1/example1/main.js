// 1. Creacion de un objeto
let myCar = new Object(); // Creacion del objeto
myCar.maker = 'Nissan'; // Guardando un valor dentro del objeto
myCar.model = 'Rio';
myCar.year = 1996;

console.log(myCar); // Imprimiendo un objeto

// 2. Declaracion de un objecto con variables locales y globales
const myModule = (() => {
    // Variables de contexto local
    const privateFoo = 'Soy un valor privado, solo existo dentro de un objeto'
    const privateBar = [1, 2, 3, 4, 5, 6]
    const baz = 'Soy un valor que va ser expuesto'

    // Variable para guardar las variables locales
    const exported = {
        publicFoo: 'Valor publico, pueden verme desde donde me llaman',
        publicBar: 'Otro valor publico',
        publicBaz: baz
    }
    // Exposicion de variables locales
    return exported
})()
console.log(myModule);