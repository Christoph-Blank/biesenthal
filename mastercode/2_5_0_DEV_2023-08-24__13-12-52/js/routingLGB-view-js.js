(window.webpackJsonp=window.webpackJsonp||[]).push([[296,318],{1957:function(e,p,u){"use strict";u.r(p),function(e,t,r){var i=u(5),n=u(2104),a=u.n(n),o=(u(1895),u(2110),u(1802)),s=u(1854);function l(e,t,n,i,a,o,r){try{var s=e[o](r),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(i,a)}function d(s){return function(){var e=this,r=arguments;return new Promise(function(t,n){var i=s.apply(e,r);function a(e){l(i,t,n,a,o,"next",e)}function o(e){l(i,t,n,a,o,"throw",e)}a(void 0)})}}var c=e.View.extend({collection:null,template:t.template(a.a),events:{"focus input":"onInputFocus","click .waypoint-remove":"onWaypointRemoved","click #addWaypoint":"onWaypointAdded","click #resetWaypoints":"onWaypointsReset","mousedown .geolocation":"onGeolocationSet"},initialize:function(){this.listenTo(this.collection,"add remove changeCoordinates change:index",this.render)},render:function(){var n=this,e={waypoints:this.collection.map(this.mapWaypointToTemplateAttrs.bind(this)),i18n:r.t("additional:routingLGB",{returnObjects:!0}),isGeolocationAvailable:this.isGeolocationAvailable(),isWaypointAddable:this.collection.isRoutable()};this.$el.html(this.template(e));var i,t=this;return this.$(".typeahead").typeahead({source:(i=d(regeneratorRuntime.mark(function e(t,n){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.fetchCoordinatesByText)({search:t});case 2:i=e.sent,n(i.map(function(e){return{searchResult:e,name:e.displayName}}));case 4:case"end":return e.stop()}},e)})),function(e,t){return i.apply(this,arguments)}),autoSelect:!0,fitToElement:!0,matcher:function(){return!0},updater:function(e){t.selectSearchResult(e,parseInt(this.$element[0].getAttribute("data-index")))}}),this.$("#waypointsContainer").sortable({handle:".handle",update:function(e,t){return n.moveWaypoint(t.item.startIndex,t.item.index())},start:function(e,t){return t.item.startIndex=t.item.index()}}),this.delegateEvents(),this},onInputFocus:function(e){e.target.select()},onWaypointRemoved:function(e){var t=parseInt(e.target.getAttribute("data-index"));this.collection.removeWaypoint(t)},onWaypointsReset:function(){this.collection.resetWaypoints()},onWaypointAdded:function(){var e=this.collection.length-1;this.collection.addWaypoint({index:e}),this.$("input")[e].focus()},onGeolocationSet:function(e){var a=this;if(this.isGeolocationAvailable()){var o=parseInt(e.target.getAttribute("data-index")),t=this.$(".geolocation[data-index='".concat(o,"']")),n=this.$("input[data-index='".concat(o,"']"));t.removeClass("not-available"),t.addClass("fa-spinner fa-spin loading-geolocation"),n.addClass("loading-geolocation"),navigator.geolocation.getCurrentPosition(function(){var t=d(regeneratorRuntime.mark(function e(t){var n,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=[t.coords.longitude,t.coords.latitude],e.next=3,Object(s.fetchTextByCoordinates)(n);case 3:i=e.sent,a.collection.at(o).setFromGeosearchResult(i),a.processAfterWaypointSet(o);case 6:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}(),function(){n.removeClass("loading-geolocation"),t.removeClass("fa-spinner fa-spin loading-geolocation"),t.addClass("not-available"),n.focus(),i.Radio.trigger("Alert","alert",{kategorie:"alert-info",text:r.t("additional:routingLGB:noGeolocation")})})}else i.Radio.trigger("Alert","alert",{kategorie:"alert-info",text:r.t("additional:routingLGB:noGeolocation")})},moveWaypoint:function(e,t){this.collection.moveWaypoint(e,t)},mapWaypointToTemplateAttrs:function(e){var t=r.t("additional:routingLGB:waypoint");return 0===e.getIndex()&&(t=r.t("additional:routingLGB:startAddress")),e.getIndex()===this.collection.length-1&&(t=r.t("additional:routingLGB:destinationAddress")),{index:e.getIndex(),displayName:e.getDisplayName(),placeholder:t}},selectSearchResult:function(e,t){var n=e.searchResult;n instanceof o.default&&(this.collection.at(t).setFromGeosearchResult(n),this.processAfterWaypointSet(t))},focusEmptyWaypoint:function(){var e=this.collection.findWhere(function(e){return!e.hasCoordinates()});e&&this.$("input")[e.getIndex()].focus()},isGeolocationAvailable:function(){return"geolocation"in navigator},processAfterWaypointSet:function(e){this.collection.isRoutable()||i.Radio.trigger("MapView","setCenter",this.collection.at(e).getCoordinates()),i.Radio.trigger("RoutingLGB","findRoute",{zoomToExtent:!0}),this.focusEmptyWaypoint()}});p.default=c}.call(this,u(5),u(3),u(24))},1958:function(e,l,d){"use strict";d.r(l),function(e,t,n,i){var a=d(2105),o=d.n(a),r=d(1807),s=e.View.extend({model:null,template:t.template(o.a),events:{"click .speed-profile-option":"onSpeedProfileSelected"},initialize:function(){this.listenTo(this.model,"change:speedProfile",this.render)},render:function(){var e=this.model.toJSON();return e.speedProfiles=Object.values(r.SpeedProfile),e.i18n=n.t("additional:routingLGB",{returnObjects:!0}),this.$el.html(this.template(e)),this.delegateEvents(),this},onSpeedProfileSelected:function(e){this.model.setSpeedProfile(i(e.currentTarget).children("input:first").val())}});l.default=s}.call(this,d(5),d(3),d(24),d(10))},1959:function(e,l,d){"use strict";d.r(l),function(e,n,i,a){var t=d(2106),o=d.n(t),r=d(1807),s=e.View.extend({model:null,isOpen:!1,template:n.template(o.a),events:{"change .avoid-feature-option":"onAvoidFeatureChanged","change .preference-option":"onPreferenceChanged","change .map-interaction-mode-option":"onMapInteractionModeChanged"},initialize:function(){this.listenTo(this.model,{"change:speedProfile":this.render,"change:avoidFeatureOptions":this.render,"change:preference":this.render,"change:mapInteractionMode":this.render})},render:function(){var e=this,t=n.extend(this.model.toJSON(),{i18n:i.t("additional:routingLGB",{returnObjects:!0}),isOpen:this.isOpen,availableAvoidFeatureOptions:this.model.getAvailableAvoidFeatureOptions(),preferenceOptions:Object.values(r.Preference),MapInteractionMode:r.MapInteractionMode});return this.$el.html(this.template(t)),this.delegateEvents(),this.$("#advanced-options-content").on("shown.bs.collapse",function(){return e.isOpen=!0}),this.$("#advanced-options-content").on("hidden.bs.collapse",function(){e.isOpen=!1,e.model.setMapInteractionMode(r.MapInteractionMode.WAYPOINTS)}),this},onAvoidFeatureChanged:function(e){this.model.toggleAvoidFeatureOption(a(e.target).val())},onPreferenceChanged:function(e){var t=a(e.target);t.is(":checked")&&this.model.setPreference(t.val())},onMapInteractionModeChanged:function(e){var t=a(e.target);t.is(":checked")&&this.model.setMapInteractionMode(t.val())}});l.default=s}.call(this,d(5),d(3),d(24),d(10))},1960:function(e,c,p){"use strict";p.r(c),function(e,t,i){var a=p(5),n=(p(308),p(2107)),o=p.n(n),r=p(1807),s=p(1892),l=p(1961),d=e.View.extend({model:null,isSegmentOpen:{},template:t.template(o.a),events:{"mouseover .panel-title":"highlightSegment","mouseout .panel-title":"unHighlightRoute","mouseover .step-container":"highlightStep","mouseout .step-container":"unHighlightRoute","click .step-container":"zoomToStep","click .open-route-details":"openRouteDetails","click .close-route-details":"closeRouteDetails","click #downloadButton":"download","click #printButton":"print"},initialize:function(){this.listenTo(this.model,"change:routingResult",this.render),this.listenTo(this.model,"change:isLoadingRoute",this.render)},render:function(){var n=this;return this.$el.html(this.template(this.buildTemplateAttributes())),this.model.getRoutingResult()&&this.model.getRoutingResult().getSegments()&&this.model.getRoutingResult().getSegments().forEach(function(e,t){n.$("#result-segment-content-"+t).on("shown.bs.collapse",function(){return n.isSegmentOpen[t]=!0}),n.$("#result-segment-content-"+t).on("hidden.bs.collapse",function(){return n.isSegmentOpen[t]=!1})}),this.$(".format-picker")&&this.$(".format-picker").selectpicker({styleBase:"btn",style:"btn-select",width:"100%"}),this.delegateEvents(),this},buildTemplateAttributes:function(){var e=i.t("additional:routingLGB",{returnObjects:!0}),t={isLoading:this.model.isLoadingRoute(),info:"",error:null,result:this.model.getRoutingResult(),isRouteDetailsOpen:this.model.isRouteDetailsOpen(),waypoints:this.model.getWaypoints().filterWithCoordinates(),speedProfile:r.SpeedProfile[this.model.getSpeedProfile()],downloadFormatOptions:Object.values(r.DownloadFormat),i18n:e,isSegmentOpen:this.isSegmentOpen};if(this.model.getRoutingResult()){if(this.model.getRoutingResult().getError()){var n=this.model.getRoutingResult().getError();t.error=e[n.i18n]}}else t.info=e.noRouteYet;return t},highlightSegment:function(e){var t=parseInt(e.currentTarget.getAttribute("data-segment-index"));a.Radio.trigger("RoutingLGB","highlightRoute",{fromWaypointIndex:t,toWaypointIndex:t+1})},highlightStep:function(e){var t=e.currentTarget,n=parseInt(t.getAttribute("data-coord-x")),i=parseInt(t.getAttribute("data-coord-y"));a.Radio.trigger("RoutingLGB","highlightRoute",{coordsIndex:[n,i]})},zoomToStep:function(e){var t=e.currentTarget,n=parseInt(t.getAttribute("data-coord-x")),i=parseInt(t.getAttribute("data-coord-y"));a.Radio.trigger("RoutingLGB","zoomToRoute",{coordsIndex:[n,i]})},unHighlightRoute:function(){a.Radio.trigger("RoutingLGB","unHighlightRoute")},openRouteDetails:function(){var e,t;1===(null===(e=this.model.getRoutingResult())||void 0===e||null===(t=e.getSegments())||void 0===t?void 0:t.length)&&(this.isSegmentOpen[0]=!0),a.Radio.trigger("RoutingLGB","openRouteDetails")},closeRouteDetails:function(){this.isSegmentOpen={},a.Radio.trigger("RoutingLGB","closeRouteDetails")},download:function(){(new l.default).show()},print:function(){Object(s.printRoute)()}});c.default=d}.call(this,p(5),p(3),p(24))},2070:function(e,u,f){"use strict";f.r(u),function(e,t){var n=f(2151),i=f.n(n),a=f(1981),o=f(1957),r=f(1958),s=f(1959),l=f(1960),d=f(1982),c=f(5),p=e.View.extend({model:null,speedProfilesView:null,waypointsView:null,advancedOptionsView:null,resultsView:null,mapView:null,template:t.template(i.a),initialize:function(){var e=c.Radio.request("ModelList","getModelByAttributes",{id:"routingLGB"}).attributes;this.model=new a.default(e),this.speedProfilesView=new r.default({model:this.model}),this.waypointsView=new o.default({collection:this.model.getWaypoints()}),this.advancedOptionsView=new s.default({model:this.model}),this.resultsView=new l.default({model:this.model}),this.mapView=new d.default({model:this.model}),c.Radio.on("RoutingLGB","focusEmptyWaypoint",this.waypointsView.focusEmptyWaypoint.bind(this.waypointsView)),this.listenTo(this.model,"change:isActive change:isRouteDetailsOpen",this.render),this.listenTo(c.Radio.channel("i18next"),{languageChanged:this.render})},render:function(){var e=this.model.get("isActive");if(this.mapView.initRouting(e),e)return this.setElement(document.getElementsByClassName("win-body")[0]),this.$el.html(this.template()),this.model.isRouteDetailsOpen()||(this.$("#speed-profiles").html(this.speedProfilesView.render().el),this.$("#waypoints").html(this.waypointsView.render().el),this.$("#advanced-options").html(this.advancedOptionsView.render().el)),this.$("#route-results").html(this.resultsView.render().el),this.waypointsView.focusEmptyWaypoint(),this}});u.default=p}.call(this,f(5),f(3))},2104:function(e,t){e.exports='<form role="form">\r\n    <div id="waypointsContainer">\r\n        <% _.each(waypoints, function(waypoint) { %>\r\n            <div class="waypoint-container form-group-sm">\r\n                <i title="<%= i18n.moveWaypoint %>" class="handle pointer fas fa-grip-vertical"></i>\r\n                <div class="waypoint-textfield">\r\n                    <input data-index="<%= waypoint.index %>" type="text" placeholder="<%= waypoint.placeholder %>"\r\n                        autocomplete="off" class="typeahead form-control" value="<%= waypoint.displayName %>">\r\n                    <i data-index="<%= waypoint.index %>" class="fas fa-crosshairs geolocation <%= !isGeolocationAvailable ? \'not-available\' : \'\' %>" title="<%= i18n.myLocation %>"></i>\r\n                </div>\r\n                <span data-index="<%= waypoint.index %>" title="<%= i18n.removeWaypoint %>" class="waypoint-remove pointer far fa-times-circle fa-lg"></span>\r\n            </div>\r\n        <% }); %>\r\n    </div>\r\n    <% if (isWaypointAddable) { %>\r\n        <ul class="pager">\r\n            <li class="next"><a href="#" aria-label="<%= i18n.resetWaypoints %>" title="<%= i18n.resetWaypoints %>" id="resetWaypoints">\r\n                <i class="pointer fas fa-trash"></i></a>\r\n            </li>\r\n            <li class="next"><a href="#" aria-label="<%= i18n.addWaypoint %>" title="<%= i18n.addWaypoint %>" id="addWaypoint">\r\n                <i class="pointer fas fa-plus"></i></a>\r\n            </li>\r\n        </ul>\r\n    <% } %>\r\n</form>\r\n'},2105:function(e,t){e.exports='<div class="btn-group btn-group-toggle" data-toggle="buttons">\r\n    <% _.each(speedProfiles, function(profile) { %>\r\n        <label class="btn btn-secondary <% if (speedProfile === profile.id) { %>active<% } %> speed-profile-option"\r\n            title="<%= i18n[profile.i18n] %>">\r\n            <input type="radio" value="<%= profile.id %>" /><i class="fas <%= profile.icon %> fa-lg"></i>\r\n        </label>\r\n    <% }); %>\r\n</div>\r\n\x3c!--\r\nTODO: Info Öffnen (alternativ in results view)\r\n<div style="float: right"><i class="fas fa-info fa-lg"></i></div>\r\n--\x3e'},2106:function(e,t){e.exports='<div class="panel-group">\r\n  <div class="panel panel-default">\r\n    <div class="panel-heading <%= !isOpen ? \'collapsed\' : \'\' %>" data-toggle="collapse" href="#advanced-options-content">\r\n      <h5 class="panel-title">\r\n        <%= i18n.advancedOptions %>\r\n      </h5>\r\n    </div>\r\n    <div id="advanced-options-content" class="panel-collapse collapse <%= isOpen ? \'in\' : \'\' %>">\r\n      <div class="panel-body">\r\n        <div class="container-fluid">\r\n          <div class="row">\r\n              <div class="col-xs-7">\r\n                <b><%= i18n.avoidRoutes %></b>\r\n                <% _.each(availableAvoidFeatureOptions, function(avoidFeatureOption) { %>\r\n                  <div class="form-check">\r\n                    <input type="checkbox" class="form-check-input avoid-feature-option" id="<%= avoidFeatureOption.id %>" value="<%= avoidFeatureOption.id %>" <%=  avoidFeatureOptions.includes(avoidFeatureOption.id) ? \'checked\' : \'\' %>>\r\n                    <label class="form-check-label" for="<%= avoidFeatureOption.id %>"><%= i18n[avoidFeatureOption.i18n] %></label>\r\n                  </div>\r\n                <% }) %>\r\n              </div>\r\n              <div class="col-xs-5">\r\n                <b>Route</b>\r\n                <% _.each(preferenceOptions, function(preferenceOption) { %>\r\n                  <div class="form-check">\r\n                    <input class="form-check-input preference-option" name="preference" type="radio" id="<%= preferenceOption.id %>" value="<%= preferenceOption.id %>" <%= preference === preferenceOption.id ? \'checked\' : \'\' %>>\r\n                    <label class="form-check-label" for="<%= preferenceOption.id %>">\r\n                      <%= i18n[preferenceOption.i18n] %>\r\n                    </label>\r\n                  </div>\r\n                <% }) %>\r\n              </div>\r\n          </div>\r\n          <div class="row">\r\n            <div class="col-xs-12">\r\n              <b><%= i18n.addAvoidAreas %></b>\r\n              <div class="btn-group-toggle" data-toggle="buttons">\r\n                <label class="btn btn-secondary <%= mapInteractionMode === MapInteractionMode.WAYPOINTS ? \'active\' : \'\' %>" title="<%= i18n.off %>">\r\n                  <input type="radio" name="mapInteractionMode" class="map-interaction-mode-option" autocomplete="off"\r\n                    value="<%= MapInteractionMode.WAYPOINTS %>" /><i class="fas fa-ban"></i>\r\n                </label>\r\n                <label class="btn btn-secondary <%= mapInteractionMode === MapInteractionMode.AVOID_AREAS ? \'active\' : \'\' %>" title="<%= i18n.add %>">\r\n                  <input type="radio" name="mapInteractionMode" class="map-interaction-mode-option" autocomplete="off"\r\n                    value="<%= MapInteractionMode.AVOID_AREAS %>" /><i class="fas fa-pencil-alt"></i>\r\n                </label>\r\n                <label class="btn btn-secondary <%= mapInteractionMode === MapInteractionMode.DELETE_AVOID_AREAS ? \'active\' : \'\' %>" title="<%= i18n.remove %>">\r\n                  <input type="radio" name="mapInteractionMode" class="map-interaction-mode-option" autocomplete="off"\r\n                    value="<%= MapInteractionMode.DELETE_AVOID_AREAS %>" /><i class="fas fa-trash"></i>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> \r\n</div>'},2107:function(e,t){e.exports='<div>\r\n    <% if (!isRouteDetailsOpen) { %>\r\n        <h5 id="results-header">\r\n            <%= i18n.routeDetails %>\r\n            <% if (isLoading) { %>\r\n                <i id="results-loading-spinner" class="fas fa-spinner fa-spin fa-xl"></i>\r\n            <% } %>\r\n        </h5>\r\n    <% } %>\r\n\r\n    <% if (info) { %>\r\n        <i class="results-icon fas fa-route"></i>\r\n        <div class="results-info"><%= info %></div>\r\n    <% } %>\r\n    <% if (error) { %>\r\n        <i class="results-icon error fas fa-exclamation-triangle"></i>\r\n        <div class="results-info"><%= error %></div>\r\n    <% } %>\r\n\r\n\r\n    <% if (!error && result) { %>\r\n        <div class="result-item-header">\r\n            <% if (isRouteDetailsOpen) { %>\r\n                <ul class="pager">\r\n                    <li class="previous">\r\n                        <a href="#" title="<%= i18n.back %>" aria-label="<%= i18n.back %>" class="close-route-details">\r\n                            <i class="fas fa-arrow-left fa-lg"></i>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            <% } else { %>\r\n                <div>\x3c!-- Needed for alignment --\x3e</div>\r\n            <% } %>\r\n            <div title="<%= i18n[speedProfile.i18n] %>"><i class="fas <%= speedProfile.icon %> fa-lg"></i></div>\r\n            <div title="<%= i18n.duration %>"><i class="fas fa-stopwatch fa-lg"></i><%= result.getDurationHumanized() %></div>\r\n            <div title="<%= i18n.distance %>"><i class="fas fa-arrows-alt-h fa-lg"></i><%= result.getDistanceHumanized() %></div>\r\n        </div>\r\n\r\n\r\n        <% if (isRouteDetailsOpen) { %>\r\n            <div class="panel-group">\r\n            <% _.each(result.segments, function(segment, index) { %>\r\n                <div class="panel panel-default">\r\n                    <div class="panel-heading <%= !isSegmentOpen[index] ? \'collapsed\' : \'\' %>" data-toggle="collapse" href="#result-segment-content-<%= index %>">\r\n                        <h5 class="panel-title" data-segment-index="<%= index %>">\r\n                            <div class="waypoint-text-container"><div class="prefix"><%= i18n.from %></div><div class="waypoint-text"><%= waypoints.at(index)?.getDisplayName() %></div></div>\r\n                            <div class="waypoint-text-container"><div class="prefix"><%= i18n.to %></div><div class="waypoint-text"><%= waypoints.at(index+1)?.getDisplayName() %></div></div>\r\n                            <% if (result.hasIntermediateWaypoints()) { %>\r\n                                <div class="segment-info"><%= segment.getDurationHumanized() %> &#8901; <%= segment.getDistanceHumanized() %></div>\r\n                            <% } %>\r\n                        </h5>\r\n                    </div>\r\n                    <div id="result-segment-content-<%= index %>" class="panel-collapse collapse <%= isSegmentOpen[index] ? \'in\' : \'\' %>">\r\n                        <div class="panel-body steps-container">\r\n                            <% _.each(segment.steps, function(step, index) { %>\r\n                                <div class="step-container" data-coord-x="<%= step.getWaypoints()[0] %>" data-coord-y="<%= step.getWaypoints()[1] %>">\r\n                                    <div class="step-icon">\r\n                                        <i class="pointer fas <%= step.getFaIconClass() %> fa-lg"></i>\r\n                                    </div>\r\n                                    <div class="step-instruction">\r\n                                        <%= step.instruction %>\r\n                                        <br />\r\n                                        <span><%= step.getDurationHumanized() %></span>\r\n                                    </div>\r\n                                    <div class="step-distance"><%= step.getDistanceHumanized() %></div>\r\n                                </div>\r\n                            <% }); %>\r\n                        </div>\r\n                    </div>\r\n                </div> \r\n            <% }); %>\r\n            </div>\r\n\r\n            \x3c!--\r\n            <h5>Route herunterladen</h5>\r\n            <div class="download-container">\r\n                <select class="format-picker">\r\n                    <% _.each(downloadFormatOptions, function(option) { %>\r\n                        <option value="<%= option %>"><%= option %></option>\r\n                    <% }) %>\r\n                </select>\r\n                <button id="downloadButton" class="btn">Speichern</button>\r\n            </div>\r\n            --\x3e\r\n\r\n            <ul class="pager">\r\n                <li class="previous"><a href="#" title="<%= i18n.back %>" aria-label="<%= i18n.back %>" class="close-route-details"><i class="fas fa-arrow-left"></i> <%= i18n.back %></a></li>\r\n                \x3c!-- Der Druck wird noch nicht angeboten, da der Routenausschnitt noch nicht korrekt dargestellt wird --\x3e\r\n                \x3c!-- <li class="next"><a href="#" title="<%= i18n.print %>" aria-label="<%= i18n.print %>" id="printButton"><i class="fas fa-print"></i></a></li> --\x3e\r\n            </ul>\r\n        <% } else { %>\r\n            <ul class="pager">\r\n                <li class="next"><a href="#" aria-label="<%= i18n.showDetails %>" class="open-route-details"><%= i18n.showDetails %> <i class="fas fa-arrow-right"></i></a></li>\r\n                <li class="next"><a href="#" title="<%= i18n.download %>" aria-label="<%= i18n.download %>" id="downloadButton"><i class="fas fa-download"></i></a></li>\r\n            </ul>\r\n        <% } %>\r\n\r\n    <% } %>\r\n</div>'},2151:function(e,t){e.exports='<div id="routingLGB">\r\n    <div id="speed-profiles"></div>\r\n    <div id="waypoints"></div>\r\n    <div id="advanced-options"></div>\r\n    <div id="route-results"></div>\r\n</div>\r\n'}}]);