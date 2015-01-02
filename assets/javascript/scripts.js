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
  'assets/img/backgrounds/background10.jpg',
  'assets/img/backgrounds/background11.jpg'
  ];
  $("#backgroundImage").attr('src',images[Math.floor(Math.random()*12)]);

  // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  //   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  //   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  // })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  // ga('create', 'UA-58152127-1', 'auto');
  // ga('send', 'pageview');

  if ($(window).width() < 970) {
    $(".subtitle").css("top",370);
  };

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
