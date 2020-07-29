$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 50) {
        $(".fixed-top").addClass("newsletter");
      } else {
        $(".fixed-top").removeClass("newsletter");
      }
    });
  });