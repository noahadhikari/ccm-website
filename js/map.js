if( !(/iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
    $(document).ready(function(){
        $("#map_container").width($(window).width() - 304 - $('#events').width());
        if ($(window).width() > 584 && $(window).width() < 792) {
        	$('#events').width($(window).width() - 240);
        }
    });

    $(window).resize(function(){
		if ($(window).width() > 584) {
            $("#map_container").width($(window).width() - 304 - $('#events').width());
            if ($(window).width() < 792) {
            	$('#events').width($(window).width() - 240);
            } else {
            	$('#events').width(552);
            }
    	} else {
    		$("#map_container").width('100%');
    		$("#events").width('100%');
    	}
    });
	}