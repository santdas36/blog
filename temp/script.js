    $(document).ready(function() {
    
        $('.nav-toggle').on('click', function() {
            var $this = $(this);
            event.preventDefault();
            $this.toggleClass('isActive');
            $('nav ul').toggleClass('isActive');
        });
        
        $('.dark-mode').on('click', function() {
            var $this = $(this);
            event.preventDefault();
            var DMstat = localStorage.getItem('darkMode');
            if (DMstat == "disabled") {
       	     $this.addClass('active');
        	     $('body').addClass('dark');
     	     localStorage.setItem('darkMode','enabled')
     	   } else if (DMstat == "enabled") {
       	     $this.removeClass('active');
        	     $('body').removeClass('dark');
     	     localStorage.setItem('darkMode','disabled')
     	   }
        });
        
        function validateEmail($email) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test( $email );
        }
        
      function inputKeyup() {
        $('input#email').on('keyup', function() {
            if ( validateEmail($(this).val()) ) {
                $('input[type="submit"]').addClass('valid');
                $('.error').removeClass('show');
            } else {
                $('input[type="submit"]').removeClass('valid');
                $('.error').addClass('show');
            }
        });
      }
      
        $('input#email').on('blur', function() {
            if (!$(this).val()) {
                $(this).next('label').removeClass('valid');
                $('input[type="submit"]').removeClass('valid');
            } else
            if ( validateEmail($(this).val()) ) {
                $('input[type="submit"]').addClass('valid');
                $('.error').removeClass('show');
            } else {
                $('input[type="submit"]').removeClass('valid');
                $('.error').addClass('show');
            }
            inputKeyup();
        });
        $('input#email').on('focus', function() {
            if (!$(this).val()) {
                $(this).next('label').addClass('valid');
            }
        });
        
        $('form.subscribe').on('submit', function() {
          event.preventDefault();
          var $email = $('input#email').val();
          if ( $email && validateEmail($email) ) {

          } else {
            $('input#email').focus();
          }
        });
       var topOffset = $('.hello').offset().top - $('nav').outerHeight();
       $(window).on('scroll', function() {
         if ($(window).scrollTop() > topOffset) {
           $('nav').addClass('fixed');
         } else {
           $('nav').removeClass('fixed');
         }
       });
       
       $(window).on('load', function() {
         if (!localStorage.getItem('darkMode')) {
           localStorage.setItem('darkMode', 'disabled');
         }
         if (localStorage.getItem('darkMode') == 'enabled') {
           $('body').addClass('dark');
           $('.dark-mode').addClass('active');
         }
       });
       
       function isInViewport(node) {
         var rect = node.getBoundingClientRect();
         return (
           (rect.height > 0 || rect.width > 0) &&
           rect.bottom >= 0 &&
           rect.right >= 0 &&
           rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.left <= (window.innerWidth || document.documentElement.clientWidth)
         )
       }
       $(window).on('scroll', function() {
         var scrolled = $(window).scrollTop();
         $('.parallax').each(function(index, element) {
           var parallaxText = $(this).find('.postTitle');
           var initY = $(this).offset().top;
           var height = $(this).height();
           var endY = initY + $(this).height();
           var visible = isInViewport(this);
           if (visible) {
             var diff = scrolled - initY;
             var ratio = Math.round((diff / height) * 100);
             $(this).css('background-position', '0 ' + (ratio * 1.5) + 'px');
             parallaxText.css('bottom', (ratio) + 'px');
           }
         })
       }) 
    });