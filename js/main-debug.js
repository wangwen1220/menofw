////////////////////////////////////////////////////////////////////////////////
// 名称: 主程序
// 作者: Steven
// 说明: Require Zepto
// 更新: 2014-8-1
////////////////////////////////////////////////////////////////////////////////

// Main
(function($) {
  // Helpers
  var isIE6 = !!window.ActiveXObject && !window.XMLHttpRequest;

  var isString = function(val) {
    return Object.prototype.toString.call(val) === '[object String]';
  };

  var $id = function(id) {
    // return 'string' === typeof id ? document.getElementById(id) : id;
    return isString(id) ? document.getElementById(id) : id;
  };

  // It will work if an element is hidden inside a scroll-able container.
  var visibleY = function(el) {
    var top = el.getBoundingClientRect().top;
    var rect;
    var el = el.parentNode;

    do {
      rect = el.getBoundingClientRect();
      if (top <= rect.bottom === false)
        return false;
      el = el.parentNode;
    } while (el != document.body);

    // Check its within the document viewport
    return top <= document.documentElement.clientHeight;
  };

  // 更好的解决方案
  var getViewportSize = function(w) {
    var w = w || window;
    var d = w.document;

    if (w.innerWidth != null) return {
      w: w.innerWidth,
      h: w.innerHeight
    };

    if (document.compatMode === 'CSS1Compat') {
      return {
        w: d.documentElement.clientWidth,
        h: d.documentElement.clientHeight
      };
    }

    return {
      w: d.body.clientWidth,
      h: d.body.clientWidth
    };
  };

  var isViewportVisible = function(el) {
    var box = el.getBoundingClientRect();
    var height = box.height || (box.bottom - box.top);
    var width = box.width || (box.right - box.left);
    var viewport = getViewportSize();

    if (!height || !width) return false;
    if (box.top > viewport.h || box.bottom < 0) return false;
    if (box.right < 0 || box.left > viewport.w) return false;
    return true;
  };

  // 文档加载完执行
  $(function() {
    // 通用变量
    var $html = $('html');
    var $header = $('#header');
    var $search = $('#search');
    var $main = $('#main');
    var $mask = $('#mask');
    var $cats = $('#categories');
    var $cart = $('#cart');
    var $loading = $('#js-loading');

    // use fastclick
    // FastClick.attach(document.body);
    if (typeof FastClick !== 'undefined' && typeof document.body !== 'undefined') {
      FastClick.attach(document.body);
    }

    // Global: 搜索
    $search.data('$hidden', $search.find('.js-hide'))
      .on('focusin click', '.js-key', function() {
        // console.log('msg');
        if ($main.hasClass('js-hide')) {
          return;
        }

        this.focus();
        this.value = '';
        $search.siblings().addClass('js-hide');
        $search.data('$hidden').removeClass('js-hide');
        $search.find('.search-hot').hide();
      })
      .on('click', '.js-cancel', function() {
        $search.find('.js-key').val('');
        $search.find('.js-keylist').empty();
        $search.siblings().removeClass('js-hide');
        $search.data('$hidden').addClass('js-hide');
        $search.find('.search-hot').show();
      })
      .on('click', '.js-clear', function() {
        $search.find('.js-key').val('').focus();
        $search.find('.js-keylist').empty();
      })
      .on('keyup', '.js-key', function() {
        var url = $search.children('form').attr('action');
        var key = $.trim($search.find('.js-key').val());
        var $keylist = $search.find('.js-keylist');

        if (!key) {
          $search.find('.js-keylist').empty();
          return;
        }

        $.get(url, {
          key: key
        }, function(data) {
          var html = $.map(data, function(item, index) {
            return item.suggestion;
          }).join('');

          $keylist.html(html);
        }, 'json');
      });

    // Global: 底部搜索
    $('#search-footer').on('click', '.search-trigger', function() {
      // $search.find('.js-key').click();
      $search.find('.js-key').trigger('focusin');
    });

    // Home: 产品分类 Slider
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

    // Home: 显示全部分类
    $cats.children('.viewmore').on('click', function() {
      var $ths = $(this);

      if ($ths.hasClass('unfold')) {
        $ths.text('All Categories').removeClass('unfold')
          // .prev().slideUp(500);
          .prev().addClass('js-hide');
      } else {
        $ths.text('Hide Up').addClass('unfold')
          // .prev().slideDown(1000);
          .prev().removeClass('js-hide');
      }
    });

    // Global: 购物车
    $cart.on('click', '.js-close', function(e) {
      // $(this.parentNode.parentNode).remove();
      $(this.parentNode).addClass('fold');

      return false;
    });

    // Home: 推荐产品 Slider
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

    // Search result: 展开/折叠联系信息
    $main.on('click', '.search-result .actions .fold', function() {
      $(this).parents('section').toggleClass('unfold');
    });

    // Search result: 加入购物车
    $main.on('click', '.search-result .actions .cart', function() {
      var $this = $(this);
      var url = $this.data('url');
      var $counter = $cart.find('.counter');
      var counter = parseInt($counter.text(), 10);

      if ($this.hasClass('added')) {
        $.getJSON(url, {action: 'del'}, function(data) {
          if (data.status === 'success') {
            $counter.text(--counter);
            $this.removeClass('added');
          }
        });
      } else {
        $.getJSON(url, {action: 'add'}, function(data) {
          if (data.status === 'success') {
            $counter.text(++counter);
            $this.addClass('added');
          }
        });
      }
      // $this.toggleClass('added');
    });

    // 标题前的 section
    $main.find('.search-result > .w-title').prev('section').addClass('nobd');

    // Search result: 下拉到指定元素显示时刷新
    if ($loading.length) {
      // loading 进度图标
      new Spinner({
        lines: 17, // The number of lines to draw
        length: 0, // The length of each line
        width: 3, // The line thickness
        radius: 5, // The radius of the inner circle
        corners: 0, // Corner roundness (0..1)
        rotate: 0, // The rotation offset
        direction: 1, // 1: clockwise, -1: counterclockwise
        color: '#555', // #rgb or #rrggbb or array of colors
        speed: 1, // Rounds per second
        trail: 100, // Afterglow percentage
        shadow: false, // Whether to render a shadow
        hwaccel: false, // Whether to use hardware acceleration
        className: 'spinner', // The CSS class to assign to the spinner
        zIndex: 0, // The z-index (defaults to 2000000000 or 2e9)
        top: '50%', // Top position relative to parent
        left: '50%' // Left position relative to parent
      }).spin($('<i/>').prependTo($loading)[0]);
      // return;

      template.config('escape', false);
      var render = template.compile($id('tpl-prolist').innerHTML);

      $(window).on('DOMContentLoaded load resize scroll', function() {
        var url = $loading.data('url');
        var page = $loading.data('page') || 1;
        var loading = $loading.data('loading') || false;;

        if (isViewportVisible($loading[0]) && !loading) { // 进入视口且不在加载中
          // console.log('进入视口');
          $loading.data('loading', true);

          $.getJSON(url, {page: page}, function(data) {
            // console.log(data);
            // 给关键字添加标识
            // $.each(data.list, function(i, v) {
            //   var kws = v.keywords;
            //   if (kws) {
            //     // v.title = v.title.replace(kws, '<strong>' + kws + '</strong>');
            //     v.title = v.title.replace(new RegExp(kws, 'ig'), '<strong>$&</strong>');
            //   }
            //   console.log(v.title)
            // });

            // 如果没有更多产品
            if (data.status === 'nomore') $loading.hide();

            $loading.before(render(data)).data('page', ++page).data('loading', false);
          });
        }
      });

      // $loading.inViewport(function() {
      //   console.log('进入视口');
      //   var $loading = $(this);
      //   var url = $loading.data('url');
      //   var page = $loading.data('page') || 1;

      //   $.getJSON(url, {pagenum: page}, function(data) {
      //    var html;
      //    // console.log(data);
      //    if (data.length) {
      //       html = (function(data) { // 数据渲染
      //         var liArr = [];
      //         $.each(data, function() {
      //           liArr.push(this.html);
      //         });
      //         return liArr.join('');
      //       })(data);

      //       $loading.before(html).data('page', ++page);
      //     } else {
      //       $loading.remove();
      //     }

      //     // 如果加载按钮还在视口中
      //     // if ($loading.is(':visible')) {
      //     //   $loading.trigger('inview.scrollspy.amui');
      //     // }
      //   });
      // }, function(){
      //   console.log('离开视口');
      // });
    }

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
})(window.Zepto || window.jQuery);