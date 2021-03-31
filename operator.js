// 1. String concatenation
console.log('my' + ' cat'); //문자열+문자열
console.log('1' + 2); //문자+숫자 -> 숫자가 문자열로 변환되어 합쳐짐
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2. Numeric operator
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); //preIncrement: 3, counter: 3

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); //postIncrement: 3, counter: 4

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // gerater than or equal

// 6. ✔Locical operators: || (or), && (and), ! (not)
const value1 = false; // true
const value2 = 4 < 2; // false

// || (or)
// 세 개 중에 하나라도 true가 되면 true로 계산
// or 연산자는 처음부터 true가 나오면 멈춤! 이미 나는 true거든!
// 되도록이면 심플한 value값을 앞에다, 연산을 많이 하는 함수를 제일 뒤에 두는것이 효율적
console.log(`or: ${value1 || value2 || check()}`); // true

function check() {
    for(let i = 0; i < 10; i++) {
        //wasting time
        console.log('😭'); // value1이 이미 true라서 시작도 못 했어~
    }
    return true;
}

// && (and), finds the first falsy value
// 세 개가 다 true여야지 true값을 리턴함
// 처음 값이 false면 나는 무조건 false야! 뒤에가 true든 false든 상관안해!
// and는 앞에서 판단되기 때문에 무거운 함수는 뒤에다 배치할 것
console.log(`and: ${value1 && value2 && check()}`); //false

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if(nullableObjet != null) {
//     nullableObjet.something;
// }

function check() {
    for(let i = 0; i < 10; i++) {
        // wasting time
        console.log('😭');
    }
    return true;
}

// ! (not)
// !를 붙여서 값을 반대로 바꿔줌 
console.log(!value1); //true

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 그냥 같냐('5' = 5), =! 둘이 다르지 않아?
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// === strict equality, no type conversion
// 타입이 다르면 다른 애들이야!, 웬만하면 === 사용하는 게 더 좋음
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality by reference
// object는 메모리에 탑재될 때 레퍼런스 형태로 저장됨
const yoonji1 = {name: 'yoonji'};
const yoonji2 = {name: 'yoonji'};
const yoonji3 = yoonji1;

console.log(yoonji1 == yoonji2); //false
console.log(yoonji1 === yoonji2); //false, 레퍼런스 값이 다르기 때문!
console.log(yoonji1 === yoonji3); //true

// equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false, 0은 boolean타입이 아님(타입이 다름)
console.log('' == false); //true
console.log('' === false); //false, ''은 boolean타입이 아님(타입이 다름)
console.log(null == undefined); //true
console.log(null === undefined); //false, 다른 타입이기 때문

// 8. Conditional operators: if
// if, else if, else

const name = 'yoonji';
if (name === 'yoonji') {
    console.log('Welcome, yoonji!');
} else if(name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}
 
// 9. Ternary operator: ? (if를 좀 더 간단히 쓸 수 있는)
// condition ? value1 : value2; (간단할 때만 쓰는 게 좋음)
console.log(name === 'yoonji'?  'yes' : 'no'); 
// 이게 true니? 그러면 'yes'를 출력 아니면 'no'를 출려

// 10. ✔Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        //console.log('love you!'); 밑과 동일하기 때문에 생략 가능!
        //break;
    case 'Firefox':
        console.log('love you!')
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
// 값이 나올 때까지 무한대로 반복함

let i = 3;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
// 먼저 블록을 실행한 다음에 조건이 맞는지 안 맞는지 검사함

do {
    console.log(`do while: ${i}`)
    i--;
} while(i > 0);

// -> 블럭을 먼저 실행하려면 do while, 조건문이 맞을 때만 실행하고 시다면 while

// for loop, for(begin; condition; step)
// begin을 처음에 한 번만 호출하고, 블럭을 실행하기 전에 condition이 맞는지 안 맞는지 검사한 다음에, block이 실생이 되면 step을 실행 
for(i = 3; i > 0; i--) {
    console.log(`for: ${i}`)
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaraion
    // 지역변수 선언해서 작성하는 것도 좋음
    console.log(`inline variable for: ${i}`)
}

// nested loops (되도록 피하는 게 좋음, n승이 되면서 너무 커짐)
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Q1. 0부터 10까지의 수 중 짝수만 출력하기(continue 사용해서)
for(let i = 0; i < 11; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(`i: ${i+1}`);
}

// Q2. 0부터 10까지의 수 중 8이 나올 때까지 출력하기(break 사용해서)
for(let i = 0; i < 10; i++) {
    if(i > 8) {
        break;
    }
    console.log(`i: ${i}`);
}