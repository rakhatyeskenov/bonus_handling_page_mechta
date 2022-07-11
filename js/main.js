// disable effects on load

// $(window).on('load', function () {
//   $("body").removeClass("preload");
// });

// phones on click

document.querySelector('.contacts__btn').addEventListener('click', function() {
  document.getElementById('one').classList.toggle("contacts__wrap--active");
  document.getElementById('two').classList.toggle("contacts__wrap--active");
})

