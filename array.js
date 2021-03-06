'use strict';

// Arrayπ

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2]; // μ΄ κΈΈμ΄κ° λ κ°μΈ λ°°μ΄ λ§λ€μ΄μ§

// 2. Index position 
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // λ§μ§λ§ λ°μ΄ν° μ κ·Ό

console.clear();
// 3. Looping over an array
// print all fruits
// a. for μ¬μ©
for(let i = 0 ; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of μ¬μ©
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach μ¬μ©
// fruits.forEach(function (fruit, index){
//     console.log(fruit, index);
// });
fruits.forEach((fruit, index) => console.log(fruit, index)); // Arrow Functionμ¬μ©

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits); // (4)Β ["π", "π", "π", "π"]

// pop: remove an item from the end
// λ€μμλΆν° νλλ₯Ό μ§μμ€
fruits.pop(); 
fruits.pop();
console.log(fruits); // (2)Β ["π", "π"]

// unshift: add an item to the beginning
fruits.unshift('π', 'π');
console.log(fruits); //(4)Β ["π", "π", "π", "π"]

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits); // (2)Β ["π", "π"]

// note!! shift, unshift are slower the pop, push
// κ°λ₯νλ©΄ pop, pushλ₯Ό μ¬μ©νλ κ² μ’μ
// μ μ²΄μ λ°μ΄ν°κ° μμ§μ΄λ κΈ°λ₯μ λλ¦΄ μλ°μ μμ

// splice: remove an item by index position
fruits.push('π', 'π', 'π');
console.log(fruits); // (5)Β ["π", "π", "π", "π", "π"]
// fruits.splice(1); // μμνλ μΈλ±μ€ μ§μ  ν, λͺ κ°λ μ§μΈκ±΄μ§ μ ν΄μ£Όλ©΄ λ¨
// μ§μΈ κ°―μ μ§μ νμ§ μμΌλ©΄ μ§μ ν μΈλ±μ€λΆν°  λͺ¨λ  λ°μ΄ν°λ₯Ό μ§μλ²λ¦Ό
// console.log(fruits); // ["π"]

fruits.splice(1, 1);
console.log(fruits); // (4)Β ["π", "π", "π", "π"]

fruits.splice(1, 1, 'π', 'π'); // μνλ μλ¦¬μ λ°μ΄ν° μΆκ°ν  μλ μμ
console.log(fruits); // (5)Β ["π", "π", "π", "π", "π"]

// combine two arrays
const fruits2 = ['π', 'π₯₯'];
const newFruits = fruits.concat(fruits2); 
console.log(newFruits); // (7) ["π", "π", "π", "π", "π", "π", "π₯₯"]

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π')); // λͺ λ²μ§Έ μλμ§ μκ³ μΆμ λ
console.log(fruits.indexOf('π')); 
console.log(fruits.indexOf('π₯₯')); // -1(μλ κ° μΆλ ₯ν΄μ)

// includes
console.log(fruits.includes('π')); // λ°μ΄ν°λ₯Ό ν¬ν¨νλμ§ μκ³ μΆμ λ (true/falseλ‘ λ¦¬ν΄)
console.log(fruits.includes('π₯₯')); // false

// lastIndexOf
console.clear();
fruits.push('π');
console.log(fruits);
console.log(fruits.indexOf('π')); // 0, μ μΌ μ²«λ² μ§Έλ‘ ν΄λΉνλ κ°μ λ§λλ©΄ κ·Έ κ°μ΄ λ€μ΄μλ μΈλ±μ€λ₯Ό λ¦¬ν΄νκ² λ¨
console.log(fruits.lastIndexOf('π')); // 5, μ μΌ λ§μ§λ§μ λ€μ΄μλ κ°μ μΆλ ₯νκ² λ¨