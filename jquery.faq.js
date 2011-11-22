/*
jQuery FAQ Plugin
Vivek
vivekv@vivekv.com
http://www.vivekv.com
*/

(function($){

	$.fn.faq = function(options) {

	var defaults = {
		head :'h3'
	} ;
	var options = $.extend(defaults,options);

		return this.each(function(){

			var obj = $(this);
			obj.css("position","relative");
			$(options.head, obj).css("cursor","pointer");
			$("div", obj).css(
				{"height": '0'}, 
				{'overflow':'hidden'},
				{"position":"relative"}
			);
			$("div p",obj).css(
				{'padding':'0'},
				{'margin-bottom' : '15px'});
		
			$('h3', obj).each(function() {
			    var heading = $(this), state = false;
    		            var answer = heading.next('div').hide().css('height','auto').slideUp();
			    heading.click(function() {
			    	  state = !state;
			    	  answer.slideToggle(state);
			    });
  });


		});
	}

})(jQuery);
