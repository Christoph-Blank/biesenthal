(window.webpackJsonp=window.webpackJsonp||[]).push([[322,321],{1973:function(e,a,s){"use strict";s.r(a),function(e,t){var n=s(474),i=n.a.extend({defaults:e.extend({},n.a.prototype.defaults,{scale:void 0,currentMapScale:void 0,parentSelector:"",currentLng:"de"}),initialize:function(){this.listenTo(t.channel("MapView"),{changedOptions:this.getCurrentMapScale}),this.listenTo(t.channel("i18next"),{languageChanged:function(e){this.set("currentLng",e)}},this),this.listenTo(this,{"change:currentMapScale":this.createScaleLineValue,"change:scale":this.setScale}),this.set("fixedScales",t.request("MapView","getScales")),this.getCurrentMapScale(),this.createScaleLineValue()},createScaleLineValue:function(){var e,t=this.get("currentMapScale"),n=Math.round(.02*t);e=1e3<=n?(n/1e3).toString()+" km":n.toString()+" m",this.set("scaleLineValue",e)},setScale:function(){var e=this.get("scale");t.trigger("MapView","setScale",e)},getCurrentMapScale:function(){var e=t.request("MapView","getOptions").scale;this.set("currentMapScale",e)}});a.default=i}.call(this,s(3),s(4))},2071:function(e,r,o){"use strict";o.r(r),function(e,a,t,i){var s=o(1973),n=o(2153),c=o.n(n),l=(o(308),e.View.extend({events:{"change #scaleLineCustomChooser":"setScale"},initialize:function(e){var t,n=a.channel("ScaleLineCustomView"),i=a.request("Parser","getPortalConfig");t=e||(i&&i.scaleLineCustom?i.scaleLineCustom:{}),this.model=new s.default(t),this.listenTo(this.model,"change",this.render),n.reply({getView:function(){return this}},this),this.initialRender(),this.render()},tagName:"div",className:"scale-line-custom",template:t.template(c.a),initialRender:function(){var e=this.model.get("parentSelector"),t=i(e),n=0<t.length?t[0]:void 0;return e&&n&&n.append(this.el),this},render:function(){var e=this.model.toJSON();return this.$el.html(this.template(e)),this.renderSelect(),this},renderSelect:function(){i(".selectpicker-scale-custom")&&this.$(".selectpicker-scale-custom").selectpicker({styleBase:"btn",style:"btn-select",width:"120px"})},setScale:function(e){var t=e.target.value;this.model.set("scale",parseInt(t,10))}}));r.default=l}.call(this,o(5),o(4),o(3),o(10))},2153:function(e,t){e.exports='<div>\n    <span class="scaleLineCustom col-md-3"><%= scaleLineValue %></span>\n    <div id="scaleLineCustomChooser" class="col-md-6">\n                    <% if (fixedScales && fixedScales.length > 0) { %>\n                        <select class="selectpicker-scale-custom dropup" data-dropup-auto="false">\n                            <% fixedScales.forEach((fixedScale) => { %>\n                                <option value="<%= fixedScale %>" <% if (fixedScale === currentMapScale) {print(\'selected\')} %>>1:<%= fixedScale.toLocaleString(currentLng) %></option> \n                            <% }) %>\n                        </select>\n                    <% } %>\n    </div>\n</div>\n'}}]);