$(window).on('scroll',function(){
	var scrollBottom = $(document).height() - $(window).scrollTop();
  $('.p1').html(scrollBottom);
}).trigger('scroll');
