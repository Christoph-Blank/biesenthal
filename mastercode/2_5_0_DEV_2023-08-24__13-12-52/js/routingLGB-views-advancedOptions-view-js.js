(window.webpackJsonp=window.webpackJsonp||[]).push([[297,278],{1807:function(e,n,i){"use strict";i.r(n),i.d(n,"SpeedProfile",function(){return t}),i.d(n,"Preference",function(){return a}),i.d(n,"MapInteractionMode",function(){return o}),i.d(n,"preferenceOptions",function(){return r}),i.d(n,"AvoidFeatureOption",function(){return c}),i.d(n,"DownloadFormat",function(){return d}),i.d(n,"RoutingResultError",function(){return s});var t=Object.freeze({CAR:{id:"CAR",i18n:"car",icon:"fa-car",orsKey:"driving-car"},HGV:{id:"HGV",i18n:"hgv",icon:"fa-truck",orsKey:"driving-hgv"},FOOT:{id:"FOOT",i18n:"foot",icon:"fa-walking",orsKey:"foot-walking"},CYCLING:{id:"CYCLING",i18n:"cycling",icon:"fa-bicycle",orsKey:"cycling-regular"},WHEELCHAIR:{id:"WHEELCHAIR",i18n:"wheelchair",icon:"fa-wheelchair",orsKey:"wheelchair"}}),a=Object.freeze({RECOMMENDED:{id:"RECOMMENDED",i18n:"recommended",orsKey:"recommended"},SHORTEST:{id:"SHORTEST",i18n:"shortest",orsKey:"shortest"}}),o=Object.freeze({WAYPOINTS:"WAYPOINTS",AVOID_AREAS:"AVOID_AREAS",DELETE_AVOID_AREAS:"DELETE_AVOID_AREAS"}),r=Object.keys(a),c=Object.freeze({HIGHWAYS:{id:"HIGHWAYS",i18n:"highways",availableProfiles:["CAR","HGV"],orsKey:"highways"},TOLLWAYS:{id:"TOLLWAYS",i18n:"tollways",availableProfiles:["CAR","HGV"],orsKey:"tollways"},FERRIES:{id:"FERRIES",i18n:"ferries",availableProfiles:["CAR","HGV","CYCLING","FOOT","WHEELCHAIR"],orsKey:"ferries"},STEPS:{id:"STEPS",i18n:"steps",availableProfiles:["CYCLING","FOOT","WHEELCHAIR"],orsKey:"steps"}}),d=Object.freeze({GEOJSON:"GEOJSON",GPX:"GPX",KML:"KML"}),s=Object.freeze({NO_ROUTE_FOUND:{i18n:"noRouteFound"},AVOID_AREA_TOO_LARGE:{i18n:"avoidAreasTooLarge"},FETCHING_FAILED:{i18n:"routeFetchFailed"},SERVICE_UNAVAILABLE:{i18n:"routeServiceUnavailable"}})},1959:function(e,d,s){"use strict";s.r(d),function(e,i,t,a){var n=s(2106),o=s.n(n),r=s(1807),c=e.View.extend({model:null,isOpen:!1,template:i.template(o.a),events:{"change .avoid-feature-option":"onAvoidFeatureChanged","change .preference-option":"onPreferenceChanged","change .map-interaction-mode-option":"onMapInteractionModeChanged"},initialize:function(){this.listenTo(this.model,{"change:speedProfile":this.render,"change:avoidFeatureOptions":this.render,"change:preference":this.render,"change:mapInteractionMode":this.render})},render:function(){var e=this,n=i.extend(this.model.toJSON(),{i18n:t.t("additional:routingLGB",{returnObjects:!0}),isOpen:this.isOpen,availableAvoidFeatureOptions:this.model.getAvailableAvoidFeatureOptions(),preferenceOptions:Object.values(r.Preference),MapInteractionMode:r.MapInteractionMode});return this.$el.html(this.template(n)),this.delegateEvents(),this.$("#advanced-options-content").on("shown.bs.collapse",function(){return e.isOpen=!0}),this.$("#advanced-options-content").on("hidden.bs.collapse",function(){e.isOpen=!1,e.model.setMapInteractionMode(r.MapInteractionMode.WAYPOINTS)}),this},onAvoidFeatureChanged:function(e){this.model.toggleAvoidFeatureOption(a(e.target).val())},onPreferenceChanged:function(e){var n=a(e.target);n.is(":checked")&&this.model.setPreference(n.val())},onMapInteractionModeChanged:function(e){var n=a(e.target);n.is(":checked")&&this.model.setMapInteractionMode(n.val())}});d.default=c}.call(this,s(5),s(3),s(24),s(10))},2106:function(e,n){e.exports='<div class="panel-group">\r\n  <div class="panel panel-default">\r\n    <div class="panel-heading <%= !isOpen ? \'collapsed\' : \'\' %>" data-toggle="collapse" href="#advanced-options-content">\r\n      <h5 class="panel-title">\r\n        <%= i18n.advancedOptions %>\r\n      </h5>\r\n    </div>\r\n    <div id="advanced-options-content" class="panel-collapse collapse <%= isOpen ? \'in\' : \'\' %>">\r\n      <div class="panel-body">\r\n        <div class="container-fluid">\r\n          <div class="row">\r\n              <div class="col-xs-7">\r\n                <b><%= i18n.avoidRoutes %></b>\r\n                <% _.each(availableAvoidFeatureOptions, function(avoidFeatureOption) { %>\r\n                  <div class="form-check">\r\n                    <input type="checkbox" class="form-check-input avoid-feature-option" id="<%= avoidFeatureOption.id %>" value="<%= avoidFeatureOption.id %>" <%=  avoidFeatureOptions.includes(avoidFeatureOption.id) ? \'checked\' : \'\' %>>\r\n                    <label class="form-check-label" for="<%= avoidFeatureOption.id %>"><%= i18n[avoidFeatureOption.i18n] %></label>\r\n                  </div>\r\n                <% }) %>\r\n              </div>\r\n              <div class="col-xs-5">\r\n                <b>Route</b>\r\n                <% _.each(preferenceOptions, function(preferenceOption) { %>\r\n                  <div class="form-check">\r\n                    <input class="form-check-input preference-option" name="preference" type="radio" id="<%= preferenceOption.id %>" value="<%= preferenceOption.id %>" <%= preference === preferenceOption.id ? \'checked\' : \'\' %>>\r\n                    <label class="form-check-label" for="<%= preferenceOption.id %>">\r\n                      <%= i18n[preferenceOption.i18n] %>\r\n                    </label>\r\n                  </div>\r\n                <% }) %>\r\n              </div>\r\n          </div>\r\n          <div class="row">\r\n            <div class="col-xs-12">\r\n              <b><%= i18n.addAvoidAreas %></b>\r\n              <div class="btn-group-toggle" data-toggle="buttons">\r\n                <label class="btn btn-secondary <%= mapInteractionMode === MapInteractionMode.WAYPOINTS ? \'active\' : \'\' %>" title="<%= i18n.off %>">\r\n                  <input type="radio" name="mapInteractionMode" class="map-interaction-mode-option" autocomplete="off"\r\n                    value="<%= MapInteractionMode.WAYPOINTS %>" /><i class="fas fa-ban"></i>\r\n                </label>\r\n                <label class="btn btn-secondary <%= mapInteractionMode === MapInteractionMode.AVOID_AREAS ? \'active\' : \'\' %>" title="<%= i18n.add %>">\r\n                  <input type="radio" name="mapInteractionMode" class="map-interaction-mode-option" autocomplete="off"\r\n                    value="<%= MapInteractionMode.AVOID_AREAS %>" /><i class="fas fa-pencil-alt"></i>\r\n                </label>\r\n                <label class="btn btn-secondary <%= mapInteractionMode === MapInteractionMode.DELETE_AVOID_AREAS ? \'active\' : \'\' %>" title="<%= i18n.remove %>">\r\n                  <input type="radio" name="mapInteractionMode" class="map-interaction-mode-option" autocomplete="off"\r\n                    value="<%= MapInteractionMode.DELETE_AVOID_AREAS %>" /><i class="fas fa-trash"></i>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> \r\n</div>'}}]);