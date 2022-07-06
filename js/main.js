// disable effects on load

$(window).on('load', function () {
  $("body").removeClass("preload");
});


// phones on click

jQuery(document).ready(function(){
  jQuery('.contacts__btn').click(function(event){
     jQuery(this).siblings().toggleClass('contacts__wrap--active');
  });
});
