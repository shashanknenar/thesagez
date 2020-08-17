$(document).ready(function () {
  var getActiveSlideIndex = function () {
    return $("#productSlider .active").index("#productSlider .carousel-item");
  };
  var slider = function (IndexNumber) {
    $(".slider .image")
      .removeClass("active")
      .eq(IndexNumber)
      .addClass("active");
  };
  slider(getActiveSlideIndex());
  $("#productSlider").on("slid.bs.carousel", function () {
    slider(getActiveSlideIndex());
  });
});

$(document).ready(function () {
  $("#myCarousel").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
});