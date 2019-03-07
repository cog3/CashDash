var rem;
var currentImage;


var images[] = new Array();
images[0] = new Image();
images[0].src = 'images/bitcoin.jpg';
images[1] = new Image();
images[1].src = 'images/ethereum.jpg';
images[2] = new Image();
images[2].src = 'images/Ripple.jpg';


function removeActive(){
	rem = document.getElementTagName("div");
	rem.classList.remove("active");
	if (currentImage) {}
	//setInterval(popImage, 3000);
}

function popImage(){

}