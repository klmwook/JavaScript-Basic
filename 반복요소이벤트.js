const btns = document.querySelectorAll('ul li');

/*
btns[0].addEventListener('click', (e) => {
	e.preventDefault();
	console.log(0);
});
btns[1].addEventListener('click', (e) => {
	e.preventDefault();
	console.log(1);
});
btns[2].addEventListener('click', (e) => {
	e.preventDefault();
	console.log(2);
});
*/
/*
//반복 이벤트 연결시 순서값이 필요하다면 forEach추천
btns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault();
		console.log(idx);
	});
});
*/
//만약에 반복 이벤트 연결시 순서값이 필요없다면 for of 추천
for (const el of btns) {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		console.log(e.currentTarget);
	});
}
