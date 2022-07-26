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

// Ex.5: Uso de map para convertir todos los nombres a min
const names = ['SERGIO', 'Mayleth', 'CeSar']
const namesmayus = names.map((name) => name.toUpperCase())
console.log('EX5 strings a mayus con map')

// EX6: uso de map para convertir a mayus las primeras 3 letras
const namesFirst3Mayus = names.map((name) => name.toUpperCase().slice(0, 3))
console.log('Ex.6 uso de map para convertir a myus las primeras 3 letras de una lista')
console.log(namesFirst3Mayus)

// ex7
console.log('ex.7: uso de filter para filtrar una lista de elementos')
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland', 'Normandia']
const countriesContainingLand = countries7.filter((country) => country.includes('land'))
console.log(countriesContainingLand)

const countriesEndsByia = countries7.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)

// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
]
const scoresGreater80 = scores.filter((score) => score.score > 80)
console.log('Ex.8 filtrar una lista con objeos por condicionales')
console.log(scoresGreater80)

//e.9 uso del reduce
console.log('ex.9 uso de reduce para calcular la suma de los elementos de una lista')
const resultOfReduce = nums.reduce((acc, element) => acc + element, 0)
console.log(resultOfReduce)

// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string')
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)

// ex.11 uso de find para encontrar el primer elemento de una lista que cumpla con la condicion que se indique
const ages = [24, 22, 19, , 15, 25, 32, 25, 35]
const age = ages.find((age) => age < 20)
console.log('ex.10 primera edad menor a 20: ' + age)

// ex.12 uso de find en una lista de obj
const scoresLowerThan80 = scores.find((user) => user.score < 80)
console.log('ex12 primer score menor a 80: ' + scoresLowerThan80.name)

// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3']
const result = names13.findIndex((name) => name.length > 7)
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición " + result)

// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

// lista de elementos
const bools = [true, true, false, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((bool) => bool === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) //true

//Ejemplo 15: Uso de sort para ordenar elementos
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("Ejemplo 15: Elementos ordernados usando SORT")
console.log(products.sort())

// Ejemplo 16: Ordenando una lista de objetos
const users = [
    { name: 'A', age: 150 },
    { name: 'B', age: 50 },
    { name: 'C', age: 100 },
    { name: 'D', age: 22 },
]

users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log('Ex.16 ordenando una lista de obj por la edad')
console.log(users)