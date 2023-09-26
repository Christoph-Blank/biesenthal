(window.webpackJsonp=window.webpackJsonp||[]).push([[261,245,254,257,258,263,264],{1798:function(e,t,n){"use strict";n.r(t),n.d(t,"SpeedProfile",function(){return r}),n.d(t,"AvoidFeatureOption",function(){return o}),n.d(t,"Optimization",function(){return a}),n.d(t,"DownloadFormat",function(){return i}),n.d(t,"ResultError",function(){return l});var r=Object.freeze({CAR:{id:"CAR",i18n:"car",icon:"fa-car",orsKey:"driving-car"},HGV:{id:"HGV",i18n:"hgv",icon:"fa-truck",orsKey:"driving-hgv"},FOOT:{id:"FOOT",i18n:"foot",icon:"fa-walking",orsKey:"foot-walking"},CYCLING:{id:"CYCLING",i18n:"cycling",icon:"fa-bicycle",orsKey:"cycling-regular"},WHEELCHAIR:{id:"WHEELCHAIR",i18n:"wheelchair",icon:"fa-wheelchair",orsKey:"wheelchair"}}),o=Object.freeze({HIGHWAYS:{id:"HIGHWAYS",i18n:"highways",availableProfiles:["CAR","HGV"],orsKey:"highways"},TOLLWAYS:{id:"TOLLWAYS",i18n:"tollways",availableProfiles:["CAR","HGV"],orsKey:"tollways"},FERRIES:{id:"FERRIES",i18n:"ferries",availableProfiles:["CAR","HGV","CYCLING","FOOT","WHEELCHAIR"],orsKey:"ferries"},STEPS:{id:"STEPS",i18n:"steps",availableProfiles:["CYCLING","FOOT","WHEELCHAIR"],orsKey:"steps"}}),a=Object.freeze({TIME:{id:"TIME",i18n:"time",orsKey:"time",multiplicator:60,unit:"min"},DISTANCE:{id:"DISTANCE",i18n:"distance",orsKey:"distance",multiplicator:1e3,unit:"km"}}),i=Object.freeze({GEOJSON:"GEOJSON",KML:"KML"}),l=Object.freeze({NO_ISOCHRONES_FOUND:{i18n:"noIsochronesFound"},AVOID_AREA_TOO_LARGE:{i18n:"avoidAreasTooLarge"},FETCHING_FAILED:{i18n:"fetchingFailed"}})},1800:function(e,o,a){"use strict";a.r(o),function(t){a.d(o,"transformCoordinatesLocalToWgs84Projection",function(){return e}),a.d(o,"transformCoordinatesWgs84ToLocalProjection",function(){return r});var n=a(55);function e(e){return Object(n.e)(t.request("MapView","getProjection").getCode(),"EPSG:4326",e)}function r(e){return Object(n.e)("EPSG:4326",t.request("MapView","getProjection").getCode(),e)}}.call(this,a(4))},1823:function(e,t,n){"use strict";n.r(t);var r=n(41);t.default=new r.a},1828:function(e,t,s){"use strict";s.r(t),function(n){s.d(t,"default",function(){return e});var r=s(23),o=s(37),a=s(34);function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=null;function e(e){c=c||n.request("Reachability","getSettings").isochrones.styleAreas;var t=e.get("color");return new r.c({fill:new o.a({color:[].concat(i(t),[c.opacity])}),stroke:new a.a({color:c.lineColor,width:c.lineWidth})})}}.call(this,s(4))},1849:function(e,g,v){"use strict";v.r(g),function(a){v.d(g,"default",function(){return y}),v.d(g,"convertFeatures",function(){return m}),v.d(g,"transformCoordinates",function(){return d});var i=v(280),t=v(38);function l(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var e,n,r,o=(e="EPSG:25832",n="EPSG:4326",r="32",t.default.defs(e,"+proj=utm +zone="+r+"ellps=WGS84 +towgs84=0,0,0,0,0,0,1 +units=m +no_defs"),{sourceProj:Object(t.default)(e),destProj:Object(t.default)(n)}),s=[{color:"blue",value:[55,126,184]},{color:"black",value:[0,0,0]},{color:"green",value:[77,175,74]},{color:"grey",value:[153,153,153]},{color:"orange",value:[255,127,0]},{color:"red",value:[228,26,28]},{color:"white",value:[255,255,255]},{color:"yellow",value:[255,255,51]}];function A(r){var e=s.filter(function(e){return t=r,n=e.value,Array.isArray(t)&&3===t.length&&Array.isArray(n)&&3===n.length&&t.every(function(e,t){return e===n[t]});var t,n});return e&&e[0]?e[0].color:""}function u(e,t){var n,r=[],o=l(e);try{for(o.s();!(n=o.n()).done;){var a=n.value;t?a.forEach(function(e){r.push(f(e))}):r.push(f(a))}}catch(e){o.e(e)}finally{o.f()}return t?[r]:r}function f(e){return Object(t.default)(o.sourceProj,o.destProj,e)}function d(e){var t=e.getCoordinates();switch(e.getType()){case"LineString":return u(t,!1);case"Point":return f(t);case"Polygon":return u(t,!0);default:return[]}}function m(e,t){var n,r=[],o=l(e);try{for(o.s();!(n=o.n()).done;){var a=n.value.clone(),i=d(a.getGeometry());3===i.length&&0===i[2]&&i.pop(),a.getGeometry().setCoordinates(i,"XY"),r.push(a)}}catch(e){o.e(e)}finally{o.f()}return t.writeFeatures(r)}function y(e){var t,n=e.length,p=Array(n).fill(void 0),r=new i.a({extractStyles:!0}),b=Array(n).fill(!1),w=Array(n).fill(void 0),S=Array(n).fill(!1),s=Array(n).fill(void 0),O=Array(n).fill(void 0),o=(new DOMParser).parseFromString(m(e,r),"text/xml");return e.forEach(function(e,t){var n,r,o,a=e.getGeometry().getType();if("Point"===a&&e.values_.drawState&&void 0!==e.values_.drawState.text)S[t]=!0,O[t]=e.values_.drawState.fontSize;else{try{o=e.getStyleFunction()(e),r=Array.isArray(o)?o[0]:o}catch(e){S[t]=!0}if("Point"===a)if(null!==r.getImage()&&void 0!==r.getImage().iconImage_){b[t]=!0;var i=r.getImage().anchorXUnits_,l=r.getImage().anchorYUnits_,c=r.getImage().anchor_;p[t]={xUnit:i,yUnit:l,anchor:c}}else r.getText()?s[t]=r.getText().getFont():(n=r.getImage().getFill().getColor(),w[t]=[n[0],n[1],n[2]])}}),t=o,Array.from(t.getElementsByTagName("ExtendedData")).forEach(function(e){e.getElementsByTagName("value")[0].textContent=a.request("Util","uniqueId","")}),Array.from(o.getElementsByTagName("Placemark")).forEach(function(e,t){if(0<e.getElementsByTagName("Point").length&&!1===S[t]){var n=e.getElementsByTagName("Style")[0];if(!1===b[t]&&w[t]){var r="".concat(window.location.origin,"/img/tools/draw/circle_").concat(A(w[t]),".svg"),o=(u=r,f="<scale>".concat(1,"</scale>"),d="<href>".concat(u,"</href>"),"<IconStyle>".concat(f,"<Icon>").concat(d,"</Icon></IconStyle>"));n.innerHTML+=o}else if(!0===b[t]&&void 0!==p[t]){e.getElementsByTagName("IconStyle")[0].innerHTML+=(a=p[t],i=a.anchor[0],l=a.anchor[1],c=a.xUnit,s=a.yUnit,'<hotSpot x="'.concat(i,'" y="').concat(l,'" xunits="').concat(c,'" yunits="').concat(s,'" />'))}}var a,i,l,c,s,u,f,d;if(0<e.getElementsByTagName("Point").length&&!0===S[t]&&!isNaN(O[t])){var m=O[t]/16,y=e.getElementsByTagName("Style")[0],g="".concat(window.location.origin,"/img/tools/draw/circle_blue.svg"),v=(new DOMParser).parseFromString("<IconStyle><scale>0</scale><Icon><href>"+g+"</href></Icon></IconStyle>","text/xml"),h=(new DOMParser).parseFromString("<scale>"+m+"</scale>","text/xml");y.getElementsByTagName("LabelStyle")[0].appendChild(h.getElementsByTagName("scale")[0]),y.appendChild(v.getElementsByTagName("IconStyle")[0])}}),(new XMLSerializer).serializeToString(o)}}.call(this,v(4))},1858:function(e,t,n){"use strict";n.r(t),n.d(t,"downloadAreas",function(){return a});var y=n(81),g=n(36),v=n(1800),r=n(1849),s=n(1798),o=n(14),u=n.n(o),f=n(1823),d=n(1828);function h(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){switch(t){case s.DownloadFormat.GEOJSON:return function(e,t){if(!(t instanceof y.a&&Array.isArray(e)))return"";var n,r=[],o=h(e);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(a instanceof g.a){var i=a.clone(),l=i.getGeometry(),c=l.getType(),s=l.getCoordinates(),u=[];if("Point"===c)u=Object(v.transformCoordinatesLocalToWgs84Projection)(s);else if("LineString"===c)u=s.map(function(e){return Object(v.transformCoordinatesLocalToWgs84Projection)(e)});else if("Polygon"===c){var f,d=h(s);try{for(d.s();!(f=d.n()).done;){var m=f.value;u.push(m.map(function(e){return Object(v.transformCoordinatesLocalToWgs84Projection)(e)}))}}catch(e){d.e(e)}finally{d.f()}}l.setCoordinates(u),r.push(i)}}}catch(e){o.e(e)}finally{o.f()}return t.writeFeatures(r)}(e,new y.a);case s.DownloadFormat.KML:return Object(r.default)(e);default:return}}function a(){var e,t,n,r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:s.DownloadFormat.GEOJSON,o=1<arguments.length?arguments[1]:void 0,a=m(function(e){var t,n=h(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,o=Object(d.default)(r);o[1]&&r.setStyle(o[1])}}catch(e){n.e(e)}finally{n.f()}return e}(f.default.getFeatures()),r),i=(e=r,t=o,n=u()().format("YYYYMMDD_HHmm"),(t||"reachability_"+n)+"."+e.toLowerCase());if("function"==typeof navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(new Blob([a],{type:"text/plain;charset=utf-8"}),i);else{var l="data:text/plain;charset=utf-8,".concat(encodeURIComponent(a)),c=document.createElement("a");c.href=l,c.download=i,c.style.visibility="hidden",c.onclick=function(){return!0},document.body.appendChild(c),c.click(),document.body.removeChild(c)}}},1882:function(e,c,s){"use strict";s.r(c),function(e,t,n){var r=s(2088),o=s.n(r),a=s(1798),i=s(1858),l=(s(286),e.View.extend({className:"modal fade",events:{"click .btn-close":"close","submit #downloadForm":"download"},initialize:function(){this.template=t.template(o.a),document.getElementsByClassName("masterportal-container")[0].appendChild(this.el)},render:function(){var e={i18n:n.t("additional:reachability",{returnObjects:!0}),downloadFormatOptions:Object.values(a.DownloadFormat)};return this.$el.html(this.template(e)),this.$("#formatPicker").selectpicker({styleBase:"btn",style:"btn-select",width:"100%"}),this.$el.on("hidden.bs.modal",this.remove.bind(this)),this},show:function(){this.render(),this.$el.modal("show")},close:function(){this.$el.modal("hide")},download:function(e){e.preventDefault();var t=this.$("#filename").val(),n=this.$("#formatPicker").val();Object(i.downloadAreas)(n,t),this.close()}}));c.default=l}.call(this,s(5),s(3),s(24))},2088:function(e,t){e.exports='<div class="modal-dialog modal-sm" role="document">\n    <form id="downloadForm">\n        <div class="modal-content">\n            <div class="modal-header">\n                <button type="button" class="btn-close close" aria-label="<%= i18n.close %>" title="<%= i18n.close %>"><span aria-hidden="true">&times;</span></button>\n                <h4 class="modal-title"><%= i18n.download %></h4>\n            </div>\n            <div class="modal-body">\n                    <div class="form-group">\n                        <label for="filename"><%= i18n.filename %></label>\n                        <input id="filename" type="text" class="form-control" placeholder="<%= i18n.filename %>" />\n                    </div>\n                    <div class="form-group">\n                        <label for="formatPicker">Format</label>\n                        <select id="formatPicker">\n                            <% _.each(downloadFormatOptions, function(option) { %>\n                                <option value="<%= option %>"><%= option %></option>\n                            <% }) %>\n                        </select>\n                    </div>\n            </div>\n            <div class="modal-footer">\n                <button type="button" class="btn btn-close"><%= i18n.close %></button>\n                <button type="submit" class="btn btn-primary"><%= i18n.download %></button>\n            </div>\n        </div>\n    </form>\n</div>\n'}}]);