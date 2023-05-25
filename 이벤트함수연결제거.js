const frame = document.querySelector('#wrap');
const btn = document.querySelector('button');

//함수에 인수값을 전달해야 되는 형태로 이벤트 연결시
frame.addEventListener('click', handler);

//선언적 함수로 미리 핸들러함수 정의
function handler() {
	console.log('test');
}

btn.addEventListener('click', () => {
	//선택자에 이벤트 연결되어 있는 함수를 제거가능
	//이벤트 제거를 위해서는 선택자에 익명함수가 아닌 선언적함수가 등록되어 있어야 함
	frame.removeEventListener('click', handler);
});

//보통 윈도우 객체에 여러 이벤트 핸들러함수를 등록하게 됨
//특정 페이지에서만 동작해야 되는 핸들러 함수를 다른 페이지에서는 동작금지 해야함
//따라서 선택자에 등록되어 있는 이벤트 핸들러 함수를 지울필요가 있음
