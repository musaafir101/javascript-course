// 1- ***compilation => (sab se pehle javascript ka code compile hota hai 
// (wo is liye tak ham early error check |&| Determining Appropriate Scop for Variables karsaken) usk kuch steps hoty hain)
//                             |---> Tokenizing / Lexing           
// 1- ***compilation phase --->|---> Parsing
//                             |---> Code Generation
// 1- Tokenizing / Lexing (break code into small chunks and chunks called Tokens)
// 2- Parsing (this will understand the chunks and create AST (Abstract Syntaxt Tree))
// 3- Code Generation (AST generates the executable code)

// ecmascript does not tells that code should compile
// 1- but ES said code should be (Early Error Checked)
// 2- DASV (Determining Appropriate Scop for Variables) 
// => yani variable kis scope se blong karta hai? 
// => chahey wo local, functional ya global scope ho
// => isme hamen ye pata chalta hai k ham konsy variable ko kaha tak access karskty hain
// before these 2 above steps we must have to "Parse" the code

// 2- ***Code Execution Phase

// code execution
// Global Execution Context => (ye stack me add hojata hai)
// 1- GEC Creation Phase => (Global memory me kuch variable set ho jaty hain)
// this will be set as window object => this = window this will be by browser
// javascript is synchronouse programming language => (yani jab tak pehli line execute nhi hogi tab tak next line execute nhi hogi)
// tu phr javascript asynchronouse kaise banti hai?
// javascript khud 1 synchronouse (single thread) programming language hai  
// javascript asynchronouse features browser provide karta hai

// hoisting
// isme koi b variable ya function execute hony se pehle 
// memory me in ki values store hojati hain
// jaise hoisting-code.png me hai

// var k case me var undefined hoga jab GEC (Global Execution Context) create hoga
// var k case me var uninitialize hoga jab GEC (Global Execution Context) create hoga

// TDZ (Temporal Dead Zone)
// let jab uninitialize hota hai tu TDZ me hota hai or reference error deta rehta hai

// why compilation

// how javascript code execute

// what is global execution context 
// what is local execution context
// closures

// if the function inside function returns so it will return with the local memory variables of the parent function

// closure code example

function myFunction(power){
    return function(number){
        return number ** power
    }
}
// OR
// const myFunction = power => number => number ** power
const square = myFunction(2)
const ans = square(3)
console.log(ans)

// output: 9

// closure code example test

function myFunction1(){
    let i = 0
    return function(){
        i++
        if(i < 2){
            console.log("Hi, you called me!")
        }else{
            console.log("me already 1 bar call ho chuka hon.")
        }
    }
}

const myFunc = myFunction1()
myFunc()
myFunc()
myFunc()

const myFunc2 = myFunction1()
myFunc2()
myFunc2()
myFunc2()