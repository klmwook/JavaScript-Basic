//rest parameter (나머지 매개변수)
/*
const test = (txt, a, b, c, d) => {
	console.log(txt);
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
};
*/

//특정 값들을 배열로 묶어서 통으로 전달해야 될 때
const test = (...rest) => {
	console.log(rest);
};

test('홍길동', '게임', '낮잠', '음식', '독서');
