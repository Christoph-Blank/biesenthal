(window.webpackJsonp=window.webpackJsonp||[]).push([[320,279,290,291,292,294],{1802:function(t,e,n){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e),n.d(e,"default",function(){return r});var r=function(){function r(t,e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.lat=t,this.lng=e,this.displayName=n,this.coordinates=[]}var t,e,n;return t=r,(e=[{key:"getLat",value:function(){return this.lat}},{key:"setLat",value:function(t){this.lat=t}},{key:"getLng",value:function(){return this.lng}},{key:"setLng",value:function(t){this.lng=t}},{key:"getDisplayName",value:function(){return this.displayName}},{key:"setDisplayName",value:function(t){this.displayName=t}},{key:"getCoordinates",value:function(){return this.coordinates}},{key:"setCoordinates",value:function(t){this.coordinates=t}}])&&a(t.prototype,e),n&&a(t,n),r}()},1809:function(t,a,o){"use strict";o.r(a),function(e){o.d(a,"transformCoordinatesLocalToWgs84Projection",function(){return t}),o.d(a,"transformCoordinatesWgs84ToLocalProjection",function(){return r});var n=o(55);function t(t){return Object(n.e)(e.request("MapView","getProjection").getCode(),"EPSG:4326",t)}function r(t){return Object(n.e)("EPSG:4326",e.request("MapView","getProjection").getCode(),t)}}.call(this,o(4))},1850:function(t,e,n){"use strict";n.r(e),n.d(e,"fetchRoutingNominatimGeosearch",function(){return s}),n.d(e,"fetchRoutingNominatimGeosearchReverse",function(){return l});var r=n(195),i=n.n(r),a=n(1802);function c(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function o(s){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=s.apply(t,i);function a(t){c(r,e,n,a,o,"next",t)}function o(t){c(r,e,n,a,o,"throw",t)}a(void 0)})}}function s(t){return u.apply(this,arguments)}function u(){return(u=o(regeneratorRuntime.mark(function t(e){var n,r,a,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=store.getters.getRestServiceById(state.geosearch.serviceId).url,r="".concat(n,"&countrycodes=de&format=json&limit=").concat(state.geosearch.limit,"&bounded=1"),a="&q=".concat(encodeURIComponent(e)),t.next=5,i.a.get(r+a);case 5:if(200===(o=t.sent).status||o.data.success){t.next=8;break}throw new Error({status:o.status,message:o.statusText});case 8:return t.abrupt("return",o.data.map(function(t){return p(t)}));case 9:case"end":return t.stop()}},t)}))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=o(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=store.getters.getRestServiceById(state.geosearchReverse.serviceId).url,r="".concat(n,"&lon=").concat(e[0],"&lat=").concat(e[1],"&format=json&addressdetails=0"),t.next=4,i.a.get(r);case 4:if(200===(a=t.sent).status||a.data.success){t.next=7;break}throw new Error({status:a.status,message:a.statusText});case 7:return t.abrupt("return",p(a.data));case 8:case"end":return t.stop()}},t)}))).apply(this,arguments)}function p(t){return new a.default(Number(t.lat),Number(t.lon),t.display_name)}},1851:function(t,h,g){"use strict";g.r(h),function(u,l){g.d(h,"fetchRoutingBkgGeosearch",function(){return n}),g.d(h,"fetchRoutingBkgGeosearchReverse",function(){return i}),g.d(h,"fetchBkgGeosearchSuggestions",function(){return a});var t=g(195),f=g.n(t),p=g(1802);function c(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function e(s){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=s.apply(t,i);function a(t){c(r,e,n,a,o,"next",t)}function o(t){c(r,e,n,a,o,"throw",t)}a(void 0)})}}function n(t){return r.apply(this,arguments)}function r(){return(r=e(regeneratorRuntime.mark(function t(e){var n,r,a,o,i,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.request("RoutingLGB","getSettings").geosearch,r=n.serviceId,a=u.request("RestReader","getServiceById",r).get("url"),o="".concat(a,"?count=").concat(n.limit,"&properties=text"),i="&query=".concat(encodeURIComponent(e)),t.next=7,f.a.get(o+i,{timeout:n.timeout});case 7:if(200===(s=t.sent).status||s.data.success){t.next=10;break}throw new Error({status:s.status,message:s.statusText});case 10:return t.abrupt("return",s.data.features.map(function(t){return d(t)}));case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}function a(t){return o.apply(this,arguments)}function o(){return(o=e(regeneratorRuntime.mark(function t(e){var n,r,a,o,i,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.request("RoutingLGB","getSettings").geosearch,r=n.serviceId,a=u.request("RestReader","getServiceById",r).get("url").replace("geosearch.json","suggest"),o="".concat(a,"?count=").concat(n.limit,"&properties=text"),i="&query=".concat(encodeURIComponent(e)),t.next=7,f.a.get(o+i,{timeout:n.timeout});case 7:if(200===(s=t.sent).status||s.data){t.next=10;break}throw new Error({status:s.status,message:s.statusText});case 10:return t.abrupt("return",s.data.map(function(t){return t.suggestion}));case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}function i(t){return s.apply(this,arguments)}function s(){return(s=e(regeneratorRuntime.mark(function t(e){var n,r,a,o,i,s,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.request("RoutingLGB","getSettings").geosearchReverse,r=n.serviceId,a=n.filter,o=u.request("RestReader","getServiceById",r).get("url"),i="&filter="+(a||"typ:haus"),s="".concat(o,"?lon=").concat(e[0],"&lat=").concat(e[1],"&count=1&properties=text&distance=").concat(n.distance).concat(i),t.next=8,f.a.get(s,{timeout:n.timeout});case 8:if(200===(c=t.sent).status||c.data.success){t.next=11;break}throw new Error({status:c.status,message:c.statusText});case 11:if(l.isEmpty(c.data.features))return t.abrupt("return",new p.default(e[0],e[1]));t.next=13;break;case 13:return t.abrupt("return",d(c.data.features[0]));case 14:case"end":return t.stop()}},t)}))).apply(this,arguments)}function d(t){return new p.default(Number(t.geometry.coordinates[1]),Number(t.geometry.coordinates[0]),t.properties.text)}}.call(this,g(4),g(3))},1854:function(t,p,d){"use strict";d.r(p),function(o){d.d(p,"fetchCoordinatesByText",function(){return e}),d.d(p,"fetchTextByCoordinates",function(){return l}),d.d(p,"fetchSuggestionsByText",function(){return r});var i=d(1850),s=d(1851),c=d(1809);d(1802);function u(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function t(s){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=s.apply(t,i);function a(t){u(r,e,n,a,o,"next",t)}function o(t){u(r,e,n,a,o,"throw",t)}a(void 0)})}}function e(t){return n.apply(this,arguments)}function n(){return(n=t(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.search,r=o.request("RoutingLGB","getSettings").geosearch,a=[],n.length<r.minChars)return t.abrupt("return",a);t.next=5;break;case 5:if(t.prev=5,"NOMINATIM"===r.type)return t.next=9,Object(i.fetchRoutingNominatimGeosearch)(n);t.next=12;break;case 9:a=t.sent,t.next=19;break;case 12:if("BKG"===r.type)return t.next=15,Object(s.fetchRoutingBkgGeosearch)(n);t.next=18;break;case 15:a=t.sent,t.next=19;break;case 18:throw new Error("Geosearch is not configured correctly.");case 19:a.forEach(function(t){var e=Object(c.transformCoordinatesWgs84ToLocalProjection)([t.getLng(),t.getLat()]);t.setCoordinates(e)}),t.next=24;break;case 22:t.prev=22,t.t0=t.catch(5);case 24:return t.abrupt("return",a);case 25:case"end":return t.stop()}},t,null,[[5,22]])}))).apply(this,arguments)}function r(t){return a.apply(this,arguments)}function a(){return(a=t(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=o.request("RoutingLGB","getSettings").geosearch,r=[],e.length<n.minChars)return t.abrupt("return",r);t.next=4;break;case 4:return t.prev=4,t.next=7,Object(s.fetchBkgGeosearchSuggestions)(e);case 7:r=t.sent,t.next=12;break;case 10:t.prev=10,t.t0=t.catch(4);case 12:return t.abrupt("return",r);case 13:case"end":return t.stop()}},t,null,[[4,10]])}))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=t(regeneratorRuntime.mark(function t(e){var n,r,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=o.request("RoutingLGB","getSettings").geosearch,r=null,t.prev=2,"NOMINATIM"===n.type)return t.next=6,Object(i.fetchRoutingNominatimGeosearchReverse)(e);t.next=9;break;case 6:r=t.sent,t.next=16;break;case 9:if("BKG"===n.type)return t.next=12,Object(s.fetchRoutingBkgGeosearchReverse)(e);t.next=15;break;case 12:r=t.sent,t.next=16;break;case 15:throw new Error("Geosearch is not configured correctly.");case 16:a=Object(c.transformCoordinatesWgs84ToLocalProjection)([r.getLng(),r.getLat()]),r.setCoordinates(a),t.next=22;break;case 20:t.prev=20,t.t0=t.catch(2);case 22:return t.abrupt("return",r);case 23:case"end":return t.stop()}},t,null,[[2,20]])}))).apply(this,arguments)}}.call(this,d(4))},1957:function(t,f,p){"use strict";p.r(f),function(t,e,i){var r=p(5),n=p(2104),a=p.n(n),o=(p(1895),p(2110),p(1802)),s=p(1854);function c(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function u(s){return function(){var t=this,i=arguments;return new Promise(function(e,n){var r=s.apply(t,i);function a(t){c(r,e,n,a,o,"next",t)}function o(t){c(r,e,n,a,o,"throw",t)}a(void 0)})}}var l=t.View.extend({collection:null,template:e.template(a.a),events:{"focus input":"onInputFocus","click .waypoint-remove":"onWaypointRemoved","click #addWaypoint":"onWaypointAdded","click #resetWaypoints":"onWaypointsReset","mousedown .geolocation":"onGeolocationSet"},initialize:function(){this.listenTo(this.collection,"add remove changeCoordinates change:index",this.render)},render:function(){var n=this,t={waypoints:this.collection.map(this.mapWaypointToTemplateAttrs.bind(this)),i18n:i.t("additional:routingLGB",{returnObjects:!0}),isGeolocationAvailable:this.isGeolocationAvailable(),isWaypointAddable:this.collection.isRoutable()};this.$el.html(this.template(t));var r,e=this;return this.$(".typeahead").typeahead({source:(r=u(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.fetchCoordinatesByText)({search:e});case 2:r=t.sent,n(r.map(function(t){return{searchResult:t,name:t.displayName}}));case 4:case"end":return t.stop()}},t)})),function(t,e){return r.apply(this,arguments)}),autoSelect:!0,fitToElement:!0,matcher:function(){return!0},updater:function(t){e.selectSearchResult(t,parseInt(this.$element[0].getAttribute("data-index")))}}),this.$("#waypointsContainer").sortable({handle:".handle",update:function(t,e){return n.moveWaypoint(e.item.startIndex,e.item.index())},start:function(t,e){return e.item.startIndex=e.item.index()}}),this.delegateEvents(),this},onInputFocus:function(t){t.target.select()},onWaypointRemoved:function(t){var e=parseInt(t.target.getAttribute("data-index"));this.collection.removeWaypoint(e)},onWaypointsReset:function(){this.collection.resetWaypoints()},onWaypointAdded:function(){var t=this.collection.length-1;this.collection.addWaypoint({index:t}),this.$("input")[t].focus()},onGeolocationSet:function(t){var a=this;if(this.isGeolocationAvailable()){var o=parseInt(t.target.getAttribute("data-index")),e=this.$(".geolocation[data-index='".concat(o,"']")),n=this.$("input[data-index='".concat(o,"']"));e.removeClass("not-available"),e.addClass("fa-spinner fa-spin loading-geolocation"),n.addClass("loading-geolocation"),navigator.geolocation.getCurrentPosition(function(){var e=u(regeneratorRuntime.mark(function t(e){var n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=[e.coords.longitude,e.coords.latitude],t.next=3,Object(s.fetchTextByCoordinates)(n);case 3:r=t.sent,a.collection.at(o).setFromGeosearchResult(r),a.processAfterWaypointSet(o);case 6:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}(),function(){n.removeClass("loading-geolocation"),e.removeClass("fa-spinner fa-spin loading-geolocation"),e.addClass("not-available"),n.focus(),r.Radio.trigger("Alert","alert",{kategorie:"alert-info",text:i.t("additional:routingLGB:noGeolocation")})})}else r.Radio.trigger("Alert","alert",{kategorie:"alert-info",text:i.t("additional:routingLGB:noGeolocation")})},moveWaypoint:function(t,e){this.collection.moveWaypoint(t,e)},mapWaypointToTemplateAttrs:function(t){var e=i.t("additional:routingLGB:waypoint");return 0===t.getIndex()&&(e=i.t("additional:routingLGB:startAddress")),t.getIndex()===this.collection.length-1&&(e=i.t("additional:routingLGB:destinationAddress")),{index:t.getIndex(),displayName:t.getDisplayName(),placeholder:e}},selectSearchResult:function(t,e){var n=t.searchResult;n instanceof o.default&&(this.collection.at(e).setFromGeosearchResult(n),this.processAfterWaypointSet(e))},focusEmptyWaypoint:function(){var t=this.collection.findWhere(function(t){return!t.hasCoordinates()});t&&this.$("input")[t.getIndex()].focus()},isGeolocationAvailable:function(){return"geolocation"in navigator},processAfterWaypointSet:function(t){this.collection.isRoutable()||r.Radio.trigger("MapView","setCenter",this.collection.at(t).getCoordinates()),r.Radio.trigger("RoutingLGB","findRoute",{zoomToExtent:!0}),this.focusEmptyWaypoint()}});f.default=l}.call(this,p(5),p(3),p(24))},2104:function(t,e){t.exports='<form role="form">\r\n    <div id="waypointsContainer">\r\n        <% _.each(waypoints, function(waypoint) { %>\r\n            <div class="waypoint-container form-group-sm">\r\n                <i title="<%= i18n.moveWaypoint %>" class="handle pointer fas fa-grip-vertical"></i>\r\n                <div class="waypoint-textfield">\r\n                    <input data-index="<%= waypoint.index %>" type="text" placeholder="<%= waypoint.placeholder %>"\r\n                        autocomplete="off" class="typeahead form-control" value="<%= waypoint.displayName %>">\r\n                    <i data-index="<%= waypoint.index %>" class="fas fa-crosshairs geolocation <%= !isGeolocationAvailable ? \'not-available\' : \'\' %>" title="<%= i18n.myLocation %>"></i>\r\n                </div>\r\n                <span data-index="<%= waypoint.index %>" title="<%= i18n.removeWaypoint %>" class="waypoint-remove pointer far fa-times-circle fa-lg"></span>\r\n            </div>\r\n        <% }); %>\r\n    </div>\r\n    <% if (isWaypointAddable) { %>\r\n        <ul class="pager">\r\n            <li class="next"><a href="#" aria-label="<%= i18n.resetWaypoints %>" title="<%= i18n.resetWaypoints %>" id="resetWaypoints">\r\n                <i class="pointer fas fa-trash"></i></a>\r\n            </li>\r\n            <li class="next"><a href="#" aria-label="<%= i18n.addWaypoint %>" title="<%= i18n.addWaypoint %>" id="addWaypoint">\r\n                <i class="pointer fas fa-plus"></i></a>\r\n            </li>\r\n        </ul>\r\n    <% } %>\r\n</form>\r\n'}}]);