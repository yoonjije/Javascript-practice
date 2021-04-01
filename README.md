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

# class란?
- class
  - 조금 더 연관있는 데이터들을 한 데 묶어놓는 컨테이너
  - fields(속성), methods(행동)가 종합적으로 묶여있는 것
  - 간혹 fields만 묶여있는 경우도 있음 

# 자료구조란?
- 비슷한 종류의 데이터를 한대 묶어서 보관해 놓는 것

# 오브젝트와 자료구조의 차이점
- 오브젝트: 서로 연관된 특징과 행동들을 묶어놓는 것
- 자료구조: 비슷한 타입의 오브젝트를 묶어놓는 것, 동일한 타입의 오브젝트를 담을 수만 있다.
- 하지만! JS는 dynamically typed language(타입이 동적으로 정의가 된다)
- 한 바구니 안에 다양한 종류의 데이터를 담을 수 있지만, 이런식으로 프로그래밍 하는 것은 좋지 않음
  