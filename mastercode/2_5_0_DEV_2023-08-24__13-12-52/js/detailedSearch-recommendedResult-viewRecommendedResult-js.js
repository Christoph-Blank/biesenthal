(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1874:function(t,i,e){"use strict";e.r(i),function(t){var e=t.View.extend({events:{click:"onItemRecommendedListClick"},initialize:function(t){this.options=t},tagName:"li",attributes:{class:"list-group-item item-recommended-list"},render:function(){var t=this.model.get("value"),e=this.model.get("highlight");return e?this.$el.append(e):this.$el.text(t),this},onItemRecommendedListClick:function(){this.options&&this.options.onItemRecommendedListClick&&this.options.onItemRecommendedListClick(this.model.toJSON())}});i.default=e}.call(this,e(5))}}]);