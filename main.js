var obj={num:10}

var addnum=function(a)
{
    return this.num+a;
}
console.log(addnum.call(obj,3));