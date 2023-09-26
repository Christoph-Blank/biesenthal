(window.webpackJsonp=window.webpackJsonp||[]).push([[185,183],{1875:function(t,s,o){"use strict";o.r(s),function(t,e,l){var i=o(2085),n=o.n(i),a=t.View.extend({events:{click:"onHitClick",keydown:"onHitKeyDown",mouseenter:"onHitMouseenter",mouseleave:"onHitMouseleave","click .hit-list-map":"onMapClick","click .hit-routing":"onRouteOpenClick"},initialize:function(t){this.options=t,this.render()},tagName:"li",template:e.template(n.a),attributes:{class:"list-group-item hit"},render:function(){var t=this.model.toJSON();return t.isRoutable=this.model.isRoutable(),this.$el.html(this.template(t)),this},onHitClick:function(){this.options&&this.options.onHitClick&&this.options.onHitClick(this.model.toJSON())},onHitKeyDown:function(){this.onHitMouseenter()},onHitMouseenter:function(){this.model.showResultMap()},onHitMouseleave:function(){l.trigger("MapMarker","hideWktFeature"),this.model.hideOverlay(),this.lastExtent&&l.trigger("Map","zoomToExtent",this.lastExtent)},onMapClick:function(){var t=this.model.getTransformedExtent(),e=this.model.get("id"),i=this.model.get("additionalData").serviceType,n=this.model.get("additionalData").serviceUrl,a=this.model.get("additionalData").metadataUrl,s=this.model.getMapImport(i,n,e,a);t&&(l.trigger("MapMarker","hideWktFeature"),this.model.hideOverlay(),l.trigger("Map","zoomToExtent",t),l.request("Importer","set",s),this.onHitClick())},onRouteOpenClick:function(t){t.stopPropagation(),this.onHitClick(),l.trigger("MapMarker","hideWktFeature"),this.model.hideOverlay(),this.model.openRouting()}});s.default=a}.call(this,o(5),o(3),o(4))},1927:function(t,h,d){"use strict";d.r(h),function(t,e){var i=d(1875),n=d(2093),a=d.n(n),s=d(2094),l=d.n(s),o=d(2095),r=d.n(o),c=t.View.extend({events:{"click .btn-detailed-search":"onDetailedSearchBtnClick"},initialize:function(t){this.options=t,this.listenTo(this.collection,{change:this.render})},tagName:"ul",templateDetailedSearchButton:e.template(a.a),templateNumberSearchResults:e.template(l.a),templateNoResults:e.template(r.a),attributes:{class:"search-dropdown-list hit-list"},render:function(){var t=this.model.toJSON();return this.$el.children().remove(),this.collection.forEach(function(t){var e=new i.default({model:t,onHitClick:this.options?this.options.onHitClick:void 0});this.$el.append(e.el)},this),0===this.collection.length?this.$el.append(this.templateNoResults(t)):this.$el.append(this.templateNumberSearchResults(t)),this.$el.append(this.templateDetailedSearchButton(t)),this},onDetailedSearchBtnClick:function(){this.options&&this.options.onDetailedSearchBtnClick&&this.options.onDetailedSearchBtnClick()}});h.default=c}.call(this,d(5),d(3))},2085:function(t,e){t.exports='<div class="content-hit-container">\r\n    <div>\r\n        <span class="glyphicon <% if (glyphIcon) print(glyphIcon) %> text-center img-hit" aria-hidden="true"></span>\r\n    </div>\r\n\r\n    <div>\r\n        <div class="search-result-row">\r\n            <span>\r\n                <div class="search-result-title" title="<%= title %>"><%= title %></div>\r\n                <% if (category && additionalData && additionalData.subtitle) { %>\r\n                    <div class="search-result-subtitle" title="<%= additionalData.subtitle %>"><%= additionalData.subtitle %></div>\r\n                <% } %>\r\n            </span>\r\n            <span>\r\n            \x3c!-- Remove the last part of the following line to enable also wfs import: && additionalData.serviceType === "WMS" || additionalData.serviceType === "WMTS" --\x3e\r\n            <% if (type && type === "service" && additionalData && additionalData.serviceUrl && additionalData.serviceUrl.length && (additionalData.serviceType === "WMS" || additionalData.serviceType === "WMTS")) { %>\r\n                <span title="<%= searchResultFooterMapToolTip %>" class="glyphicon <% if (glyphIcons) print(glyphIcons.hitMap) %> text-center hit-list-map img-hit search-result-btn" aria-hidden="true"></span>\r\n            <% } %>\r\n            <% if (category && category === "metadata") { %>\r\n                <a class="" href="<%= additionalData.metadataUrl %>" target="_blank">\r\n                    <span title="<%= searchResultFooterMetadataToolTip %>" class="glyphicon <% if (glyphIcons) print(glyphIcons.hitMetadata) %> text-center img-hit search-result-btn" aria-hidden="true"></span>\r\n                </a>\r\n            <% } %>\r\n            <% if (isRoutable) { %>\r\n                <span title="<%= searchResultFooterRoutingTitle %>" class="hit-routing fas fa-route text-center img-hit search-result-btn" aria-hidden="true"></span>\r\n            <% } %>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n'},2093:function(t,e){t.exports='<li>\r\n    <button class="btn btn-detailed-search" type="button" title="<%= detailedSearchButtonTitle %>">\r\n        <span class="glyphicon <%= glyphIcons.search %>"></span>\r\n        <span><%= detailedSearchButtonTitle %></span>\r\n    </button>\r\n</li>\r\n'},2094:function(t,e){t.exports='<li class="list-group-item">\r\n    <div class="ds-hit-list-total">\r\n        <span><%= searchMeta.total %> <%= searchResultHitTitle %></span>\r\n    </div>\r\n</li>\r\n'},2095:function(t,e){t.exports='<li class="list-group-item text-center item-no-results">\r\n    <%= searchResultNoResultInfo %>\r\n</li>\r\n'}}]);