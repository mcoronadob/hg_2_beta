/* HACK-2
eliminar el primer item
[100,200,300,400,500,600,700]  result >  [200,300,400,500,600,700] */ 

console.log ("Arreglo original: ")
let array = [100, 200, 300, 400, 500, 600, 700];
console.log(array)

console.log("Arreglo sin el primer item: ")
array.shift();
console.log(array)