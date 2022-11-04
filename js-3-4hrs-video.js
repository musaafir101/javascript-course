console.log("Script Start")
function hello(){
    console.log("Hello World!")
}
// setTimeout 1 async function hai jo browser provide karta hai apni WebApi k zarye
// ye sab se akhir me run hota hai wo kaise?
// jab ham browser me javascript ka code run karty hain
// tu 4 cheezen effect karti hain javascipt code ko
// 1- webApi => ye javascript k sary async function run karti hai (is me sary async functions hoty hain or ye browser provide karta hai)
// 2- callback queue => yahan wo sary functions queue me ak lagty hain jo webApi se deal hoky aty hain
// 3- Microtask queue => isme promises waghera resolve hoty hain (pr ye callback queue se pehle resolve hoty hain inki priority ziyada hoti hai)
// 4- event loop => ye webapi se any waly sary functions jo k callback queue me hain unko rokta hai jab tak call stack me javascipt ka sync code chal raha hota hai
// 5- call stack => yahan javascript ka sara code run hota hai
setTimeout(hello) 
for (let i = 0; i<1000; i++){
    console.log("Inside for loop")
}
console.log("Script End")

// output: 
// Script Start
// 1000 Inside for loop
// Script End
// Hello World!

// callback function

function myFunc(){
    console.log("myFunc is doing task 1")
}
function myFunc2(){
    console.log("myFunc2 is doing task 2")
}

myFunc()
myFunc2()

// callback me ham ye chahty hain k pehle mera func1 chaly phr usk foran bad func2 chaly
// tu ham 2 tareekon se kar skty hain
// 1- func() call kardiya usk bad func2() call kardiaya
// 1- myFunc(myFunc2) => ye callback ka tareeka hai

function myFunc(callback){
    console.log("myFunc is doing task 1")
    callback()
}
function myFunc2(){
    console.log("myFunc2 is doing task 2")
}

// OR

function myFunc1(callback){
    console.log("myFunc is doing task 1")
    callback()
}
myFunc1(() => {
    console.log("myFunc2 is doing task 2")
})

myFunc(myFunc2)

// example 2

function addTwoNumbers(number1, number2, callback){
    console.log(`number1 = ${number1} number2 = ${number2}`)
    callback(number1, number2)
}

function sumOfTwoNumbers(num1, num2){
    console.log(num1 + num2)
}

// addTwoNumbers(5, 10, sumOfTwoNumbers)
// OR 

addTwoNumbers(5, 10, (num1, num2) => {
    console.log(num1 + num2)
})

// output:
// number1 = 5 number2 = 10
// 15

// Promise => (future value ye b async hai jisse browser deal karta hai) (or promise 1 object hai)
// Promise {
//     status: "pending, fulfild, reject",
//     value: "agr value hai tu show hogi warna nahi hogi"
// }

const bucket = ["coffee", "chips", "vegitables", "salt", "rice"]

// if vagitables, salt and rice are in bucket then I can cook fried rice 

// Promise Produced
// const myFriedRice = new Promise((resolve, reject) => {
//     if(bucket.includes("vegitables") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("I am cooking fried Rice!")
//     }else{
//         reject("I could'nt do it!")
//     }
// })

// // Promise Consume (browser consume karega)
// // How to consume

// const resolveFunction = (resolveFunctionValue) => {
//     console.log("let's eat ",resolveFunctionValue)
// }
// const rejectFunction = (rejectFunctionValue) => {
//     console.log("Sorry! ",rejectFunctionValue)
// }

// myFriedRice.then(resolveFunction, rejectFunction)

// OR

// Promise Produced
// const myFriedRice = new Promise((resolve, reject) => {
//     if(bucket.includes("vegitables") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve({value: "I am cooking fried Rice!"})
//     }else{
//         reject( new Error("Something is missing from bucket"))
//     }
// })

// // Promise Consume
// // How to consume

// myFriedRice.then(
//     (friedRice) => {
//         console.log("Now! ", friedRice.value)
//     },
//     (error) => {
//         console.log("Sorry! ", error)
//     }  
// )

// OR

const myFriedRice = new Promise((resolve, reject) => {
    if(bucket.includes("vegitables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve({value: "I am cooking fried Rice!"})
    }else{
        reject( new Error("Something is missing from bucket"))
    }
})

// Promise Consume
// How to consume

myFriedRice.then( // then() method hamesha Promise return karta hai
    (friedRice) => {
        console.log("Now! ", friedRice.value)
    }
).catch(
    (error) => {
        console.log("Sorry! ", error)
    }
)

setTimeout(() => {
    console.log("Hello from setTimeout !!!")
}, 0)

console.log("Script end !!!")

// json vs array of object

// array of object
// array of object me ham key ko string k bagher b use karskty hain 
// yani ham "" k bagher b key likh sakty hain
// isme ham key k sth method laga skty hain key ki value me

// json me ye dono kam ham nhi karskty

// fetch

// fetch b Promise return karta hai
// par isme catch srf network error pe hi error show karta hai
// catch
// or isme 1 "ok" ki property hoti hai jissy hamen status pata chala hai k api ka response ok hai ya nhi
// yani yahan hamen error handling khud karni paregi (response.ok) se


