//단일 대상 탐색
//querySelector (단일 돔 객체 반환)
const frame = document.querySelector('#wrap');

//복수개의 대상을 탐색
//querySelectorAll (배열을 반환: 유사배열)
//유사배열: 배열의 형태는 띄우고 있으나 순수한 배열은 아니라서 배열관련 메서드중에서 제한적인 기능만 사용가능
const boxs = frame.querySelectorAll('article');

/*
    반복문 - 특정 코드를 반복해서 호출할때 (배열을 반복돌때)
    for - 제일 베이직한 반복문 형태
    forEach - 배열관련 내장 함수, 순수배열과 유사배열 모두 반복가능, 반복기능만 있음
    map - 배열관련 내장 함수, 순수배열만 반복가능, 반복기능 + 데이터 복사기능
    for of - 순수배열, 유사배열 모두 반복가능, 문자까지 반복가능 (Iterable Object)
    for in - 객체의 key값들을 반복
    */

/*
    for (let i = 0; i <= 10; i++) {
      console.log(`repeated - ${i}`);
    }
    */
const colors = ['red', 'green', 'blue'];

/*
    const arr1 = colors.forEach((data, index, arr) => {
      console.log(data);
      console.log(index);
      console.log(arr);
      return arr;
    });
    console.log(arr1);
    */

//map은 기존 배열값을 반복돌면서 deep copy하는 복사기능
const arr2 = colors.map((data, index, arr) => {
	console.log(data);
	console.log(index);
	console.log(arr);
	return arr;
});
console.log(arr2);

//for of는 주로 순서값이 필요없는 반복을 간결하게 처리할때
for (const color of colors) console.log(color);
for (const box of boxs) console.log(box);

//for of는 문자열을 반복처리 해야 할떄 (텍스트 모션 작업시 주로 활용)
const txt = 'Hello';
for (const letter of txt) console.log(letter);

const studentA = {
	name: 'David',
	age: 20,
	isFemale: false,
};

//객체의 키값을 반복
for (const key in studentA) console.log(studentA[key]);
