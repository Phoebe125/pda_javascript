### 프로디지털 아카데미 자바스크립트 강의

#### Var Vs Let
- **VAR**: 선언을 맨 위로 올려버린다. 변수가 정의되기 전에 호출해도 에러가 나지 않는다. 함수 scope

- **LET**: 함수 scope를 가진 var 덕분에 Hoisting 문제 발생, 블록 scope

#### Primitive DataType
- Number (숫자형)
- String (문자열)
- Boolean (true/false)
- BigInt (BigInt값)
- undefined (변수가 선언되었으나 값이 할당되지 않은 상태)
- null null값 (명시적으로 값이 없음)

#### 스코프와 클로저(Clousre)

**스코프**

변수가 정의된 범위

- 자바스크립트는 정적 스코핑.
- 함수를 어디서 호출했는지가 아니라, 어디에 **선언**했는지에 따라 스코프가 결정

**클로저(closure)**

- 함수와 함수가 선언된 어휘적 환경의 조합
- 내부 함수가 생성될 때 그 scope에 있는 모든 변수에 대해 접근할 권한을 가짐
- 외부 함수의 실행을 마친 후에도 그 변수에 접근 가능