(function ($) {
    "use strict";
    // preloader
    $(window).on('load', function() {  
        $('#loading').fadeOut();
        $('#loading-center').delay(350).fadeOut('slow'); 
    }); 
    // data - background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    
    //how-to-oder-area
    $('.slider-hero').owlCarousel({
        items:1,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed: 400,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			merge:true,
			dots:false,
			navText: ['<i class="icofont-long-arrow-left"></i>', '<i class="icofont-long-arrow-right"></i>'],
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:1,
				},
				768: {
					items:1,
				},
				1170: {
					items:1,
				},
			}

    })

    //slider product

        $('.slide-pro').owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed: 400,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			merge:true,
			dots:false,
			navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:4,
				},
			}
		});


    // sticky
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 2) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }
    });

    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    

    //pop up img
    $('.work-pop').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
      });


     
    // Instantiate Scrolls
			var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');

			if (document.querySelector('[data-easing]')) {
				var linear = new SmoothScroll('[data-easing="linear"]', {easing: 'linear'});
			}



      //  Isotop Active
    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });

    // filter items on button click
    $('.portfolio-filter').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    $('.portfolio-filter').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    
    // WOW active
    new WOW().init();


})(jQuery);

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    rtl:false,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        400:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})



const scrollHeader = () => {
    const header = document.getElementById("header");
    //when the scroll is greater then 60 viewport heigth add the scroll header class
  
    this.scrollY >= 60
      ? header.classList.add("change_header_bg")
      : header.classList.remove("change_header_bg");
  };
  
  window.addEventListener("scroll", scrollHeader);

// ---=================== toggle bar==================-----

document.querySelector(".toggle_nav").addEventListener("click", function () {
    document.querySelector(".menu-area").style.left = '0';
  });
  document.getElementById("close_nav").addEventListener("click", function () {
    document.querySelector(".menu-area").style.left = '-100%';
  });

