// // this inside in global scope

this.table='this is global scope table'
// console.log(this.table);


// this.garbage={
//     name: "omkar"
// }
// console.log(this.garbage.name);

// // this inside in object

// let johnsroom={
//     table: 'johns Table'
// }

// console.log(johnsroom.table);


// this inside in method.

// let jackroom={
//     table: 'jack Table',
//     cleaningTable(){
//         console.log(`cleanig ${this.table}`);
//     }
    
// }
// jackroom.cleaningTable();

// this inside a function 


// const cleanTable =function(sope){
//             console.log(`cleaning ${this.table} by using ${sope}`);
//         }
// // useing call function
// cleanTable.call(this,'some sope');

// this using in inner function 

//  const cleanTable =function(sope)
//     {
//         const innerFunction= function(sope1)
//         {
//             console.log(`cleaning ${this.table} by using ${sope1}`);
//         }
//         innerFunction.call(this,sope)
//     }
//     // useing call function
//     cleanTable.call(this,'some sope');

// this use in constructor
// const createRoom=function(name){
//     this.table=`${name} table`;
// }
// //use  prototype
// createRoom.prototype.cleanTable =function(sope){
//                 console.log(`cleaning ${this.table} by using ${sope}`);
//             }
// const om=new createRoom('om');
// om.cleanTable('some sope');
// console.log(om.table);


// class createRoom{
//         constructor(name){
//         this.table=`${name} table`
//         }
//         cleanTable(sope)
//         {
//             console.log(`cleaning ${this.table} by using ${sope}`);
//         }
//      }
//      const om=new createRoom('om');
//      om.cleanTable('lax scope');


class student{
    static count=0;
    constructor(name , age , phone_number, board_marks )
    {
        this.name=name;
        this.age=age;
        this.phone_number=phone_number;
        this.board_marks=board_marks;
        student.studentCount();
    }
    static studentCount()
    {
        return student.count++;
    }
    studentValidation()
    {
        if(this.board_marks>40)
        {
            console.log(`${this.name} is eligible`);
        }
        else
        {
            console.log(`${this.name} not eligible`);
        }
    }
}

const omkar= new student('omkar',22,12345,30);
omkar.studentValidation();

const mayur= new student('mayur',20,123457,50);
mayur.studentValidation();

const anil= new student('anil',30,123456,90);
anil.studentValidation();

const rakhi= new student('rakhi',31,123409,70);
rakhi.studentValidation();

const mahesh= new student('mahesh',25,123409,10);
mahesh.studentValidation();


console.log(student.studentCount());