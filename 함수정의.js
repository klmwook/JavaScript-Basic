/*
      함수 (function)
      - 자주 쓰는 실행 코드들을 블록단위로 묶어서 패키징한 형태
      - 자주 쓰는 코드들을 기능단위로 묶어서 재사용

      함수정의: 미리 function 키워드를 이용해서 자주쓰는 코드들을 패키징
      함수호출: 미리 정의된 함수를 호출해야 비로서 실행됨

      함수의 인수(argument), 매개변수(parameter)
      - 매개변수: 함수외부에서 함수 내부러 특정 값을 전달하기 위한 통로명
      - 인수: 매개변수로 전달되는 값 자체

      함수의 반환값 (return)
      - 함수내부에서 만들어진 값을 함수외부로 내보내는 값
      - 함수내부의 코드 실행 도중에 강제로 코드를 종료해야 될때

      return을 쓰는 이유
      - 특정 함수에서 만들어진 값을 다른함수나 코드에서 활용하기 위함
      - 특정 조건일때 강제로 함수를 종료하기 위함
    */

//함수호출
//function문으로  선언한 함수는 호출위치가 자유로움
const returned = plus(345, '123', 'x');
console.log(returned);

//미션1 (57분까지)
//파라미터로 2개의 인수를 전달받고 두개의 값을 더해서 리턴해주는 함수 제작
//만약에 숫자가 아닌 값이 들어오면 콘솔문으로 안내메시지를 출력하도록 제작

//미션2
//인수로 전달되는 값이 숫자형 문자이면 강제로 숫자로 변환한 다음에 연산처리해서 리턴

//미션3
//아래함수에서 3번째 인수로 연산타입을 전달받아 4칙연산 가능하도록 처리
function plus(num1, num2) {
	const convertedNum1 = parseInt(num1);
	const convertedNum2 = parseInt(num2);
	const typeNum1 = typeof convertedNum1;
	const typeNum2 = typeof convertedNum2;

	if (typeNum1 !== 'number' || typeNum2 !== 'number') {
		alert('인수로 전달된 두개의 값은 모두 숫자로 입력하세요');
	} else {
		return convertedNum1 + convertedNum2;
	}
}
