!function(e){var t=(!!window.ActiveXObject&&!window.XMLHttpRequest,function(e){return"[object String]"===Object.prototype.toString.call(e)}),s=function(e){return t(e)?document.getElementById(e):e},a=function(e){e=e||window;var t=e.document;return null!==e.innerWidth?{w:e.innerWidth,h:e.innerHeight}:"CSS1Compat"===document.compatMode?{w:t.documentElement.clientWidth,h:t.documentElement.clientHeight}:{w:t.body.clientWidth,h:t.body.clientWidth}},i=function(e){var t=e.getBoundingClientRect(),s=t.height||t.bottom-t.top,i=t.width||t.right-t.left,n=a();return s&&i?t.top>n.h||t.bottom<0?!1:t.right<0||t.left>n.w?!1:!0:!1},n=function(t,s,a,i){var n=window.location.href.split("#")[0];switch(s=s||document.title,a=a||e("meta[name=description]")[0].content,i=i||e(this).data("src")||"",n=encodeURIComponent(n),s=encodeURIComponent(s),a=encodeURIComponent(a),i=encodeURIComponent(i),t){case"blogger":n="http://www.blogger.com/blog_this.pyra?t="+s+"&u="+n;break;case"linkedin":n="http://www.linkedin.com/cws/share?url="+n+"&title="+s;break;case"delicious":n="http://www.delicious.com/post?title="+s+"&url="+n;break;case"digg":n="http://digg.com/submit?phase=2&url="+n+"&title="+s+"&bodytext="+a+"&topic=tech_deals";break;case"reddit":n="http://reddit.com/submit?url="+n+"&title="+s;break;case"furl":n="http://www.furl.net/savedialog.jsp?t="+s+"&u="+n;break;case"rawsugar":n="http://www.rawsugar.com/home/extensiontagit/?turl="+n+"&tttl="+s;break;case"stumbleupon":n="http://www.stumbleupon.com/submit?url="+n+"&title="+s;break;case"blogmarks":break;case"facebook":n="http://www.facebook.com/share.php?src=bm&v=4&u="+n+"&t="+s;break;case"technorati":n="http://technorati.com/faves?sub=favthis&add="+n;break;case"spurl":n="http://www.spurl.net/spurl.php?v=3&title="+s+"&url="+n;break;case"simpy":n="http://www.simpy.com/simpy/LinkAdd.do?title="+s+"&href="+n;break;case"ask":break;case"google":n="http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk="+n+"&title="+s;break;case"netscape":n="http://www.netscape.com/submit/?U="+n+"&T="+s+"&C="+a;break;case"slashdot":n="http://slashdot.org/bookmark.pl?url="+n+"&title="+s;break;case"backflip":n="http://www.backflip.com/add_page_pop.ihtml?title="+s+"&url="+n;break;case"bluedot":n="http://bluedot.us/Authoring.aspx?u="+n+"&t="+s;break;case"kaboodle":n="http://www.kaboodle.com/za/selectpage?p_pop=false&pa=url&u="+n;break;case"squidoo":n="http://www.squidoo.com/lensmaster/bookmark?"+n;break;case"twitter":n="http://twitter.com/share?url="+n+"&text="+s;break;case"pinterest":n="http://pinterest.com/pin/create/button/?url="+n+"&media="+i+"&description="+s;break;case"vk":n="http://vk.com/share.php?url="+n;break;case"bluedot":n="http://blinkbits.com/bookmarklets/save.php?v=1&source_url="+n+"&title="+s;break;case"blinkList":n="http://blinkbits.com/bookmarklets/save.php?v=1&source_url="+n+"&title="+s;break;case"googleplus":n="https://plus.google.com/share?url="+n+"&t="+s;break;default:return}window.open(n,"sharewindow")};e(function(){var t=(e("html"),e("#header"),e("#search")),a=e("#main"),o=(e("#mask"),e("#categories")),r=e("#cart"),l=e("#js-loading"),c=e("#js-inquiry-form");if(FastClick.attach(document.body),t.data("$hidden",t.find(".js-hide")).on("focusin click",".js-key",function(){a.hasClass("js-hide")||(this.focus(),this.value="",t.siblings().addClass("js-hide"),t.data("$hidden").removeClass("js-hide"),t.find(".search-hot").hide())}).on("click",".js-cancel",function(){t.find(".js-key").val(""),t.find(".js-keylist").empty(),t.siblings().removeClass("js-hide"),t.data("$hidden").addClass("js-hide"),t.find(".search-hot").show()}).on("click",".js-clear",function(){t.find(".js-key").val("").focus(),t.find(".js-keylist").empty()}).on("keyup",".js-key",function(){var s=t.children("form").attr("action"),a=e.trim(t.find(".js-key").val()),i=t.find(".js-keylist");return a?(e.get(s,{key:a},function(t){var s=e.map(t,function(e){return e.suggestion}).join("");i.html(s)},"json"),void 0):(t.find(".js-keylist").empty(),void 0)}),e("#search-footer").on("click",".search-trigger",function(){t.find(".js-key").trigger("focusin")}),o.find(".slider").swipe({continuous:!1,callback:function(t,s){var a=e(s.parentNode.parentNode),i=a.next(".nav"),n=a.data("swipe"),o=n.getNumSlides();0===t?i.addClass("next").removeClass("prev"):t===o-1&&i.addClass("prev").removeClass("next")}}),o.on("click",".slider-wrap > .nav",function(){var t=e(this),s=t.prev().data("swipe");s[t.hasClass("next")?"next":"prev"]()}),o.children(".viewmore").on("click",function(){var t=e(this);t.hasClass("unfold")?t.text("All Categories").removeClass("unfold").prev().addClass("js-hide"):t.text("Hide Up").addClass("unfold").prev().removeClass("js-hide")}),r.on("click",".js-close",function(){return e(this.parentNode).addClass("fold"),!1}),a.find(".js-slider").swipe({auto:3e3}),a.on("click",".search-result .actions .fold",function(){e(this).parents("section").toggleClass("unfold")}),a.on("click",".search-result .actions .cart",function(){var t=e(this),s=t.data("url"),a=r.find(".counter"),i=parseInt(a.text(),10);t.hasClass("added")?e.getJSON(s,{action:"del"},function(e){"success"===e.status&&(a.text(--i),t.removeClass("added"))}):e.getJSON(s,{action:"add"},function(e){"success"===e.status&&(a.text(++i),t.addClass("added"))})}),a.find(".search-result > .w-title").prev("section").addClass("nobd"),l.length){new Spinner({lines:17,length:0,width:3,radius:5,corners:0,rotate:0,direction:1,color:"#555",speed:1,trail:100,shadow:!1,hwaccel:!1,className:"spinner",zIndex:0,top:"50%",left:"50%"}).spin(e("<i/>").prependTo(l)[0]),template.config("escape",!1);var d=template.compile(s("tpl-prolist").innerHTML);e(window).on("DOMContentLoaded load resize scroll",function(){var t=l.data("url"),s=l.data("page")||1,a=l.data("loading")||!1;i(l[0])&&!a&&(l.data("loading",!0),e.getJSON(t,{page:s},function(e){"nomore"===e.status&&l.hide(),l.before(d(e)).data("page",++s).data("loading",!1)}))})}!function(){var t=e("#js-scroller");if(t.length){var s=t.children(".list"),a=s.children(".item").length,i=s.children(".item").width(),n=new Hammer(s[0]);s.width(i*a),n.on("swipeleft",function(){var e=s.position().left;Math.abs(e/i)<a-1&&s.animate({translateX:e-i+"px"},200,"ease-in-out")}),n.on("swiperight",function(){var e=s.position().left;Math.abs(e/i)>0&&s.animate({translateX:e+i+"px"},200,"ease-in-out")})}}(),a.on("click",".proshow .learn-more",function(){e(this).toggleClass("unfold").prev().toggleClass("js-hide"),this.innerHTML=this.classList.contains("unfold")?"Hide up":"Learn More"}),e("#js-share").on("click","a",function(){n(this.className)}),e("#contact-bar").on("click",".cart",function(){var t=e(this),s=r.find(".counter"),a=parseInt(s.text(),10);t.hasClass("added")?(s.text(--a),t.removeClass("added")):(s.text(++a),t.addClass("added"))}).on("click",".addto-products",function(){var t=e(this),s=t.data("url");return t.hasClass("added")?void 0:(e.getJSON(s,{action:"add"},function(e){"success"===e.status&&t.addClass("added").text("In My Products")}),!1)}),c.on("click",".tpls > .switcher",function(){e(this).toggleClass("unfold").next().toggleClass("js-hide"),this.innerHTML=this.classList.contains("unfold")?"Hide":"Show"}).on("click",".tpls-wrap > label",function(t){var s=e(this),a=s.parent().data("index")||3,i=inquiryTpls[s.data("tpl")],n=inquiryTpls.base;s.hasClass("selected")?(n.splice(n.indexOf(i),1),a--):(n.splice(a,0,i),a++),s.toggleClass("selected").parent().data("index",a),c.find(".msg > textarea").val(n.join("")),t.preventDefault(),s.children("input").prop("checked",!0)}).find(".msg > textarea").val(inquiryTpls.base.join("")),c.on("submit",function(){var e=c.find(".w-tips.error");return islogin?e.length?(e.prev().focus(),!1):void 0:(window.location.href=this.action,!1)}).on("keyup blur",".msg > textarea",function(){var t=e(this),s=e.trim(t.val()).length,a=t.next(".w-tips"),i=c.find(".submit > button");5>s||s>8e3?(a=a.length?a:e('<i class="w-tips"/>').insertAfter(t),a.addClass("error").html("Your message must be between 5 and 8000 characters"),i.prop("disabled",0===s)):(a.remove(),i.prop("disabled",!1))})})}(window.Zepto||window.jQuery);