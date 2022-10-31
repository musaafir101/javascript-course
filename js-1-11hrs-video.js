// Chanllange task what will be the output of the senario given below

const value = { number: 10 }

const addition = ( x = { ...value } ) => {
    console.log(x.number += 5)
}

addition()
addition()
addition(value)
addition(value)


let num = 0
let sum = 0

// While Loop sum of first 10 numbers

while (num < 10) {
    num++
    sum = sum + num
}

console.log(sum)

// For Loop

for (; i <= 10 ; i++){
    sum += i
}

console.log(sum)

// array destructuring
// if we check array data type by using typeof arr1 so this will show object
// if we check array data type by using Array.isArray() so this will show true

const arr1 = [ "itme1","itme2","itme3","itme4" ]
const arr2 = arr1.slice(1)

const [val1, val2, ...arr3] = arr1

console.log("value 1 is",val1)
console.log("value 2 is",val2)
console.log("arr2 is",arr2)
console.log("arr3 is",arr3)

// object bracket notation

// const key = "email"

const person = {
    name: "Taha",
    class: "ms-advance",
    subjects: ["html","css","javascript","react js"]
}

// person name key => person["name"]
// person[key] = "taha@email.com"

for (let key in person) {
    console.log("Print only object keys: ",key)
    console.log("Print only object values: ",person[key])
    console.log(`for object keys :${key} for object valus : ${person[key]}`)
}

console.log("we can not use dot notation in for in loop we must bracket in this sernario!")

// for of loop

console.log(Object.keys(person)) // this will give us keys of person in array

for (let key of Object.keys(person)){
    console.log(person[key])
}

// Task create object just using variables

const key1 = "name"
const key2 = "lName"
const value1 = "Taha"
const value2 = "Khan"

const person1 = {}

person[key1] = value1
person[key2] = value2

console.log(person)

// array last item
// const arr1 = [ "itme1","itme2","itme3","itme4" ]
console.log(arr1.at(-1))
// Output: itme4

// spread string in array
const str1 = [..."taha"]
console.log(str1)

// spread string in array
const str2 = {..."taha"}
console.log(str2)

// output: {0: 't', 1: 'a', 2: 'h', 3: 'a'}

const arr = [1,3,5,8,25,15,68,4]

function findTarget(array, target){
    for (let i = 0; i < array.length; i++){
        if (array[i] === target){
            return i
        }
    }
    return -1;
}

findTarget(arr, 69)

// functions type

function app() {
    function func1() {} // function declearation
    const func2 = function(){} // function expression
    const func3 = () => {} // arrow function
}

// lexical scope
const myVar = "val0"
function app() {
    const myVar = "val1"
    const func1 = () => {
        const myVar = "val2"
        
        const func2 = () => {
            const myVar = "val3"
            console.log("inside func1", myVar) 
        }

        console.log("inside func1", myVar)
        func2()
    } // arrow function

    console.log("inside app func", myVar)
    func1()
}

app()

const numbers = [1,2,3,4,5,6]

const totla = numbers.reduce((accumulator, currentValue) => {
    return acc + curr
})

console.log("totla", totla)  // totla = 21


// how reduce method works

// accumulator  |   currentValue   |   return
//     1                 2                3 
//     3                 3                6 
//     6                 4                10 
//     10                5                15 
//     15                6                21 

const totlaa = numbers.reduce((accumulator, currentValue) => {
    return acc + curr
},100)

console.log("totla", totlaa) // totla = 121

// how reduce method works
// now in this senario accumulator initial value is "100"

// accumulator  |   currentValue   |   return
//     1                 2                3 
//     3                 3                6 
//     6                 4                10 
//     10                5                15 
//     15                6                21 

const userCart = [
    {productId: 1, productName: "mobile", productPrice: 12000},
    {productId: 2, productName: "laptop", productPrice: 22000},
    {productId: 3, productName: "tv", productPrice: 15000},
]

const totalPrice = userCart.reduce((total, currentProduct) => {
    return total + currentProduct.productPrice
},0) // total initial value is "0"

console.log("Total Price: ", totalPrice)

const sortTheNumbers = [ 5,9,1200,410,3000 ]

const sortedNumbers = sortTheNumbers.sort();
console.log("sortedNumbers", sortedNumbers)

// output: [1200, 3000, 410, 5, 9] => this is not the expected output

const sortedNumberss = sortTheNumbers.sort((a,b) => a - b);
console.log("sortedNumbers", sortedNumberss)

// output: [5, 9, 410, 1200, 3000] => this is the expected output

// how sort method works
// if a - b = +ve number => then it will be sorted (this will place "b" first and then "a")
// if 1200 - 410 = +790 => then it will be sorted 
// if 5 - 9 = -4 => then it will not be sorted (this will place "a" first and then "b")

const userCart1 = [
    {productId: 1, productName: "mobile", productPrice: 12000},
    {productId: 2, productName: "laptop", productPrice: 22000},
    {productId: 3, productName: "tv", productPrice: 15000},
    {productId: 4, productName: "card", productPrice: 1500},
    {productId: 5, productName: "tv1", productPrice: 1000},
]

const lowToHighPrices = userCart1.sort((a , b) => {
    return a.productPrice - b.productPrice
})

const highToLowPrices = userCart1.sort((a , b) => {
    return b.productPrice - a.productPrice
})

// output: 
// 0:{productId: 5, productName: 'tv1', productPrice: 1000}
// 1:{productId: 4, productName: 'card', productPrice: 1500}
// 2:{productId: 1, productName: 'mobile', productPrice: 12000}
// 3:{productId: 3, productName: 'tv', productPrice: 15000}
// 4:{productId: 2, productName: 'laptop', productPrice: 22000}

// Every method

const entities = [2,4,6,8,10]

// is all entities are even?

const isEven = entities.every((num) => num % 2 === 0)
console.log("isEven", isEven)

// output: isEven true
// every method checks all the element in the array that every element in the array conditionally true or false
// if any element of an array conditionally false every() returns false
// for ture all element of an array must be conditionally true

// some method

const entities1 = [3,5,8,11,13]
const anyOneIsEven = entities1.some((num) => num % 2 === 0)
console.log("anyOneIsEven", anyOneIsEven)

// output: anyOneIsEven true
// if any element conditionally true this will return true

// fill method
// value, start index, end index
// fill(value, start_index + 1, end_index - 1)

const myArray = new Array(10).fill(-1)
console.log("myArray",myArray)

// output: myArray [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]

const myArray1 = [1,2,3,4,5,6,7]
const newArray = myArray1.fill(0,2,5)
console.log("newArray", newArray);

// output: newArray [1, 2, 0, 0, 0, 6, 7]

const strArray = ["item1","item2","item3"]
const deletedAndInsertedItems = strArray.splice(1,2,"inserted item 1","inserted item 2")
console.log("deletedAndInsertedItems", deletedAndInsertedItems)

// output: 

// Iterables
// jispe ham for of loop laga saken
// string, array are Iterables
// objects are not Iterables

const str11 = "string"
for (let char of str11){
    console.log(char)
}

for (let item of strArray){
    console.log(item)
}

const user = {
    name: "Taha",
    address: "house no: abc",
    city: "karachi",
    nationality: "pakistani"
}

for (let item of user){
    console.log(item)
}

// output: objects are not Iterables


// Array like Object
// jink pass length property hoti hai
// or ham unhen index se b access kar skty hain
// string


// Sets (it is Iterable)
// store data (linear storage like array)
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

const setOfNumbers = new Set([1,2,3])
const setOfNumbers2 = new Set([1,2,3,3])
const setOfNumbers1 = new Set()
setOfNumbers1.add(1)
setOfNumbers1.add(2)
setOfNumbers1.add(3)
console.log("setOfNumbers",setOfNumbers)

// output: setOfNumbers Set(3) {1, 2, 3} => same ourput of const 1,2,3

// Set use case
// when entities are unique
// like id's


// MAP()
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed (like object)

// difference b/w Map() and Object()
// objects can only have string and symbols (as key)
// In Map you can use any data type as key (like, array, number, bool)

const personMap = new Map();
// add key value pair like object
personMap.set("name","Taha")
personMap.set("class","ms-advance")
personMap.set(5.7,"hight") 
personMap.set(true,"muslim") 
personMap.set(false,"non-muslim") 
personMap.set([false,1,"yo",{youi: "soooo!"}],"myMapArray") 
// => isme hamari key ki type kuch b hosakti hai string k ilawa
// jak object me hamesha key ki type string hoti hai
console.log(personMap.get(5.7))
console.log(personMap.keys())
for (let key of personMap.keys()){
    console.log(key, typeof key)
}
console.log(personMap)

// output: Map(5) {'name' => 'Taha', 'class' => 'ms-advance', 5.7 => 'hight', true => 'muslim', false => 'non-muslim'}

for (let key of personMap){
    console.log(key, Array.isArray(key))
}

// output:

// (2) ['name', 'Taha'] true
// (2) ['class', 'ms-advance'] true
// (2) [5.7, 'hight'] true
// (2) [true, 'muslim'] true
// (2) [false, 'non-muslim'] true
// (2) [Array(4), 'myMapArray'] true

for (let [key, value] of personMap){
    console.log(key, value)
}

// output:
// name Taha
// class ms-advance
// 5.7 'hight'
// true 'muslim'
// false 'non-muslim'
// (4) [false, 1, 'yo', {…}] 'myMapArray'

const personMap1 = new Map([['name','Taha'],['class', 14]])
console.log(personMap1)

// output: Map(2) {'name' => 'Taha', 'class' => 14}

const personMap2 = {
    id: 1,
    firstName: "Taha"
}
const personMap3 = {
    id: 1,
    firstName: "Taha"
}
const userInfo = new Map()
userInfo.set(personMap2, {
    age:8,
    gender: "male"
})

const userInfo1 = new Map()
userInfo.set(personMap3, {
    age:8,
    gender: "male"
})

console.log(userInfo)
console.log(userInfo.get(personMap2).age)
console.log(userInfo.get(personMap2).gender)

// output: 8, male

console.log(userInfo1)
console.log(userInfo1.get(personMap2).age)
console.log(userInfo1.get(personMap2).gender)

// output: 

// Map(1) {{…} => {…}}
// [[Entries]]
// 0
// : 
// {Object => Object}
// key:{id: 1, firstName: 'Taha'}
// value:{age: 8, gender: 'male'}
// size
// : 
// 1
// [[Prototype]]
// : 
// Map

// object cloning

const object1 = {
    key1: "value1",
    key2: "value2",
}

const cloneObject1 = {...object1}
const cloneObject2 = Object.assign({},object1) // both can clone 

// method 
// function inside object

const personInfo = {
    name: "Taha",
    height: 5.7,
    job: "Frontend Developer",
    about: function () {
        console.log(`Person name is ${this.name} hieght is ${this.height} and Job is ${this.job}`)
    }
}

personInfo.about()

// output: Person name is Taha hieght is 5.7 and Job is Frontend Developer
// this keyword is senario me wo object hai jo about() method ko call kar raha hai.
// yani this is sernario me person object hai.

const personInfo1 = {
    name: "Taha",
    height: 5.7,
    job: "Frontend Developer",
    about: function () {
        console.log(this)
    }
}

personInfo1.about()

// output: {name: 'Taha', height: 5.7, job: 'Frontend Developer', about: ƒ}

const user1 = {
    name: "Ali",
    age: 15,
    job: "student",
    about: personInformation
}
const user2 = {
    name: "Arshad",
    age: 48,
    job: "sahafi",
    about: personInformation
}
const user3 = {
    name: "Amir",
    age: 36,
    job: "Doctor",
    about: personInformation
}

function personInformation () { // const kar k arrow function use nhi hoga
    console.log(`Person name is ${this.name} hieght is ${this.age} and Job is ${this.job}`)
}

user2.about()

// call()
// agr mje user4 ka about ka method user5 me bagher likhy use karna ho tu call()
// k zarye me use kar skta hon

const user4 = {
    name: "shahmeer",
    age: 24,
    job: "HR",
    about: function(){
        console.log(this.name,this.age,this.job)
    }
}

const user5 = {
    name: "Amir",
    age: 36,
    job: "Doctor",
}

user4.about.call(user5)

// method with argument

const user6 = {
    name: "shahmeer",
    age: 24,
    job: "HR",
    about: function(city, nationality){
        console.log(this.name,this.age,this.job,city, nationality)
    }
}

const user7 = {
    name: "Amir",
    age: 36,
    job: "Doctor",
}

user6.about.call(user7, "karachi", "pakistani")

// output: Amir 36 Doctor karachi pakistani

// apply() 
// => isme srf itna farq hai k agr argument pass karny hain tu wo array me pass hongy baki same call() ki tarah hai

user6.about.apply(user7, ["karachi", "pakistani"])

// bind()
user6.about.bind(user7, "karachi", "pakistani") // => ye kuch b output nhi dega par return kardega 1 function

const func = user6.about.bind(user7, "karachi", "pakistani")
func()

// output: Amir 36 Doctor karachi pakistani

// don't do this

const user8 = {
    name: "shahmeer",
    age: 24,
    job: "HR",
    // about: function(city, nationality){
    //     console.log(this.name,this.age,this.job,city, nationality)
    // }
    about(city, nationality){ // ye b shi kam karega
        console.log(this.name,this.age,this.job,city, nationality)
    }
}

const myFunc = user8.about;
myFunc()

// this will throw an error
// because ham isko ese b likh skty hain

const myFunc1 = function(city, nationality){
    console.log(this.name,this.age,this.job,city, nationality)
}

// tu ab yahan k liye this = window object hua

const user9 = {
    name: "shahmeer",
    age: 24,
    job: "HR",
    about: () => {
        console.log(this) // arrow function this 1 level up hota hai yani is senario me this = window object hai
        console.log(this.name,this.age,this.job,city, nationality)
    }
}

// show object key without defining

const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = Object.create(obj1)
obj2.key3 = "value3"
console.log(obj2)
console.log(obj2.key2) // output: value2
console.log(obj2.__proto__) // output: {key1: 'value1', key2: 'value2'}

// output: {} => empty object

// yahan pe obj2 me key2 nhi thi phr b output value2 aya
// uski waha __proto__ | [[prototype]] me jis object se obj2 create kiya gaya hai wahan key2 ki value show karwa raha hai

// new keyword


// create function
function CreateUser (name, age){
    this.name = name;
    this.age = age
}
// create prototype
CreateUser.prototype.about = function () {
    console.log(this.name, this.age)
}
// create object using new keyword when we use new keyword so have to define function name with capital letter
const userNew = new CreateUser("Taha", 8)
console.log(userNew)
userNew.about()

// new keyword doing three things
// 1- empty object this = {}
// 2- return this
// 3- create prototype

// class keyword

class CreateUser {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    about () {
        console.log(this.name, this.age)
    }
}

const userNew1 = new CreateUser("Taha", 8)
console.log(userNew1)
userNew1.about()

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    about () {
        console.log(this.name, this.age)
    }
}

// class Dog extends Animal {}

// const animal = new Dog("tommy", 1.5)

class Dog extends Animal {
    constructor(name,age,speed){
        super(name,age)
        this.speed = speed
    }

    about () {
        console.log("Modified About",this.name, this.age)
    }

    run() {
        return `${this.name} is running ${this.speed} kmph`
    }
}

const animal = new Dog("tommy", 1.5, 45)
console.log(animal.name, animal.age, animal.speed)
console.log(animal.run())
console.log(animal.about())
// output: tommy 1.5 45

class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    static classInfoProperty = "Static Property"

    static classInfo () {
        console.log("this function can not be used by object dot notation this will be call by class itself like (Person.classInfo())")
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set setFullName(fullName){
        const[firstName, lastName] = fullName.split(" ")
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person2 = new Person("Taha", "Khan", 8)
console.log(person2.fullName)
person2.setFullName = "Arshad Sharif"
console.log(person2.fullName)

person2.classInfo()
// output: Error
// Uncaught TypeError: person2.classInfo is not a function
//     at <anonymous>:27:9

Person.classInfo()
// output: this function can not be used by object dot notation this will be call by class itself like (Person.classInfo())

Person.classInfoProperty

// output: Person.classInfoProperty
// 'Static Property'



