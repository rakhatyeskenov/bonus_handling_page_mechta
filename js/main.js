// phones on click

document.querySelector('.contacts__btn').addEventListener('click', function() {
  document.getElementById('two').classList.toggle("contacts__wrap__active");
})

let ignoreClickOnMeElement = document.getElementById('one');

document.addEventListener('click', function(event) {
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    if (!isClickInsideElement) {
      document.getElementById('two').classList.remove("contacts__wrap__active");
    }
});



