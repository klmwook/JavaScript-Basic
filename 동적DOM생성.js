//h1 , a 엘리먼트 노드 생성
    const h1 = document.createElement('h1');
    const a = document.createElement('a');

    //href , target 속성 노드 생성
    const href = document.createAttribute('href');
    const target = document.createAttribute('target');

    //속성노드에 value 값 연결
    href.value = "https://www.naver.com";
    target.value = "_blank";

    //a 엘리먼트 노드에 속성노드 바인딩
    a.setAttributeNode(href);
    a.setAttributeNode(target);

    //a 엘리먼트 노드에 텍스트 노드 연결
    a.innerText = "네이버";

    //h1 엘리먼드 노드에 a 엘리먼트 노드를 자식으로 붙이기
    h1.append(a);

    //body 안쪽에 h1노드 최종적으로 붙여넣기
    document.body.prepend(h1);