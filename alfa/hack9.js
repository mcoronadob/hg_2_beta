/* HACK-9
     //agregar tú alias al inicio
     [100,200,300,400,500,600,700]  result >  [foo,100,200,300,400,500,600,700]
*/

console.log ("Arreglo original: ")
let array = [100, 200, 300, 400, 500, 600, 700];
console.log(array)

console.log ("Arreglo con alfa al inicio: ")
array.unshift("alfa")
console.log (array)