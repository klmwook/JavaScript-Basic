/* 자바스크립트가 비동기적으로 업무를 처리하는 상황 */
/*
function test(delay, callback) {
	setTimeout(() => {
		callback();
	}, delay);
}

//순서 1 - start 콘솔문 실행 (js)
console.log('start');

//순서 2 - test함수를 호출하고 그 안쪽의 setTimeout구문을 web api에게 넘기고 바로 다음 구문으로 넘어감 (js)
//순서 5 - js로 부터 setTimeout을 넘겨 받고 실행한 뒤 그 안쪽의 콘솔문을 다시 콜스택 전달 (web api)
test(0, () => console.log('test1'));

//순서 3 - 두번째 test함수를 호출하고 다시 그 안쪽의 setTimeout구문을 web api에게 넘기고 다음 구문으로 넘어감 (js)
//순서 6 - js로 부터 setTimeout을 넘겨받고 실행한 뒤 그 안쪽의 콘솔문을 다시 콜스택에 전달 (web api)
//순서 7,8 - web api로 부터 넘어온 콘솔문을 콜스택의 제일 마지막 스택에 등록해서 처리
test(0, () => console.log('test2'));

//순서 4 - 마지막 end 구문 실행 (js)
console.log('end');

 */

function test(delay, callback) {
	setTimeout(() => {
		callback();
	}, delay);
}

//es6에서 promise 객체가 나오기 전 동기화 방법
//동기화되어야 될 코드를 무조건 콜백함수로 전달
//콜백함수로 다음에 동기적으로 실행될 코드를 넣으면 콜스택 입장에서는 애초에 다음에 실행할 코드를 물리적으로 제거
//콜백함수를 통한 동기화 : 콜스택 입장에서 비동기 적으로 실행할 다음 코드를 원천적으로 제거
//콜백을 통해서 동기화시의 문제점 : 점점 코드의 devs가 늘어나면서 코드 가독성이 떨어짐 (콜백지옥 : callback hell)
//해당 문제점의 대안으로 나온 ES6 promise 객체

//start --> test1 --> test2 --> end
console.log('start');

//callstack 입장에서 첫번째 test함수가 호출되고 나면 더이상 callstack에 등록할 코드 자체가 없으니 hold 되고 있음
test(2000, () => {
	//아래 코드가 통채로 web api에게 전달되고 해당 코드는 callstack에 등록 됨
	console.log('test1');

	test(2000, () => {
		console.log('test2');

		console.log('end');
	});
});
