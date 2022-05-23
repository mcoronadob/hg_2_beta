     //agregar después del item 500 los alias qux y thud
     // result >  [100,200,300,400,500,qux,thud,600,700]

let foo =[100,200,300,400,500,600,700];

foo.splice(5,0, "qux");
foo.splice(6,0, "thud");

console.log(foo);
