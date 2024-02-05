(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Fixed Navbar
  $(window).scroll(function () {
    if ($(window).width() < 992) {
      if ($(this).scrollTop() > 55) {
        $(".fixed-top").addClass("shadow");
      } else {
        $(".fixed-top").removeClass("shadow");
      }
    } else {
      if ($(this).scrollTop() > 55) {
        $(".fixed-top").addClass("shadow").css("top", -55);
      } else {
        $(".fixed-top").removeClass("shadow").css("top", 0);
      }
    }
  });
});

//Carousel
document.addEventListener("DOMContentLoaded", function () {
  var clientSlider = document.getElementById("client_slider");

  var currentIndex = 0;

  var intervalId = setInterval(function () {
    currentIndex++;

    var items = clientSlider.querySelectorAll(".carousel-item");

    if (currentIndex >= items.length) {
      currentIndex = 0;
    }

    items.forEach(function (item) {
      item.classList.remove("active");
    });

    items[currentIndex].classList.add("active");
  }, 5000);
});

//Cart and Checkout
