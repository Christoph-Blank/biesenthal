(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{1937:function(t,l,s){"use strict";s.r(l),function(t,r){var e=s(2099),n=s.n(e);function o(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})),e.push.apply(e,n)}return e}function i(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var a=t.View.extend({events:{"click .geomaerker-feature-prev":"onFeaturePrevClick","click .geomaerker-feature-next":"onFeatureNextClick"},initialize:function(t){this.options=t,this.listenTo(this.model,{"change:current":this.render.bind(this)})},id:"geomaerker-popup",template:r.template(n.a),render:function(){var t=this.model.toJSON();return this.$el.html(this.template(function(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach(function(t){i(r,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))})}return r}({},t))),this},onPageClick:function(){if(this.options.onPageClick){var t=this.model.get("current");this.options.onPageClick(t)}},onFeaturePrevClick:function(t){t.stopPropagation(),this.model.decrementCurrent(),this.onPageClick()},onFeatureNextClick:function(t){t.stopPropagation(),this.model.incrementCurrent(),this.onPageClick()}});l.default=a}.call(this,s(5),s(3))},2099:function(t,r){t.exports='<!DOCTYPE html>\r\n<div>\r\n    <table\r\n        style="background-color:#E9F2FF; margin-left:0px; font-family:Verdana, Geneva, Arial, Helvetica, sans-serif; font-size:10pt; border-spacing: 0px;"\r\n        width="370px"\r\n    >\r\n        <tbody>\r\n            <tr style="background-color:<%= features[current].color %>; font-weight:bold; color:#FFFFFF" align="center">\r\n                <td style="padding:5px 0px;">\r\n                    <% if (features.length && current > 0) { %>\r\n                        <button class="geomaerker-feature-prev btn btn-default btn-xs" style="width:10%; float:left;">\r\n                            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\r\n                        </button>\r\n                    <% } %>\r\n                    <div style="width:80%; float:left;">\r\n                        <%= features[current].status %>\r\n                    </div>\r\n                    <% if (features.length && current < features.length - 1) { %>\r\n                        <button class="geomaerker-feature-next btn btn-default btn-xs" style="width:10%; float:right;">\r\n                            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\r\n                        </button>\r\n                    <% } %>\r\n                    <% if (features[current].showCloseButton) { %>\r\n                        <div id="tooltip-persistent" style="width:10%; float:right;">\r\n                            X\r\n                        </div>\r\n                    <% } %>\r\n                </td>\r\n            </tr>\r\n            <% if (features[current].showCallId) { %>\r\n            <tr valign="top">\r\n                <td style="padding:7px 6px 3px;">\r\n                    <span style="color:#345B9A; font-weight:bold;">\r\n                        <%= callIdTitle %>:\r\n                    </span>\r\n                    <span style="margin-left: 10px">\r\n                        <%- features[current].fid %>\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <% } %>\r\n            <% if (!features[current].showDetailedInfo) { %>\r\n                <tr style="color:#345B9A;" valign="top">\r\n                    <td style="color:#000000; padding:0px 6px 5px;">\r\n                        <%- features[current].message %>\r\n                    </td>\r\n                </tr>\r\n            <% } %>\r\n            <% if (features[current].showDetailedInfo) { %>\r\n            <tr style="color:#345B9A; font-weight:bold;" valign="top">\r\n                <td style="padding:9px 6px 3px;">\r\n                    <span>\r\n                        <%= changeInformationTitle %>:\r\n                    </span>\r\n                </td>\r\n            </tr>\r\n            <tr style="color:#345B9A;" valign="top">\r\n                <td style="color:#000000; padding:0px 6px;">\r\n                    <%- features[current].message %>\r\n                </td>\r\n            </tr>\r\n            <tr style="color:#345B9A; font-weight:bold;">\r\n                <td style="padding:9px 6px 3px;">\r\n                    <%= statusTitle %>:\r\n                </td>\r\n            </tr>\r\n            <tr style="color:#345B9A">\r\n                <td style="color:#000000; padding:0px 6px 5px;">\r\n                    <%- features[current].statusFullText %>\r\n                </td>\r\n            </tr>\r\n            <% } %>\r\n\r\n        </tbody>\r\n    </table>\r\n</div>\r\n'}}]);