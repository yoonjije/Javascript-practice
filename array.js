'use strict';

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2]; // 총 길이가 두 개인 배열 만들어짐

// 2. Index position 
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 마지막 데이터 접근

console.clear();
// 3. Looping over an array
// print all fruits
// a. for 사용
for(let i = 0 ; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of 사용
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach 사용
// fruits.forEach(function (fruit, index){
//     console.log(fruit, index);
// });
fruits.forEach((fruit, index) => console.log(fruit, index)); // Arrow Function사용

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits); // (4) ["🍎", "🍌", "🍓", "🍑"]

// pop: remove an item from the end
// 뒤에서부터 하나를 지워줌
fruits.pop(); 
fruits.pop();
console.log(fruits); // (2) ["🍎", "🍌"]

// unshift: add an item to the beginning
fruits.unshift('🍓', '🍋');
console.log(fruits); //(4) ["🍓", "🍋", "🍎", "🍌"]

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits); // (2) ["🍎", "🍌"]

// note!! shift, unshift are slower the pop, push
// 가능하면 pop, push를 사용하는 게 좋음
// 전체의 데이터가 움직이는 기능은 느릴 수밖에 없음

// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits); // (5) ["🍎", "🍌", "🍓", "🍑", "🍋"]
// fruits.splice(1); // 시작하는 인덱스 지정 후, 몇 개나 지울건지 정해주면 됨
// 지울 갯수 지정하지 않으면 지정한 인덱스부터  모든 데이터를 지워버림
// console.log(fruits); // ["🍎"]

fruits.splice(1, 1);
console.log(fruits); // (4) ["🍎", "🍓", "🍑", "🍋"]

fruits.splice(1, 1, '🍏', '🍉'); // 원하는 자리에 데이터 추가할 수도 있음
console.log(fruits); // (5) ["🍎", "🍏", "🍉", "🍑", "🍋"]

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2); 
console.log(newFruits); // (7) ["🍎", "🍏", "🍉", "🍑", "🍋", "🍐", "🥥"]

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 몇 번째 있는지 알고싶을 때
console.log(fruits.indexOf('🍉')); 
console.log(fruits.indexOf('🥥')); // -1(없는 값 출력해서)

// includes
console.log(fruits.includes('🍉')); // 데이터를 포함하는지 알고싶을 때 (true/false로 리턴)
console.log(fruits.includes('🥥')); // false

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 0, 제일 첫번 째로 해당하는 값을 만나면 그 값이 들어있는 인덱스를 리턴하게 됨
console.log(fruits.lastIndexOf('🍎')); // 5, 제일 마지막에 들어있는 값을 출력하게 됨