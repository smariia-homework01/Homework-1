$(document).ready(function() {

    function mapWindow() {
        $('.wrapper-contact').css('height', $(window).height() - 260);

        var w = $(window).width();
        var h = $(window).height();

        if (w < 769 && h > w) {
            if (w < 481) {
                $('.wrapper-contact').css('height', $(window).height() - 130);
                $('iframe').attr('width', $(window).width());
                $('iframe').attr('height', $(window).height() / 2 - 100);
            } else {
                $('iframe').attr('width', $(window).width());
                $('iframe').attr('height', $(window).height() / 2.8);
            }
        } else if (w < 769 && h < w) {
            $('.wrapper-contact').css('height', $(window).height());
            $('iframe').attr('width', $(window).width() / 2 - 10);
            $('iframe').attr('height', $(window).height());
        } else if (w < 993) {
            $('iframe').attr('width', $(window).width() / 2 + 110);
            $('iframe').attr('height', $(window).height() - 260);
        } else if (w < 1201) {
            $('iframe').attr('width', $(window).width() / 2 + 220);
            $('iframe').attr('height', $(window).height() - 260);
        } else {
            $('iframe').attr('height', $(window).height() - 260);
            $('iframe').attr('width', $(window).width() / 2 + 260);
        }
        ;
    };

    mapWindow();

    $(window).on('resize', function() {
        mapWindow();
    });

    var touch 	= $('#touch-menu');
	var menu 	= $('.menu');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 768 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

    $(".container-banner a").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 65
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });


})
