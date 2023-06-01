//객체 합치기(ES5)
const obj1 = { name: 'David', age: 20 };
const obj2 = { name: 'Andy', address: 'Seoul' };

//asign(새롭게 반환될 빈 객체 , 덮어쓰기 당할 객체 , 덮어쓰기 할 객체)
const newObj = Object.assign({}, obj1, obj2);
console.log(newObj);

//객체 합치기(ES6)
const objA = { name: 'David', age: 29 };
const objB = { name: 'Andy', address: 'Seoul' };

//전개연산자로 객체값을 합칠때에는 뒤에 있는 객체값이 앞에 있는 객체를 덮어쓰기 하면서 합쳐짐
const newObjAB = { ...objA, ...objB };
console.log(newObjAB);
