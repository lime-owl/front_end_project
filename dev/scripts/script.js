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
  $('.in-the-news .slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: 'unslick',
      },
    ],
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
