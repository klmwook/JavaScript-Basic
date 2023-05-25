/*
    Switch
    조건으로 나오는 값의 패턴이 정해져 있을떄 
    해당 사례 (패턴)에 따라서 분기처리 

    switch(값) {
      case 값: 실행할 구문;
        break;
      case 값: 실행할 구문;
        break;
      case 값: 실행할 구문;
        break;
      case 값: 실행할 구문;
        break;
      default: 모든 케이스에 값이 부합되지 않을때 무조건 실행하고 종료될 구문
    }
    */
//Math.random() 0~1사이의 실수값 반환
//1~5사이의 랜덤 정수값을 반환하는 상용구문
const result = parseInt(Math.random() * 5);
const imgs = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

const el = document.body.style;

switch (result) {
	//자바스크립트는 html, js파일 외에는 접근 권한이 없으므로
	//js로 style객체를 변경할때 css파일을 변경하는게 아닌 html요소에 인라인형태로 스타일 값 강제 적용
	//때문에 상대경로 설정할떄 index.html파일 기준으로 상대경로 설정
	case 0:
		el.backgroundImage = `url(img/${imgs[0]})`;
		break;
	case 1:
		el.backgroundImage = `url(img/${imgs[1]})`;
		break;
	case 2:
		el.backgroundImage = `url(img/${imgs[2]})`;
		break;
	case 3:
		el.backgroundImage = `url(img/${imgs[3]})`;
		break;
	case 4:
		el.backgroundImage = `url(img/${imgs[4]})`;
		break;
	default:
		el.backgroundImage = `url(img/${imgs[4]})`;
}
