const imgs = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

changeBG(imgs);

function changeBG(arr) {
	const el = document.body.style;
	const result = parseInt(Math.random() * imgs.length);

	arr.forEach((data, idx) => {
		if (idx === result) el.backgroundImage = `url(img/${data})`;
	});
	//arr.forEach((data, idx) => (idx === result) && (el.backgroundImage = `url(img/${data})`));
}

/*
    if(0 === 0) el.backgroundImage = 'url(img/pic1.jpg)';
    if(1 === 1) el.backgroundImage = 'url(img/pic1.jpg)';
    if(2 === 2) el.backgroundImage = 'url(img/pic1.jpg)';
    if(3 === 3) el.backgroundImage = 'url(img/pic1.jpg)';
    if(4 === 4) el.backgroundImage = 'url(img/pic1.jpg)';
    */
