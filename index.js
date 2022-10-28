let multiply=function(a,b)
{
    return a*b;
}

let muliplyByTwo=multiply.bind(this,2);

console.log(muliplyByTwo(5));
let muliplyByThree=multiply.bind(this,3);
console.log(muliplyByThree(8));


