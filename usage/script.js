K.log("Test");

const blink = document.getElementById("blink");

function makeBlink(element){
	setTimeout(() => {
		K.show(element);
	}, 500);
	setTimeout(() => {
		K.hide(element);
		makeBlink(element);
	}, 1000);
}

makeBlink(blink);



