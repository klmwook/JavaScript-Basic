console.log('test');
const frame = document.querySelector('#wrap');
console.dir(frame);

/*
frame.onclick = (e) => {
	console.log('엄청 중요한 코드');
};

frame.onclick = (e) => {
	console.log('다른 코드');
};
*/

//함수에 인수값을 전달해야 되는 형태로 이벤트 연결시
frame.addEventListener('click', () => handler('test'));

//선언적 함수로 미리 핸들러함수 정의
function handler(text) {
	console.log(text);
}
