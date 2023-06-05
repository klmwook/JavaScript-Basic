//delay 함수에서 아무리 시간이 오래걸린다고 하더라도 해당 함수는 Promise 객체를 리턴하기 때문에 뒤에 then , catch 문을 호출 할 수 있고 해당 함수들을 동기적으로 실행 됨.
/*
delay(2000, false)
	.then((res) => {
		console.log(res);
		console.log('end');
	})
	.catch((err) => {
		console.log(err);
		console.log('end');
	});
*/
//위의 then, catch문은 해당 함수의 인수로 다시 콜백함수를 넣어야 되기 때문에 코드 가독성이 떨어짐
//해당 문제점을 개선하기 위해 async await문 활용
//async await을 활용하기 위한 전제 조건 - 이전함수가 promise객체를 반환하는 함수가 있어야 되고 해당 함수를 wrapping 할 함수 필요
//async await를 활용하면 then문의 비해 간결하게 동기화 처리 할 수 있으나 catch문 활용이 불가능
//catch문을 사용하기 위해서는 try catch문으로 강제 예외처리

function delay(time, cond) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('text');
			cond ? resolve('success') : reject('fail');
		}, time);
	});
}

//delay함수가 promise객체를 반환할 때 wrapping함수를 만들고 async 키워드를 붙여주고 그 안쪽에서 promise객체를 반환하는 함수 앞쪽에 await를 써주면 그 이후에 실행되는 코드 동기화
async function wrapper() {
	try {
		const result = await delay(2000, false);
		console.log('end');
		console.log(result);
	} catch (err) {
		console.log(err);
	}
}

wrapper();
