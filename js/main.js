jQuery(document).ready(function($) {
  // burger
  $('[data-burger]').click(function() {
    $('html').toggleClass("open");
    $(this).toggleClass("open");
    $('[data-nav]').toggleClass("open");
    $('body').toggleClass('open');
});


  // closeSearch();
  
  //slider
  // if (jQuery('[data-review]').length > 0) {
  //     $('[data-review]').slick({
  //         dots: false,
  //         speed: 300,
  //         slidesToShow: 1,
  //         rows: 2,
  //         // responsive: [{
  //         //     breakpoint: 768,
  //         //     settings: {
  //         //         slidesToShow: 1
  //         //     }
  //         // }, ]
  //     });
  // }

  
   //miss click burger
   function closeSearch () {
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("[data-blkscr]"); // тут указываем ID элемента
      if (div.is(e.target)) { // и не по его дочерним элементам
        $('body').removeClass('open');
        $('html').removeClass("open");
        $('[data-search]').next().removeClass('viewed');
        $('[data-burger]').removeClass("open");
        $('[data-nav]').removeClass("open");
      }
    });
  };
  
});