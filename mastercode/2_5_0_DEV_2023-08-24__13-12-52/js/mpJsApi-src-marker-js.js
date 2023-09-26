(window.webpackJsonp=window.webpackJsonp||[]).push([[235,234],{1833:function(e,t,r){"use strict";r.r(t),function(i){r.d(t,"MapFuncs",function(){return l});var l={getOlMap:function(){return i.request("Map","getMap")},getLayerById:function(t){return i.request("Map","getLayers").getArray().find(function(e){return e.get("id")===t})},getMapViewerState:function(){var e=l.getOlMap(),t=i.request("ModelList","getCollection"),r=t.where({type:"layer"}),n=t.where({type:"folder"}),a=[].concat(r,n),o={};return o.extent=e.getView().calculateExtent(),o.layers=a.map(function(e){var t=e.toJSON();return{id:t.id,transparency:t.transparency,isSelected:t.isSelected,selectionIDX:t.selectionIDX}}),o},applyMapViewerState:function(e){e.extent&&i.trigger("Map","zoomToExtent",e.extent),e.layers&&(e.layers.forEach(function(e){var t=i.request("ModelList","getModelByAttributes",{id:e.id});t&&t.set(e)}),i.trigger("Util","refreshTree"))}};t.default=l}.call(this,r(4))},1894:function(e,n,a){"use strict";a.r(n),function(y,m,i){a.d(n,"Marker",function(){return O});var M=a(1833),t=a(43),r=a(41),h=a(36),w=a(50),k=a(100),S=a(23),E=a(113),L=a(37),c=a(34),P=a(295),A=a(8),O={getMarkerLayer:function(){var e=y.request("Map","getLayerByName","markerVectorLayer");return e||(e=new t.a({name:"markerVectorLayer",source:new r.a}),y.trigger("Map","addLayer",e)),e.setZIndex(999),e},getAllLayers:function(){},getMarkerAsPointLayer:function(){var e=y.request("Map","getLayerByName","markerAsPointLayer");return e||(e=new t.a({name:"markerAsPointLayer",source:new r.a}),y.trigger("Map","addLayer",e)),e.setZIndex(998),e},getMarkerMap:function(){var e=y.request("Map","getLayerByName","mapMarker");return e||(e=new t.a({name:"mapMarker",source:new r.a}),y.trigger("Map","addLayer",e)),e.setZIndex(997),e},getMarkerCoords:function(){var e=O.getMarkerLayer(),t=M.default.getOlMap().getView().getProjection().getCode(),r=[];return e.getSource().getFeatures().forEach(function(e){return r.push(A.n(e.getGeometry().getCoordinates(),t,"EPSG:4326"))}),r},getMarkerAsPointCoords:function(){var e=O.getMarkerAsPointLayer(),r=M.default.getOlMap().getView().getProjection().getCode(),n=[];return e.getSource().getFeatures().forEach(function(e){var t=e.getGeometry().getCoordinates();if(0===t[0]&&0===t[1])return[];n.push(A.n(e.getGeometry().getCoordinates(),r,"EPSG:4326"))}),0===n.length?[]:n},getMarkerMapCoords:function(){var e=O.getMarkerMap(),t=M.default.getOlMap().getView().getProjection().getCode(),r=[];return e.getSource().getFeatures().forEach(function(e){return r.push(A.n(e.getGeometry().getCoordinates(),t,"EPSG:4326"))}),r},addMarker:function(e,t){var r=1<arguments.length&&void 0!==t?t:{},n=r.id,a=r.address,o=r.status,i=r.color,l=r.callback,c=M.default.getOlMap(),s=O.getMarkerLayer(),u=c.getView().getProjection().getCode();"EPSG:4326"!==u&&(e=A.n(e,"EPSG:4326",u));var g=new h.a({geometry:new w.a(e),id:n,address:a,status:o,color:i}),p=new S.c({text:new E.a({text:"",font:"4em Glyphicons Halflings",fill:new L.a({color:i})})});g.setStyle(p),s.getSource().addFeature(g),y.trigger("MapView","setCenter",e);var d=document.createElement("div");d.style="opacity: 0.8;";var f=new k.a({element:d,parentId:n});if(f.setPosition(e),a&&(c.addOverlay(f),m(d).popover({container:d,placement:"top",animation:!0,html:!0,content:"<p>"+a+"</p>"})),l&&l.call){var v=new P.a({layers:function(e){return"markerVectorLayer"===e.get("name")}});c.addInteraction(v),v.on("select",function(e){var t=e.selected[0];if(t){var r=t.get("id"),n=t.getGeometry().getCoordinates();n=A.n(n,u,"EPSG:4326"),l({id:r,coordinates:n})}})}},highlightMarker:function(t,e,r,n){var a=O.getMarkerLayer(),o=a.getSource().getFeatures().find(function(e){return e.get("id")===t});if(o){if(e){if(o.getStyle().getText().setStroke(new c.a({color:r||"blue",width:5})),n){var i=o.getStyle().getText().getFont(),l=n.toString()+i.substring(i.indexOf("em Glyphicons Halflings"));o.getStyle().getText().setFont(l)}}else o.getStyle().getText().setStroke(),o.getStyle().getText().setFont("4em Glyphicons Halflings");a.getSource().changed()}},toggleMarkerTooltip:function(t,e){var r=M.default.getOlMap().getOverlays().getArray().find(function(e){return e.options.parentId===t});r&&(!0===e?(m(r.getElement()).popover("show"),r.panIntoView()):m(r.getElement()).popover("hide"))},removeMarker:function(t){var e=O.getMarkerLayer(),r=e.getSource().getFeatures().find(function(e){return e.get("id")===t}),n=[];if(r){e.getSource().removeFeature(r);var a=M.default.getOlMap();a.getOverlays().getArray().find(function(e){e.options.parentId!==t&&e.options.parentHoverId!==t||n.push(e)}),n.forEach(function(e){a.removeOverlay(e)})}},setAddMarkerOnClick:function(e,t){var n=t;(t&&!t.call||!t)&&e&&(n=function(){},console.warn("Warning: No callback function for the add marker function was defined."));function r(e){var t=M.default.getOlMap().getView().getProjection().getCode(),r=e.coordinate;"EPSG:4326"!==t&&(r=A.n(r,t,"EPSG:4326")),n(r)}var a=M.default.getOlMap();if(e){var o=i.Radio.request("ModelList","getModelByAttributes",{id:"gfi"});o&&o.get("isActive")&&o.setIsActive(!1),a.addEventListener("singleclick",r)}else a.removeEventListener("singleclick",r)},addHTMLMarker:function(e,t){var r=1<arguments.length&&void 0!==t?t:{},n=r.id,a=r.color,o=r.popup,i=!r||!r.hasOwnProperty("centerMap")||r.centerMap,l=r&&r.popup&&r.popup.offset?r.popup.offset:[0,-20],c=M.default.getOlMap(),s=O.getMarkerLayer(),u=c.getView().getProjection().getCode();"EPSG:4326"!==u&&(e=A.n(e,"EPSG:4326",u));var g=new h.a({geometry:new w.a(e),id:n,color:a}),p=new S.c({text:new E.a({text:"",font:"4em Glyphicons Halflings",fill:new L.a({color:a}),backgroundFill:new L.a({color:"#FFFFFF0F"})})});g.setStyle(p),s.getSource().addFeature(g),i&&y.trigger("MapView","setCenter",e);var d=document.createElement("div");d.setAttribute("class","api-html-popup");var f=new k.a({element:d,parentId:n,hoverable:!1,isHtmlPopup:!0,offset:l});f.setPosition(e),o&&o.content&&(c.addOverlay(f),m(d).popover({container:d,placement:"top",animation:!0,html:!0,content:'<div class="'+o.className+'">'+o.content+"</div>",sanitize:!1})),o&&o.hoverContent&&(O.createHoverPopup(n,l,e,o.className,o.hoverContent),O.enableMarkerHover()),O.enableMarkerClick()},createHoverPopup:function(t,e,r,n,a,o){var i=M.default.getOlMap(),l=i.getOverlays().getArray().find(function(e){return e.options.parentHoverId===t});if(l)return l;var c=document.createElement("div");c.setAttribute("class","api-html-hover-popup "+o);var s=new k.a({element:c,parentHoverId:t,hoverable:!0,isHtmlPopup:!0,offset:e});return s.setPosition(r),i.addOverlay(s),m(c).popover({container:c,placement:"top",animation:!0,html:!0,content:'<div class="'+n+'">'+a+"</div>",sanitize:!1}),s},enableMarkerHover:function(){function e(e){var n=!1;e.map.forEachFeatureAtPixel(e.pixel,function(e){var t=e.get("id"),r=a.getOverlays().getArray().find(function(e){return e.options.parentHoverId===t});r&&r.options.hoverable&&(document.querySelector(".api-html-hover-popup > .popover")||(m(r.getElement()).popover("show"),r.panIntoView()),n=!0)}),n||a.getOverlays().getArray().forEach(function(e){return e.options.hoverable&&m(e.getElement()).popover("hide")})}var a=M.default.getOlMap();a.un("pointermove",e),a.on("pointermove",e)},enableMarkerClick:function(){function e(e){var n=!1;e.map.forEachFeatureAtPixel(e.pixel,function(e){var t=e.get("id"),r=a.getOverlays().getArray().find(function(e){return e.options.parentId===t});r&&(m(r.getElement()).popover("show"),r.panIntoView(),n=!0)}),n||a.getOverlays().getArray().forEach(function(e){return e.options.isHtmlPopup&&m(e.getElement()).popover("hide")})}var a=M.default.getOlMap();a.removeEventListener("singleclick",e),a.addEventListener("singleclick",e)},activateGFITool:function(){var e=i.Radio.request("ModelList","getModelByAttributes",{id:"gfi"});e&&!e.get("isActive")&&e.setIsActive(!0)},deactivateGFITool:function(){var e=i.Radio.request("ModelList","getModelByAttributes",{id:"gfi"});e&&e.get("isActive")&&e.setIsActive(!1)}};n.default=O}.call(this,a(4),a(10),a(5))}}]);