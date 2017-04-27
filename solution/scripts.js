var lightbox;

window.addEventListener('scroll',function(event){
	lightbox = document.getElementsByClassName('flex-container')[0];
	
	if (window.scrollY==0) {
		lightbox.style.width = 80 + "%"

	}

	else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
		lightbox.style.width = 25 + "%"
	} 

	else {
		var proportion=(window.scrollY/document.body.offsetHeight) * 100
		lightbox.style.width = (80 - proportion) + "%" 
	}

 	
});





