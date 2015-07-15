function popup() {
	   open("Randomness.html"); 
 }
	   
function changeImage(){
	var image = document.getElementById('myImage');
	if (image.src.match("bulb_on.png")) {
		image.src = "bulb_off.png";
		
	}
	else {
		image.src = "bulb_on.png";
		
		
	}
}
