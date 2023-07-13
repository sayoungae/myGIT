console.log('im working so sleepy now');
let a = 221;
let b = a - 5;
a = 4;
console.log(b,a);

// Array
/*const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";

console.log(monday, tue, wed, thu, fri);*/

const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
console.log(daysOfWeek); //['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


const youngInfo = {
    name : "young",
    age : 30,
    gender: "female",
    favFood:[
        {
            name: "pizza",
            fatty: true
        },
        {
            name: "salad",
            fatty: false
        }
    ]
}
console.log(youngInfo.age); //30

youngInfo.age = 31;

console.log(youngInfo.age); //31

console.log(youngInfo.favFood[1].fatty); //false


/* function sayHello(name, age){
    console.log('Hello', name, "you have", age ,"years of age.")
}

sayHello("young", 15); */

/* function sayHello(name, age){
    // console.log("Hello " + name + " you are " + age + " years old"); 싱글or 더블 방식 
    console.log(`Hello ${name} you are ${age} years old`); //백틱 방식
} */

function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`; //백틱 방식
}

const greetYoung = sayHello("Young", 22);
console.log(greetYoung);


const calculator = {
    plus: function(a, b){
        return a + b
    },
    minus: function(a, b){
        return a - b
    },
    multiply: function(a, b){
        return a * b
    },
    divide: function(a, b){
        return a / b
    }
}

//console.log(greetYoung);
const plus = calculator.plus(5,5);
console.log(plus); //10
const minus = calculator.minus(5,5);
console.log(minus); //0
const multiply = calculator.multiply(5,5);
console.log(multiply); //25
const divide = calculator.divide(5,5);
console.log(divide); //1
