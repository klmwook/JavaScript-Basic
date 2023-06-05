//기본 promise의 사용법
//비동기로 동작되는 구문을 new Promise를 통해 반환되는 인스턴스 객체에 담아 내보냄
//해당 프로미스 객체에서는 then, catch 메서드 호출 가능 (동기적으로 실행 됨)
//실제로 직접 promise 객체를 생성해서 내보낼 일이 많이 없음
//비동기가 발생하는 대표적인 사례가 외부 데이터를 불러 올 때 발생
//es6에서 fetch라는 메서드가 기본적으로 promise객체를 내장해서 데이터를 반환해주기 때문

function delay(time, cond) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('text');
			cond ? resolve('success') : reject('fail');
		}, time);
	});
}

console.log('start');
//delay 함수에서 아무리 시간이 오래걸린다고 하더라도 해당 함수는 Promise 객체를 리턴하기 때문에 뒤에 then , catch 문을 호출 할 수 있고 해당 함수들을 동기적으로 실행 됨.

//사용예시
//delay함수가 promise 객체를 반환하고 있기 때문에
//동기적으로 then, catch문을 써서 원하는 코드를 동기적으로 호출 가능
delay(2000, false)
	.then((res) => {
		console.log(res);
		console.log('end');
	})
	.catch((err) => {
		console.log(err);
		console.log('end');
	});
//위의 then, catch문은 해당 함수의 인수로 다시 콜백함수를 넣어야 되기 때문에 코드 가독성이 떨어짐
