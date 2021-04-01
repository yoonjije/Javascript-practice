'use strict';
// Objects
// one of the JavaScsipt's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of 
// object = { key : value }; (key와 value의 집합체)

// 1. Literals and properties
// object 만드는 방법
const obj1 = {}; // 'object literal' stntax
const obj2 = new Object(); // 'object constructor' syntax

// const name = 'ellie';
// const age = 4;
// print(name, age);
// function print(mame, age) {
//     console.log(name);
//     console.log(age);
// }

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4}; // 클래스가 없어도 {}를 통해 오브젝트를 생성 할 수 있음
print (ellie);

ellie.hasJob = true; // 뒤늦게 하나의 프로퍼티를 추가할 수 있음
console.log(ellie.hasJob);

delete ellie.hasJob; // 프로퍼티 삭제도 가능함..
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always *string
console.log(ellie.name); // 코딩하는 그 순간 그 key에 해당하는 값을 받아오고 싶을 때 '.'사용 
console.group(ellie['name']); // String형태로 접근 가능, 정확하게 어떤 key가 필요한지 모를 때 '['']' 사용
ellie['hasJob'] = true;
console.log(ellie.hasJob); // true

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name'); // ellie
printValue(ellie, 'age'); 

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };

//const person4 = makePerson('ellie', '30');
const person4 = new Person('ellie', 30);  
console.log(person4);

// function makePerson(name, age) {
//     return {
//         name, // key와 value의 이름이 동일하면 생략가능
//         age: age,
//     };
// }

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age; 
    // return this;
}

// 5. in operator: property existence check (key in obj) 
// 오브젝트 안에 해당하는 키가 있는지 없는지 확인하는 것
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear(); // 이전 로그 지우기
for (let key in ellie) { 
    console.log(key); // ellie 안에 있는 모든 key들이 출력됨
}

// for (value of iterable)
const array = [1, 2, 4, 5];

// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
for(let value of array) {
    console.log(value); // array에 있는 모든 값들이 value에 할당됨
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user); // {name: "coder", age: "20"}

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3); // {name: "coder", age: "20"}

const user4 = {};
Object.assign(user4 ,user); // user4: 전달, user: 복사 할 값
// const user4 = Object.assign({}, user); (위와 같은 코드)
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Objest.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue, 뒤에 나올수록 앞에 동일한 프로퍼티가 있다면 값이 계속 덮어씌기 때문 
console.log(mixed.size); // big