/*
      연산자: 
      - 특정 값을 도출하기 위한 계산을 처리하는 식별자

      산술연산자 (후위, 전위)
      - 수학적인 연산처리 (+, -, *, /, %, ++, --, **)

      대입연산자
      - 특정 값을 대입하기 위한 연산 (=, +=, -=, *=)

      비교연산자
      - 복수개의 값을 서로 비교하기 위한 연산 (boolean값 생성)
    */

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(3 / 2); //1.5
console.log(3 % 2); //1

//let num = 3;
//num = num + 3;
//num += 3;
//console.log(num) //6
//자기 자신에 연산처리한 값을 다시 자기자신에게 덮어쓰기

let initNum = 1;
//initNum = initNum + 1;
//initNum+=1;

//후위 증감 연산자 - 초기값을 먼저사용하고, 이후에 초기값을 증감
let resultNum = initNum++;
console.log(resultNum, initNum); //1 2

//전위 증감 연산자 - 초기값을 먼저 증감시키고, 증감된 값을 바로 사용
let initNumB = 1;
let resultNumB = ++initNumB;
console.log(resultNumB, initNumB);

//자료형은 무시하고 값만 비교
console.log(2 == '2');

//자료형과 값을 같이 비교
console.log(2 === '2');

console.log(3 <= 4);
console.log(4 > 3);

//or 연산자 (비교하는 값중에 하나라도 true값이 있으면 true)
console.log(true || true || false);

//&& 연산자 (모든 값이 true여야지 true)
console.log(true && true && false);
