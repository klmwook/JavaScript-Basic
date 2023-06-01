//ES5에서의 배열 합치기
var a = [1, 2, 3];
var b = [3, 4, 5];
var ab = a.concat(b);
//console.log(ab);

//ES6에서의 배열 합치기
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5];
const combineArr = [...arr1, ...arr2];
//console.log(combineArr);

//전체 배열에서 특정 값의 순서값을 반환
const index = combineArr.indexOf(2);
console.log(index);

//미션1- 위의 두개 메서드를 활용해서 배열의 중복값 제거
//배열의 중복값 제거
//반복 + deep copy + filtering
//const result = combineArr.filter((el, idx) => combineArr.indexOf(el) !== idx);
const result = [...new Set(combineArr)];
console.log(result);

const abc = [
	'red',
	'red',
	'blue',
	'blue',
	1,
	2,
	3,
	4,
	3,
	2,
	1,
	1,
	2,
	3,
	2,
	1,
	2,
	3,
	3,
	4,
	6,
	7,
	8,
	9,
	10,
];
const newAbc = [...new Set(abc)];

const result_filter = abc.filter((el, idx) => abc.indexOf(el) !== idx);
console.log(result_filter);
