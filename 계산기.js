//누적 연산 처리 함수
const calc = (how, ...rest) => {
	console.log(how);
	console.log(rest);

	if (how === '+') return rest.reduce((acc, cur) => acc + cur);
	if (how === '-') return rest.reduce((acc, cur) => acc + cur);
	if (how === '*') return rest.reduce((acc, cur) => acc + cur);
	if (how === '/') return rest.reduce((acc, cur) => acc + cur);
};

console.log(calc('+', 123, 2, 8));
