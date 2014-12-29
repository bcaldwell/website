$(window).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 450) {
      $("header").addClass("fix-header");
    } else {
      $("header").removeClass("fix-header");
    }
  });

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-60
          }, 1000);
          return false;
        }
      }
    });
  });
});

<!-- http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links/ -->


