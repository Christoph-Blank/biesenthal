(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{1875:function(t,o,s){"use strict";s.r(o),function(t,e,r){var i=s(2085),a=s.n(i),n=t.View.extend({events:{click:"onHitClick",keydown:"onHitKeyDown",mouseenter:"onHitMouseenter",mouseleave:"onHitMouseleave","click .hit-list-map":"onMapClick","click .hit-routing":"onRouteOpenClick"},initialize:function(t){this.options=t,this.render()},tagName:"li",template:e.template(a.a),attributes:{class:"list-group-item hit"},render:function(){var t=this.model.toJSON();return t.isRoutable=this.model.isRoutable(),this.$el.html(this.template(t)),this},onHitClick:function(){this.options&&this.options.onHitClick&&this.options.onHitClick(this.model.toJSON())},onHitKeyDown:function(){this.onHitMouseenter()},onHitMouseenter:function(){this.model.showResultMap()},onHitMouseleave:function(){r.trigger("MapMarker","hideWktFeature"),this.model.hideOverlay(),this.lastExtent&&r.trigger("Map","zoomToExtent",this.lastExtent)},onMapClick:function(){var t=this.model.getTransformedExtent(),e=this.model.get("id"),i=this.model.get("additionalData").serviceType,a=this.model.get("additionalData").serviceUrl,n=this.model.get("additionalData").metadataUrl,o=this.model.getMapImport(i,a,e,n);t&&(r.trigger("MapMarker","hideWktFeature"),this.model.hideOverlay(),r.trigger("Map","zoomToExtent",t),r.request("Importer","set",o),this.onHitClick())},onRouteOpenClick:function(t){t.stopPropagation(),this.onHitClick(),r.trigger("MapMarker","hideWktFeature"),this.model.hideOverlay(),this.model.openRouting()}});o.default=n}.call(this,s(5),s(3),s(4))},2085:function(t,e){t.exports='<div class="content-hit-container">\r\n    <div>\r\n        <span class="glyphicon <% if (glyphIcon) print(glyphIcon) %> text-center img-hit" aria-hidden="true"></span>\r\n    </div>\r\n\r\n    <div>\r\n        <div class="search-result-row">\r\n            <span>\r\n                <div class="search-result-title" title="<%= title %>"><%= title %></div>\r\n                <% if (category && additionalData && additionalData.subtitle) { %>\r\n                    <div class="search-result-subtitle" title="<%= additionalData.subtitle %>"><%= additionalData.subtitle %></div>\r\n                <% } %>\r\n            </span>\r\n            <span>\r\n            \x3c!-- Remove the last part of the following line to enable also wfs import: && additionalData.serviceType === "WMS" || additionalData.serviceType === "WMTS" --\x3e\r\n            <% if (type && type === "service" && additionalData && additionalData.serviceUrl && additionalData.serviceUrl.length && (additionalData.serviceType === "WMS" || additionalData.serviceType === "WMTS")) { %>\r\n                <span title="<%= searchResultFooterMapToolTip %>" class="glyphicon <% if (glyphIcons) print(glyphIcons.hitMap) %> text-center hit-list-map img-hit search-result-btn" aria-hidden="true"></span>\r\n            <% } %>\r\n            <% if (category && category === "metadata") { %>\r\n                <a class="" href="<%= additionalData.metadataUrl %>" target="_blank">\r\n                    <span title="<%= searchResultFooterMetadataToolTip %>" class="glyphicon <% if (glyphIcons) print(glyphIcons.hitMetadata) %> text-center img-hit search-result-btn" aria-hidden="true"></span>\r\n                </a>\r\n            <% } %>\r\n            <% if (isRoutable) { %>\r\n                <span title="<%= searchResultFooterRoutingTitle %>" class="hit-routing fas fa-route text-center img-hit search-result-btn" aria-hidden="true"></span>\r\n            <% } %>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n'}}]);