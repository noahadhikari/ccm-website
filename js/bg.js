if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {

    $(document).ready(function(){
        if ($(window).width() > 584) {
            $('#bg').width($(window).width() - 240);
        } else {
            $('#bg').width('100%');
        }
    });


    $(window).resize(function(){
        if ($(window).width() > 584) {
            $('#bg').width($(window).width() - 240);
        } else {
            $('#bg').width('100%');
        }
    });
}

var testBrowser = function() {
	if( (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) && window.location.href == "mailing.html") {
		window.location = "http://calcommunitymusic.us7.list-manage.com/subscribe?u=b8467c831dad693224bb4a244&id=185b4b01bb";
	} else {
		window.location = "mailing.html";
	}
}	
