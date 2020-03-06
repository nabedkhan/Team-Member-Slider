$(document).ready(function(){
	
	// $(".owl-carousel").owlCarousel();
	$('.owl-carousel').owlCarousel({
    loop:true,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

})