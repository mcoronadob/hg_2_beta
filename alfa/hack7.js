/*  HACK-7 
     //remplazar el item 300 
     //por tú alias
     [100,200,300,400,500,600,700]  result >  [100,200,foo,400,500,600,700]
*/
console.log ("Arreglo original: ")
let array = [100, 200, 300, 400, 500, 600, 700];
console.log(array)

console.log ("Arreglo remplazando 300 por alfa")
array.splice (2, 1, "alfa")
console.log (array)