var current;
var nextImage;
var images = ["img1","img2","img3"];
var count = 0; 
var currentSlideIs = images[count];
function active(){
	setInterval(function(){
		current = document.getElementById(images[count]);
		current.className = "";
		console.log(current.id);
			
		count++;
		
		if(count > 2){
			count = 0;
		}
		
		nextImage = document.getElementById(images[count]);
		nextImage.className = "active";
}, 3000);
}