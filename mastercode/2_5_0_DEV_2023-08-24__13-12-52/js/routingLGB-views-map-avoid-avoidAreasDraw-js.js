(window.webpackJsonp=window.webpackJsonp||[]).push([[298,303,304],{1820:function(t,n,r){"use strict";r.r(n);var e=r(41);n.default=new e.a},1842:function(t,u,f){"use strict";f.r(u),function(t){f.d(u,"default",function(){return l});var n=f(23),r=f(37),e=f(34),o=f(78);function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return a(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var c=null;function l(){return c=c||t.request("RoutingLGB","getSettings").routing.styleAvoidAreas,new n.c({fill:new r.a({color:[].concat(i(c.fillColor),[c.opacity])}),stroke:new e.a({color:[].concat(i(c.lineColor),[1]),width:c.lineWidth}),image:new o.a({radius:c.pointRadius,stroke:new e.a({color:[].concat(i(c.lineColor),[1]),width:c.pointLineWidth}),fill:new r.a({color:[].concat(i(c.fillColor),[c.opacity])})})})}}.call(this,f(4))},1971:function(t,n,r){"use strict";r.r(n);var e=r(241),o=r(1842),i=r(1820);n.default=new e.b({source:i.default,type:"Polygon",style:o.default})}}]);