(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{1826:function(n,r,t){"use strict";function u(n){return Math.floor(n/60)}function o(n){return Math.floor(n/3600)}function i(n){return Math.floor(n/60%60)}function e(n){if(!n||n<60)return"< 1 min";if(3600<n){var r=i(n);return o(n)+" h"+(0<r?" "+r+" min":"")}return u(n)+" min"}function c(n){return Math.floor(n)}function f(n){return Math.floor(c(n)/1e3*10)/10}function d(n){return n?c(n)<1e3?c(n)+" m":(f(n)+" km").replace(".",","):"0 m"}t.r(r),t.d(r,"durationInMinutes",function(){return u}),t.d(r,"minutesMinusHours",function(){return i}),t.d(r,"durationInHours",function(){return o}),t.d(r,"durationHumanized",function(){return e}),t.d(r,"distanceRounded",function(){return c}),t.d(r,"distanceInKm",function(){return f}),t.d(r,"distanceHumanized",function(){return d})}}]);