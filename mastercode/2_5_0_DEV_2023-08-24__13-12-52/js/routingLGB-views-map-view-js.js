(window.webpackJsonp=window.webpackJsonp||[]).push([[310,277,278,279,290,291,292,294,308,309,316],{1802:function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.r(t),r.d(t,"default",function(){return n});var n=function(){function n(e,t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.lat=e,this.lng=t,this.displayName=r,this.coordinates=[]}var e,t,r;return e=n,(t=[{key:"getLat",value:function(){return this.lat}},{key:"setLat",value:function(e){this.lat=e}},{key:"getLng",value:function(){return this.lng}},{key:"setLng",value:function(e){this.lng=e}},{key:"getDisplayName",value:function(){return this.displayName}},{key:"setDisplayName",value:function(e){this.displayName=e}},{key:"getCoordinates",value:function(){return this.coordinates}},{key:"setCoordinates",value:function(e){this.coordinates=e}}])&&a(e.prototype,t),r&&a(e,r),n}()},1807:function(e,t,r){"use strict";r.r(t),r.d(t,"SpeedProfile",function(){return n}),r.d(t,"Preference",function(){return a}),r.d(t,"MapInteractionMode",function(){return o}),r.d(t,"preferenceOptions",function(){return i}),r.d(t,"AvoidFeatureOption",function(){return s}),r.d(t,"DownloadFormat",function(){return c}),r.d(t,"RoutingResultError",function(){return u});var n=Object.freeze({CAR:{id:"CAR",i18n:"car",icon:"fa-car",orsKey:"driving-car"},HGV:{id:"HGV",i18n:"hgv",icon:"fa-truck",orsKey:"driving-hgv"},FOOT:{id:"FOOT",i18n:"foot",icon:"fa-walking",orsKey:"foot-walking"},CYCLING:{id:"CYCLING",i18n:"cycling",icon:"fa-bicycle",orsKey:"cycling-regular"},WHEELCHAIR:{id:"WHEELCHAIR",i18n:"wheelchair",icon:"fa-wheelchair",orsKey:"wheelchair"}}),a=Object.freeze({RECOMMENDED:{id:"RECOMMENDED",i18n:"recommended",orsKey:"recommended"},SHORTEST:{id:"SHORTEST",i18n:"shortest",orsKey:"shortest"}}),o=Object.freeze({WAYPOINTS:"WAYPOINTS",AVOID_AREAS:"AVOID_AREAS",DELETE_AVOID_AREAS:"DELETE_AVOID_AREAS"}),i=Object.keys(a),s=Object.freeze({HIGHWAYS:{id:"HIGHWAYS",i18n:"highways",availableProfiles:["CAR","HGV"],orsKey:"highways"},TOLLWAYS:{id:"TOLLWAYS",i18n:"tollways",availableProfiles:["CAR","HGV"],orsKey:"tollways"},FERRIES:{id:"FERRIES",i18n:"ferries",availableProfiles:["CAR","HGV","CYCLING","FOOT","WHEELCHAIR"],orsKey:"ferries"},STEPS:{id:"STEPS",i18n:"steps",availableProfiles:["CYCLING","FOOT","WHEELCHAIR"],orsKey:"steps"}}),c=Object.freeze({GEOJSON:"GEOJSON",GPX:"GPX",KML:"KML"}),u=Object.freeze({NO_ROUTE_FOUND:{i18n:"noRouteFound"},AVOID_AREA_TOO_LARGE:{i18n:"avoidAreasTooLarge"},FETCHING_FAILED:{i18n:"routeFetchFailed"},SERVICE_UNAVAILABLE:{i18n:"routeServiceUnavailable"}})},1808:function(e,t,r){"use strict";r.r(t);var n=r(41),a=r(36),o=r(63);t.default=new n.a({features:[new a.a({geometry:new o.a([]),isHighlight:!1}),new a.a({geometry:new o.a([]),isHighlight:!0})]})},1809:function(e,a,o){"use strict";o.r(a),function(t){o.d(a,"transformCoordinatesLocalToWgs84Projection",function(){return e}),o.d(a,"transformCoordinatesWgs84ToLocalProjection",function(){return n});var r=o(55);function e(e){return Object(r.e)(t.request("MapView","getProjection").getCode(),"EPSG:4326",e)}function n(e){return Object(r.e)("EPSG:4326",t.request("MapView","getProjection").getCode(),e)}}.call(this,o(4))},1814:function(e,t,r){"use strict";r.r(t);var n=r(41);t.default=new n.a},1850:function(e,t,r){"use strict";r.r(t),r.d(t,"fetchRoutingNominatimGeosearch",function(){return s}),r.d(t,"fetchRoutingNominatimGeosearchReverse",function(){return f});var n=r(195),i=r.n(n),a=r(1802);function c(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function o(s){return function(){var e=this,i=arguments;return new Promise(function(t,r){var n=s.apply(e,i);function a(e){c(n,t,r,a,o,"next",e)}function o(e){c(n,t,r,a,o,"throw",e)}a(void 0)})}}function s(e){return u.apply(this,arguments)}function u(){return(u=o(regeneratorRuntime.mark(function e(t){var r,n,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=store.getters.getRestServiceById(state.geosearch.serviceId).url,n="".concat(r,"&countrycodes=de&format=json&limit=").concat(state.geosearch.limit,"&bounded=1"),a="&q=".concat(encodeURIComponent(t)),e.next=5,i.a.get(n+a);case 5:if(200===(o=e.sent).status||o.data.success){e.next=8;break}throw new Error({status:o.status,message:o.statusText});case 8:return e.abrupt("return",o.data.map(function(e){return g(e)}));case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=o(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=store.getters.getRestServiceById(state.geosearchReverse.serviceId).url,n="".concat(r,"&lon=").concat(t[0],"&lat=").concat(t[1],"&format=json&addressdetails=0"),e.next=4,i.a.get(n);case 4:if(200===(a=e.sent).status||a.data.success){e.next=7;break}throw new Error({status:a.status,message:a.statusText});case 7:return e.abrupt("return",g(a.data));case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function g(e){return new a.default(Number(e.lat),Number(e.lon),e.display_name)}},1851:function(e,d,p){"use strict";p.r(d),function(u,f){p.d(d,"fetchRoutingBkgGeosearch",function(){return r}),p.d(d,"fetchRoutingBkgGeosearchReverse",function(){return i}),p.d(d,"fetchBkgGeosearchSuggestions",function(){return a});var e=p(195),l=p.n(e),g=p(1802);function c(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function t(s){return function(){var e=this,i=arguments;return new Promise(function(t,r){var n=s.apply(e,i);function a(e){c(n,t,r,a,o,"next",e)}function o(e){c(n,t,r,a,o,"throw",e)}a(void 0)})}}function r(e){return n.apply(this,arguments)}function n(){return(n=t(regeneratorRuntime.mark(function e(t){var r,n,a,o,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.request("RoutingLGB","getSettings").geosearch,n=r.serviceId,a=u.request("RestReader","getServiceById",n).get("url"),o="".concat(a,"?count=").concat(r.limit,"&properties=text"),i="&query=".concat(encodeURIComponent(t)),e.next=7,l.a.get(o+i,{timeout:r.timeout});case 7:if(200===(s=e.sent).status||s.data.success){e.next=10;break}throw new Error({status:s.status,message:s.statusText});case 10:return e.abrupt("return",s.data.features.map(function(e){return h(e)}));case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function a(e){return o.apply(this,arguments)}function o(){return(o=t(regeneratorRuntime.mark(function e(t){var r,n,a,o,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.request("RoutingLGB","getSettings").geosearch,n=r.serviceId,a=u.request("RestReader","getServiceById",n).get("url").replace("geosearch.json","suggest"),o="".concat(a,"?count=").concat(r.limit,"&properties=text"),i="&query=".concat(encodeURIComponent(t)),e.next=7,l.a.get(o+i,{timeout:r.timeout});case 7:if(200===(s=e.sent).status||s.data){e.next=10;break}throw new Error({status:s.status,message:s.statusText});case 10:return e.abrupt("return",s.data.map(function(e){return e.suggestion}));case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function i(e){return s.apply(this,arguments)}function s(){return(s=t(regeneratorRuntime.mark(function e(t){var r,n,a,o,i,s,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.request("RoutingLGB","getSettings").geosearchReverse,n=r.serviceId,a=r.filter,o=u.request("RestReader","getServiceById",n).get("url"),i="&filter="+(a||"typ:haus"),s="".concat(o,"?lon=").concat(t[0],"&lat=").concat(t[1],"&count=1&properties=text&distance=").concat(r.distance).concat(i),e.next=8,l.a.get(s,{timeout:r.timeout});case 8:if(200===(c=e.sent).status||c.data.success){e.next=11;break}throw new Error({status:c.status,message:c.statusText});case 11:if(f.isEmpty(c.data.features))return e.abrupt("return",new g.default(t[0],t[1]));e.next=13;break;case 13:return e.abrupt("return",h(c.data.features[0]));case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e){return new g.default(Number(e.geometry.coordinates[1]),Number(e.geometry.coordinates[0]),e.properties.text)}}.call(this,p(4),p(3))},1852:function(e,s,c){"use strict";c.r(s),function(t){c.d(s,"default",function(){return e});var r=c(23),n=c(34);function a(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=null;function e(e){return i=i||t.request("RoutingLGB","getSettings").routing.styleRoute,e.get("isHighlight")?new r.c({stroke:new n.a({color:[].concat(a(i.partHighlightColor),[1]),width:i.partHighlightWidth})}):[new r.c({stroke:new n.a({color:[].concat(a(i.highlightColor),[1]),width:i.highlightWidth})}),new r.c({stroke:new n.a({color:[].concat(a(i.fillColor),[1]),width:i.width})})]}}.call(this,c(4))},1854:function(e,g,h){"use strict";h.r(g),function(o){h.d(g,"fetchCoordinatesByText",function(){return t}),h.d(g,"fetchTextByCoordinates",function(){return f}),h.d(g,"fetchSuggestionsByText",function(){return n});var i=h(1850),s=h(1851),c=h(1809);h(1802);function u(e,t,r,n,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function e(s){return function(){var e=this,i=arguments;return new Promise(function(t,r){var n=s.apply(e,i);function a(e){u(n,t,r,a,o,"next",e)}function o(e){u(n,t,r,a,o,"throw",e)}a(void 0)})}}function t(e){return r.apply(this,arguments)}function r(){return(r=e(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.search,n=o.request("RoutingLGB","getSettings").geosearch,a=[],r.length<n.minChars)return e.abrupt("return",a);e.next=5;break;case 5:if(e.prev=5,"NOMINATIM"===n.type)return e.next=9,Object(i.fetchRoutingNominatimGeosearch)(r);e.next=12;break;case 9:a=e.sent,e.next=19;break;case 12:if("BKG"===n.type)return e.next=15,Object(s.fetchRoutingBkgGeosearch)(r);e.next=18;break;case 15:a=e.sent,e.next=19;break;case 18:throw new Error("Geosearch is not configured correctly.");case 19:a.forEach(function(e){var t=Object(c.transformCoordinatesWgs84ToLocalProjection)([e.getLng(),e.getLat()]);e.setCoordinates(t)}),e.next=24;break;case 22:e.prev=22,e.t0=e.catch(5);case 24:return e.abrupt("return",a);case 25:case"end":return e.stop()}},e,null,[[5,22]])}))).apply(this,arguments)}function n(e){return a.apply(this,arguments)}function a(){return(a=e(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.request("RoutingLGB","getSettings").geosearch,n=[],t.length<r.minChars)return e.abrupt("return",n);e.next=4;break;case 4:return e.prev=4,e.next=7,Object(s.fetchBkgGeosearchSuggestions)(t);case 7:n=e.sent,e.next=12;break;case 10:e.prev=10,e.t0=e.catch(4);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}},e,null,[[4,10]])}))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=e(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.request("RoutingLGB","getSettings").geosearch,n=null,e.prev=2,"NOMINATIM"===r.type)return e.next=6,Object(i.fetchRoutingNominatimGeosearchReverse)(t);e.next=9;break;case 6:n=e.sent,e.next=16;break;case 9:if("BKG"===r.type)return e.next=12,Object(s.fetchRoutingBkgGeosearchReverse)(t);e.next=15;break;case 12:n=e.sent,e.next=16;break;case 15:throw new Error("Geosearch is not configured correctly.");case 16:a=Object(c.transformCoordinatesWgs84ToLocalProjection)([n.getLng(),n.getLat()]),n.setCoordinates(a),e.next=22;break;case 20:e.prev=20,e.t0=e.catch(2);case 22:return e.abrupt("return",n);case 23:case"end":return e.stop()}},e,null,[[2,20]])}))).apply(this,arguments)}}.call(this,h(4))}}]);