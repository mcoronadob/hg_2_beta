/* HACK-8 
     //agregar tú alias al final
     [100,200,300,400,500,600,700]  result >  [100,200,300,400,500,600,700,foo]
*/
console.log ("Arreglo original: ")
let array = [100, 200, 300, 400, 500, 600, 700];
console.log(array)

console.log ("Arreglo con alfa al final: ")
array.push("alfa");
console.log(array)