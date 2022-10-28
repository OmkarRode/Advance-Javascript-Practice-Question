// var obj={num:10}

// var addnum=function(a,b,c)
// {
//     return this.num+a+b+c;
// }
// // console.log(addnum.call(obj,3));
// // var arr=[1,3,4];
// // console.log(addnum.apply(obj,arr));

// var bound=addnum.bind(obj);
// console.log(bound(2,4,5));

var student={age:20};
var readAge=function()
{
    return this.age;
}

console.log(readAge.call(student));