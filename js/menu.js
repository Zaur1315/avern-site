jQuery(document).ready(function($) {
$('.burger').click(function(){
  $(this).toggleClass('burger_active');
	$(this).siblings('.nav_list').toggleClass('nav_list_open');
  return false;
});
});