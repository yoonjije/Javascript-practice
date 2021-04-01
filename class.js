'use strict';
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methos
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20); //object 생성
console.log(ellie.name);
console.log(ellie.age);
ellie.speak(); // 함수 호출

// 2. Getter and setters
// 잘못 사용해도 방어적인 자세로 만들 수 있도록 해주는 것

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if(value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
    publicField = 2; // 외부에서 접근 가능
    #privateField = 0; // class 내부에서만 값이 보여지고, 접근 가능, 값이 변경 가능
}
const experiment = new Experiment();
console.log(experiment.publicField); //2
console.log(experiment.privateField); //undefined

// 4. Static properties and methods
// Too soon!
// 들어오는 데이터에 상관없이, 공통적으로 클래스에서 쓸 수 있는 거라면 static method 메모리의 사용을 줄여줄 수 있음
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) { // 세 가지의 fields
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() { // method
        console.log(`drawing ${this.color} color of!`);
    }

    getArea() { //method
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} // Shape에서 정의한 fields, method가 자동적으로 포함
class Triangle extends Shape { // 필요한 함수들만 재정의해서 쓸 수 있음 = 오버라이딩
    draw() {
        super.draw(); // 부모의 함수도 호출할 수 있음
        console.log('🔺'); // 재정의한 함수만 호출되었음
    }
    getArea() { //method
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.colr}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color of
console.log(triangle.getArea()); // 200

// 6. Class checking: instanceOf
// 왼쪽에 있는 object가 오른쪽에 있는 class의 instace인지 아닌지 확인
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString());
