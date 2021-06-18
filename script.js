$(function(){
   $('.multiple-items').slick({
	infinite: true,
	// რამდენი სურათი გამოჩნდეს
	slidesToShow: 3,
	// სლაიდის დროს რამდენი ელემნტით გადავიდეს 
	slidesToScroll: 1,
	// რომ გამოჩნდეს ღილაკები
	arrows: true,
	// რომ გამოჩნდეს ბურთულები
	dots:true,
	// responsiv-ის კოდი
	responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
    ]
  });    
});





 // Get the modal
 var modal = document.getElementById("myModal");
    
 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
	 modal.style.display = "none";
   }
 }





