//Scope

// function run(){
//     var foo = "Foo";
//     var bar = "Bar";

//     console.log(foo, bar)
   
//     {
//         let baz = "Baz";
//         console.log(baz)
//     }
//     // console.log(baz)
// }
// run();


//Hoisting
// function run(){
//     // var foo;//decleration

//     console.log(foo);//undefined
//     var foo = "Foo";
//     console.log(foo)//Foo
// }
// run();

//redecleration
// let foo = "hii"
// let foo = "Hello"
// console.log(foo)

var funcs = [];

for (var i = 0; i < 3; i++) {
    funcs[i] = function(){
        console.log("Value:"+i);
    }; 
}

for (let i = 0; i < 3; i++) {
   funcs[i]();
}

