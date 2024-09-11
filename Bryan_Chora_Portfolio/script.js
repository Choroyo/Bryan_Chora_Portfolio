// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

	var txt = 'Computer Science Student';
	// get textContent from elements
	// clear element
	// assign txt to the textContent
	var i = 0;

	function typeWriter() {
	
		if (i < txt.length) {
		  document.getElementById("demo").innerHTML += txt.charAt(i);
		  i++;
		  setTimeout(typeWriter, 100);
		}
	  }

window.onload = () => navSlide();

window.onload = function onLoadHandler() {
    typeWriter();
    window.onload = null; // Removes the event listener
};
