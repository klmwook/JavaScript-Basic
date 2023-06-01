//※전기 연산자
    //...을 붙히면 배열을 펼쳐서 할 수 있다.

    //기존 배열 초기화
    const arr = [1, 2, 3];
    
    //기존 arr 배열의 값을 꺼내와서 값을 출력
    console.log(arr);

    //기존 arr배열의 값을 꺼내와서 복사한 값을 출력
    console.log(...arr);  

    //꺼내와서 복사한 값을 다시 배열로 묶어주고 새로운 변수에 할당
    //기존 원본은 유지가 되면서 새로운 복사본이 만들어진 deep copy    
    const newArr = [...arr];

    //새로운 배열값을 변경해도 다른 배열이기 때문에 원본이 유지가 됨.
    newArr[0] = 0;

    //원본 배열은 유지가 되고 새로운 배열만 바뀌는 불변성 유지
    console.log(newArr);
    console.log(arr);