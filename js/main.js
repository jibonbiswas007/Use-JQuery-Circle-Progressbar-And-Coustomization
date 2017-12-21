(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
    	  $('#web-design-progerssbar').circleProgress({
		    value: 0.9,
		    size: 200,
		    thickness: 4,
		    emptyFill: "#fff",
		    fill: '#22BAC0',
		  }).on('circle-animation-progress', function(event, progress) {
		    $(this).find('.parsentage-progressbar').html(Math.round(90 * progress) + '<i>%</i>');
		  });
		  
    	  $('#graphic-design-progerssbar').circleProgress({
		    value: 0.65,
		    size: 200,
		    thickness: 4,
		    emptyFill: "#fff",
		    fill: '#22BAC0',
		  }).on('circle-animation-progress', function(event, progress) {
		    $(this).find('.parsentage-progressbar').html(Math.round(65 * progress) + '<i>%</i>');
		  });

    	  $('#digital-merketing-progerssbar').circleProgress({
		    value: 0.35,
		    size: 200,
		    thickness: 4,
		    emptyFill: "#0af31a",
		    fill: '#f30a0a',
		  }).on('circle-animation-progress', function(event, progress) {
		    $(this).find('.parsentage-progressbar').html(Math.round(35 * progress) + '<i>%</i>');
		  });
        
    });
    
    jQuery(window).load(function(){
        
    });
    
    
}(jQuery));