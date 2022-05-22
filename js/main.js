(function ($) {
    "use strict";
// Slider Active
    $('.slider-active').slick({
        dots: false,
        infinite: false,
        arrow: false,
        prevArrow:false,
        nextArrow: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              infinite: false,
              arrow: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
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
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });


// Blog active 
$('.blog-active').slick({
  dots: true,
  infinite: true,
  arrow: true,
  prevArrow:false,
  nextArrow: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        arrow: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
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
// Testimonial Active
$('.testimonial-active').slick({
  dots: true,
  infinite: true,
  arrow: true,
  prevArrow:false,
  nextArrow: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        arrow: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
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
      // Portfolio masonary grid 
      var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    })
// Portfolio Activation 
    $('.portofilo-menu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

//for menu active class
$('.portofilo-menu button').on('click', function (e) {
  e.preventDefault();
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
});

// magnificPopup
$('.portfolio-popup').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  }
});

// CounterUp
$('.counter').counterUp({
  delay: 10,
  time: 1000
});


})(jQuery);	