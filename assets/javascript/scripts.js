$(window).ready(function () {
  var images = [
    'https://unsplash.com/photos/xBYD4tt8ANo/download',
    'https://unsplash.com/photos/58zgsq3c63g/download',
    'https://unsplash.com/photos/HzaT5l4Fzqc/download'
  ];
  $("#backgroundImage").attr('src',images[Math.floor(Math.random()*3)]);
  $(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
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
                        scrollTop: target.offset().top //-50
                      }, 1000);
          return false;
        }
      }
    });
  });
});

// http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links/
