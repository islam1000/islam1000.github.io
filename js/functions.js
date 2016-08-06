$(window).scroll(function(){
  var wScroll = $(this).scrollTop() ;


  $(".back1").css({
    'transform':'translate(0px,'+ -wScroll/120+'%)'
  });
  $(".back2").css({
    'transform':'translate(0px,'+ -wScroll/60+'%)'
  });
  $(".back3").css({
    'transform':'translate(0px,'+ -wScroll/30+'%)'
  });


  console.log(wScroll);

});

$('.strt').click(function(){
  $('html, body').animate({
      scrollTop: ($('#article').offset().top)
  },500);
});
