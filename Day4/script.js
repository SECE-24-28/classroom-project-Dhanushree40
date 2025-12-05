//console.log("Hello world again");
//console.log(2+3);
/*variable can be declared in 3 ways*/
//var a = 10;
//const b = 40.6;
//let c = "hello";
//console.log(a, b , c);
//dont use var unless absolutely necessary as it can be used even before initilization and it can also be redeclared
//var a = 10;
//a = 40;
//b=10 // not allowed
//let b = "H1";
//let b = 10 // not allowed
//const c = 30.5;
//c = 50/*cant reassign the value to const variable*/
//console.log(a, b, c);


//ARRAYS --> is a datatype that stores multiple elements of the same datatype
/*let a = [12, 13, 14];
console.log(a);
const b = [10, "hello", 30.5, true];//can change or add or remove elements from the array even if its constant as we are nor redeclaring the variable and we are not changing its datatype.
b.push(15);
//b = [1, 2, 3]//this is not allowed
b[2]= 40 // this is allowed
console.log(b);
console.log(b.length);
b.pop();
console.log(b);
b.shift();
console.log(b);
b.unshift(11, 12, 13);//add element in the first
console.log(b);
b.shift();//remove the element in the 1st
console.log(b);
b.splice(1,3) //splice(startindex,no of items to delete, item1,item2,.....item n) //it help us to add,remove and alter elements in our array
console.log(b);
b.splice(2,0,"world");//if the delete count is 0 means then it will add 
console.log(b);
b.splice(2,2,50);//replace the element from the 2nd index
console.log(b);
b.splice(2);//remove the element in the 2nd index
console.log(b);
b.splice(-1,1)//removes the last element
console.log(b);*/

//spread operator
/*const arr1 = [5, 6, 7];
const arr2 = [1, 2, 3, 4];
const merge = [...arr1, ...arr2];
console.log(merge);*/

//const arr = [1, 2, 3, 4, 5];
//console.log("Before map function: ",arr);
//array map
//const newArr = arr.map(num => num*5);
//console.log("After Map Function: ",newArr);

//ArrayFilter

/*const newArr = arr.filter(num=>num%2==0);
console.log("After Filter: ",newArr);
const courses = ["MongoDB","Ecpress.js","postgress","React.js","Node.js"];
console.log("Courses:",courses);

const newCourse = courses.filter(c=>c!=="postgress");
console.log("Updated course:",newCourse);*/

//Reduce - folds an array into a single value by calling a reducer function for each and every element
/*const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((store,num)=> num+store);
console.log(`Addition of ${arr} = ${sum}`);

//objects in javascript

const user = {
    firstname : "John",
    lastname : "Doe",  
}
console.log(user.firstname);
console.log(user["lastname"]);
const user2 = {} //empty object;

//we can write objects inside function and objects inside functions

const users = {
    firstname : "John",
    lastname : "Doe",
    company : {
        salary : 10000,
        position: "Software development",
    }  
}
users.age = 34;
console.log(users);

console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));*/

//functions

//Function is a bloack of reusable code that we use so that we can follow rule called Do not yourself(DRY) principle.

/*function add(a, b){ //hoisted function
    const c = a+b;
    return c
}
console.log(add(10, 20));*/

/*const add = function(a, b){ //non-hoisted function
    const c = a+b;
    return c
}*/
/*const fact = function factorial(num)
{
    //return num<=1?1:num*factorial(num-1);
    if(num<=1)
    {
        return 1;
    }
    else
    {
        return num*factorial(num-1);
    }
}

console.log(fact(5));
*/
//const arr = [12,53,23,76,56];
//function addArr(arr){
//    const sum = arr.reduce((acc,num)=>acc+num);
 //   return sum;
//}
//console.log(addArr(arr));

/*const user = {
    add: function(a, b){
        const c = a+b;
        return c
    }
}*/



/*const sum = (a, b) => {return a+b}; //arrow function
console subs = (a, b) => {return a-b}; 
console.log(sum(10, 20)); 
console.log(subs(20, 10));

function greet(name = "Guest"){
    console.log(`Hello to you, ${name}`);
}
//greet("carrie");
greet();*/


//loops

/*for(let i =1;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`);
}

let i = 1;
while(i<=10){
    console.log(`5 x ${i} = ${5*i++}`);
    i++;
}

do{
    console.log(`5 x ${i} = ${5*i++}`);
    i++;
}while(i<=10);*/

/*const arr = [12, 54 ,67, 44, 88, 24];

for(let i = 0; i<arr.length-1; i++){
    console.log(arr[i]);
} */  
/*const arr = [12, 54 ,67, 44, 88, 24];   

for(const item of arr){
    console.log(item);
}*/

const user = {
    firstname : "John",
    lastname : "Doe",
    age : 45,
    occupation : "Java developer",
    }

for(const key in user){
    console.log(`${key} : ${user[key]}`);
} 

//for-each
const arr = [12, 54 ,67, 44, 88, 24];
arr.forEach((item)=>console.log(item));
 