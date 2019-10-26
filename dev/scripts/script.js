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
});
