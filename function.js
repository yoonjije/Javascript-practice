// Function
// - fundamental building block in the program(프로그램을 구성하는 기본적인 building block)
// - subprogram can be used multiple times(subprogram이라고도 불리며 재사용 가능하다는 장점)
// - performs a task or calculates a value(한 가지의 task나 어떤 값을 계산하기 위해 쓰여짐)

// 1. Function declaraion
// function name(param1, param2) {body... return;}
// one function === one thing (하나의 함수는 한가지의 일만 하도록 만들어야함.)
// naming: doSomething, command, verb 
// e.g. createCardAndPoing -> createCard, createPoint
// ✔function in object in JS

function printHello() { //파라미터 받지 않음
    console.log('Hello');
}
printHello();

// 좀 더 유용한 함수로 만들려면 -> 파라미터로 메세지를 전달
function log(message) {
    console.log(message);
}
log('Hello@');
log(1234); // 숫자가 문자열로 변환되어 출력이 됨

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference, 함수 안에서 object값을 변경하게 되면 그 변경된 사항이 그대로 메모리에 적용 -> 추후에 변경된 사항은 확인이 가능함

function changeName(obj) {
    obj.name = 'coder';
}
const yoonji = { name: 'yoonji'};
changeName(yoonji);
console.log(yoonji);

// 3. Default parametes (added in ES6)
function showMessage(message, from = 'unknown') { // 아래 주석과 같은 방법
    // if (from === undefined) {
    //     from = 'unknown';
    // }
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
//...3개 작성하면 Rest parameter로 불림, 배열 형태로 전달
function printAll(...args) { 
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for(const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie'); 

// 5. Local scope
// !!!!!!!밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // local variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() { // 자식은 부모에게서 정의된 메세지를 확인할 수 있다.
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); 자식안에 정의된 메세지를 부모 상위 위에서 보려고 해서 에러
}
    printMessage();
// console.log(message); 지역변수이기 때문에 에러!

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if(user.point > 10) { //블럭 안에서 로직을 작성하면 가독성이 떨어질 수 있음
        // long upgrade logic...
    }
}
// good
function upgradeUser(user) {
    if(user.point >= 10) { //조건이 맞지 않을 때, 빨리 리턴해서 함수 종료
        return;
    }
    // long upgraed logic... //조건이 맞을 때만, 필요한 로직을 실행하는 게 좋은 코드
}

// 1. Function expression
// a function declaraion can be called earlier than it is defined. (hoisted) (함수가 호출되기 이전에 선언이 가능함)
// a function expression is created when the exection reached it.(할당된 다음부터 호출이 가능함)

const print = function () { // 함수에 이름이 없는 것: annoymous function, function을 선언하는 동시에 print에 할당해줬음
    console.log('print');
};
print(); // print 
const printAgain = print;
printAgain(); // print
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
// 함수를 전달해서 상황이 맞고, 원하면 전달된 함수를 불러라고 전달하는 것을 Callback function
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes(); //콜백함수
    } else {
        printNo(); //콜백함수
    }
}
// annoymous function
const printYes = function() {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions (함수 안에서 자신 스스로 또 다른 함수를 호출할 때)
const printNo = function print() {
    console.log('no!');
    //print(); -> 함수 안에서 자신 스스로를 부르는 것(recursions) 
};
randomQuiz('wrong', printYes, printNo); //콜백함수를 전달
randomQuiz('love you', printYes, printNo);

// Arrow function
// always annoymous
// 간결하게 사용 가능함

// const simplePrint = function() {
//     console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!'); // 위와 같은 방법

// const add = function(a, b) {
//     return a + b;
// }
const add = (a, b) => a + b; // 위와 같은 방법
const simpleMultiply = (a, b) => {
    // do something more
    return a * b; // 블록 사용 시 return 사용해 값을 리턴해야함.
};


// IIFE: Immediately Invoked Function Expression
// 선언함과 동시에 사용하고 싶을 때 ()로 묶고 -> ();로 호출
(function hello() {
    console.log('IIFE');
})();