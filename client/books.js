$(window).keyup(function () {
	if (event.keyCode == 27) {
    Session.set('query', '');
    $('.optionBox').hide();
  }
  if (!$('input').is(':focus')) {
    if(event.shiftKey){
      if(event.keyCode == 78){
        $('.toggleNew').click();
      }
    }
    if(event.shiftKey){
      if(event.keyCode == 83){
        $('.toggleSearch').click();
      }
    }
  }
});
