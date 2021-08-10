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
if (jQuery('[data-eat]').length > 0) {
  $('[data-eat]').slick({
      dots: false,
      speed: 300,
      slidesToShow: 1,
      infinite: true,
      prevArrow: '[data-eatprev]',
      nextArrow: '[data-eatnext]',
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

  var label = $("[data-input]").parent().find('label span').each(function() {$(this).text()});
  var labelText = $("[data-text]").parent().find('label span').text();
  console.log(labelText);
  $("[data-input]").change(function (){
    $(this).each(function(){
      input = $(this).val();
      var parent = $(this).parent().index();
      if(input) {
        $(this).parent().find('label').html(label[parent]);
        $(this).parent().removeClass('alert');
        $(this).parent().find('label').addClass('checked')
      } else {
        $(this).attr('placeholder','');
        $('[data-text]').parent().find('label').html(labelText);
        $(this).parent().find('label').removeClass('checked')
      }
    });
  });
  function requ(){
    input = $(this).val();
    if(!input) {
      $(this).parent().addClass('alert');
      $(this).parent().find('label').text('Ошибка заполнения');
      $(this).attr('placeholder','Обязательное поле')
    } else {
      $(this).parent().removeClass('alert');
      $(this).attr('placeholder','')
    }
  };
  $("[data-subm]").click(function(){
    $("[data-input]").each(requ);
    $("[data-text]").each(requ);
  });
  
});