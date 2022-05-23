//eliminar los items 300 y 500
//result >  [100,200,400,600,700]
let foo = [100,200,300,400,500,600,700];

foo.splice (2,1)
foo.splice(3,1)

console.log(foo);