/* HACK-5 
     //clonar array
     [100,200,300,400,500,600,700]  result >  [100,200,300,400,500,600,700]
*/

console.log ("Arreglo original: ")
let array = [100, 200, 300, 400, 500, 600, 700];
console.log(array)

console.log ("Arreglo clonado ")
let clone = array.slice()
console.log (clone)