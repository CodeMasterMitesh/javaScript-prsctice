//  console.log("Hellow world");

//Section 1 Variable and values

// var myName = "Mitesh Lalabhai Prajapati";
// var myAge = 26;
// var myDaughtername = "Khanak";

// console.log(myName);
// console.log(myAge);
// console.log(myDaughtername);

// section 2 Data type in javaScript
// Six Data types
//1. Undefined
//2. Boolean
//3. Number   { typeof instance }
//4. String
//5. Bigint
//6. Symbol 

// var myName = "mitesh prajapati";

// // type of operator

// console.log(typeof(myName));

// var myAge = 26;
// type of operator
// console.log(typeof(myAge));

// var iAm Mitesha = false;
// console.log(iAm Mitesha);

// console.log(typeof(iAm Mitesha));

// // type of operator
// console.log(typeof(iAmMitesh));

// console.log (10 + "20");

// console.log (9 - "5"); // Bug

// console.log ("java" + "Script");

// console.log(" " + 0);

// console.log("mitesh " - " prajapati");

// console.log(true+true);

// console.log(true == true); // experiment

// var iAmuseless = null;
// console.log(iAmuseless);
// console.log(typeof(iAmuseless)); // Bug

// var iAmstandby;
// console.log(iAmstandby);
// console.log(typeof(iAmstandby));


// if(isNaN(myName)) {
//     console.log("pls valid phone Number.");
// }

// ***** section 4:- Data Type in javaScript*****

// var myBroName = 'Mayur Prajapati';
// console.log(myBroName);

// // typeof operator
// console.log(typeof(myBroName));

// // number tyep

// var broAge = 27;
// console.log(broAge);

// console.log(typeof(broAge));

// // Boolean type

// var mySisterNameSaloni = true;

// console.log(mySisterNameSaloni);

// console.log(typeof(mySisterNameSaloni));

// // Challange 2 Data type practice

// // console.log(10 + "20");

// console.log("Java " + "Script");

// console.log(" " + " ");

// console.log(" " + 0);

// console.log("Mitesh" - "Prajapati");

// console.log(true + true);

// console.log(true + false);

// console.log(false + true);

// console.log(false - true);

// // Interview Question
// // Diffrence Between null vs undefine

// var iAmUseless = null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless)); 
// //  2nd Java Script Bug

// var iAmStandby;
// console.log(iAmStandby);
// console.log(typeof(iAmStandby));

// Nan Example

// var myPhoneNumber = 9033889873;
// var myDaughterName = "khanak";

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myDaughterName));

// if(isNaN(myDaughterName)){
//     console.log("plz enter valid Phone number");
// }

// NaN Practice

// NaN === NaN;
// Number.NaN === NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

// console.log(Number.NaN === NaN);

// 3.Expressions And Operations

// 1.Assignment Operators
// 2.Arithmetic Operators
// 3.Comparison Operators
// 4.Logical Operators
// 5.String Operators
// 6.Conditional (ternary) Operators

// 1.Assignment Operators

// var x = 5;
// var y = 5;

// console.log("is both the x and y are equal or not" + x == y); //  erro show8

// console.log('is both the x and y are equal : ${x == y}');

// 2 Arthimetic Operators

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator :" + 81%8);

// Increment Decrement Operators
// Operators: x++ or ++x or x-- or --x
//if used postfix,with operators after operand (for example, x++).
// the increment operators increments and return the value before incrementing.

// var num = 15;
// var newNum = num++ + 5;
// console.log(num);
// console.log(newNum);

//postfix increment operators means the expression us evaluated
// first using the original value of the variable and then the
// variable is incremented (incresed).

// if used prefix, with operator before operand (example, ++x)
// the increment operator increments and return the value after incrementing.

// var num = 15;
// var newNum = ++num + 5;
// console.log(num);
// console.log(newNum);

// Kindly Check With  Decriment operator
// prefix increment operator means the variable is increment first and then
// the expression is evaluated  using the new value of the variable.

// 3 Comparison Operators
// Coparison Operator  compares the operand and 
// return a logital value besed on whether the comparision is true.

// var a = 30;
// var b = 10;

// Equal (==)
// console.log(a == b);

// Not Equal (!==);
// console.log(a!==b);

// Greater Thank (>)
// console.log(a>b);

// Greater Than or equal (>=)
// console.log(a>=b);

// Less Than (<)
// console.log(a<b);

// Lessthan or Equal (<=)
// console.log(a<=b);


// 4 Logical Operators
// Logical Operators are typically used with boolean (logical value).
// when the are , they return boolean value.

// var a = 30;
// var b = -20;

// Logical And (&&)
// the logical and (&&) operator (logical conjuction) for set of 
// operands is true if and only if all of its operands are true.

// console.log( a > b && b < 0 );

// Logical or (||)
// The Logical OR (||) operator (logical disjunction) for a set of
// operand is true if and only if one or more of its operands is true.

// console.log( a > b || b > 0 || b < 0 );

// Logical Not (!)
// The Logical Not (!) Operatore (logical complement,negation)
// takes truth to falsity and vice versa.
// ctl +d 
// This Thing False to True And True To False.

// console.log(!(a>0) || (a<0));

// String Operator/concatenation operators
// the concatenation operator (+) concatenates two string value together,
// returning another string that is the union of the two operand string.

// console.log("Hellow world");

// console.log("Hellow " + "world");

// var myName = "Mitesh";

// console.log(myName + " Prajapati");
// console.log(myName + " Patel");

// Challange Time 
// 1 Exponentiation Operator

// console.log(3**3);
// console.log(10 ** -1);

// 2 Sol
// console.log(1 + " Mitesh");

//3 Sol
// var a = 5;
// var b = 10;

// out put b = 5 , a = 10 

// var c = b; // c = 10
// b = a; // b = 5;
// a = c;

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);


// Sol 4 swaping Number 

// var a = 5;
// var b = 10;

// // out put b = 5 , a = 10

// a = a + b; // a = 15
// b = a - b; // b = 5
// a = a - b; // a + 10

// console.log("the value of a is " + a);
// console.log("the value of b is " + b);

// Interview Solution == vs === Difrent == > Check The Value 
//  === > Check The Value and Check the data Type

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// // console.log(num1 == num2);

// var num1 = 5;
// var num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 === num2);


// 4 Control statment & loops

// 1.if..else
// 2. Switch Statment 
// 3. While Loop
// 4.Do-while Loop
// 5.For Loop
// 6.For In Loop
// 7.For Of Loop
// 8.Conditional (ternary) Operator

// 1 if..Else
// The if Statment executes a statment if specified condition truthy.
// if the condition false ,another statment can be executed.

// var tomr = 'rain';
// var name = "mitesh";

// if( tomr == 'rain'){
//     console.log('take a raincoat ' + name);
// }else{
//     console.log('no need to take a raincoat ' + name);
// }


// Challange time 
// write a program that works out wheather if a given years is a leap year or not?
// a normal year has 365 days ,leap year have 366 day with am extra day in fabruary.

// var year = 2020;
// debugger;
// if (year % 4 === 0) {
//     if (year % 100 === 0){
//         if( year % 400 === 0){
//              console.log("The year " + year + " is a  leap year");
//         }else{
//             console.log("The year " + year + " is not a  leap year");
//         }
//     }else{
//         console.log("The year " + year + " is a  leap year");
//     }
// }else {
//     console.log("The year " + year + " is not a  leap year");
// }


// Challange 
// What is truthy and falsy values in javaScript?
//  we have total 5 falsy values in javaSript.
//  0 , "" , undefined ,null ,NaN , false** is false anyway

// if(score = 0){
//     console.log("yay,we loss the game");
// }else{
//     console.log("omg, we won the game");
// }


// 2 Conditional (ternary) operator
// the conditional (ternary) operator is the only JavaScript operator
// that takes three operands
// Very Important


// var age = 18;
// if(age >= 18){
//     console.log("you are eligibale for vote");
// }else{
//     console.log("you are not eligibale for vote");
// }

// var age = 15;
// console.log((age >= 18) ? "you can vote " : " you can't vote");



// 3. Swith Statment 
// Evaluates an expression ,mathing the expression's value to a
// case clause, and executed statments assosiated with that case.



// 1st witthout break statment 
// find the arear of circle, triangle and rectangle?

// var area = "circle";
// var PI = 3.142, l=5, b=4, r=3;
// debugger;
// if(area == "circle"){
//     console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//     console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//     console.log("the area of the rectangle is : " + (l*b));
// }else {
//     console.log("please enter valid data");
// }


// With Break Statment

// var area = "circle";
// var PI = 3.142, l=5, b=4, r=3;
// debugger;
// switch (area) {
//     case 'circle': 
//     console.log("the area of the circle is : " + PI*r**2);
//         break;

//     case 'triangle' :
//     console.log("the area of the triangle is : " + (l*b/2));
//         break;

//     case 'rectangle' :
//     console.log("the area of the rectangle is : " + (l*b));
//         break;

//     default:
//     console.log("please enter valid data");
// }


// 4 while loop statment
// the while loop statment creates a loop that  executed a specified statment
// as long as the test condition evaluates to true.

//while loop

// var num = 0;
// while(num <= 10){
//     console.log(num); //infinity loop
//     num++;
// }

// 5 do-while loop statment

// var num = 25;

// do{
//     debugger;
//     console.log(num);
//     num++;
// }while(num <= 30);


// 6 for loop 

// for(initialize;Condition;iteration){
//     // code to be executed
// }

// for( var num = 10; num <= 10; num++){
//     debugger;
//     console.log(num);
// }



// Challange Time 
// JavaScript program to print table for given number (8) ?

// for(var num = 1; num <= 10; num++){
//     var tableof = 13;
//     console.log(tableof + " * " + num + " = " + tableof * num);
// }
// 13 * 1 = 13
// for (var num = 1; num<=10;num++){
//     var tableof = 13;
//     console.log(tableof + " * " + num + "=" + tableof * num);
// }


// 5 Section Function In javaScript
// A JavaScipt function a block of code designed to perfore a particular    task.

// 1 Function Defination 

// Before we use a function , we need to define it.
// A function defination (also called  function declaration, or function statment)
//consist of the function keyword , followed by:

// the name of the function.
//  ,enclosed in curly brackers, {...}

// Calling Functionn
// Defiening a function does not executed it.
// A JavaScript function is executed when "somthing" invokes it (calls it).

// function sum(){
//     var a = 10, b = 20;
//     var total = a+b;
//     console.log(total);
// }
// sum();


// What is the diffrence between function parameter vs function argument 
//  function parameters are the name listed  in the functions's defination.
// function  arguments are the real value passes to the function. 


// function sum(a,b){
//     var sum = a+b;
//     console.log(sum);
// }
// sum();
// sum(20,30);
// sum(50,50);
// sum(5,6);

// Interview Question 

// whe function ?

// you can reuse code :define the code once, and use it many times.
// you can use the same code many times with diffrent argumments ,
//to produce diffrent results.

// or

// A function is a group of reuseable code which can be called anywher
// in your program.This eliminates the need of writing the same code 
// agin and agin.

// 4 function expression 
// "function expression simply means
// creat a function and put into the variable"

// function sum(a,b){
//     var sum = (a+b);
//     console.log(sum);
// }
// var funexp = sum(5,10);
// funexp;

// function fullName(name,surname){
//     var fullName = (name + surname);
//     console.log(fullName);
// }
// var myName = fullName("Mitesh ","Prajapati");
// myName;


// 5 Return Keyword 
// when javaSript reaches a return statment,
// the function will stop executing.
// function ofen comput a return value.
// the return value is "returned" back to the "caller".


// function sum(a,b){
//    return sum = a+b;
// }
// var funexp = sum(5,20);
// console.log("the sum of two number is " + funexp);



// Anonyous function example

// var funexp = function(a,b){
//     return sum = a+b;
//  } 
//  var sum = funexp(15,15);
//  console.log(" the sum of two number is " + sum);

// function myfullName (name,fathername,surname){
//     var myfullName = (name+fathername+surname);
//     console.log(myfullName);
// }
// var fullName = myfullName("Mitesh ","lalabhai ","prajapati");
// fullName;

// var fullName = function(name,fathername,surname){
//     return myfullName = (name+fathername+surname);
// }
// var myfullName = fullName("Mitesh ","lalabhai ","prajapati");
// console.log("My Name is " + myfullName + ".");

// Now it's time to modern javascript 
// welcome to ECMA Script 2015 also know as ES6

// 1. LET VS CONST VS VAR

// var is function scope , let and const is block scope 

//  var myName = "Mitesh Prajapati";
//  console.log(myName);

//  myName = "Mitesh Patel";
//  console.log(myName);

// var myName = "Mitesh Prajapati";
// console.log(myName);

// myName = "Mitesh Patel";
// console.log(myName);

// let myName = "Mitesh Prajapati";
// console.log(myName);

// myName = "Mitesh Patel";
// console.log(myName);

// const myName = "Mitesh Prajapati";
// console.log(myName);

// myName = "Mitesh Patel";
// console.log(myName);


// var => function scop
// LET And Const => Block scope

// function biodata(){
//     let myFirstName = "Mitesh ";
//     console.log(myFirstName);
//     if(true){
//         let myLastName = "Prajapati";
//         console.log(myFirstName + myLastName);
//         console.log('inner ' + myFirstName);
//     }
//  console.log('innerouter ' + myFirstName);
// }
// biodata();

// function myBiodata(){
//     let myName = "Prajapati Mitesh";
//     // console.log(myName);
//     if(myName == "Prajapati Mitesh"){

//         let myFathername = " Lalabhai", myAge = 28 ;
//         console.log("my name is " + myName + myFathername + " and my age is " + myAge + ".");
//     }else{
//         console.log("wrong name mention");
//     }
// }
// myBiodata();


// Templete Literals (Templet string)

// for(let num = 1; num <= 10; num++) {
//     let tableof = 12;
//     console.log( `${tableof} * ${num} = ${tableof * num}` );
// }

// for(let num = 1; num <= 10; num++){
//     let tableof = 37;
//     console.log(`${tableof} * ${num} = ${tableof * num}`);
// }

//3 Default Parameters

// Default function parameters allowed named parameters to be 
// initialized wkith default values if no value or undifined is passed.

// function mult(a,b=5){
//     return a*b;
// }
// console.log(mult(5));

// fat arrow function 

// function sum(){
//     let a = 5; b = 6;
//     let total = a+b;
//     return ` the sum of two number is ${total}`;
// }
// console.log(sum());

// convert in fat arrow function 

// const sum = () => {
//     let a = 5; b = 6;
//     let total = a * b;
//     return `the multification of two number is ${total}`;
// }
// console.log(sum());

//Practice of fat arrow function

// const holiday = () => {
//     let tmr = "sunday";
//     if(tmr == "sunday"){
//         console.log("Tomorrow is holiday office close");
//     }else{
//         console.log("tommorow is Working day");
//     }
// }
// holiday();

// Arrays in Javascript
// when we use var , we can stored only one value at a time 
// when we feel like storing multiple values in one variable 
// insted of var we will use an array.

//in javascript we have an array

// 1. traversal in array 

// var myFriends = ['Mitesh', 'Bharat', 'Jignesh', 'Pushpa', 'Maitri', 'Ashok', 'Hema'];
// console.log(myFriends[myFriends.length - 1]);
// console.log( myFriends[1] );

// for loop 

// for(var i = 0; i<myFriends.length;i++){
//     console.log(myFriends[i]);
// }

// loop in 

// for (let elements in myFriends){
//     console.log(elements);
// }

// loop of 

// for (let elements of myFriends){
//     console.log(elements);
// }

// for each() loop 

// var myFriends = ['Mitesh ', 'Bharat ', 'Jignesh ', 'Pushpa ', 'Maitri ', 'Ashok ', 'Hema '];

// myFriends.forEach(function(element, index, array){
//     console.log(element + "index :" + index + "array " + array);
// });

// myFriends.forEach(function(element){
//     console.log(element);
// });

//fat arrow function  not working with this argument
// myFriends.forEach((element,index,array) => {
//     console.log(element + "index " + index + " array " + array);
// });

// array subsection searching and filter in array  both pending

// Array.prototype.indexof() 

// var myFriendsNames = ['Mitesh ','Bharat ','Jignesh ','Pushpa ','Maitri ','Ashok ','Hema '];

// array subsection perform CRUD 

// Array.prototype.push()
// the push method add one or more element to the
//  end of array and return the array

// const animals = ["pigs", "gots", "sheep"];

// // const count = animals.push("chiken");
// animals.push("chiken","cats","cow");
// console.log(animals);
// // console.log(count);

// Array.prototype.unshift()
// the unshift() method add one and more element to the 
// begining of the array and return the new lenghth of the array

// const animals = ["pigs","goat","sheep"];

// // const count = animals.unshift("chiken");
// animals.unshift("chiken","cats","cow");
// // console.log(count);
// console.log(animals);

// 2nd example 

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6);
// console.log(myNumbers);


// array.prototype.pop()
// the pop() method removes the last element from an array and returns
// that elements thsi method changes the length of the array.


// const plants = ["brocoli","couliflower","kale","tomato","cabbage"];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);

// array.prototype.shift()

// const plants = ["brocoli","couliflower","kale","tomato","cabbage"];

// console.log(plants);
// console.log(plants.shift());
// console.log(plants);

// array.prototype.splice()


// const months = ["jan","feb","march","june","july"];

// // sol:1 
// const newMonth = months.splice(months.length,0,"dec");
// console.log(months);

//sol:2

// const months = ["jan","feb","march","june","july"];

// const newMonth = months.splice(months.length,0,"dec");
// console.log(newMonth);

// sol :3

// const months = ["jan","march","april","june","july"];

// const indexofMonth = months.indexOf("march");

// if(indexofMonth != -1){
//     const updateMonth = months.splice(indexofMonth,1,"March");
//     console.log(months);
// }else{
//     console.log("No such data found");
// }

// sol 4 

// const months = ["jan","march","april","june","july"];

// const indexofMonth = months.indexOf("june");

// if(indexofMonth != -1){
//     const updateMonth = months.splice(indexofMonth,1);
//     console.log(months);
//     console.log(updateMonth);
// }else{
//     console.log("No such data found");
// }


// Map() and Reduce() Method  with filter() method

// const array1 = [1,4,9,16,25];
// // num>9 
// // let newArr = array1.filter((curElem,index,arr) => {
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem > 9;
// });
// console.log(array1);
// console.log(newArr);

// let newArr = array1.map((curElem, index, arr) => {
//     return `Inndex no = ${index} and the value is ${curElem} belong to ${arr}`;
// });//.reduce(),filter(),sort();
// console.log(newArr);

// it return new array withoght the original array 


// challenge time 
// find the square root of each element in array?
// multiply each element by 2 and return only those elements which are greter than 10?

// let arr = [25,36,49,64,81];

// let arrSqr = arr.map((curElem) =>{
//     return Math.sqrt(curElem);
// })
// console.log(arrSqr);

// sol 2 

// let arr = [2,3,4,6,8];

// let arr2 = arr.map((curElem) => {
//     return curElem * 2 ;
// }).filter((curElem) => {
//     return curElem > 10;
// }).reduce((accumulator,curElem) => {
//     return accumulator += curElem;
// })
// console.log(arr2);



// Reduce() method :-
// flattern an arry means to convert the 3rd or 2rd array into a
// single dimensional array
// the reduce() method executes a reducer function (that you provide)
// on each element of array,resulting in single output value. 
// the reducer function takes four arguments 

// accumulator
//current value 
// current index
// source array 

// ex.
// index,arr

// let arr = [5,6,7];

// let sum = arr.reduce((accumulator,curElem) => {
//     debugger;
//     return accumulator *= curElem;
// });
// console.log(sum);

// let friends = ["mitesh","khanak","amita","salonee","hardik","foram","bharat","seema","jignesh"];

// let findFriend = friends.indexOf("amita");

// if(findFriend != -1){
//     console.log(findFriend);
//     // console.lof(friends);
// }else{
//     console.log("no such found data");
// }



// how to fatten an array 
// converting 2nd and 3rd array into one dimension arry

// const arr = [
//     ["zone-1","zone-2"],
//     ["zone-3","zone-4"],
//     ["zone-5","zone-6"],
//     ["zone-8","zone-7"]
// ];

// let flatArr = arr.reduce((accum,currVal) => {
//     return accum.concat(currVal);
// });
// console.log(flatArr);


// 7 String in javascript 

// let myName = "Mitesh Prajapati";
// console.log(myName.length);

// method :1 
// let anySentance =  "we are the so called \"vikings\" from the north.";
// console.log(anySentance);

// method 2

// let anySentance =  'we are the so called "vikings" from the north.';
// console.log(anySentance);

//**/ searchinh method in string indexof()

// const myBiodata = "i am the Mitesh Techno";
// console.log(myBiodata.indexOf("t",6));


//**/ lastindexof()

// const myBiodata = " i am the Mitesh Techno";
// console.log(myBiodata.lastIndexOf("Mitesh"));


// const myBiodata = " i am the Mitesh Techno";

// let sData = myBiodata.search("Techno");
// console.log(sData);


// Extracting String Part //

// there are three method for extracting a part of string :

// 1: slice(start,end); //
// slice() extracting a part of a string and return the extracting part of new string //

// var str = "apple, bananna, kiwi, mango";

// // let res = str.slice(0,4);
// let res = str.slice(7,-1);
// console.log(res);

// 11: challange Time

// let myTweets = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "

// let myActualtweet = myTweets.slice(0,280);

// console.log(myActualtweet);
// console.log(myActualtweet.length);




// // 2:substring(start,end)
// not accept negative argument
// var str = "apple, bananaa, kiwi";

// let res = str.substring(7,-2);
// console.log(res);


// 3:substr(start,length)
// data take from back

// var str = "apple, bananaa, kiwi";

// // let res = str.substr(7,-2);
// let res = str.substr(-4);
// console.log(res);

// Replacing string content()
// string.prototype.replace(searchFor,replaceWith)
// with another value in a string

// let myBiodata = 'my name is mitesh prajapati mitesh';

// let replaceData = myBiodata.replace(/mitesh/i, 'Bharat');
// // let replaceData = myBiodata.replace("mitesh", 'Bharat');
// console.log(replaceData);


// Extract String Charactore 

// CharAt(position) Method 

// let str = "HELLO WORLD";

// console.log(str.charAt(7));


// CharCodeAt()
// the method return a UTF-16 code
// (an integer between 0 and 65535)

// ex.
// let str = "HELLO WORLD";
// console.log(str.charCodeAt(7));

// let str = "hellow worlD";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));


//property access[]

// let str = "hello world";
// console.log(str[0]);


// usefull method 

//toUpperCase()
// toLowerCase()
// ex.
// let myName ="mitesh prajapati";
// let secondName = "KHANAK PRAJAPATI"
// console.log(myName.toUpperCase());
// console.log(secondName.toLowerCase());

// concat() method 

// let fname = "mitesh";
// let sName = "prajapati";

// console.log(fname + sName);
// console.log(`${fname} ${sName}`);
// console.log(fname.concat(sName));
// console.log(fname.concat(" ",sName));

// trim() method

// let str = "                        hello world                         ";

// console.log(str.trim());


// converting string to array
// astring can be converted to an array with the 
// split() method

// var txt = "a,b,c,d,e"; // string

// console.log(txt.split(",")); //split on commas
// console.log(txt.split(" ")); // splite on spaces
// console.log(txt.split(" | "));

// 8 Date and time object method
// date method 
// 1 january 1970 
// there are 4 ways to careat new date object

// new Date()
// new Date(year, month, day, hours, minutes, milliseconds);
// // its take 7 argument 
// new Date(milliseconds);
// // we cannot avoid month section
// new Date(date string);

// new Date();

// let curDate = new Date();
// console.log(curDate);
// console.log(new Date().toLocaleString()); // 29/9/2021, 11:29:03 pm
// console.log(new Date().toString()); // Wed Sep 29 2021 23:30:23 GMT+0530 (India Standard Time)

//practice

// const curDate = new Date();
// console.log(curDate);
// console.log(curDate.toLocaleString());
// console.log(curDate.toString());

// Date.now()
// returns the numeric value correspanding time the number 
// of millisecond elapsed january 1 1970 UTC;

// Practice

// const curMillisecond = Date.now();
// console.log(curMillisecond); //1633153392593

// console.log(Date.now());

// new Date(year, month, ....);
// 7 number specific year , month , day , hour,minutes ,second,
// and millisecond (in that order)
// note: javascript counts months from 0 to 11;

// Practice 
// var curDate = new Date(2022, 0, 1, 01, 0, 0);
// console.log(curDate.toLocaleString());

// var d = new Date(2021, 8, 29, 23, 38, 0, 0);
// console.log(d.toLocaleString());

// new Date(dateString);
// new Date (dateString)creates a new date object from string

// var d = new Date("September 30, 2021 11:45:00");

// console.log(d.toLocaleString());


// new.Date();

// var d = new Date(1632939567961);

// console.log(d.toLocaleString());


// Dates Method 

// const curDate = new Date();

// //how to get the individual date
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());

// how to set the individualy date

// console.log(curDate.setFullYear(2022));
// setFullYear() method can optionally set month and day
//setMonth();
//setDate();

//  Time get  Method

// const curTime = new Date();
// // how to get individual time
// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());


// time set method
// let setTime = new Date();

// console.log(setTime.setTime());
// console.log(setTime.setHours(5));
// console.log(setTime.setMinutes(5));
// console.log(setTime.setSeconds(5));
// console.log(setTime.setMilliseconds(5));

// Practice Time

// new Date().toLocaleTimeString();
// new Date().toLocaleDateString();
// new Date().toLocaleString();



// 9 th section:- Math Object in Jvascript
// the javascript math object allows you to perfore mathematical tasks on Numbers 

// console.log(Math.PI);
// console.log(Math.PI);

// Math.round();
//returns the value of x rounded to its nearest integer

// let num = 10.501;
// console.log(Math.round(num));

// Math.pow()
//Math.pow(s,y) returns the value of x to the power of y

// console.log(Math.pow(2,3));
// console.log(2**3);

//Math.sqrt()
//Math.sqrt(x) returns the square root of x

// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));

// Math.abs();
//Math.abs(x) returns the absolute (positive) value of x

// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-6));

// Math.ceil();
// Math.ceil(x) returns the value of x rounded up ti its nearest integer

// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.01));
// console.log(Math.round(99.01));

// Math.floor() Method
//Math.floor() method returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7));
// console.log(Math.floor(4.1));

// Math.min();
// Math.min() can be used to find the lowest value in list of argument.

// console.log(Math.min(0, 150, 30, 20, -8, -200));

// Math.max();
// Math.max() can be used to find the lowest value in list of argument.

// console.log(Math.max(0, 150, 30, 20, -8, -200));

// Math.random() Method 
// Math.random() returns a random number between 0 (inclusive), and 1 ()

// console.log(Math.random()*10); 
// console.log(Math.floor(Math.random()*10));


// Math.trunc() Method
//Math.trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));

// Practice time 
// if the argument is a positive number , Math.trunc() is equivalent to 
// Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil();

// Sectio :-10 ===================== DOM ======================
// Window vs document
//DOM vs BOM
//searching and getting elements refrence


// window vs document

        //Window                                    // document
//window is the main container                      whereas the DOM is 
                                                    //the child of window object
// or we can say the flobal object 
// and any  operation related to enrire browser 
// window can be part of window object


// DOM VS BOM
                                //   WINDOW 
// DOM // document object model                    // BOM // browser object model               // JavaScript
                                                    // NAVIGATION                               // Object
                                                    //SCREEN                                    //Array
                                                    //LOCATION                                  // Function
                                                    // FRAMES
                                                    //HISTORY
                                                    //XMLHttpRequest

// let see more practicle on history object

// function alert/confirm/promt are also a part of bom
// they are directly not related to the document 
//but represent pure browser methods of comunicating with the user

// Practicle

// alert(location.href);// shows current url
// if (confirm("want to visit youtube?")) {
//     location.href = "https://www.youtube.com"; // redirect to browser to another URL
// }

// Section 3 : Navigation through the DOM

// 1. document.getElement
// returns the Element that is the root element of the document
//2. document.head
//3.document.body
//4.document.body.childNodes(includes tab,enter and whiteSpace)
        // list of the direct children only 
//5.document.children(withoght text nodes, only regular elements)
//6:document.childNodes.length

// Practice Time
// how to check whether an element has child nodes or not?
// we will use hasChildNodes()

// Practice time
//How to find  the child in dom tree
//firstElementChild.firstElementChild
//document.firstElementChild.firstElementChild.style.color = "red";


// how to find parent node
// document.body.parentNode
//document.body.parentElement

// How to find or access the siblings
// document.body.nextSibling 
// document.nextElementSibling 
// document.previousSibling 
// document.previousElementSibling

// Section 4 How to search  the elements and the refrences
//we will see the new file




// 11 :-Events In javascript
// 4 ways of writing events in javascript
//whats is Event object?
//Mouse Event in javascript
//Keybord event in javascript
//inputevent in javascript

// HTML events are "things" that happen to HTML elements,
// when javascript its used in html pages ,javascript can "react" on these events.


// HTML Events
// An HTML events can be something the browser does or something a user does.

// section 1:- 4 ways to write events in javascript

// 1: using alert();
// 2: by calling a function ( we already seen and most common way of writing)
// 3: using Inline events (HTML onclick="" property and elements.onclick)
// 4: using event listners (addEventListner and IE's attachment)

// check the Events HTML File 



// Section 2: what is event objevt?
// Event object is the parent object of the event object. 
// for exemple 
// MouseEvent,focusEvent, keyboardEvent etc


// section 3: MouseEvent in JavaScript
// The MouseEvent Object 
// Event that occur when the mouse interacts with the HTML
//document belongs to the MouseEvent Object.

//Mousedown(),Mouseup()
//mouseEnter(),



// section: 4 keybord Event in javascript
// events that occur when user presses a key on the keybord,
// belongs to the keybordEvent object. 
// https://www.w3schools.com/jsref/obj_keybordevent.asp


























































































































































































































































































































































































































































































































































































