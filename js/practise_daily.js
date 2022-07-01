// var str = "I have to go to New York"

// console.log(str.indexOf("e"))

//  var x = 4;
//  var y = "karan";



//print the table for using function 
// function table()
// {
//   let n=2;
//   for(let i=0;i<10;i++)
//     {
//       let value = (i+1)*n;
//       console.log(n + "*" + Number(i+1) + "=" + value);
//     }
// }

// table();

// function table()
// {
//   let n=2;
//   for(let i=1;i<=10;i++){
//       let value = i*n;
//       console.log(n + "*" + i + "=" + value);
//     }
// }

// table();

// let detail = {
//   name : "karan",
//   rollno : 18,
//   course : "BCA",
//   subjects :{
//   subject1 : "Math 3",
//   subject2 : "WT",
// },
// };

// let value = 56.23;
// console.log(typeof value);
// console.log(typeof value.toFixed(1));

// let value = "my name is karan kapoor      ";

// console.log(value.trim());

// let value2 = 233
// console.log(value2.toString())

// const arr1 = ["Delhi","India","America","washintonDC"];
// let value =234;
// function table()
// {
//     let arr2=["Karan","Tushar","Utkarsh","Khushi"];

//     arr2.forEach((element)=>
//     {
//         console.log(element);
//     });
//     console.log("\n");
//     console.log(arr1[1],arr1[2]);
//     console.log(value);
// }

// table();

// function getFirstValue(arr)
// {
//     console.log(arr);
// }

// const arr1 = [1,2,3,4];
// getFirstValue(arr1[0]);

// function getFirstValue(value)
// {
//     console.log(typeof value[0]);
// }
// getFirstValue([1,2,3,4]);


// function remainder(x,y)
// {
//     return x%y;
// }

// console.log(remainder(1,3));

// let lessThan = (num1,num2) =>
// {
//     let value = num1+num2;
//     if(value<100)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// };
// console.log(lessThan(90,40));

// let NumberCheck = (num1,num2) =>
// {
//     if(num1 === num2)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(NumberCheck(2,2))

// let countCharacter = (ch1,ch2) =>
// {
//     if(ch1.length == ch2.length)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// console.log(countCharacter("ad","af"));

// const operater = (op1,op2) =>
// {
//     if(op1 && op2)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// console.log(operater(true,false));
                                          // probleam
// var students = ["Karan","Rajesh","Naman","Kunal","Tushar"];
// var text ="";
// for(var i=0;i<students.length;i++)
// {
//     text += students[i] + "\n";
// }

// console.log(text);
// let n=2;
// for(let i=0; i<10; i++)
// {
//     let value = (i+1)*n;
//     console.log(n + "*" + (i+1) + "=" + value);
// }

// let num1 = 1 ,num2;

// console.log("karan" + num1+2);

// try 
// {
//     var x=5;
//     var value = x/0;
//     if(value == Infinity)
//     {
//         throw "x value is not same of zero;"
//     }
    
// }
// catch(error) 
// {
//     console.log(error);
// }
// finally
// {
//     console.log("program is run");
// }
// ES5 version for rest 
// function addnumber(a,b,c,...arguments)
// {
//     console.log(arguments)
//     return a+b+c;
// }

// console.log(addnumber(2,3,4,1,1,4,4));

// ES6 version for rest 

// function addnumber(a,b,c,...other)  
// {
//     console.log(other);
//     return a+b+c;
// }

// console.log(addnumber(2,3,4,4,5))

// var names = ['Ajay','Numan','Raju','Nagpal','Karan'];

// function addnames(name1,name2,name3,name4)
// {
//     console.log(name1,name2,name3,name4);
// }

// addnames(...names)

// function apple()
// {
//     return function mango()
//     {
//         return "eat all foods"
//     }
// }
// var man = apple();

// console.log(man()); 

//  var arr = [1,3,4,5,6];

//  console.log(arr.sort());


// let student = {
//     name : "karan",
//     age : 22,
//     hobbies:["gaming","reading"]
// }
//rest in object method;
// const {age,name} = student; //array destructuring
// const {age, ...rest} = student;
// console.log(rest)

// spread method in object method

// let newstudent={
//     ...student,
//     age: 23,
// }

// console.log(newstudent);

