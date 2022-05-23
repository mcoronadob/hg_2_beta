/* HACK-1 
vaciar el array
[100,200,300,400,500,600,700]  result >  [] */

console.log ("Arreglo original: ")
let array = [100, 200, 300, 400, 500, 600, 700];
console.log(array)


console.log("Arreglo vacio:")
array.splice(0,7);

console.log(array)
