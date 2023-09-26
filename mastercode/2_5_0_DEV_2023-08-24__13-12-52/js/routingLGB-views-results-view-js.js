(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{1960:function(e,c,u){"use strict";u.r(c),function(e,t,i){var s=u(5),n=(u(308),u(2107)),r=u.n(n),a=u(1807),o=u(1892),l=u(1961),d=e.View.extend({model:null,isSegmentOpen:{},template:t.template(r.a),events:{"mouseover .panel-title":"highlightSegment","mouseout .panel-title":"unHighlightRoute","mouseover .step-container":"highlightStep","mouseout .step-container":"unHighlightRoute","click .step-container":"zoomToStep","click .open-route-details":"openRouteDetails","click .close-route-details":"closeRouteDetails","click #downloadButton":"download","click #printButton":"print"},initialize:function(){this.listenTo(this.model,"change:routingResult",this.render),this.listenTo(this.model,"change:isLoadingRoute",this.render)},render:function(){var n=this;return this.$el.html(this.template(this.buildTemplateAttributes())),this.model.getRoutingResult()&&this.model.getRoutingResult().getSegments()&&this.model.getRoutingResult().getSegments().forEach(function(e,t){n.$("#result-segment-content-"+t).on("shown.bs.collapse",function(){return n.isSegmentOpen[t]=!0}),n.$("#result-segment-content-"+t).on("hidden.bs.collapse",function(){return n.isSegmentOpen[t]=!1})}),this.$(".format-picker")&&this.$(".format-picker").selectpicker({styleBase:"btn",style:"btn-select",width:"100%"}),this.delegateEvents(),this},buildTemplateAttributes:function(){var e=i.t("additional:routingLGB",{returnObjects:!0}),t={isLoading:this.model.isLoadingRoute(),info:"",error:null,result:this.model.getRoutingResult(),isRouteDetailsOpen:this.model.isRouteDetailsOpen(),waypoints:this.model.getWaypoints().filterWithCoordinates(),speedProfile:a.SpeedProfile[this.model.getSpeedProfile()],downloadFormatOptions:Object.values(a.DownloadFormat),i18n:e,isSegmentOpen:this.isSegmentOpen};if(this.model.getRoutingResult()){if(this.model.getRoutingResult().getError()){var n=this.model.getRoutingResult().getError();t.error=e[n.i18n]}}else t.info=e.noRouteYet;return t},highlightSegment:function(e){var t=parseInt(e.currentTarget.getAttribute("data-segment-index"));s.Radio.trigger("RoutingLGB","highlightRoute",{fromWaypointIndex:t,toWaypointIndex:t+1})},highlightStep:function(e){var t=e.currentTarget,n=parseInt(t.getAttribute("data-coord-x")),i=parseInt(t.getAttribute("data-coord-y"));s.Radio.trigger("RoutingLGB","highlightRoute",{coordsIndex:[n,i]})},zoomToStep:function(e){var t=e.currentTarget,n=parseInt(t.getAttribute("data-coord-x")),i=parseInt(t.getAttribute("data-coord-y"));s.Radio.trigger("RoutingLGB","zoomToRoute",{coordsIndex:[n,i]})},unHighlightRoute:function(){s.Radio.trigger("RoutingLGB","unHighlightRoute")},openRouteDetails:function(){var e,t;1===(null===(e=this.model.getRoutingResult())||void 0===e||null===(t=e.getSegments())||void 0===t?void 0:t.length)&&(this.isSegmentOpen[0]=!0),s.Radio.trigger("RoutingLGB","openRouteDetails")},closeRouteDetails:function(){this.isSegmentOpen={},s.Radio.trigger("RoutingLGB","closeRouteDetails")},download:function(){(new l.default).show()},print:function(){Object(o.printRoute)()}});c.default=d}.call(this,u(5),u(3),u(24))},2107:function(e,t){e.exports='<div>\r\n    <% if (!isRouteDetailsOpen) { %>\r\n        <h5 id="results-header">\r\n            <%= i18n.routeDetails %>\r\n            <% if (isLoading) { %>\r\n                <i id="results-loading-spinner" class="fas fa-spinner fa-spin fa-xl"></i>\r\n            <% } %>\r\n        </h5>\r\n    <% } %>\r\n\r\n    <% if (info) { %>\r\n        <i class="results-icon fas fa-route"></i>\r\n        <div class="results-info"><%= info %></div>\r\n    <% } %>\r\n    <% if (error) { %>\r\n        <i class="results-icon error fas fa-exclamation-triangle"></i>\r\n        <div class="results-info"><%= error %></div>\r\n    <% } %>\r\n\r\n\r\n    <% if (!error && result) { %>\r\n        <div class="result-item-header">\r\n            <% if (isRouteDetailsOpen) { %>\r\n                <ul class="pager">\r\n                    <li class="previous">\r\n                        <a href="#" title="<%= i18n.back %>" aria-label="<%= i18n.back %>" class="close-route-details">\r\n                            <i class="fas fa-arrow-left fa-lg"></i>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            <% } else { %>\r\n                <div>\x3c!-- Needed for alignment --\x3e</div>\r\n            <% } %>\r\n            <div title="<%= i18n[speedProfile.i18n] %>"><i class="fas <%= speedProfile.icon %> fa-lg"></i></div>\r\n            <div title="<%= i18n.duration %>"><i class="fas fa-stopwatch fa-lg"></i><%= result.getDurationHumanized() %></div>\r\n            <div title="<%= i18n.distance %>"><i class="fas fa-arrows-alt-h fa-lg"></i><%= result.getDistanceHumanized() %></div>\r\n        </div>\r\n\r\n\r\n        <% if (isRouteDetailsOpen) { %>\r\n            <div class="panel-group">\r\n            <% _.each(result.segments, function(segment, index) { %>\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading <%= !isSegmentOpen[index] ? \'collapsed\' : \'\' %>" data-toggle="collapse" href="#result-segment-content-<%= index %>">\r\n                        <h5 class="panel-title" data-segment-index="<%= index %>">\r\n                            <div class="waypoint-text-container"><div class="prefix"><%= i18n.from %></div><div class="waypoint-text"><%= waypoints.at(index)?.getDisplayName() %></div></div>\r\n                            <div class="waypoint-text-container"><div class="prefix"><%= i18n.to %></div><div class="waypoint-text"><%= waypoints.at(index+1)?.getDisplayName() %></div></div>\r\n                            <% if (result.hasIntermediateWaypoints()) { %>\r\n                                <div class="segment-info"><%= segment.getDurationHumanized() %> &#8901; <%= segment.getDistanceHumanized() %></div>\r\n                            <% } %>\r\n                        </h5>\r\n                    </div>\r\n                    <div id="result-segment-content-<%= index %>" class="panel-collapse collapse <%= isSegmentOpen[index] ? \'in\' : \'\' %>">\r\n                        <div class="panel-body steps-container">\r\n                            <% _.each(segment.steps, function(step, index) { %>\r\n                                <div class="step-container" data-coord-x="<%= step.getWaypoints()[0] %>" data-coord-y="<%= step.getWaypoints()[1] %>">\r\n                                    <div class="step-icon">\r\n                                        <i class="pointer fas <%= step.getFaIconClass() %> fa-lg"></i>\r\n                                    </div>\r\n                                    <div class="step-instruction">\r\n                                        <%= step.instruction %>\r\n                                        <br />\r\n                                        <span><%= step.getDurationHumanized() %></span>\r\n                                    </div>\r\n                                    <div class="step-distance"><%= step.getDistanceHumanized() %></div>\r\n                                </div>\r\n                            <% }); %>\r\n                        </div>\r\n                    </div>\r\n                </div> \r\n            <% }); %>\r\n            </div>\r\n\r\n            \x3c!--\r\n            <h5>Route herunterladen</h5>\r\n            <div class="download-container">\r\n                <select class="format-picker">\r\n                    <% _.each(downloadFormatOptions, function(option) { %>\r\n                        <option value="<%= option %>"><%= option %></option>\r\n                    <% }) %>\r\n                </select>\r\n                <button id="downloadButton" class="btn">Speichern</button>\r\n            </div>\r\n            --\x3e\r\n\r\n            <ul class="pager">\r\n                <li class="previous"><a href="#" title="<%= i18n.back %>" aria-label="<%= i18n.back %>" class="close-route-details"><i class="fas fa-arrow-left"></i> <%= i18n.back %></a></li>\r\n                \x3c!-- Der Druck wird noch nicht angeboten, da der Routenausschnitt noch nicht korrekt dargestellt wird --\x3e\r\n                \x3c!-- <li class="next"><a href="#" title="<%= i18n.print %>" aria-label="<%= i18n.print %>" id="printButton"><i class="fas fa-print"></i></a></li> --\x3e\r\n            </ul>\r\n        <% } else { %>\r\n            <ul class="pager">\r\n                <li class="next"><a href="#" aria-label="<%= i18n.showDetails %>" class="open-route-details"><%= i18n.showDetails %> <i class="fas fa-arrow-right"></i></a></li>\r\n                <li class="next"><a href="#" title="<%= i18n.download %>" aria-label="<%= i18n.download %>" id="downloadButton"><i class="fas fa-download"></i></a></li>\r\n            </ul>\r\n        <% } %>\r\n\r\n    <% } %>\r\n</div>'}}]);