// =include ../../plugins/jquery/jquery-2.1.4.min.js
// =include ../../plugins/modernizr/modernizr-flexbox.js
// =include ../00_atoms/_customFunctions.js
// =include ../00_atoms/_chatContent.js
// =include ../00_atoms/_chat.js

$(document).ready(function(){
    $(function SmoothScroll() {
        $('a[href*=#]').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top -150
        }, 500);
            event.preventDefault();
        });
    });
});
