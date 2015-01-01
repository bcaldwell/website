$(window).ready(function () {
  var images = [
    'assets/img/backgrounds/background.jpg',
    'assets/img/backgrounds/background1.jpg',
    'assets/img/backgrounds/background2.jpg',
    'assets/img/backgrounds/background3.jpg',
    'assets/img/backgrounds/background4.jpg',
    'assets/img/backgrounds/background5.jpg',
    'assets/img/backgrounds/background6.jpg',
    'assets/img/backgrounds/background7.jpg',
    'assets/img/backgrounds/background8.jpg',
    'assets/img/backgrounds/background9.jpg',
    'assets/img/backgrounds/background10.jpg'
  ];
  $("#backgroundImage").attr('src',images[Math.floor(Math.random()*11)]);
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
