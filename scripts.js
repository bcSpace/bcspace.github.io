function randomColor() {
    return '#'+ ('000000' + (Math.random()*0xFFFFFF<<0).toString(16)).slice(-6)
}

function setColor(){
    document.getElementById('body').style.backgroundColor = randomColor();
    setTimeout(setColor, 11);
}
setColor();


function rotateImages() {
	for (var i = document.getElementsByTagName("img").length - 1; i >= 0; i--) {

		var number = Math.floor(Math.random() * 360);
		// console.log(number);

		if(Math.floor(Math.random() * 100) < 25) {
			document.getElementsByTagName("img")[i].style.transform = "rotate("+number+"deg)";
		}


	}

	setTimeout(rotateImages, Math.floor(Math.random() * 10));
}

rotateImages();

