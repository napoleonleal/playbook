// Ex. 1: forEach para imprimir elementos de una lista
const nums = [1, 2, 3, 4, 5];
console.log('Ex.1: Imprimiendo los num de una lista')
nums.forEach(num => console.log(num))

// Ex. 2: forEach para calcular la suma de todos los elementos de una lista
let sum = 0;
nums.forEach(num => sum += num)
console.log('Ex.2 Calculo de la suma de los elementos de la lista')
console.log(sum)

// Ex.3 forEach para imprimir los paises en letras mayusculas
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
console.log('Ex.3: Imprimiendo la lista de paises en mayusculas')
countries.forEach((element) => console.log(element.toUpperCase()))

// Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
// const numbersSquare = nums.map(function(num){return num*num})
// También puedes escribir la función como fat arrow
const numbersSquare = nums.map((num) => num * num)
console.log('Ex.4: Imprimiendo la lista de elementos al cuadrado')
console.log(numbersSquare)