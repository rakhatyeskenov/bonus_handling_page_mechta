// disable effects on load

$(window).on('load', function () {
  $("body").removeClass("preload");
});

// phones on click

function showPhoneNumber() {
  if (confirm("Нажмите чтобы позвонить:\n+7 (7172) 58 01 58 \nили наберите:\n+7 (7787) 46 00 01")) {
    window.location = "tel:+77172580158";
  }
}
