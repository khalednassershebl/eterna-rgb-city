//----------------------------------------------------------------
// Toggle Navbar
$(".header .nav-logo .nav-mobile-icon").on("click", function () {
  $(".big-nav").toggleClass("big-nav-hiddin");
  $(".close-overlay").addClass("open-over");
});
// $(".header .nav-logo .nav-search-icon").on("click", function () {
//   $(".big-nav").toggleClass("big-nav-hiddin");
//   $(".big-nav .big-nav-search .form-control").focus();
//   $(".close-overlay").addClass("open-over");
// });
$(".li-link .li-link-icon").on("click", function () {
  $(this)
    .parent()
    .parent()
    .find(".nav-link-popup")
    .removeClass("big-nav-hiddin");
});
//----------------------------------------------------------------

$(".big-nav .close-big-nav").on("click", function () {
  $(".big-nav").addClass("big-nav-hiddin");
  $(".close-overlay").removeClass("open-over");
});

$(".close-link-popup").on("click", function () {
  $(".nav-link-popup").addClass("big-nav-hiddin");
});

// All Popups
$(".close-overlay").on("click", function () {
  $(this).removeClass("open-over");
  $(".big-nav").addClass("big-nav-hiddin");
  $(".nav-link-popup").addClass("big-nav-hiddin");
  $(".order-service").removeClass("open-popup");
  $(".contact-container").removeClass("open-popup");
});





// Toggle Language
if ($("html").attr("lang") == "en") {
  $(".page-lang").text("العربية");
} else {
  $(".page-lang").text("English");
}