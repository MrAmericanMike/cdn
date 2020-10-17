console.log("Koala");
//purge();

const title = document.getElementById("title");
const blink = document.getElementById("blink");

K.setClass(title, "red");

function makeBlink(element){
	
	setTimeout(() => {
		K.show(element);
		K.replaceClass(title, "red", "green");
	}, 500);
	setTimeout(() => {
		K.hide(element);
		K.replaceClass(title, "green", "red");
		makeBlink(element);
	}, 1000);
	
}

makeBlink(blink);



function purge() {
	const URL = "https://purge.jsdelivr.net/gh/MrAmericanMike/cdn@main/koala.js";
	fetch(URL);
}


