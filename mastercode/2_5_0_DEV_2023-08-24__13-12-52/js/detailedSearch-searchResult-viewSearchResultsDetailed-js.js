(window.webpackJsonp=window.webpackJsonp||[]).push([[186,171,184],{1856:function(t,s,o){"use strict";o.r(s),function(t,a,n){var i=o(2084),e=o.n(i),l=t.View.extend({events:{"click .footer-list-download":"onDownloadClick","click .footer-list-map":"onMapClick","click .footer-list-routing":"onRouteOpenClick"},initialize:function(t){this.options=t},template:a.template(e.a),tagName:"ul",className:"list-inline",render:function(){var t=this.model.toJSON();return t.isRoutable=this.model.isRoutable(),this.$el.html(this.template(t)),this},onDownloadClick:function(){var t=this.model.get("additionalData").serviceUrl,a=this.model.get("additionalData").version,i=this.model.getMapExport(t,a);n.request("Exporter","set",i),this.onHitClick()},onMapClick:function(){var t=this.model.getTransformedExtent(),a=this.model.get("id"),i=this.model.get("additionalData").serviceType,e=this.model.get("additionalData").serviceUrl,l=this.model.getMapImport(i,e,a);t&&(n.trigger("Map","zoomToExtent",t),n.request("Importer","set",l),this.onHitClick())},onHitClick:function(){this.options&&this.options.onHitClick&&this.options.onHitClick(this.model.toJSON())},onRouteOpenClick:function(){this.model.openRouting()}});s.default=l}.call(this,o(5),o(3),o(4))},1876:function(t,s,o){"use strict";o.r(s),function(t,a){var i=o(2086),e=o.n(i),l=o(1856),n=t.View.extend({events:{"click .search-result-hit-header":"onHitClick"},initialize:function(t){this.options=t,this.footer=new l.default({model:this.model,onHitClick:this.options.onHitClick})},tagName:"div",attributes:{class:"list-group-item search-result-list-item"},template:a.template(e.a),render:function(){var t=this.model.toJSON();return t.isRoutable=this.model.isRoutable(),this.$el.html(this.template(t)),this.$(".search-result-list-item-footer").append(this.footer.render().el),this},onHitClick:function(){this.model.showResultMap()}});s.default=n}.call(this,o(5),o(3))},1928:function(t,e,l){"use strict";l.r(e),function(t){var i=l(1876),a=t.View.extend({initialize:function(t){this.options=t,this.listenTo(this.collection,{change:this.render,sort:this.render})},tagName:"div",attributes:{class:"list-group"},render:function(){return this.$el.children().remove(),this.collection.forEach(function(t){var a=new i.default({model:t,onHitClick:this.options?this.options.onHitClick:void 0});this.$el.append(a.render().el)},this),this}});e.default=a}.call(this,l(5))},2084:function(t,a){t.exports='<% if (category === "metadata") { %>\r\n    <li class="">\r\n        \x3c!-- Replace the last part of line 4 with the folling code to enable WFS map import: --\x3e\r\n        \x3c!-- (additionalData.serviceType === "WMS" || additionalData.serviceType === "WMTS" || additionalData.serviceType === "WFS") --\x3e\r\n        <% if (geometry && category === "metadata" && additionalData && type === "service" && (additionalData.serviceType === "WMS" || additionalData.serviceType === "WMTS")) { %>\r\n            <a class="btn btn-custom-light footer-list-map">\r\n                <span class="glyphicon <%= glyphIcons.hitMap %>"></span> <%= searchResultFooterMapTitle %>\r\n            </a>\r\n            <% } else { %>\r\n                <a type="button" class="btn footer-button-disabled">\r\n                <span class="glyphicon <%= glyphIcons.hitMap %>"></span> <%= searchResultFooterMapTitle %>\r\n            </a>\r\n                <% } %>\r\n    </li>\r\n    <li class="">\r\n        \x3c!-- Remove false from the following line when WFS export shall be enabled --\x3e\r\n        <% if (false & category === "metadata" && additionalData && type === "service" && additionalData.serviceType === "WFS") { %>\r\n            <a class="btn btn-custom-light footer-list-download">\r\n                <span class="glyphicon <%= glyphIcons.hitDownload %>"></span> <%= searchResultFooterDownloadTitle %>\r\n            </a>\r\n            <% } else { %>\r\n                <a class="btn hidden">\r\n                <span class="glyphicon <%= glyphIcons.hitDownload %>"></span> <%= searchResultFooterDownloadTitle %>\r\n            </a>\r\n                <% } %>\r\n    </li>\r\n    <li class="">\r\n        <% if (category === "metadata" && additionalData && additionalData.metadataUrl) { %>\r\n            <a class="btn btn-custom-light" href="<%= additionalData.metadataUrl %>" target="_blank">\r\n                <span class="glyphicon <%= glyphIcons.hitMetadata %>"></span> <%= searchResultFooterMetadataTitle %>\r\n            </a>\r\n            <% } else { %>\r\n                <a class="btn footer-button-disabled">\r\n                <span class="glyphicon <%= glyphIcons.hitMetadata %>"></span> <%= searchResultFooterMetadataTitle %>\r\n            </a>\r\n                <% } %>\r\n    </li>\r\n    <li class="">\r\n        <% if (category === "metadata" && additionalData && additionalData.serviceUrl) { %>\r\n            <a class="btn btn-custom-light" href="<%= additionalData.serviceUrl %>" target="_blank">\r\n                    <span class="glyphicon <%= glyphIcons.hitCapabilities %>"></span> <%= searchResultFooterCapabilitiesTitle %>\r\n                </a>\r\n            <% } else { %>\r\n                <a class="footer-button-disabled">\r\n                <span class="glyphicon <%= glyphIcons.hitCapabilities %>"></span> <%= searchResultFooterCapabilitiesTitle %>\r\n            </a>\r\n                <% } %>\r\n    </li>\r\n    <% } else if (isRoutable) { %>\r\n        <li class="">\r\n            <a class="btn btn-custom-light footer-list-routing">\r\n                <i class="fas fa-route"></i>\r\n                <%= searchResultFooterRoutingTitle %>\r\n            </a>\r\n        </li>\r\n        <% } %>'},2086:function(t,a){t.exports='<div class="well media">\n    <div class="img-hit-container pull-right">\n        <% if (thumbnail) { %>\n            <img class="media-object img-thumbnail image-search-results" src="<%= thumbnail %>" />\n        <% } %>\n    </div>\n    <div class="content-hit-container">\n        <div class="category-indicator">\n            <div>\n                <span class="glyphicon <% if (glyphIcon) print(glyphIcon) %> text-center img-hit " aria-hidden="true"></span>\n            </div>\n            <small><%= category_label || category %> | <%= staticTypeDescription %>: <%= type_label %></small>\n        </div>\n        <a href="#" class="search-result-hit-header" data-hitid="<%= id %>">\n            <h4 href="#" class="hit-title" title="<%= title %>"><%= title %></h4>\n        </a>\n        <% if (category && category === "kataster" && additionalData && additionalData.subtitle) { %>\n            <small class="search-result-subtitle" title="<%= additionalData.subtitle %>"><%= additionalData.subtitle %></small>\n        <% } %>\n        <% if (category && category === "haltestellen" && additionalData && additionalData.subtitle) { %>\n            <small class="search-result-subtitle" title="<%= additionalData.subtitle %>"><%= additionalData.subtitle %></small>\n            <small class="search-result-subtitle" title="<%= additionalData.subtitle %>"><%= additionalData.line %></small>\n        <% } %>\n        <small title="<%= description %>"><%= description %></small>\n    </div>\n    <% if (category === "metadata" || isRoutable) { %>\n        <div class="search-result-list-item-footer"></div>\n    <% } %>\n</div>\n\n'}}]);