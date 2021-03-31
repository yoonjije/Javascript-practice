# async 와 defer의 차이점
- async : 다수의 스크립트 옵션을 받게되면, 먼저 다운로드된 js를 실행하기 때문에 js가 순서에 의존적인 거라면 async옵션을 사용했을 때 문제가 될 수 있음.
- defer : parsing하는 동안 필요한 js를 다 다운받은 다음, 그 후에 순서대로 실행하기 때문에 내가 정의한 순서가 지켜져 원하는대로 스크립트가 실행된다.
- head안에 defer옵션을 이용하는 게 제일 효율적이고 안전하다!

# JavaScript에서 변수를 선언할 때
- 값을 변경할 수 있는 Mutable 타입의 let: 메모리의 값을 읽고 쓸 수 있음
- 값을 변경할 수 업슨 Immutable 타입의 const: 값을 할당한 후로는 자물쇠가 생겨서 읽기만 가능, 더 바람직한 방법

# Immutable type과 Mutable타입
- Immutable data type: premitive types, frozen objects 
- Mutable data types: all objects by default are mutable in JS