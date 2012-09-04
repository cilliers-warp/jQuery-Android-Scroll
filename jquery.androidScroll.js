/*! androidScroll v0.1 - andres.rojas@koombea.com*/

$.fn.androidScroll = function() {

	/* Check UA and touch capabilities */
	var isTouch;
	var userAgent = navigator.userAgent;

	try{
		document.createEvent("TouchEvent");
		isTouch = true;
	}catch(e){
		isTouch = false;
	} 

	/* The Touch Scroll Stuff */
	if(isTouch && userAgent.match("Android") != null){
		return this.on("touchstart", function(event){
			var originalEvent = event.originalEvent;
			var scrollStartPos = $(this).scrollTop()+originalEvent.touches[0].pageY;
			$(this).on("touchmove", function(event){
				var originalMoveEvent = event.originalEvent;
				var scrollFinish = scrollStartPos-originalMoveEvent.touches[0].pageY;
				$(this).scrollTop(scrollFinish);
				event.preventDefault();
			});
		});
	}else{
		return false;
	}

}