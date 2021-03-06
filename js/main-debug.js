////////////////////////////////////////////////////////////////////////////////
// 名称: 主程序
// 作者: Steven
// 说明: Require Zepto
// 更新: 2014-8-1
////////////////////////////////////////////////////////////////////////////////

// Main
(function($) {
  // Helpers
  // var isIE6 = navigator.userAgent.indexOf('MSIE 6.0') !== -1;
  // var isIE6 = !!window.ActiveXObject && !window.XMLHttpRequest;
  // var isIE10 = navigator.userAgent.indexOf('MSIE 10.0') !== -1;
  // var isIE11 = /\btrident\/[0-9].*rv[ :]11\.0/.test(navigator.userAgent);
  // var isIE678 = /\bMSIE [678]\.0\b/.test(navigator.userAgent);

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
    el = el.parentNode;

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
    w = w || window;
    var d = w.document;

    if (w.innerWidth !== null) return {
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

  // 分享到
  var shareTo = function(site, title, content, imgsrc) {
    var url = window.location.href.split('#')[0];
    title = title || document.title;
    content = content || $('meta[name=description]')[0].content;
    imgsrc = imgsrc || $(this).data('src') || '';

    url = encodeURIComponent(url);
    title = encodeURIComponent(title);
    content = encodeURIComponent(content);
    imgsrc = encodeURIComponent(imgsrc);

    switch (site) {
      case 'blogger':
        url = 'http://www.blogger.com/blog_this.pyra?t=' + title + '&u=' + url;
        break;
      case 'linkedin':
        url = 'http://www.linkedin.com/cws/share?url=' + url + '&title=' + title;
        break;
      case 'delicious':
        url = 'http://www.delicious.com/post?title=' + title + '&url=' + url;
        break;
      case 'digg':
        url = 'http://digg.com/submit?phase=2&url=' + url + '&title=' + title + '&bodytext=' + content + '&topic=tech_deals';
        break;
      case 'reddit':
        url = 'http://reddit.com/submit?url=' + url + '&title=' + title;
        break;
      case 'furl':
        url = 'http://www.furl.net/savedialog.jsp?t=' + title + '&u=' + url;
        break;
      case 'rawsugar':
        url = 'http://www.rawsugar.com/home/extensiontagit/?turl=' + url + '&tttl=' + title;
        break;
      case 'stumbleupon':
        url = 'http://www.stumbleupon.com/submit?url=' + url + '&title=' + title;
        break;
      case 'blogmarks':
        break;
      case 'facebook':
        url = 'http://www.facebook.com/share.php?src=bm&v=4&u=' + url + '&t=' + title;
        break;
      case 'technorati':
        url = 'http://technorati.com/faves?sub=favthis&add=' + url;
        break;
      case 'spurl':
        url = 'http://www.spurl.net/spurl.php?v=3&title=' + title + '&url=' + url;
        break;
      case 'simpy':
        url = 'http://www.simpy.com/simpy/LinkAdd.do?title=' + title + '&href=' + url;
        break;
      case 'ask':
        break;
      case 'google':
        url = 'http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=' + url + '&title=' + title;
        break;
      case 'netscape':
        url = 'http://www.netscape.com/submit/?U=' + url + '&T=' + title + '&C=' + content;
        break;
      case 'slashdot':
        url = 'http://slashdot.org/bookmark.pl?url=' + url + '&title=' + title;
        break;
      case 'backflip':
        url = 'http://www.backflip.com/add_page_pop.ihtml?title=' + title + '&url=' + url;
        break;
      case 'bluedot':
        url = 'http://bluedot.us/Authoring.aspx?u=' + url + '&t=' + title;
        break;
      case 'kaboodle':
        url = 'http://www.kaboodle.com/za/selectpage?p_pop=false&pa=url&u=' + url;
        break;
      case 'squidoo':
        url = 'http://www.squidoo.com/lensmaster/bookmark?' + url;
        break;
      case 'twitter':
        url = 'http://twitter.com/share?url=' + url + '&text=' + title;
        break;
      case 'pinterest':
        url = 'http://pinterest.com/pin/create/button/?url=' + url + '&media=' + imgsrc + '&description=' + title;
        break;
      case 'vk':
        url = 'http://vk.com/share.php?url=' + url;
        break;
      case 'bluedot':
        url = 'http://blinkbits.com/bookmarklets/save.php?v=1&source_url=' + url + '&title=' + title;
        break;
      case 'blinkList':
        url = 'http://blinkbits.com/bookmarklets/save.php?v=1&source_url=' + url + '&title=' + title;
        break;
      case 'googleplus':
        url = 'https://plus.google.com/share?url=' + url + '&t=' + title;
        break;
      default:
        // alert('This share undefined!');
        return;
    }

    window.open(url, 'sharewindow');
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
    var $inquiryForm = $('#js-inquiry-form');
    var $inquirySign = $('#js-signinbox');

    // use fastclick
    FastClick.attach(document.body);
    // if (typeof FastClick !== 'undefined' && typeof document.body !== 'undefined') {
    //   FastClick.attach(document.body);
    // }

    // 头部搜索按钮
    $header.on('focusin click', '.search', function() {
      $search.find('.js-key').trigger('focusin');
    });

    // Global: 搜索
    $search.data('$hidden', $search.find('.js-hide'))
      .on('focusin click', '.js-key', function() {
        // console.log('msg');
        if ($main.hasClass('js-hide')) {
          return;
        }

        // $(this).trigger('focusin');
        this.focus(); // 在手机浏览器下无效
        this.value = '';
        $search.siblings().addClass('js-hide');
        $search.data('$hidden').removeClass('js-hide');
        $search.find('.search-hot').hide();
      })
      .on('click', '.js-cancel', function() {
        $search.find('.js-key').val('');
        $search.find('.js-clear').removeClass('fn-db');
        $search.find('.js-keylist').empty();
        $search.siblings().removeClass('js-hide');
        $search.data('$hidden').addClass('js-hide');
        $search.find('.search-hot').show();
      })
      .on('click', '.js-clear', function() {
        $(this).removeClass('fn-db');
        $search.find('.js-key').val('').focus();
        $search.find('.js-keylist').empty();
      })
      .on('keyup', '.js-key', function() {
        var url = $search.children('form').attr('action');
        var key = $.trim($search.find('.js-key').val());
        var $keylist = $search.find('.js-keylist');
        var $clear = $search.find('.js-clear');

        if (!key) {
          $clear.removeClass('fn-db');
          $search.find('.js-keylist').empty();
          return;
        } else {
          $clear.addClass('fn-db');
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
    $main.on('click', '.search-result .actions .cart, .js-addto-cart', function() {
      var $this = $(this);
      var url = $this.data('url');
      var $counter = $cart.find('.counter');
      var counter = parseInt($counter.text(), 10);

      if ($this.hasClass('added')) {
        $.getJSON(url, {action: 'del'}, function(data) {
          if (data.status === 'success') {
            $counter.text(--counter);
            if (counter <= 0) {
              $cart.addClass('js-hide');
            }
            $this.removeClass('added');
          }
        });
      } else {
        $.getJSON(url, {action: 'add'}, function(data) {
          if (data.status === 'success') {
            $counter.text(++counter);
            if (counter > 0) {
              $cart.removeClass('js-hide');
            }
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
        var loading = $loading.data('loading') || false;

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

    // Details: 产品图片 Slider
    (function() {
      var $scroller = $('#js-scroller');

      if (!$scroller.length) return;

      var $list = $scroller.children('.list');
      var len = $list.children('.item').length;
      var width = $list.children('.item').width();
      var hammerScroller = new Hammer($list[0]);

      $list.width(width * len);

      hammerScroller.on('swipeleft', function(e) {
        var left = $list.position().left;
        // console.log(left / width);

        if (Math.abs(left / width) < len - 1) {
          $list.animate({
            translateX: left - width + 'px'
          }, 200, 'ease-in-out');
        }
      });

      hammerScroller.on('swiperight', function(e) {
        var left = $list.position().left;
        // console.log(left / width);

        if (Math.abs(left / width) > 0) {
          $list.animate({
            translateX: left + width + 'px'
          }, 200, 'ease-in-out');
        }
      });
    })();

    // document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    // new IScroll('#js-scroller', {
    //   scrollX: true,
    //   scrollY: false,
    //   momentum: false,
    //   snap: true,
    //   scrollerWidth: 200,
    //   snapSpeed: 400
    //   // keyBindings: true,
    //   // indicators: {
    //   //   el: document.getElementById('indicator'),
    //   //   resize: false
    //   // }
    // });
    // $main.find('.js-slider-pics').swipe({
    //   // startSlide: 2,
    //   slideWidth: 220,
    //   // speed: 400,
    //   // auto: 3000
    //   continuous: false,
    //   // disableScroll: false,
    //   // stopPropagation: false,
    //   init: function(index, elem) {
    //     var $elem = $(elem);
    //     $elem.addClass('inview').siblings().removeClass('inview');
    //     $elem.next().addClass('inview');
    //     $elem.prev().addClass('inview');
    //   },
    //   callback: function(index, elem) {
    //     var $elem = $(elem);
    //     $elem.addClass('inview').siblings().removeClass('inview');
    //     $elem.next().addClass('inview');
    //     $elem.prev().addClass('inview');
    //   }
    //   // transitionEnd: function(index, elem) {}
    // });

    // Details: learn more
    $main.on('click', '.proshow .learn-more', function() {
      $(this).toggleClass('unfold').prev().toggleClass('js-hide');

      if (this.classList.contains('unfold')) {
        this.innerHTML = 'Hide up';
      } else {
        this.innerHTML = 'Learn More';
      }
    });

    // Details: 分享到
    $('#js-share').on('click', 'a', function() {
      shareTo(this.className);
    });

    // Details: Add to cart
    $('#contact-bar').on('click', '.cart', function() {
      var $this = $(this);
      var $counter = $cart.find('.counter');
      var counter = parseInt($counter.text(), 10);

      if ($this.hasClass('added')) {
        $counter.text(--counter);
        if (counter <= 0) {
          $cart.addClass('js-hide');
        }
        $this.removeClass('added');
      } else {
        $counter.text(++counter);
        if (counter > 0) {
          $cart.removeClass('js-hide');
        }
        $this.addClass('added');
      }
    }).on('click', '.addto-products', function() {
      var $this = $(this);
      var url = $this.data('url');

      if (!$this.hasClass('added')) {
        $.getJSON(url, {action: 'add'}, function(data) {
          if (data.status === 'success') {
            $this.addClass('added').text('In My Products');
          }
        });
        return false;
      }
    });

    // 询盘页面: 显示/隐藏 templates
    if (window.inquiryTpls) {
      // 选择 templates handler
      var labelHandler = function(event) {
        // console.log('test');
        var $this = $(this);
        var $textarea = $inquiryForm.find('.msg > textarea');
        var tpl = inquiryTpls[$this.data('tpl')];
        var baseTplArr = $.trim($textarea.val()).split('\n') || inquiryTpls.base;
        var i = $this.parent().data('index') || baseTplArr.indexOf('I would like some more details:') + 1;

        if (!$this.hasClass('selected')) {
          // 如果存在，先删除
          if (baseTplArr.indexOf(tpl) > -1) {
            baseTplArr.splice(baseTplArr.indexOf(tpl), 1);
          }
          // 添加模板
          baseTplArr.splice(i, 0, tpl);
          i++;
        } else {
          if (baseTplArr.indexOf(tpl) > -1) {
            // baseTplArr.splice($.inArray(tpl, baseTplArr), 1);
            baseTplArr.splice(baseTplArr.indexOf(tpl), 1);
            // console.log($.inArray(baseTplArr, tpl));
          }
          i--;
        }

        $this.toggleClass('selected').parent().data('index', i);

        // 填充模板内容到文本域
        $textarea.val(baseTplArr.join('\n'));
        // $textarea.val(1);

        // 修复在手机上会触发两次的问题
        if (event) event.preventDefault();
        // $this.children('input').prop('checked', true);
      };

      // 文本框添加默认值
      if (!$inquiryForm.find('.msg > textarea').val()) {
        $inquiryForm.find('.msg > textarea').val(inquiryTpls.base.join('\n'));
      }

      $inquiryForm.on('click', '.tpls > .switcher', function() {
        $(this).toggleClass('unfold').next().toggleClass('js-hide');

        if (this.classList.contains('unfold')) {
          this.innerHTML = 'Hide';
        } else {
          this.innerHTML = 'Show';
        }
      }).on('click', '.tpls-wrap > label', labelHandler);

      // 触发选中的标签点击
      $inquiryForm.find('.tpls-wrap > label[data-status=selected]').each(labelHandler);

      // 表单提交
      $inquiryForm.on('submit', function() {
        // alert($inquiryForm.serialize());
        var $error = $inquiryForm.find('.w-tips.error');

        if (!islogin) {
          window.location.href = this.action;
          return false;
        } else if ($error.length) {
          $error.prev().focus();
          return false;
        }
      }).on('keyup blur', '.msg > textarea', function(event) {
        var $this = $(this);
        var len = $.trim($this.val()).length;
        var $tips = $this.next('.w-tips');
        var $submit = $inquiryForm.find('.submit > button');

        if (len < 5 || len > 8000) {
          // $inquiryForm.addClass('invalid');
          $tips = $tips.length ? $tips : $('<i class="w-tips"/>').insertAfter($this);
          $tips.addClass('error').html('Your message must be between 5 and 8000 characters');
          $submit.prop('disabled', len === 0);
        } else {
          // $inquiryForm.removeClass('invalid');
          $tips.remove();
          $submit.prop('disabled', false);
        }
      });
    }

    // 通用：刷新验证码
    $('#js-codeimg').on('click', function() {
      this.src = this.src.split('?')[0] + '?' + new Date();
    });

    // 询盘登录注册页：切换登录注册表单
    $inquirySign.children('nav').on('click', 'a', function() {
      var $this = $(this);
      var $form = $this.parent().siblings('form');
      var i = $this.index();

      $this.addClass('on').siblings('a').removeClass('on');
      $form.eq(i).addClass('on').siblings('form').removeClass('on');
      // $inquirySign.css('padding-bottom', $form[i].clientHeight + 'px');
      // setTimeout(function() {
      //   $form.eq(i).removeClass('js-hide').siblings('form').addClass('js-hide');
      // }, 600);
    }).find('a').first().trigger('click');

    // 动画结束时隐藏表单
    // $inquirySign.children('form').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
    //   // console.log($inquirySign.children('form').not('.on').index());
    //   // console.log($inquirySign.children('form.on').siblings('form').length);
    //   $inquirySign.children('form.on').removeClass('js-hide').siblings('form').addClass('js-hide');
    //   // $inquirySign.css('padding-bottom', $inquirySign.children('form.on')[0].clientHeight + 'px');
    // });

    // 通用表单验证函数
    var formValidHandler = function(e) {
      var $this = $(this).filter('[required]');
      var $form = $this.closest('form');
      var $formitem = $this.closest('section');
      var $error = $formitem.find('.w-tips.error');
      // var $submit = $formitem.find('[type=submit]');
      // 调用系统的验证结果
      var isvalid = this.checkValidity();
      var val = $.trim($this.val());
      var len = val.length;
      var msg = len === 0 ? $this.data('msg-req') : $this.data('msg-err');
      var ajaxurl = $this.data('ajaxurl');
      var ajaxchecking = $this.data('ajaxchecking') || false;
      // console.log(isvalid);
      // console.log(this.required);
      // this.setCustomValidity('test tips');
      // console.log(ajaxchecking);

      // 如果 ajax 验证中则不作处理
      if (ajaxchecking) return;

      if (!isvalid) {
        $this.addClass('invalid').focus();
        // $tips = $tips.length ? $tips : $('<i class="w-tips"/>').appendTo($formitem);
        $formitem.append('<i class="w-tips error">' + msg + '</i>');
        // $submit.prop('disabled', !isvalid);
      } else if (ajaxurl) {
        $this.data('ajaxchecking', true);
        $.getJSON(ajaxurl, {name: val}, function(data) {
          if (data.status === 'error') {
            $this.addClass('invalid').focus();
            $formitem.append('<i class="w-tips error">' + data.msg + '</i>');
            // $submit.prop('disabled', !isvalid);
          } else {
            $this.removeClass('invalid');
            $error.remove();
            // $submit.prop('disabled', false);
          }
        });
      } else {
        $this.removeClass('invalid');
        $error.remove();
        // $submit.prop('disabled', false);
      }
    };

    // 询盘登录注册页：表单验证 TODO: 使用通用表单验证函数
    $inquirySign.children('form').on('change', 'input', function(e) {
      var $this = $(this);
      var $form = $this.closest('form');
      var $formitem = $this.closest('section');
      var $error = $formitem.find('.w-tips.error');
      // var $submit = $formitem.find('[type=submit]');
      var isvalid = this.checkValidity();
      var val = $.trim($this.val());
      var len = val.length;
      var msg = len === 0 ? $this.data('msg-req') : $this.data('msg-err');
      var ajaxurl = $this.data('ajaxurl');
      var ajaxchecking = $this.data('ajaxchecking') || false;
      // console.log(isvalid);
      // console.log(this.required);
      // this.setCustomValidity('test tips');
      // console.log(ajaxchecking);

      if (ajaxchecking) return;

      // 如果有多个错误提示
      if ($formitem.hasClass('username')) {
        // $error.filter(':contains("' + $this.attr('placeholder').toLowerCase() + '"")').remove();
        $error.filter(function() {
          return $(this).text().indexOf($this.attr('placeholder').toLowerCase()) !== -1;
        }).remove();
      } else {
        $error.remove();
      }

      if (!isvalid) {
        $this.addClass('invalid');
        // $tips = $tips.length ? $tips : $('<i class="w-tips"/>').appendTo($formitem);
        $formitem.append('<i class="w-tips error">' + msg + '</i>');
        // $submit.prop('disabled', !isvalid);
      } else if (ajaxurl) {
        $this.data('ajaxchecking', true);
        $.getJSON(ajaxurl, {name: val}, function(data) {
          if (data.status === 'error') {
            // msg = data.msg;
            $this.addClass('invalid');
            $formitem.append('<i class="w-tips error">' + data.msg + '</i>');
            // $submit.prop('disabled', !isvalid);
          } else {
            $this.removeClass('invalid');
            // $error.remove();
            // $submit.prop('disabled', false);
          }
        });
      } else {
        $this.removeClass('invalid');
        // $error.remove();
        // $submit.prop('disabled', false);
      }
    }).on('change', '#js-country', function() {
      var $img = $(this).next('img');
      var src = $img.attr('src');
      var ext = src.slice(-4);
      // var name = this.value.toLowerCase();
      var name = this.options[this.selectedIndex].getAttribute('data-id').toLowerCase();

      $img.attr('src', src.slice(0, src.lastIndexOf('/') + 1) + name + ext);
    }).on('focus', 'input, select', function() {
      $(this).parent().trigger('focus');
    }).on('submit', function() {
      var $this = $(this);
      var $error = $this.children('.w-tips.error');

      if ($this.find('.invalid').length) return false;
      $('input', this).trigger('change');
      if ($this.find('.invalid').length) return false;

      // AJAX 提交
      // $error.remove();
      $.ajax({
        type: 'POST',
        url: $this.attr('action'),
        data: $this.serializeArray(),
        dataType: 'json',
        success: function(data) {
          // console.log(data);
          if (data.status === 'error') {
            $error = $error.length ? $error : $('<i class="w-tips error"/>').prependTo($this);
            // $this.prepend('<i class="w-tips error">' + data.msg + '</i>');
            $error.html(data.msg);
            // $submit.prop('disabled', true);
          } else {
            window.location = data.msg;
          }
        }
      });

      return false;
    }).attr('novalidate', 'novalidate');

    // 店铺－Call Me
    $('#js-callme').on('change', 'input', formValidHandler).on('submit', function() {
      var $this = $(this);

      if ($this.find('.invalid').length) return false;
      $('input', this).each(function() {
        $(this).trigger('change');
        if ($this.find('.invalid').length) {
          return false;
        }
      });
      if ($this.find('.invalid').length) return false;
    }).attr('novalidate', 'novalidate');

    // 倒计时回首页
    (function() {
      var $countdown = $('#js-countdown');
      var i = 5, timer;
      if ($countdown.length) {
        timer = setInterval(function() {
          $countdown.text(i--);
          if (i < 1) {
            clearInterval(timer);
            window.location.href = '/';
          }
        }, 1000);
      }
    })();

    // 询盘篮
    $('#js-basket').on('click', 'ul > li > i', function(e) {
      var $this = $(this);
      var $sendbtn = $('#js-basket').find('.btn-send');
      var url = $this.data('url');

      $.getJSON(url, {action: 'del'}, function(d) {
        if (d.status === 'success') {
          $this.parent().fadeOut().remove();
          if (d.data) $sendbtn.attr('href', d.data);
        } else {
          alert('Delete failed!');
        }
      });
    });
  });
})(window.Zepto || window.jQuery);