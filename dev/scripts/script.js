// Write your JavaScript here...

$(document).ready(() => {
  // Navigation
  $('#toggle-menu').click(function () {
    if ($(this).prop('checked')) {
      $('header nav').slideDown();
    } else {
      $('header nav').slideUp();
    }
  });

  // Landing carousel
  $('.landing-carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

  // In the news carousel
  const slickSetting = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: 'unslick',
      },
    ],
  };
  $('.in-the-news .slider').slick(slickSetting);
  $('.shop-by-room-box .slider').slick(slickSetting);


  $(window).resize(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 500) {
      $('.in-the-news .slider').not('.slick-initialized').slick(slickSetting);
      $('.shop-by-room-box .slider').not('.slick-initialized').slick(slickSetting);
    }
  });

  // Modal

  $('.play').click((e) => {
    e.preventDefault();
    $('.modal').css('display', 'flex');
  });

  $('body').click((e) => {
    if ($(e.target).is('.modal') || $(e.target).is('.modal-close')) {
      e.preventDefault();
      $('.modal').hide();
      $('video').trigger('pause');
    }
  });
});
