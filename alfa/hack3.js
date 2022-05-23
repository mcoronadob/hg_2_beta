/* HACK-3
eliminar el último item
[100,200,300,400,500,600,700]  result >  [100,200,300,400,500,600] */
console.log ("Arreglo original: ")
let array = [100, 200, 300, 400, 500, 600, 700];
console.log(array)

console.log ("Arreglo sin el ultimo item: ")
array.pop();
console.log (array)