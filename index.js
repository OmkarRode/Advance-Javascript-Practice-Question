// let multiply=function(a,b)
// {
//     return a*b;
// }


// let muliplyByTwo=multiply.bind(this,2);

// console.log(muliplyByTwo(5));
// let muliplyByThree=multiply.bind(this,3);
// console.log(muliplyByThree(8));


let multiply=function(a)
{
    return function(b){
        console.log(a*b);
    };
}
let muliplyByTwo=multiply(5);
muliplyByTwo(8);