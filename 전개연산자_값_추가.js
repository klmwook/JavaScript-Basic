//전개연산자로 배열에 값 추가
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);

//전개연산자로 객체에 값 추가
const studentA = {
	name: 'David',
	age: 20,
};

const newStudentA = { ...studentA, address: 'Seoul' };
console.log(newStudentA);
