// 1. Use strict
// added in ES 5
// use this for valina Javascript
// 파일 제일 위에 선언하고 개발하면 좋음
// strict모드 사용 시 더 빠르고 효율적으로 실행됨
'use strict';

// 2. Variable, rw(read/write)
// 변수 : 변경될 수 있는 값
// let (added in ES6)

let globalName = 'global name'; 
// 어디서나 접근 가능
// 실행되는 순간부터 끝날 때까지 항상 메모리에 탑재되어 있기 때문에 최소한으로 쓰는 게 좋음
// 필요한 부분에서만 정의 해서 사용하는 게 좋음
{
    let name = 'yoonji';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name); //사용 불가능한 변수
console.log(globalName);

// var(don't ever use this)
// var는 값을 선언하기 전에 쓸 수 있음
// var hoisting (move declaration from bottom of top)
// hoisting : 어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어 올려주는 것
// has no block scope
// block을 사용해서 변수를 선언해도 아무 곳에서나 보임
// 굳이 var를 쓸 필요는 없음

{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
// favor immutable data type always for a few reasons;
// - security(보안상)
// - thread safety
// - reduce human mistake
// 한 번 할당하면 값이 절대 바뀌지 않는 것
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive(더이상 쪼갤 수 없는), single item: number, string, boolean, null, undefiedn, symbol 
// primitive 타입은 value로 값이 저장됨
// object(위의 single item을 한 단위로, 한 박스로 묶어주는 것), box container
// object 타입은 object타입이 가리키는 레퍼런스가 메모리에 저장됨 
// function, first-class function
// first-class function란: function을 variable에도 parameter에도 인자로도 return타입에도 할당할 수 있음을 말한다.

// number
const count = 17; // integer
const size = 17.1 // decimal number(소수점의 숫자)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0; //infinity: 무한의 값
const negativeInfinity = -1 / 0; // -infinity
const nAn = 'not a number' / 2; //숫자가 아닌 경우
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 다양한 요소를 가져올 때 0인지 아닌지 숫자인지 아닌지 확인하지 않고 가져오면 오류가 날 수 있음.
// 연산할 때 그 값이 정말 valed한 값인지를 확인해야함

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n; // over(-2**53) ~ 2*53) 
// 숫자 뒤에 n만 붙이면 bitIntㄹ 인식함
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// String 
const char = 'C';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (String)
console.log(`value ${helloBob}, type: ${typeof helloBob}`);
// template literals는 ``(백틱)을 이용해 String을 더욱 효율적으로 사용할 수 있음
// 기존 방법 console.log('value: ' + helloBob + 'type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''(비워져 있는 값)
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null(내가 명확하게 너는 텅텅 비어있는 값이야 하고 지정해주는 것 )
let nothing = null; //null로 값이 할당되어져 있는 경우
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined(선언은 되었지만 아무것도 값이 지정되어있지 않음)
let x; // or let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 정말 고유한 식별자가 필요할 때 사용
// 다른 모듈이나 다른 곳에서 동일한 string을 썼을 때 symbol은 동일한 식별자로 인식하지 않고, 다른 것으로 간주함
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2); // false

// string이 똑같다면 동일한 symbol을 만들고 싶다면 Symbol.for('id')사용./
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2); // true

// symbol은 바로 출력하면 에러가 뜸, desciption을 붙여서 string으로 변환해서 출력해야 함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //value: id, type: symbol

// object, real-life, data structure
// object: 우리가 일상 생활에서 보는 물건과 물체들을 대표할 수 있는 박스형태
const yoonji = {name: 'yoonji', age: 20}; //yoonji라는 object를 만든 것
yoonji.age = 21; //변경 가능

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); //value: hello, type: string

text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //value: 1, type: number

text = '7' + 5; //숫자를 String으로 변환함
console.log(`value: ${text}, type: ${typeof text}`); //value: 75, type: string

text = '8' / '2'; // String인데 나누기를 사용했잖아? 그럼 number로 변환해야지!
console.log(`value: ${text}, type: ${typeof text}`); //value: 4, type: number

//js는 runtime에서 type이 정해지기 때문에, 이것 때문에 에러가 runtime에러가 발생 