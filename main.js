// $(document).ready(function () {
//   alert("hello");
// });

let images = [
    "./images/meal-1.jpg",
    "./images/meal-5.jpg",
    "./images/meal-3.jpg",
  ],
  current = 0;
//
function slide() {
  if (current < images.length) {
    $("#img").animate({ opacity: "1" }, 1000, function () {
      $("#img").css("background-image", `url(${images[current++]})`);
      slide();
    });
  } else {
    current = 0;
    slide();
    $("#img").animate({ opacity: "1" }, 1000, function () {
      $("#img").css("background-image", `url(${images[current++]})`);
      console.log("true11");
    });
  }
}

$(".card").on("click", function () {
  $(this).find("p").slideToggle(1000);
  console.log("true");
});
slide();
function stop() {
  $("#img").stop(true, false);
}
