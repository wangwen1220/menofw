!function(e){var t=(!!window.ActiveXObject&&!window.XMLHttpRequest,function(e){return"[object String]"===Object.prototype.toString.call(e)}),n=function(e){return t(e)?document.getElementById(e):e},i=function(e){e=e||window;var t=e.document;return null!==e.innerWidth?{w:e.innerWidth,h:e.innerHeight}:"CSS1Compat"===document.compatMode?{w:t.documentElement.clientWidth,h:t.documentElement.clientHeight}:{w:t.body.clientWidth,h:t.body.clientWidth}},s=function(e){var t=e.getBoundingClientRect(),n=t.height||t.bottom-t.top,s=t.width||t.right-t.left,o=i();return n&&s?t.top>o.h||t.bottom<0?!1:t.right<0||t.left>o.w?!1:!0:!1};e(function(){var t=(e("html"),e("#header"),e("#search")),i=e("#main"),o=(e("#mask"),e("#categories")),a=e("#cart"),d=e("#js-loading");if("undefined"!=typeof FastClick&&"undefined"!=typeof document.body&&FastClick.attach(document.body),t.data("$hidden",t.find(".js-hide")).on("focusin click",".js-key",function(){i.hasClass("js-hide")||(this.focus(),this.value="",t.siblings().addClass("js-hide"),t.data("$hidden").removeClass("js-hide"),t.find(".search-hot").hide())}).on("click",".js-cancel",function(){t.find(".js-key").val(""),t.find(".js-keylist").empty(),t.siblings().removeClass("js-hide"),t.data("$hidden").addClass("js-hide"),t.find(".search-hot").show()}).on("click",".js-clear",function(){t.find(".js-key").val("").focus(),t.find(".js-keylist").empty()}).on("keyup",".js-key",function(){var n=t.children("form").attr("action"),i=e.trim(t.find(".js-key").val()),s=t.find(".js-keylist");return i?(e.get(n,{key:i},function(t){var n=e.map(t,function(e){return e.suggestion}).join("");s.html(n)},"json"),void 0):(t.find(".js-keylist").empty(),void 0)}),e("#search-footer").on("click",".search-trigger",function(){t.find(".js-key").trigger("focusin")}),o.find(".slider").swipe({continuous:!1,callback:function(t,n){var i=e(n.parentNode.parentNode),s=i.next(".nav"),o=i.data("swipe"),a=o.getNumSlides();0===t?s.addClass("next").removeClass("prev"):t===a-1&&s.addClass("prev").removeClass("next")}}),o.on("click",".slider-wrap > .nav",function(){var t=e(this),n=t.prev().data("swipe");n[t.hasClass("next")?"next":"prev"]()}),o.children(".viewmore").on("click",function(){var t=e(this);t.hasClass("unfold")?t.text("All Categories").removeClass("unfold").prev().addClass("js-hide"):t.text("Hide Up").addClass("unfold").prev().removeClass("js-hide")}),a.on("click",".js-close",function(){return e(this.parentNode).addClass("fold"),!1}),i.find(".js-slider").swipe({auto:3e3}),document.addEventListener("touchmove",function(e){e.preventDefault()},!1),new IScroll("#js-scroller",{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,scrollerWidth:200,snapSpeed:400}),i.on("click",".search-result .actions .fold",function(){e(this).parents("section").toggleClass("unfold")}),i.on("click",".search-result .actions .cart",function(){var t=e(this),n=t.data("url"),i=a.find(".counter"),s=parseInt(i.text(),10);t.hasClass("added")?e.getJSON(n,{action:"del"},function(e){"success"===e.status&&(i.text(--s),t.removeClass("added"))}):e.getJSON(n,{action:"add"},function(e){"success"===e.status&&(i.text(++s),t.addClass("added"))})}),i.find(".search-result > .w-title").prev("section").addClass("nobd"),d.length){new Spinner({lines:17,length:0,width:3,radius:5,corners:0,rotate:0,direction:1,color:"#555",speed:1,trail:100,shadow:!1,hwaccel:!1,className:"spinner",zIndex:0,top:"50%",left:"50%"}).spin(e("<i/>").prependTo(d)[0]),template.config("escape",!1);var c=template.compile(n("tpl-prolist").innerHTML);e(window).on("DOMContentLoaded load resize scroll",function(){var t=d.data("url"),n=d.data("page")||1,i=d.data("loading")||!1;s(d[0])&&!i&&(d.data("loading",!0),e.getJSON(t,{page:n},function(e){"nomore"===e.status&&d.hide(),d.before(c(e)).data("page",++n).data("loading",!1)}))})}})}(window.Zepto||window.jQuery);