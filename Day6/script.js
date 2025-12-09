// temporal dead zone - can't access functions of variables before initialization.
// var , let , const can be hoisted but only var is initialized with undefined.
// hoisting - shift all the variables and functions at he top for it to be accessible anywhere in the code.
console.log(a);
var a=10;

console.log("HELLO WORLD FROM JAVASCRIPT")    //printed 1st
setTimeout(() => {       //print last at bcz it is asynchronous nature
    console.log("Hello from setTimeOut");

},2000);   //time is in milli seconds  , 1s=1000ms
//synchronous will print 1st then only asynchronous will be printed

setInterval(() => {   //print last at bcz it is asynchronous nature
    console.log("I am a set interval");
});
console.log("ENDING CONSOLE");  //printed 2nd


//IIFE --> Immediately Invoked Function Expression
(function(){
    console.log("I will run 1st bcz i am IIFE");
})()


// callback is a function  that can be accessed with another function.It is a function within function.

myForm.addEventListener('submit',()=>{
   //do something;
})

function display(uname){
    console.log("My name is ",uname);
}
function fun(){
    display("DEEPIKA");
}
//strating
function display(num){
    console.log("The value is ",num);
}
function add(num1,num2,callbackfun){
    const sum=num1+num2;
    callbackfun(sum);  
}
add(4,3,display);


//PROMISE (object)
/*
const promise1=new Promise((resolve,reject)=>{
    const val=Math.random();
    if(val<0.5){
        reject(the number is ${val} which is lesser than 0.5);
    }else{
        resolve(the number is ${val} which is greater than 0.5)
    }
})*/
const promise1=new Promise((res,rej)=>{
})

const promise2=new Promise((res,rej)=>{

})

/*promise1.then((message)=>{
    console.log(message);
}).catch((err)=>{
    alert("the battery is lesser so the computer will be restrating");
})
    //6 types of methods in Promise class 
Promise.all()
*/

let promise3=Promise.all([promise1,promise2])
promise3.then((data)=>{
    console.log("The data is ",data);
}).catch((err)=>{
    console.log(err);
});

//3.Promise.race() - waits for the first promise to be fulfilled/rejected and then return its value

let promise4=Promise.race([promise1,promise2])
promise4.then((data)=>{
    console.log("The data is ",data);
}).catch((err)=>{
    console.log(err);
});

//4.Promise.any - waits for the first promise to be fulfilled and then return its value
let promise5=Promise.any([promise1,promise2])
promise5.then((data)=>{
    console.log("The data is ",data);
}).catch((err)=>{
    console.log(err);
});

//5.Promise.resolve() -  static method for resolve that will return a value
let promise6=Promise.resolve("This has been resolved");
promise6.then((data)=>{
    console.log("The data is ",data);
}).catch((err)=>{
    console.log(err);
});

//5.Promise.reject() - static method for reject that will return value 
let promise7=Promise.reject("This has been rejected");
promise7.then((data)=>{
    console.log("The data is ",data);
}).catch((err)=>{
    console.log(err);
});

//Async - Await

/*cossole.log("Data will be loaded now");
function loadData(){
    return new Promise((res.rej)=>{
        setTimeOut(()=>{
            res("The data has been initiated");
        },2000);
    })
}
console.log("Data is loading....");
let datas=loadData();
datas.then((datas)=>{
console.log("Data is cleaning....");
console.log("Data is ready to process.");
console.log("The datas are ",datas);
})


async function loadData(){
    const rawData=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data=await rawData.json();
    return data;
}

async function main(){
    let data=await loadData();
    console.log(data);
}

main();*/

localStorage.setItem('movie','Game of thrones');
localStorage.setItem('hero', 'jhon snow');
let movie=localStorage.getItem('movie');
let hero=localStorage.getItem('hero');
console.log("The movie is ",movie);
localStorage.removeItem('movie');
localStorage.clear();
console.log