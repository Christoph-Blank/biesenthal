(window.webpackJsonp=window.webpackJsonp||[]).push([[14,247,253],{1895:function(t,e,n){"use strict";function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e),n.d(e,"default",function(){return i});var i=function(){function i(t,e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.lat=t,this.lng=e,this.displayName=n,this.coordinates=[]}var t,e,n;return t=i,(e=[{key:"getLat",value:function(){return this.lat}},{key:"setLat",value:function(t){this.lat=t}},{key:"getLng",value:function(){return this.lng}},{key:"setLng",value:function(t){this.lng=t}},{key:"getDisplayName",value:function(){return this.displayName}},{key:"setDisplayName",value:function(t){this.displayName=t}},{key:"getCoordinates",value:function(){return this.coordinates}},{key:"setCoordinates",value:function(t){this.coordinates=t}}])&&s(t.prototype,e),n&&s(t,n),i}()},1904:function(t,h,c){"use strict";c.r(h),function(l,p){c.d(h,"fetchCoordinatesByText",function(){return n}),c.d(h,"fetchTextByCoordinates",function(){return r}),c.d(h,"fetchSuggestionsByText",function(){return s});var t=c(201),d=c.n(t),f=c(1843),m=c(1895);function u(t,e,n,i,s,o,r){try{var a=t[o](r),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(i,s)}function e(a){return function(){var t=this,r=arguments;return new Promise(function(e,n){var i=a.apply(t,r);function s(t){u(i,e,n,s,o,"next",t)}function o(t){u(i,e,n,s,o,"throw",t)}s(void 0)})}}function n(t){return i.apply(this,arguments)}function i(){return(i=e(regeneratorRuntime.mark(function t(e){var n,i,s,o,r,a,u,h;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.search,i=l.request("Reachability","getSettings").geosearch,s=[],n.length<i.minChars)return t.abrupt("return",s);t.next=5;break;case 5:return t.prev=5,o=i.serviceId,r=l.request("RestReader","getServiceById",o).get("url"),a="".concat(r,"?count=").concat(i.limit,"&properties=text"),u="&query=".concat(encodeURIComponent(n)),t.next=12,d.a.get(a+u);case 12:if(200===(h=t.sent).status||h.data.success){t.next=15;break}throw new Error({status:h.status,message:h.statusText});case 15:(s=h.data.features.map(function(t){return v(t)})).forEach(function(t){var e=Object(f.transformCoordinatesWgs84ToLocalProjection)([t.getLng(),t.getLat()]);t.setCoordinates(e)}),t.next=21;break;case 19:t.prev=19,t.t0=t.catch(5);case 21:return t.abrupt("return",s);case 22:case"end":return t.stop()}},t,null,[[5,19]])}))).apply(this,arguments)}function s(t){return o.apply(this,arguments)}function o(){return(o=e(regeneratorRuntime.mark(function t(e){var n,i,s,o,r,a,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=l.request("Reachability","getSettings").geosearch,i=[],e.length<n.minChars)return t.abrupt("return",i);t.next=4;break;case 4:return t.prev=4,s=n.serviceId,o=l.request("RestReader","getServiceById",s).get("url").replace("geosearch.json","suggest"),r="".concat(o,"?count=").concat(n.limit,"&properties=text"),a="&query=".concat(encodeURIComponent(e)),t.next=11,d.a.get(r+a);case 11:if(200===(u=t.sent).status||u.data){t.next=14;break}throw new Error({status:u.status,message:u.statusText});case 14:i=u.data.map(function(t){return t.suggestion}),t.next=19;break;case 17:t.prev=17,t.t0=t.catch(4);case 19:return t.abrupt("return",i);case 20:case"end":return t.stop()}},t,null,[[4,17]])}))).apply(this,arguments)}function r(t){return a.apply(this,arguments)}function a(){return(a=e(regeneratorRuntime.mark(function t(e){var n,i,s,o,r,a,u,h,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=null,t.prev=1,i=l.request("Reachability","getSettings").geosearchReverse,s=i.serviceId,o=i.filter,r=l.request("RestReader","getServiceById",s).get("url"),a="&filter="+(o||"typ:haus"),u="".concat(r,"?lon=").concat(e[0],"&lat=").concat(e[1],"&count=1&properties=text&distance=").concat(i.distance).concat(a),t.next=10,d.a.get(u);case 10:if(200===(h=t.sent).status||h.data.success){t.next=13;break}throw new Error({status:h.status,message:h.statusText});case 13:if(p.isEmpty(h.data.features))return t.abrupt("return",new m.default(e[0],e[1]));t.next=15;break;case 15:n=v(h.data.features[0]),c=Object(f.transformCoordinatesWgs84ToLocalProjection)([n.getLng(),n.getLat()]),n.setCoordinates(c),t.next=22;break;case 20:t.prev=20,t.t0=t.catch(1);case 22:return t.abrupt("return",n);case 23:case"end":return t.stop()}},t,null,[[1,20]])}))).apply(this,arguments)}function v(t){return new m.default(Number(t.geometry.coordinates[1]),Number(t.geometry.coordinates[0]),t.properties.text)}}.call(this,c(4),c(3))},2e3:function(t,n,i){var s,o;function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(e){"use strict";t.exports?t.exports=e(i(9)):(s=[i(9)],void 0===(o=function(t){return e(t)}.apply(n,s))||(t.exports=o))}(function(h){"use strict";function o(t,e){this.$element=h(t),this.options=h.extend({},h.fn.typeahead.defaults,e),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.select=this.options.select||this.select,this.autoSelect="boolean"!=typeof this.options.autoSelect||this.options.autoSelect,this.highlighter=this.options.highlighter||this.highlighter,this.render=this.options.render||this.render,this.updater=this.options.updater||this.updater,this.displayText=this.options.displayText||this.displayText,this.source=this.options.source,this.delay=this.options.delay,this.$menu=h(this.options.menu),this.$appendTo=this.options.appendTo?h(this.options.appendTo):null,this.fitToElement="boolean"==typeof this.options.fitToElement&&this.options.fitToElement,this.shown=!1,this.listen(),this.showHintOnFocus=("boolean"==typeof this.options.showHintOnFocus||"all"===this.options.showHintOnFocus)&&this.options.showHintOnFocus,this.afterSelect=this.options.afterSelect,this.addItem=!1,this.value=this.$element.val()||this.$element.text()}o.prototype={constructor:o,select:function(){var t=this.$menu.find(".active").data("value");if(this.$element.data("active",t),this.autoSelect||t){var e=this.updater(t);e=e||"",this.$element.val(this.displayText(e)||e).text(this.displayText(e)||e).change(),this.afterSelect(e)}return this.hide()},updater:function(t){return t},setSource:function(t){this.source=t},show:function(){var t,e=h.extend({},this.$element.position(),{height:this.$element[0].offsetHeight}),n="function"==typeof this.options.scrollHeight?this.options.scrollHeight.call():this.options.scrollHeight;if(this.shown?t=this.$menu:this.$appendTo?(t=this.$menu.appendTo(this.$appendTo),this.hasSameParent=this.$appendTo.is(this.$element.parent())):(t=this.$menu.insertAfter(this.$element),this.hasSameParent=!0),!this.hasSameParent){t.css("position","fixed");var i=this.$element.offset();e.top=i.top,e.left=i.left}var s=h(t).parent().hasClass("dropup")?"auto":e.top+e.height+n,o=h(t).hasClass("dropdown-menu-right")?"auto":e.left;return t.css({top:s,left:o}).show(),!0===this.options.fitToElement&&t.css("width",this.$element.outerWidth()+"px"),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){if(this.query=null!=t?t:this.$element.val()||this.$element.text()||"",this.query.length<this.options.minLength&&!this.options.showHintOnFocus)return this.shown?this.hide():this;var e=h.proxy(function(){h.isFunction(this.source)?this.source(this.query,h.proxy(this.process,this)):this.source&&this.process(this.source)},this);clearTimeout(this.lookupWorker),this.lookupWorker=setTimeout(e,this.delay)},process:function(t){var e=this;return t=h.grep(t,function(t){return e.matcher(t)}),(t=this.sorter(t)).length||this.options.addItem?(0<t.length?this.$element.data("active",t[0]):this.$element.data("active",null),this.options.addItem&&t.push(this.options.addItem),"all"==this.options.items?this.render(t).show():this.render(t.slice(0,this.options.items)).show()):this.shown?this.hide():this},matcher:function(t){return~this.displayText(t).toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,n=[],i=[],s=[];e=t.shift();){var o=this.displayText(e);o.toLowerCase().indexOf(this.query.toLowerCase())?~o.indexOf(this.query)?i.push(e):s.push(e):n.push(e)}return n.concat(i,s)},highlighter:function(t){var e,n,i,s,o=h("<div></div>"),r=this.query,a=t.toLowerCase().indexOf(r.toLowerCase()),u=r.length;if(0===u)return o.text(t).html();for(;-1<a;)e=t.substr(0,a),n=t.substr(a,u),i=t.substr(a+u),s=h("<strong></strong>").text(n),o.append(document.createTextNode(e)).append(s),a=(t=i).toLowerCase().indexOf(r.toLowerCase());return o.append(document.createTextNode(t)).html()},render:function(n){var i=this,s=this,o=!1,r=[],a=i.options.separator;return h.each(n,function(t,e){0<t&&e[a]!==n[t-1][a]&&r.push({__type:"divider"}),!e[a]||0!==t&&e[a]===n[t-1][a]||r.push({__type:"category",name:e[a]}),r.push(e)}),n=h(r).map(function(t,e){if("category"==(e.__type||!1))return h(i.options.headerHtml).text(e.name)[0];if("divider"==(e.__type||!1))return h(i.options.headerDivider)[0];var n=s.displayText(e);return(t=h(i.options.item).data("value",e)).find("a").html(i.highlighter(n,e)),n==s.$element.val()&&(t.addClass("active"),s.$element.data("active",e),o=!0),t[0]}),this.autoSelect&&!o&&(n.filter(":not(.dropdown-header)").first().addClass("active"),this.$element.data("active",n.first().data("value"))),this.$menu.html(n),this},displayText:function(t){return void 0!==t&&void 0!==t.name&&t.name||t},next:function(t){var e=this.$menu.find(".active").removeClass("active").next();e.length||(e=h(this.$menu.find("li")[0])),e.addClass("active")},prev:function(t){var e=this.$menu.find(".active").removeClass("active").prev();e.length||(e=this.$menu.find("li").last()),e.addClass("active")},listen:function(){this.$element.on("focus",h.proxy(this.focus,this)).on("blur",h.proxy(this.blur,this)).on("keypress",h.proxy(this.keypress,this)).on("input",h.proxy(this.input,this)).on("keyup",h.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",h.proxy(this.keydown,this)),this.$menu.on("click",h.proxy(this.click,this)).on("mouseenter","li",h.proxy(this.mouseenter,this)).on("mouseleave","li",h.proxy(this.mouseleave,this)).on("mousedown",h.proxy(this.mousedown,this))},destroy:function(){this.$element.data("typeahead",null),this.$element.data("active",null),this.$element.off("focus").off("blur").off("keypress").off("input").off("keyup"),this.eventSupported("keydown")&&this.$element.off("keydown"),this.$menu.remove(),this.destroyed=!0},eventSupported:function(t){var e=t in this.$element;return e||(this.$element.setAttribute(t,"return;"),e="function"==typeof this.$element[t]),e},move:function(t){if(this.shown)switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();break;case 38:if(t.shiftKey)return;t.preventDefault(),this.prev();break;case 40:if(t.shiftKey)return;t.preventDefault(),this.next()}},keydown:function(t){this.suppressKeyPressRepeat=~h.inArray(t.keyCode,[40,38,9,13,27]),this.shown||40!=t.keyCode?this.move(t):this.lookup()},keypress:function(t){this.suppressKeyPressRepeat||this.move(t)},input:function(){var t=this.$element.val()||this.$element.text();this.value!==t&&(this.value=t,this.lookup())},keyup:function(t){if(!this.destroyed)switch(t.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide()}},focus:function(){this.focused||(this.focused=!0,this.options.showHintOnFocus&&!0!==this.skipShowHintOnFocus&&("all"===this.options.showHintOnFocus?this.lookup(""):this.lookup())),this.skipShowHintOnFocus&&(this.skipShowHintOnFocus=!1)},blur:function(){this.mousedover||this.mouseddown||!this.shown?this.mouseddown&&(this.skipShowHintOnFocus=!0,this.$element.focus(),this.mouseddown=!1):(this.hide(),this.focused=!1)},click:function(t){t.preventDefault(),this.skipShowHintOnFocus=!0,this.select(),this.$element.focus(),this.hide()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),h(t.currentTarget).addClass("active")},mouseleave:function(){this.mousedover=!1,!this.focused&&this.shown&&this.hide()},mousedown:function(){this.mouseddown=!0,this.$menu.one("mouseup",function(t){this.mouseddown=!1}.bind(this))}};var t=h.fn.typeahead;h.fn.typeahead=function(i){var s=arguments;return"string"==typeof i&&"getActive"==i?this.data("active"):this.each(function(){var t=h(this),e=t.data("typeahead"),n="object"==r(i)&&i;e||t.data("typeahead",e=new o(this,n)),"string"==typeof i&&e[i]&&(1<s.length?e[i].apply(e,Array.prototype.slice.call(s,1)):e[i]())})},h.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu" role="listbox"></ul>',item:'<li><a class="dropdown-item" href="#" role="option"></a></li>',minLength:1,scrollHeight:0,autoSelect:!0,afterSelect:h.noop,addItem:!1,delay:0,separator:"category",headerHtml:'<li class="dropdown-header"></li>',headerDivider:'<li class="divider" role="separator"></li>'},h.fn.typeahead.Constructor=o,h.fn.typeahead.noConflict=function(){return h.fn.typeahead=t,this},h(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var e=h(this);e.data("typeahead")||e.typeahead(e.data())})})},2021:function(t,l,p){"use strict";p.r(l),function(t,e,i){var o=p(5),n=p(2192),s=p.n(n),r=(p(2e3),p(1895)),a=p(1904);function u(t,e,n,i,s,o,r){try{var a=t[o](r),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(i,s)}function h(a){return function(){var t=this,r=arguments;return new Promise(function(e,n){var i=a.apply(t,r);function s(t){u(i,e,n,s,o,"next",t)}function o(t){u(i,e,n,s,o,"throw",t)}s(void 0)})}}var c=t.View.extend({model:null,template:e.template(s.a),events:{"focus input":"onInputFocus","click .starting-point-remove":"onStartingPointRemoved","mousedown .geolocation":"onGeolocationSet"},initialize:function(){this.listenTo(this.model,"changeCoordinates",this.render)},render:function(){var n,t={startingPoint:this.model.toJSON(),isGeolocationAvailable:this.isGeolocationAvailable(),i18n:i.t("additional:reachability",{returnObjects:!0})};return this.$el.html(this.template(t)),this.$(".typeahead").typeahead({source:(n=h(regeneratorRuntime.mark(function t(e,n){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.fetchCoordinatesByText)({search:e});case 2:i=t.sent,n(i.map(function(t){return{searchResult:t,name:t.displayName}}));case 4:case"end":return t.stop()}},t)})),function(t,e){return n.apply(this,arguments)}),autoSelect:!0,fitToElement:!0,matcher:function(){return!0},updater:this.selectSearchResult.bind(this)}),this.delegateEvents(),this},isGeolocationAvailable:function(){return"geolocation"in navigator},onInputFocus:function(t){t.target.select()},onStartingPointRemoved:function(){this.model.reset(),o.Radio.trigger("Reachability","findIsochrones")},onGeolocationSet:function(){var s=this;this.isGeolocationAvailable()?(this.$(".geolocation").removeClass("not-available"),this.$(".geolocation").addClass("fa-spinner fa-spin loading-geolocation"),this.$("input").addClass("loading-geolocation"),navigator.geolocation.getCurrentPosition(function(){var e=h(regeneratorRuntime.mark(function t(e){var n,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=[e.coords.longitude,e.coords.latitude],t.next=3,Object(a.fetchTextByCoordinates)(n);case 3:i=t.sent,s.model.setFromGeosearchResult(i),o.Radio.trigger("Reachability","findIsochrones");case 6:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}(),function(t){s.$("input").removeClass("loading-geolocation"),s.$(".geolocation").removeClass("fa-spinner fa-spin loading-geolocation"),s.$(".geolocation").addClass("not-available"),s.$("input").focus(),o.Radio.trigger("Alert","alert",{kategorie:"alert-info",text:i.t("additional:reachability:noGeolocation")})})):o.Radio.trigger("Alert","alert",{kategorie:"alert-info",text:i.t("additional:reachability:noGeolocation")})},selectSearchResult:function(t){var e=t.searchResult;e instanceof r.default&&(this.model.setFromGeosearchResult(e),o.Radio.trigger("Reachability","findIsochrones"))}});l.default=c}.call(this,p(5),p(3),p(29))},2192:function(t,e){t.exports='<form role="form">\r\n    <div class="starting-point-container form-group-sm">\r\n        <div class="starting-point-textfield">\r\n            <input type="text" placeholder="<%= i18n.startingPoint %>"\r\n                autocomplete="off" class="typeahead form-control" value="<%= startingPoint.displayName %>">\r\n            <i class="fas fa-crosshairs geolocation <%= !isGeolocationAvailable ? \'not-available\' : \'\' %>" title="<%= i18n.myLocation %>"></i>\r\n        </div>\r\n\r\n        <span title="<%= i18n.removeStartingPoint %>" class="starting-point-remove pointer far fa-times-circle fa-lg"></span>\r\n    </div>\r\n</form>\r\n'}}]);