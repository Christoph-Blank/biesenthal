(window.webpackJsonp=window.webpackJsonp||[]).push([[7,168,169,173,174,181,182,189,190],{1860:function(e,i,t){"use strict";t.r(i),function(e){var t=e.Model.extend({defaults:{name:void 0,label:void 0,glyphicon:void 0}});i.default=t}.call(this,t(5))},1871:function(e,r,a){"use strict";a.r(r),function(e,i,S){var b=a(471),w=a(5),R=a(100),T=a(23),C=a(34),M=a(37),F=a(113);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var t=e.Model.extend({defaults:{searchResultFooterDownloadTitle:"Herunterladen",searchResultFooterRoutingTitle:"Routenplaner",searchResultFooterMapTitle:"Karte",searchResultFooterMapToolTip:"Zur Karte hinzufügen",searchResultFooterCapabilitiesTitle:"Capabilities",searchResultFooterMetadataTitle:"Informationen",searchResultFooterMetadataToolTip:"Informationen öffnen",staticTypeDescription:"Typ",id:void 0,title:void 0,description:void 0,category:void 0,category_label:void 0,type:void 0,type_label:void 0,geometry:void 0,additionalData:void 0,thumbnail:void 0,glyphIcon:void 0,glyphIcons:void 0,overlayId:"search-result-overlay"},initialize:function(){var e=w.Radio.request("Parser","getPortalConfig"),t=e?e.detailedSearch:{};this.showLabelOnMap=t.showLabelOnMap,this.changeLang(i.language),this.listenTo(w.Radio.channel("i18next"),{languageChanged:this.changeLang}),w.Radio.request("Map","registerListener","singleclick",this.hideOverlay.bind(this))},getTransformedGeometry:function(){var e=this.get("geometry");this.get("geometryComplex")&&(e=this.get("geometryComplex"));var t=new b.a,i=w.Radio.request("MapView","getProjection"),r=i?i.getCode():void 0,a=r?t.readFeature(e,{dataProjection:"EPSG:4326",featureProjection:r}):void 0;return a?t.writeFeature(a):""},getTransformedExtent:function(){var e=this.getTransformedGeometry(),t=new b.a,i=e?t.readFeature(e):void 0,r=i?i.getGeometry():void 0;return r?r.getExtent():void 0},getOverlayPosition:function(e){var t=(e[2]-e[0])/2,i=(e[3]-e[1])/2,r=e[3]-i;return[e[2]-t,r]},getMapImport:function(e,t,i,r){var a;return o(a={isActive:!0,importType:e.toLowerCase()},e.toLowerCase(),t),o(a,"uuid",i),o(a,"metadataUrl",r),o(a,"wizzardStep",3),a},getMapExport:function(e,t){return{isActive:!0,wfsConfig:{url:e,version:t},wizzardStep:2}},changeLang:function(){this.set({searchResultFooterDownloadTitle:i.t("additional:detailedSearch.searchResultFooterDownloadTitle"),searchResultFooterRoutingTitle:i.t("additional:detailedSearch.searchResultFooterRoutingTitle"),searchResultFooterMapTitle:i.t("additional:detailedSearch.searchResultFooterMapTitle"),searchResultFooterMapToolTip:i.t("additional:detailedSearch.searchResultFooterMapToolTip"),searchResultFooterCapabilitiesTitle:i.t("additional:detailedSearch.searchResultFooterCapabilitiesTitle"),searchResultFooterMetadataTitle:i.t("additional:detailedSearch.searchResultFooterMetadataTitle"),searchResultFooterMetadataToolTip:i.t("additional:detailedSearch.searchResultFooterMetadataToolTip")},{silent:!0})},isRoutable:function(){var e=(new b.a).readGeometry(this.getTransformedGeometry()),t=null==e?void 0:e.getType();return void 0!==w.Radio.request("RoutingLGB","getSettings")&&("Point"===t||"plz"===this.get("type"))},openRouting:function(){var e=(new b.a).readGeometry(this.getTransformedGeometry()),t=e.getType();w.Radio.trigger("RoutingLGB","open",{waypoint:{coordinates:"Point"===t?e.getCoordinates():null,text:"Point"!==t?this.get("title"):null}}),w.Radio.trigger("DetailedSearch","setDetailedSearchVisible",!1)},showResultMap:function(){var e,t,i=this.getTransformedExtent(),r=(new b.a).readGeometry(this.getTransformedGeometry()),a=w.Radio.request("Map","getMap").getLayers().getArray(),o=a.find(function(e){return"mapMarker"===e.get("name")}),n=document.querySelector("#detailedSearchForm .btn-search-help"),s=a.find(function(e){return"markerAsPointLayer"===e.get("name")}),l=w.Radio.request("Map","getMap"),c=l.getOverlayById(this.get("overlayId"));if(l.removeOverlay(c),r){t="Point"===r.getType()?(e=s,r.getCoordinates()):(e=o,this.getOverlayPosition(i)),w.Radio.trigger("MapMarker","showWktFeature",this.getTransformedGeometry());var h=[255,0,0,1],d=[255,0,0,.3];if(n&&(h=window.getComputedStyle(n).color.split("(")[1].split(")")[0].split(","),d=window.getComputedStyle(n).color.split("(")[1].split(")")[0].split(","),h.push("1"),d.push("0.3")),e){var u=S("<a>",{href:"#",class:"ol-popup-closer"}),g='<div class="ol-popup-title">'+this.get("title")+"</div>",f='<div class="ol-popup-body">'+this.get("additionalData").subtitle+"</div>",p=S("<div>",{class:"ol-popup"});p.append(u),p.append(g),this.get("additionalData").subtitle&&p.append(f);var y=new R.a({id:this.get("overlayId"),element:p[0],offset:[0,-12],position:t});u.on("click",function(){return l.removeOverlay(y),!1}),this.showLabelOnMap&&l.addOverlay(y);var v=new T.c({stroke:new C.a({color:h,lineDash:[8],width:4}),fill:new M.a({color:d})}),m=new T.c({text:new F.a({text:"",font:"4em Glyphicons Halflings",fill:new M.a({color:h})})});"Point"===r.getType()?e.setStyle([v,m]):e.setStyle(v)}i&&w.Radio.trigger("Map","zoomToExtent",i)}},hideOverlay:function(){w.Radio.trigger("Map","removeOverlay",w.Radio.request("Map","getOverlayById",this.get("overlayId")))}});r.default=t}.call(this,a(5),a(24),a(10))},1872:function(e,i,t){"use strict";t.r(i),function(e){var t=e.Model.extend({defaults:{attribute:void 0,label:void 0,vals:void 0,activeFilters:void 0}});i.default=t}.call(this,t(5))},1873:function(e,i,t){"use strict";t.r(i),function(e){var t=e.Model.extend({defaults:{value:void 0,score:void 0,highlight:void 0}});i.default=t}.call(this,t(5))},1917:function(e,r,a){"use strict";a.r(r),function(e){var t=a(1860),i=e.Collection.extend({model:t.default});r.default=i}.call(this,a(5))},1919:function(e,i,r){"use strict";r.r(i),function(s,l){var e=r(1871),t=s.Collection.extend({model:e.default,set:function(e,t){var i={options:t,silent:!0},r=e.results,a=e.stats,o=l.request("DetailedSearch","getGlyphIconsConfig"),n=a.find(function(e){return"type"==e.attribute});r.forEach(function(e){var t=e.category,i=e.type;e.glyphIcon=o?o.categories[t]||o.categories.default:void 0,e.glyphIcons=o;var r=n.vals.find(function(e){return e.value==i});e.type_label=r.label}),s.Collection.prototype.set.call(this,e.results,i),this.trigger("change",e,t)},reset:function(e,t){s.Collection.prototype.reset.call(this,e.results,t)}});i.default=t}.call(this,r(5),r(4))},1920:function(e,r,a){"use strict";a.r(r),function(o,i){var n=a(3),e=a(1872),t=o.Collection.extend({model:e.default,set:function(e,t,i){var r={options:t,silent:!0},a=e.stats;a=a.filter(function(e){return"category"!==e.attribute}),i&&this.applySearchFilters(a,i),o.Collection.prototype.set.call(this,a,r),this.trigger("change",e,t)},reset:function(e,t){o.Collection.prototype.reset.call(this,e.stats,t)},applySearchFilters:function(e,t){t&&e.forEach(function(r){var e=n.default.sortBy(r.vals,function(e){return n.default.has(e,"label")?e.label:e.value});r.vals=e;var a=new Set;t.forEach(function(e){var t=e[0].slice(7).slice(0,-1);r.attribute===t&&e[1].forEach(function(e){a.add(e)})}),0<a.size?r.activeFilters=a:i(".object-filter-category .filter-label").each(function(e,t){if(r.label===t.innerHTML){var i=t.parentNode.parentNode.nextElementSibling;i&&-1<i.className.indexOf("collapse in")&&(a.add(""),r.activeFilters=a)}})})}});r.default=t}.call(this,a(5),a(10))},1921:function(e,i,a){"use strict";a.r(i),function(r){var e=a(1873),t=r.Collection.extend({model:e.default,set:function(e,t){var i={options:t,silent:!0};r.Collection.prototype.set.call(this,e.results,i),this.trigger("change",e,t)},reset:function(e,t){r.Collection.prototype.reset.call(this,e.results,t)}});i.default=t}.call(this,a(5))},1975:function(e,t,i){"use strict";i.r(t),function(g,f,a,p){i(3);var o=i(8),n=i(1919),s=i(1920),l=i(1921),c=i(1917);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var i=[],r=!0,a=!1,o=void 0;try{for(var n,s=e[Symbol.iterator]();!(r=(n=s.next()).done)&&(i.push(n.value),!t||i.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach(function(e){u(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function u(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var e=g.Model.extend({defaults:{currentLng:"",top:void 0,left:void 0,limit:3,limitCompletions:5,searchbarErrorMessage:"Das Addon <b>DetailedSearch</b> wurde parallel zur <b>SearchBar</b> geladen. Um unerwartete Nebeneffekte zu vermeiden, sollte die <b>searchBar</b> Konfiguration aus der <b>config.json</b> entfernt werden.",placeholder:"Suche",detailedSearchButtonTitle:"Erweiterte Suche",searchResultNoResultInfo:"Keine Treffer gefunden",searchResultNoResultDetailedInfoPre:"Die Suche nach ",searchResultNoResultDetailedInfoPost:" ergab leider keine Treffer",searchResultHitTitle:"Treffer",alignDetailedSearch:"center",position:"",detailedSearchVisible:!1,preRestrictToCurrentBbox:!1,restrictToCurrentBbox:!1,recommendedListLength:5,quickHelp:!1,minChars:{default:3},searchApiBaseUrl:"",searchApiGeometry:"simple",searchApiEpsg:"EPSG:4326",i18nextTranslate:null,buttonSearchTitle:"",buttonOpenHelpTitle:"",preSearchString:"",searchString:"",searchFilters:[],categories:void 0,preSearchCategory:void 0,searchCategory:void 0,defaultCategory:void 0,searchMeta:{from:void 0,size:void 0,total:void 0},isLoading:!1,glyphIcons:{categories:{default:"glyphicon-list-alt"},search:"glyphicon-search",searchHelp:"glyphicon-question-sign",restrictToBbox:"glyphicon-unchecked",restrictToBboxActive:"glyphicon-check",sortDescending:"glyphicon-chevron-down",sortAscending:"glyphicon-chevron-up",hitMap:"glyphicon-globe",hitDownload:"glyphicon-download-alt",hitMetadata:"glyphicon-tasks",hitCapabilities:"glyphicon-file"},defaultSortOrder:"desc",sortOrder:void 0,defaultSortBy:"relevance",sortBy:void 0},initialize:function(){this.searchResults=new n.default,this.searchStats=new s.default,this.recommendedResults=new l.default,this.categoryFilters=new c.default,this.set("searchApiBaseUrl",this.cleanUrl(this.get("searchApiBaseUrl"))),this.set("searchApiEpsg",this.cleanEpsg(this.get("searchApiEpsg"))),this.get("limit")&&this.set("searchMeta",d(d({},this.get("searchMeta")),{},{size:this.get("limit")}));var e=this.get("glyphIcons"),t=this.fillEmptyGlyphIcons(e),i=this.fillDefaultGlyphIcon(t),r=f.channel("DetailedSearch");this.set("glyphIcons",i),this.set("sortOrder",this.get("defaultSortOrder")),this.set("sortBy",this.get("defaultSortBy")),r.on({setDetailedSearchVisible:this.setDetailedSearchVisible},this),r.reply({getGlyphIconsConfig:this.getGlyphIconsConfig},this),this.changeLang(a.language),this.listenTo(f.channel("i18next"),{languageChanged:this.changeLang})},cleanEpsg:function(e){if(e)return e.toLowerCase().startsWith("epsg:")?e:"EPSG:"+e},cleanUrl:function(e){return e.endsWith("/")?e.slice(0,-1):e},setDetailedSearchVisible:function(e){this.set("detailedSearchVisible",e),!0===e&&this.search()},search:function(){if(this.shouldTriggerSearch()){var e=this.buildSearchQuery();this.set("isLoading",!0),fetch(e,{"Content-Type":"application/json"}).then(function(e){return e.json()}).then(function(e){var t={from:e.from,size:e.size,total:e.total};this.set("searchMeta",t),this.searchResults.set(e),this.searchStats.set(e,void 0,this.get("searchFilters"))}.bind(this)).catch(function(){}).finally(function(){this.set("isLoading",!1),document.querySelector("#detailedSearchInput").focus()}.bind(this))}},searchRecommended:function(){if(this.shouldTriggerRecommended()){var e=this.buildRecommendedSearchQuery();fetch(e,{"Content-Type":"application/json"}).then(function(e){return e.json()}).then(function(e){this.recommendedResults.set(e)}.bind(this)).catch(function(){})}},applySearchFilter:function(e,t,i){i?this.addSearchFilter(e,t):this.removeSearchFilter(e,t)},addSearchFilter:function(t,e){var i=[].concat(this.get("searchFilters")),r=i.findIndex(function(e){return e[0]==="filter[".concat(t,"]")});i.length<1||-1===r?i.push(["filter[".concat(t,"]"),new Set([e])]):i[r][1].add(e),this.set("searchFilters",i),this.trigger("changedSearchFilters")},removeSearchFilter:function(t,i){var e=[].concat(this.get("searchFilters")),r=e.findIndex(function(e){return e[0]==="filter[".concat(t,"]")&&e[1].has(i)});-1!==r&&(e[r][1].delete(i),0===e[r][1].size&&e.splice(r,1),this.set("searchFilters",e),this.trigger("changedSearchFilters"))},clearSearch:function(){this.searchResults.remove(this.searchResults.models),this.searchStats.remove(this.searchStats.models),this.recommendedResults.remove(this.recommendedResults.models),this.resetSearchMeta(),this.set("sortBy",this.get("defaultSortBy"),{silent:!0}),this.set("sortOrder",this.get("defaultSortOrder"),{silent:!0}),this.set("searchFilters",[]),this.set("preSearchString",""),this.set("searchString","")},setSearchString:function(e){this.set("searchString",e)},setPreSearchString:function(e){this.set("preSearchString",e)},getCategories:function(r){var e=this.buildCategoriesQuery();fetch(e,{"Content-Type":"application/json"}).then(function(e){return e.json()}).then(function(e){var t=this.mergeCategories(e);if(this.addCategoryIcons(t),this.categoryFilters.reset(t),this.get("defaultCategory")){var i=this.categoryFilters.where({name:this.get("defaultCategory")});i&&i[0]&&(this.set("searchCategory",i[0]),this.set("preSearchCategory",i[0]))}r&&r.call(this)}.bind(this)).catch(function(e){console.warn("Could net get search categories.",e)})},addCategoryIcons:function(e){var t=this.get("glyphIcons"),i=t?t.categories:void 0;i&&e.forEach(function(e){i[e.name]?e.glyphicon=i[e.name]:e.glyphicon=i.default})},mergeCategories:function(e){var t=this.get("categories"),i=[];if(e)return p.isArray(t)?(t.forEach(function(e){var t=this.categories.find(function(e){return e.name===this.name},e);void 0!==t?i.push(t):console.warn("Search category '".concat(e.name,"' not supported in backend. Skipping."))},{categories:e}),i):e},shouldTriggerRecommended:function(){var e=this.get("preSearchCategory"),t=this.get("minChars"),i=this.get("preSearchString"),r=e?t[e.get("name")]:t.default;return r||0===r||(r=3),!(!i||i.length<r)},shouldTriggerSearch:function(){return 0<this.get("searchString").length},buildSearchQuery:function(){var e=this.get("searchString"),t=this.get("restrictToCurrentBbox"),i=this.get("searchFilters"),r=this.get("searchCategory"),a=this.get("categories"),o=this.get("searchMeta"),n=this.get("searchApiBaseUrl")+"/search/",s=this.get("sortOrder"),l=this.get("sortBy"),c=this.get("searchApiGeometry"),h=[["query",new Set([encodeURI(e)])]],d=g.i18next.language;if(e){if(void 0!==o.from&&null!==o.from&&h.push(["start",new Set([o.from])]),h.push(["limit",new Set([this.getSearchLimit()])]),t&&h.push(["bounds",new Set([this.getCurrentBbox()])]),s&&h.push(["sortOrder",new Set([s])]),l&&h.push(["sortBy",new Set([l])]),p.isEqual(c,"complex")&&h.push(["complex",new Set([!0])]),r)h.push(["filter[category]",new Set([r.get("name")])]);else if(!p.isEmpty(a)){var u=p.chain(a).pluck("name").join("|").value();h.push(["filter[category]",new Set([u])])}return 0<i.length&&i.forEach(function(e){var t=y(e,2),i=t[0],r=t[1],a=Array.from(r).join("|");h.push([i,new Set([a])])}),h.push(["lang",new Set([d])]),f.request("Util","setUrlQueryParamsFromArray",n,h)}},buildRecommendedSearchQuery:function(){var e=this.get("preSearchString"),t=this.get("searchApiBaseUrl")+"/search/completion",i=g.i18next.language,r={query:encodeURI(e),lang:i,limit:this.get("limitCompletions")};return f.request("Util","setUrlQueryParams",t,r)},buildCategoriesQuery:function(){return this.get("searchApiBaseUrl")+"/search/categories?lang="+g.i18next.language},getCurrentBbox:function(){var e=this.get("searchApiEpsg"),t=f.request("MapView","getCurrentExtent"),i=f.request("MapView","getProjection"),r=i?i.getCode():void 0,a=r?Object(o.o)(t,r,e):void 0;if(r)return a?a.toString():void 0},getSearchResults:function(){return this.searchResults},getSearchStats:function(){return this.searchStats},getRecommendedResults:function(){return this.recommendedResults},getCategoryFilters:function(){return this.categoryFilters},getSearchLimit:function(){return!1===this.get("detailedSearchVisible")?this.get("recommendedListLength"):this.get("limit")},resetSearchMeta:function(e){var t=this.get("limit"),i={from:void 0,size:void 0,total:void 0};t&&(i.size=t),this.set("searchMeta",i,e)},getGlyphIconsConfig:function(){return this.get("glyphIcons")},setNextPage:function(){var e=this.get("searchMeta");e.from=e.from+e.size,this.set("searchMeta",e)},setPreviousPage:function(){var e=this.get("searchMeta");e.from=e.from-e.size,e.from<0&&(e.from=0),this.set("searchMeta",e)},setPage:function(e){var t=this.get("searchMeta");t.from=e*t.size-t.size,this.set("searchMeta",t)},fillDefaultGlyphIcon:function(e){return e&&e.categories?(e.categories.default,e):d(d({},e),{},{categories:{default:"glyphicon-list-alt"}})},fillEmptyGlyphIcons:function(e){var t=JSON.parse(JSON.stringify(e));return e||(t={}),void 0===e.search&&(t.search="glyphicon-search"),void 0===e.restrictToBbox&&(t.restrictToBbox="glyphicon-unchecked"),void 0===e.restrictToBboxActive&&(t.restrictToBboxActive="glyphicon-check"),void 0===e.sortDescending&&(t.sortDescending="glyphicon-chevron-down"),void 0===e.sortAscending&&(t.sortAscending="glyphicon-chevron-up"),void 0===e.hitMap&&(t.hitMap="glyphicon-globe"),void 0===e.hitDownload&&(t.hitDownload="glyphicon-download-alt"),void 0===e.hitMetadata&&(t.hitMetadata="glyphicon-tasks"),void 0===e.hitCapabilities&&(t.hitCapabilities="glyphicon-file"),void 0===e.searchHelp&&(t.searchHelp="glyphicon-question-sign"),t},changeLang:function(e){this.set({currentLng:e,searchbarErrorMessage:a.t("additional:detailedSearch.searchbarErrorMessage"),placeholder:a.t("additional:detailedSearch.placeholder"),detailedSearchButtonTitle:a.t("additional:detailedSearch.detailedSearchButtonTitle"),buttonSearchTitle:a.t("additional:detailedSearch.buttonSearchTitle"),buttonOpenHelpTitle:a.t("additional:detailedSearch.buttonOpenHelpTitle"),searchResultNoResultInfo:a.t("additional:detailedSearch.searchResultNoResultInfo"),searchResultNoResultDetailedInfoPre:a.t("additional:detailedSearch.searchResultNoResultDetailedInfoPre"),searchResultNoResultDetailedInfoPost:a.t("additional:detailedSearch.searchResultNoResultDetailedInfoPost"),searchResultHitTitle:a.t("additional:detailedSearch.searchResultHitTitle")}),this.changeSearchApiLang(e)},changeSearchApiLang:function(){var t=this,i=this.get("searchCategory");this.getCategories(function(){if(i){var e=p.find(t.categoryFilters,function(e){return i.get("name")===e.get("name")});t.set("searchCategory",e)}t.search()})}});t.default=e}.call(this,i(5),i(4),i(24),i(3))}}]);