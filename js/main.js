jQuery(document).ready(function($) {
  // burger
  $('[data-burger]').click(function() {
    $('html').toggleClass("open");
    $(this).toggleClass("open");
    $('[data-nav]').toggleClass("open");
    $('body').toggleClass('open');
});
// scroll top
  $('[data-scoll]').on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  // closeSearch();
  
  //slider
  if (jQuery('[data-mainslider]').length > 0) {
      $('[data-mainslider]').slick({
          dots: false,
          speed: 300,
          arrows: false,
          slidesToShow: 1,
          variableWidth: true,
          // responsive: [{
          //     breakpoint: 768,
          //     settings: {
          //         slidesToShow: 1
          //     }
          // }, ]
      });
  }
  if (jQuery('[data-movie]').length > 0) {
    $('[data-movie]').slick({
        dots: false,
        speed: 300,
        slidesToShow: 4,
        infinite: true,
        prevArrow: '[data-movieprev]',
        nextArrow: '[data-movienext]',
        // responsive: [{
        //     breakpoint: 768,
        //     settings: {
        //         slidesToShow: 1
        //     }
        // }, ]
    });
}
if (jQuery('[data-recomend]').length > 0) {
  $('[data-recomend]').slick({
      dots: false,
      speed: 300,
      slidesToShow: 4,
      infinite: true,
      prevArrow: '[data-recomprev]',
      nextArrow: '[data-recomnext]',
      // responsive: [{
      //     breakpoint: 768,
      //     settings: {
      //         slidesToShow: 1
      //     }
      // }, ]
  });
}
  $('[data-florselect]').select2({
    width: '274',
    placeholder: 'Какой этаж',
    dropdownCssClass: 'select__dropdown',
    minimumResultsForSearch: Infinity,
    dropdownParent: $('[data-florparent]')
  })
  $('[data-shopsselect]').select2({
    width: '274',
    placeholder: 'Все магазины',
    dropdownCssClass: 'select__dropdown',
    minimumResultsForSearch: Infinity,
    dropdownParent: $('[data-shopparent]')
  })
  // $('.select2-container').click(function(){
  //   if ($('.select2-container').hasClass('select2-container--open')) {
  //     $('.select2-container.select2-container--open').parent().css({'box-shadow':'5px 5px 20px rgb(0 0 0 / 15%);'})
  //   }
  // })


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