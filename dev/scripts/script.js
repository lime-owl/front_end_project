// Write your JavaScript here...
// Navigation
$(document).ready(() => {
  $('#toggle-menu').click(function () {
    if ($(this).prop('checked')) {
      $('header nav').slideDown();
    } else {
      $('header nav').slideUp();
    }
  });
});
