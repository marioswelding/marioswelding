$(document).ready(function(){
    /*
	Scrollspy
	=========================== */       
    $(window).on('load',function(){
        // Scrollspy Option
        var $body   = $('body'), 
            $navtop = $('nav.navbar'),
            offset  = $navtop.outerHeight();
        $body.scrollspy({target: '.navbar', offset: offset });
        
        // Update Offset
        function scrollAnimate(){
            $window_width = $(window).width();
            if( $window_width < 641 ){
                $offset_section = 88;
            }else if( $window_width > 767 && $window_width < 980 ){
                $offset_section = 80;
            }else if( $window_width > 1024){
                $offset_section = 78;
            }
        }
        
        // Animation Scrollspy
        scrollAnimate();
        $('.scroll').on('click', function(event) {
            event.preventDefault();
            var $anchor = $(this).find('a'),
                $section = $($anchor.attr('href')).offset().top,
                $position = $section - $offset_section;
            $('html, body').stop().animate({
                scrollTop: $position
            }, 1500, 'easeInOutExpo');
        });
        
        // Activate Navigation
        function fixSpy() {
            var data = $body.data('bs.scrollspy');
            if (data) {
                offset = $navtop.outerHeight();
                data.options.offset = offset;
                $body.data('bs.scrollspy', data);
                $body.scrollspy('refresh');
            }
        }
        
        // Activate Navigation on resize
        var resizeTimer;
        $(window).on('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(fixSpy, 200);
        });
        $(window).on('resize', scrollAnimate);
    });
});