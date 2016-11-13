// EFFETS D'APPARITION
    $( document ).ready(function() {
        // premier paragraphe
        $('#firstP').css({
            "transition":".4s",
            "position":"relative",    
            "top":"100px",    
            "opacity":"0"    
        });
        $('.social-icons').css({
            "transition":".4s",
            "position":"relative",    
            "top":"100px",    
            "opacity":"0"    
        });
        $('#firstP').on('inview', function(event, isInView) {
            if (isInView) {
                $('#firstP').css({  
                    "top":"0",    
                    "opacity":"1"    
                });
                socialIconsTop();
            } 
        });
        function socialIconsTop() {
            $('.social-icons').on('inview', function(event, isInView) {
                if (isInView) {
                    $('.social-icons').css({  
                        "top":"0",    
                        "opacity":"1"    
                    });
                } 
            });
        };
    });