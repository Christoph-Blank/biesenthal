(window.webpackJsonp=window.webpackJsonp||[]).push([[204,200],{1879:function(i,n,e){"use strict";function t(i){return Math.floor(i)}function a(i){return Math.floor(t(i)/1e3*10)/10}function r(i){return i?t(i)<1e3?t(i)+" m":(a(i)+" km").replace(".",","):"0 m"}e.r(n),e.d(n,"distanceRounded",function(){return t}),e.d(n,"distanceInKm",function(){return a}),e.d(n,"distanceHumanized",function(){return r})},1934:function(i,o,l){"use strict";l.r(o),function(i,n,t){var e=l(2098),a=l.n(e),r=l(1879),s=i.View.extend({model:null,template:n.template(a.a),events:{click:"onMinimizerClicked"},initialize:function(){this.listenTo(this.model,{"change:elevationResult":this.render,"change:isMinimized":this.render})},render:function(){var i=this.model.getElevationResult(),n=[];i&&i.hasNoError()&&(n=[{icon:"fa-arrow-up",titleI18nKey:"maxHeight",value:Object(r.distanceHumanized)(i.getMaxHeight())},{icon:"fa-arrow-down",titleI18nKey:"minHeight",value:Object(r.distanceHumanized)(i.getMinHeight())},{icon:"fa-arrows-alt-h",titleI18nKey:"distance",value:Object(r.distanceHumanized)(i.getDistance())}]);var e={infos:n,i18n:t.t("additional:elevationProfile",{returnObjects:!0}),isMinimized:this.model.isMinimized()};return this.$el.html(this.template(e)),this.delegateEvents(),this},onMinimizerClicked:function(){this.model.setMinimized(!this.model.isMinimized())}});o.default=s}.call(this,l(5),l(3),l(24))},2098:function(i,n){i.exports='<div class="info-bar">\r\n    <span class="fas fa-caret-down fa-lg" id="info-bar-minimizer" title="<%= isMinimized ? i18n.maximize : i18n.minimize %>"></span>\r\n    <div class="info-bar-title">\r\n        <i class="fas fa-chart-area"></i>\r\n        <%= i18n.elevationProfile %>\r\n    </div>\r\n    <% if (!isMinimized) { %>\r\n        <div class="info-bar-entries">\r\n            <% _.each(infos, function(entry) { %>\r\n                <div class="info-bar-entry" title="<%= i18n[entry.titleI18nKey] %>">\r\n                    <i class="fas <%= entry.icon %>"></i>\r\n                    <span><%= entry.value %></span>\r\n                </div>\r\n            <% }); %>\r\n        </div>\r\n    <% } %>\r\n</div>'}}]);