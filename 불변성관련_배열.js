//불변성관련 배열 전용 내장 함수

//문자열.includes('찾을 문자열') : 원본 문자열에서 인수로 전달된 문자열이 있는지 확인해서 boolean 값 반환
const names = ['김영희', '이철수', '김수진', '최판섭'];

//find - 배열에서 조건이 만족하는 값이 있으면 true를 반환하며 바로 종료
const result = names.find((el) => el.includes('김'));
console.log(result);

//findIndex - 찾고자 하는 배열의 순서값을 반환
const idx = names.findIndex((el) => el.includes('이철수'));
console.log(idx);

//filter - 배열에서 찾고자 하는 모든 값을 반환
//filter 사용시 조건식 앞에 !붙히면 해당 조건이 아닌 나머지 값들이 배열로 반환
const result_filter = names.filter((el) => !el.includes('김'));
console.log(result_filter);

//map - 기존의 배열을 반복처리 하면서 새로운 배열을 deep copy
const result_map = names.map((el) => el + '님'); //names.map(el => {return el]})
console.log(result_map);

//기존의 names배열을 찍어보면 원본 배열은 그대로 유지가 되는 불변성(immutable) 상태인것을 알 수 있다.
//find, filter, map 모두 불변성을 유지시켜주는 배열 전용 함수 (추후 react에서 원본값과 변경 값을 비교하기 위한 중요한 개념)
//위의 함수들은 배열 전용 내장 함수 이므로 querySelectorAll로 반환되는 유사배열에는 사용 불가
//유사배열에 해당 함수들을 사용하고 싶을 때에는 Array.from을 이용하여 순수배열로 변환한 상태에서 사용 가능

//reduce
//기존의 값을 축적하면서 누적된 연산값을 반환
//배열.reduce((누적값,현재값,순서) => 연산식, 초기값)
const origin = [1, 2, 3];
const accumulatedNumber = origin.reduce((acc, cur, idx) => acc + cur, 10);
console.log(accumulatedNumber);
