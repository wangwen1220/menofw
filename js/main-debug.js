////////////////////////////////////////////////////////////////////////////////
// 名称: 主程序
// 作者: Steven
// 链接: http://wenwang.org/
// 说明: Require jQuery
// 更新: 2014-8-1
////////////////////////////////////////////////////////////////////////////////

// Main
(function($) {
  // Helpers
  var isIE6 = !!window.ActiveXObject && !window.XMLHttpRequest;

  function log(msg) {
    window.console && console.log(msg);
  }

  function isString(val) {
    return Object.prototype.toString.call(val) === '[object String]';
  }

  function $id(id) {
    // return 'string' === typeof id ? document.getElementById(id) : id;
    return isString(id) ? document.getElementById(id) : id;
  }

  // 文档加载完执行
  $(function() {
    // 通用变量
    var $html = $('html');
    var $header = $('#header');
    var $search = $('#search');
    var $main = $('#main');
    var $mask = $('#mask');
    var $cats = $('#categories');

    // use fastclick
    // FastClick.attach(document.body);
    if (typeof FastClick !== 'undefined' && typeof document.body !== 'undefined') {
      FastClick.attach(document.body);
    }

    // 搜索
    $search.on('click', '.js-searchtxt', function(e) {
      // $(e.delegateTarget).siblings().hide();
      $search.siblings().hide();
    });

    // 产品分类 Slider
    $cats.find('.slider').swipe({
      // startSlide: 2,
      // speed: 400,
      // auto: 3000,
      continuous: false,
      // disableScroll: false,
      // stopPropagation: false,
      callback: function(index, elem) {
        var $slider = $(elem.parentNode.parentNode);
        var $nav = $slider.next('.nav');
        var swipe = $slider.data('swipe');
        var length = swipe.getNumSlides();

        if (index === 0) {
          $nav.addClass('next').removeClass('prev');
        } else if (index === length - 1) {
          $nav.addClass('prev').removeClass('next');
        }
      },
      // transitionEnd: function(index, elem) {}
    });

    $cats.on('click', '.slider-wrap > .nav', function() {
      var $this = $(this);
      var swipe = $this.prev().data('swipe');

      swipe[$this.hasClass('next') ? 'next' : 'prev']();
    });

    // 显示全部分类
    $cats.children('.viewmore').on('click', function() {
      $(this).hide().siblings('.hidden').removeClass('hidden');
    });

    // 购物车
    $('#inquiries').on('click', '.js-close', function(e) {
      $(this.parentNode).remove();
      return false;
    });

    // 推荐产品 Slider
    $main.find('.js-slider').swipe({
      // startSlide: 2,
      // speed: 400,
      auto: 3000
      // continuous: false,
      // disableScroll: false,
      // stopPropagation: false,
      // callback: function(index, elem) {},
      // transitionEnd: function(index, elem) {}
    });

    // 设置文章字体大小
    // $('#js-setfont').on('tap', function(event) {
    //   event.preventDefault();
    //   var $ths = $(this);
    //   var $art = $('#js-art');
    //   var txt = $ths.text();

    //   if (txt === 'T小') {
    //     $art.css('font-size', '18px');
    //     $ths.text('T中');
    //   } else if (txt === 'T中') {
    //     $art.css('font-size', '20px');
    //     $ths.text('T大');
    //   } else if (txt === 'T大') {
    //     $art.css('font-size', '16px');
    //     $ths.text('T小');
    //   }
    // });

    // 返回顶部
    // $gotop.on('click', function(event) {
    //   window.scrollTo(0, 0);
    //   return false;
    //   // $('html, body').scrollTop(0);
    //   // $('html, body').animate({
    //   //   scrollTop: 0
    //   // }, 600);
    // });

    // 转到
    // $('.goto').click(function() {
    //   $('html, body').animate({
    //     scrollTop: $($(this).attr('href')).offset().top
    //   }, {
    //     duration: 500,
    //     easing: 'swing'
    //   });
    //   return false;
    // });
  });
})(window.Zepto || jQuery);