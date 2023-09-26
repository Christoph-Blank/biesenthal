(window.webpackJsonp=window.webpackJsonp||[]).push([[10,234,235],{1833:function(e,t,r){"use strict";r.r(t),function(i){r.d(t,"MapFuncs",function(){return l});var l={getOlMap:function(){return i.request("Map","getMap")},getLayerById:function(t){return i.request("Map","getLayers").getArray().find(function(e){return e.get("id")===t})},getMapViewerState:function(){var e=l.getOlMap(),t=i.request("ModelList","getCollection"),r=t.where({type:"layer"}),o=t.where({type:"folder"}),n=[].concat(r,o),a={};return a.extent=e.getView().calculateExtent(),a.layers=n.map(function(e){var t=e.toJSON();return{id:t.id,transparency:t.transparency,isSelected:t.isSelected,selectionIDX:t.selectionIDX}}),a},applyMapViewerState:function(e){e.extent&&i.trigger("Map","zoomToExtent",e.extent),e.layers&&(e.layers.forEach(function(e){var t=i.request("ModelList","getModelByAttributes",{id:e.id});t&&t.set(e)}),i.trigger("Util","refreshTree"))}};t.default=l}.call(this,r(4))},1894:function(e,o,n){"use strict";n.r(o),function(y,m,i){n.d(o,"Marker",function(){return F});var h=n(1833),t=n(43),r=n(41),M=n(36),w=n(50),S=n(100),k=n(23),P=n(113),L=n(37),c=n(34),O=n(295),E=n(8),F={getMarkerLayer:function(){var e=y.request("Map","getLayerByName","markerVectorLayer");return e||(e=new t.a({name:"markerVectorLayer",source:new r.a}),y.trigger("Map","addLayer",e)),e.setZIndex(999),e},getAllLayers:function(){},getMarkerAsPointLayer:function(){var e=y.request("Map","getLayerByName","markerAsPointLayer");return e||(e=new t.a({name:"markerAsPointLayer",source:new r.a}),y.trigger("Map","addLayer",e)),e.setZIndex(998),e},getMarkerMap:function(){var e=y.request("Map","getLayerByName","mapMarker");return e||(e=new t.a({name:"mapMarker",source:new r.a}),y.trigger("Map","addLayer",e)),e.setZIndex(997),e},getMarkerCoords:function(){var e=F.getMarkerLayer(),t=h.default.getOlMap().getView().getProjection().getCode(),r=[];return e.getSource().getFeatures().forEach(function(e){return r.push(E.n(e.getGeometry().getCoordinates(),t,"EPSG:4326"))}),r},getMarkerAsPointCoords:function(){var e=F.getMarkerAsPointLayer(),r=h.default.getOlMap().getView().getProjection().getCode(),o=[];return e.getSource().getFeatures().forEach(function(e){var t=e.getGeometry().getCoordinates();if(0===t[0]&&0===t[1])return[];o.push(E.n(e.getGeometry().getCoordinates(),r,"EPSG:4326"))}),0===o.length?[]:o},getMarkerMapCoords:function(){var e=F.getMarkerMap(),t=h.default.getOlMap().getView().getProjection().getCode(),r=[];return e.getSource().getFeatures().forEach(function(e){return r.push(E.n(e.getGeometry().getCoordinates(),t,"EPSG:4326"))}),r},addMarker:function(e,t){var r=1<arguments.length&&void 0!==t?t:{},o=r.id,n=r.address,a=r.status,i=r.color,l=r.callback,c=h.default.getOlMap(),s=F.getMarkerLayer(),u=c.getView().getProjection().getCode();"EPSG:4326"!==u&&(e=E.n(e,"EPSG:4326",u));var g=new M.a({geometry:new w.a(e),id:o,address:n,status:a,color:i}),d=new k.c({text:new P.a({text:"",font:"4em Glyphicons Halflings",fill:new L.a({color:i})})});g.setStyle(d),s.getSource().addFeature(g),y.trigger("MapView","setCenter",e);var p=document.createElement("div");p.style="opacity: 0.8;";var f=new S.a({element:p,parentId:o});if(f.setPosition(e),n&&(c.addOverlay(f),m(p).popover({container:p,placement:"top",animation:!0,html:!0,content:"<p>"+n+"</p>"})),l&&l.call){var v=new O.a({layers:function(e){return"markerVectorLayer"===e.get("name")}});c.addInteraction(v),v.on("select",function(e){var t=e.selected[0];if(t){var r=t.get("id"),o=t.getGeometry().getCoordinates();o=E.n(o,u,"EPSG:4326"),l({id:r,coordinates:o})}})}},highlightMarker:function(t,e,r,o){var n=F.getMarkerLayer(),a=n.getSource().getFeatures().find(function(e){return e.get("id")===t});if(a){if(e){if(a.getStyle().getText().setStroke(new c.a({color:r||"blue",width:5})),o){var i=a.getStyle().getText().getFont(),l=o.toString()+i.substring(i.indexOf("em Glyphicons Halflings"));a.getStyle().getText().setFont(l)}}else a.getStyle().getText().setStroke(),a.getStyle().getText().setFont("4em Glyphicons Halflings");n.getSource().changed()}},toggleMarkerTooltip:function(t,e){var r=h.default.getOlMap().getOverlays().getArray().find(function(e){return e.options.parentId===t});r&&(!0===e?(m(r.getElement()).popover("show"),r.panIntoView()):m(r.getElement()).popover("hide"))},removeMarker:function(t){var e=F.getMarkerLayer(),r=e.getSource().getFeatures().find(function(e){return e.get("id")===t}),o=[];if(r){e.getSource().removeFeature(r);var n=h.default.getOlMap();n.getOverlays().getArray().find(function(e){e.options.parentId!==t&&e.options.parentHoverId!==t||o.push(e)}),o.forEach(function(e){n.removeOverlay(e)})}},setAddMarkerOnClick:function(e,t){var o=t;(t&&!t.call||!t)&&e&&(o=function(){},console.warn("Warning: No callback function for the add marker function was defined."));function r(e){var t=h.default.getOlMap().getView().getProjection().getCode(),r=e.coordinate;"EPSG:4326"!==t&&(r=E.n(r,t,"EPSG:4326")),o(r)}var n=h.default.getOlMap();if(e){var a=i.Radio.request("ModelList","getModelByAttributes",{id:"gfi"});a&&a.get("isActive")&&a.setIsActive(!1),n.addEventListener("singleclick",r)}else n.removeEventListener("singleclick",r)},addHTMLMarker:function(e,t){var r=1<arguments.length&&void 0!==t?t:{},o=r.id,n=r.color,a=r.popup,i=!r||!r.hasOwnProperty("centerMap")||r.centerMap,l=r&&r.popup&&r.popup.offset?r.popup.offset:[0,-20],c=h.default.getOlMap(),s=F.getMarkerLayer(),u=c.getView().getProjection().getCode();"EPSG:4326"!==u&&(e=E.n(e,"EPSG:4326",u));var g=new M.a({geometry:new w.a(e),id:o,color:n}),d=new k.c({text:new P.a({text:"",font:"4em Glyphicons Halflings",fill:new L.a({color:n}),backgroundFill:new L.a({color:"#FFFFFF0F"})})});g.setStyle(d),s.getSource().addFeature(g),i&&y.trigger("MapView","setCenter",e);var p=document.createElement("div");p.setAttribute("class","api-html-popup");var f=new S.a({element:p,parentId:o,hoverable:!1,isHtmlPopup:!0,offset:l});f.setPosition(e),a&&a.content&&(c.addOverlay(f),m(p).popover({container:p,placement:"top",animation:!0,html:!0,content:'<div class="'+a.className+'">'+a.content+"</div>",sanitize:!1})),a&&a.hoverContent&&(F.createHoverPopup(o,l,e,a.className,a.hoverContent),F.enableMarkerHover()),F.enableMarkerClick()},createHoverPopup:function(t,e,r,o,n,a){var i=h.default.getOlMap(),l=i.getOverlays().getArray().find(function(e){return e.options.parentHoverId===t});if(l)return l;var c=document.createElement("div");c.setAttribute("class","api-html-hover-popup "+a);var s=new S.a({element:c,parentHoverId:t,hoverable:!0,isHtmlPopup:!0,offset:e});return s.setPosition(r),i.addOverlay(s),m(c).popover({container:c,placement:"top",animation:!0,html:!0,content:'<div class="'+o+'">'+n+"</div>",sanitize:!1}),s},enableMarkerHover:function(){function e(e){var o=!1;e.map.forEachFeatureAtPixel(e.pixel,function(e){var t=e.get("id"),r=n.getOverlays().getArray().find(function(e){return e.options.parentHoverId===t});r&&r.options.hoverable&&(document.querySelector(".api-html-hover-popup > .popover")||(m(r.getElement()).popover("show"),r.panIntoView()),o=!0)}),o||n.getOverlays().getArray().forEach(function(e){return e.options.hoverable&&m(e.getElement()).popover("hide")})}var n=h.default.getOlMap();n.un("pointermove",e),n.on("pointermove",e)},enableMarkerClick:function(){function e(e){var o=!1;e.map.forEachFeatureAtPixel(e.pixel,function(e){var t=e.get("id"),r=n.getOverlays().getArray().find(function(e){return e.options.parentId===t});r&&(m(r.getElement()).popover("show"),r.panIntoView(),o=!0)}),o||n.getOverlays().getArray().forEach(function(e){return e.options.isHtmlPopup&&m(e.getElement()).popover("hide")})}var n=h.default.getOlMap();n.removeEventListener("singleclick",e),n.addEventListener("singleclick",e)},activateGFITool:function(){var e=i.Radio.request("ModelList","getModelByAttributes",{id:"gfi"});e&&!e.get("isActive")&&e.setIsActive(!0)},deactivateGFITool:function(){var e=i.Radio.request("ModelList","getModelByAttributes",{id:"gfi"});e&&e.get("isActive")&&e.setIsActive(!1)}};o.default=F}.call(this,n(4),n(10),n(5))},1978:function(e,t,r){"use strict";r.r(t),function(a,d){r.d(t,"GeoJSON",function(){return f});var i=r(1833),p=r(1894),l=r(515);function c(e,t,r,o,n,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(o,n)}var f={addGeoJSONLayer:function(e,s){if(e){if(!e.length)try{e=JSON.stringify(e)}catch(e){return void console.error("Error stringifying the GeoJSON Object: ",e)}var t="geojson-"+Math.round(Math.random()*new Date);a.trigger("Parser","addGeoJSONLayer",s.layerName,t,e),a.trigger("ModelList","addModelsByAttributes",{id:t});var u=a.request("ModelList","getModelByAttributes",{id:t}),r=new l.a(s.style||{rules:[{style:{type:"circle",circleFillColor:[0,160,0,.8],circleRadius:10,lineStrokeColor:[0,160,0,.8],lineStrokewidth:5,polygonFillColor:[0,160,0,.8]}}]}),g=new l.a(s.hoverStyle||{rules:[{style:{type:"circle",circleFillColor:[255,0,0,.8],circleRadius:10,lineStrokeColor:[255,0,0,.8],lineStrokewidth:5,polygonFillColor:[255,0,0,.8]}}]});if(u.attributes.layer.setStyle(function(e){return r.createStyle(e,!1)}),u.collection.trigger("updateClassicTree"),s.hoverField){var o=i.default.getOlMap(),n=function(e){var c=!1;e.map.forEachFeatureAtPixel(e.pixel,function(e,t){if(t===u.attributes.layer){var r=e.getId(),o=e.getGeometry(),n=o.getCoordinates(),a=o.getType(),i=u.attributes.layer.get("id");["MultiLineString","LineString"].includes(a)?n=o.getFlatMidpoint():["MultiPolygon","Polygon"].includes(a)&&(n=o.getFlatInteriorPoint?o.getFlatInteriorPoint():o.getFlatInteriorPoints());var l=p.default.createHoverPopup(r,[0,-10],n,"geojson-popup",e.getProperties()[s.hoverField],i);if(l)return document.querySelector(".api-html-hover-popup."+i+"> .popover")||(d(l.getElement()).popover("show"),l.panIntoView(),f.hoverCleanup(t),e.setStyle(g.createStyle(e,!1)),e.set("isHovering",!0)),c=!0}}),c||(document.querySelector(".api-html-hover-popup."+layerId+"> .popover")&&f.hoverCleanup(u.attributes.layer),o.getOverlays().getArray().forEach(function(e){e.options.hoverable&&-1<e.options.element.className.indexOf(u.attributes.layer.get("id"))&&d(e.getElement()).popover("hide")}))};o.un("pointermove",n),o.on("pointermove",n)}return t}console.error("No GeoJSON supplied to `addGeoJSONLayer` method")},addGeoJSONLayerFromURL:function(o,n){return l=regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.useProxy&&!Config.corsProxy?console.warn("GeoJSON Layer is configured to use a proxy but none is configured"):n.useProxy&&Config.corsProxy&&(o=a.request("Util","addCorsProxy",o)),e.prev=1,e.next=4,fetch(o);case 4:return t=e.sent,e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",f.addGeoJSONLayer(r,n));case 11:e.prev=11,e.t0=e.catch(1),console.error("Fetching of GeoJSON URL failed:",e.t0);case 14:case"end":return e.stop()}},e,null,[[1,11]])}),function(){var e=this,i=arguments;return new Promise(function(t,r){var o=l.apply(e,i);function n(e){c(o,t,r,n,a,"next",e)}function a(e){c(o,t,r,n,a,"throw",e)}n(void 0)})}();var l},hoverCleanup:function(e){e.getSource().getFeatures().filter(function(e){return e.get("isHovering")}).forEach(function(e){e.setStyle(!1),e.set("isHovering",!1)})},removeGeoJSONLayer:function(e){e?a.trigger("ClassicTree","removeLayerById",e):console.error("No layerid supplied to `removeGeoJSONLayer` method")}};t.default=f}.call(this,r(4),r(10))}}]);