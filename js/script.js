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
        
        // BOOK SECTION
        // book n°1
        $('#anim-book-0').css({
            "transition":".8s",
            "position":"relative",    
            "top":"400px",    
            "opacity":"0"    
        });
        $('#book-img-0').css({
            "transition":".8s",
            "position":"relative",    
            "left":"100%",    
            "opacity":"0"    
        });
        $('#book-n-0').on('inview', function(event, isInView) {
            if (isInView) {
                $('#anim-book-0').css({  
                    "top":"0",    
                    "opacity":"1"    
                });
            } 
        });
        $('#book-n-0').on('inview', function(event, isInView) {
            if (isInView) {
                $('#book-img-0').css({  
                    "left":"0",    
                    "opacity":"1"    
                });
                $('#book-n-0').off('inview');
            } 
        });
        
        // book n°2
        $('#anim-book-1').css({
            "transition":".8s",
            "position":"relative",    
            "top":"400px",    
            "opacity":"0"    
        });
        $('#book-img-1').css({
            "transition":".8s",
            "position":"relative",    
            "left":"100%",    
            "opacity":"0"    
        });
        $('#book-n-1').on('inview', function(event, isInView) {
            if (isInView) {
                $('#anim-book-1').css({  
                    "top":"0",    
                    "opacity":"1"    
                });
            } 
        });
        $('#book-n-1').on('inview', function(event, isInView) {
            if (isInView) {
                $('#book-img-1').css({  
                    "left":"0",    
                    "opacity":"1"    
                });
            } 
            $('#book-n-1').off('inview');
        });
        
        // book n°3
        $('#anim-book-2').css({
            "transition":".8s",
            "position":"relative",    
            "top":"400px",    
            "opacity":"0"    
        });
        $('#book-img-2').css({
            "transition":".8s",
            "position":"relative",    
            "left":"100%",    
            "opacity":"0"    
        });
        $('#book-n-2').on('inview', function(event, isInView) {
            if (isInView) {
                $('#anim-book-2').css({  
                    "top":"0",    
                    "opacity":"1"    
                });
            } 
        });
        $('#book-n-2').on('inview', function(event, isInView) {
            if (isInView) {
                $('#book-img-2').css({  
                    "left":"0",    
                    "opacity":"1"    
                });
            } 
            $('#book-n-2').off('inview');
        });
        
        // book n°4
        $('#anim-book-3').css({
            "transition":".8s",
            "position":"relative",    
            "top":"400px",    
            "opacity":"0"    
        });
        $('#book-img-3').css({
            "transition":".8s",
            "position":"relative",    
            "left":"100%",    
            "opacity":"0"    
        });
        $('#book-n-3').on('inview', function(event, isInView) {
            if (isInView) {
                $('#anim-book-3').css({  
                    "top":"0",    
                    "opacity":"1"    
                });
            } 
        });
        $('#book-n-3').on('inview', function(event, isInView) {
            if (isInView) {
                $('#book-img-3').css({  
                    "left":"0",    
                    "opacity":"1"    
                });
            } 
            $('#book-n-3').off('inview');
        });
        
        // book n°5
        $('#anim-book-4').css({
            "transition":".8s",
            "position":"relative",    
            "top":"400px",    
            "opacity":"0"    
        });
        $('#book-img-4').css({
            "transition":".8s",
            "position":"relative",    
            "left":"100%",    
            "opacity":"0"    
        });
        $('#book-n-4').on('inview', function(event, isInView) {
            if (isInView) {
                $('#anim-book-4').css({  
                    "top":"0",    
                    "opacity":"1"    
                });
            } 
        });
        $('#book-n-4').on('inview', function(event, isInView) {
            if (isInView) {
                $('#book-img-4').css({  
                    "left":"0",    
                    "opacity":"1"    
                });
            } 
             
        });
        
        // logos
        $('#logo-left').css({
            "transition":".8s",
            "position":"relative",    
            "right":"400px",    
            "opacity":"0"    
        });
        $('#logo-middle').css({
            "transition":".8s",
            "position":"relative",    
            "bottom":"400px",    
            "opacity":"0"    
        });
        $('#logo-right').css({
            "transition":".8s",
            "position":"relative",    
            "left":"400px",    
            "opacity":"0"    
        });
        $('#logo-left').on('inview', function(event, isInView) {
            if (isInView) {
                $('#logo-left').css({  
                    "right":"0",    
                    "opacity":"1"    
                });
            }  
        });
        $('#logo-middle').on('inview', function(event, isInView) {
            if (isInView) {
                $('#logo-middle').css({  
                    "bottom":"0",    
                    "opacity":"1"    
                });
            } 
        });
        $('#logo-right').on('inview', function(event, isInView) {
            if (isInView) {
                $('#logo-right').css({  
                    "left":"0",    
                    "opacity":"1"    
                });
            } 
        });

    });