(window.webpackJsonp=window.webpackJsonp||[]).push([[193,170,175,176,177,178,183,185],{1874:function(e,i,t){"use strict";t.r(i),function(e){var t=e.View.extend({events:{click:"onItemRecommendedListClick"},initialize:function(e){this.options=e},tagName:"li",attributes:{class:"list-group-item item-recommended-list"},render:function(){var e=this.model.get("value"),t=this.model.get("highlight");return t?this.$el.append(t):this.$el.text(e),this},onItemRecommendedListClick:function(){this.options&&this.options.onItemRecommendedListClick&&this.options.onItemRecommendedListClick(this.model.toJSON())}});i.default=t}.call(this,t(5))},1875:function(e,s,l){"use strict";l.r(s),function(e,t,a){var i=l(2085),n=l.n(i),r=e.View.extend({events:{click:"onHitClick",keydown:"onHitKeyDown",mouseenter:"onHitMouseenter",mouseleave:"onHitMouseleave","click .hit-list-map":"onMapClick","click .hit-routing":"onRouteOpenClick"},initialize:function(e){this.options=e,this.render()},tagName:"li",template:t.template(n.a),attributes:{class:"list-group-item hit"},render:function(){var e=this.model.toJSON();return e.isRoutable=this.model.isRoutable(),this.$el.html(this.template(e)),this},onHitClick:function(){this.options&&this.options.onHitClick&&this.options.onHitClick(this.model.toJSON())},onHitKeyDown:function(){this.onHitMouseenter()},onHitMouseenter:function(){this.model.showResultMap()},onHitMouseleave:function(){a.trigger("MapMarker","hideWktFeature"),this.model.hideOverlay(),this.lastExtent&&a.trigger("Map","zoomToExtent",this.lastExtent)},onMapClick:function(){var e=this.model.getTransformedExtent(),t=this.model.get("id"),i=this.model.get("additionalData").serviceType,n=this.model.get("additionalData").serviceUrl,r=this.model.get("additionalData").metadataUrl,s=this.model.getMapImport(i,n,t,r);e&&(a.trigger("MapMarker","hideWktFeature"),this.model.hideOverlay(),a.trigger("Map","zoomToExtent",e),a.request("Importer","set",s),this.onHitClick())},onRouteOpenClick:function(e){e.stopPropagation(),this.onHitClick(),a.trigger("MapMarker","hideWktFeature"),this.model.hideOverlay(),this.model.openRouting()}});s.default=r}.call(this,l(5),l(3),l(4))},1918:function(e,l,o){"use strict";o.r(l),function(e,t,i,n){var r=o(2089),s=o.n(r),a=e.View.extend({events:{"click .detailed-search-category-filter-item":"onCategoryFilterClick"},initialize:function(e){this.options=e,this.changeLang(),this.listenTo(t.channel("i18next"),{languageChanged:function(){this.changeLang(),this.render()}})},tagName:"div",template:i.template(s.a),categoryFilterAllTitle:"Alle",render:function(){var e=this.collection.toJSON(),t=this.model?this.model.toJSON():void 0,i=this.options.defaultCategory,n="";return this.options&&this.options.defaultGlyphIcon&&(n=this.options.defaultGlyphIcon),this.$el.html(this.template({collection:e,model:t,defaultCategory:i,categoryFilterAllTitle:this.categoryFilterAllTitle,defaultGlyphIcon:n})),this},onCategoryFilterClick:function(e){var t,i=e.currentTarget.dataset.categoryName;t=0===i.length?void 0:this.collection.findWhere({name:i}),this.updateDropdownValue(t),this.propagateCategory(t)},updateDropdownValue:function(e){var t=this.categoryFilterAllTitle;e&&(t=e.get("label")),this.$("#detailedsearch-category-filter-select")[0].childNodes[0].nodeValue=t},propagateCategory:function(e){this.options&&this.options.onCategoryFilterChange&&this.options.onCategoryFilterChange(e)},changeLang:function(){this.categoryFilterAllTitle=n.t("additional:detailedSearch.categoryFilterAllTitle")}});l.default=a}.call(this,o(5),o(4),o(3),o(24))},1922:function(e,n,r){"use strict";r.r(n),function(e){var i=r(1874),t=e.View.extend({initialize:function(e){this.options=e,this.listenTo(this.collection,{change:this.render})},tagName:"ul",attributes:{class:"search-dropdown-list recommended-list"},render:function(){return this.$el.children().remove(),this.collection.forEach(function(e){var t=new i.default({model:e,onItemRecommendedListClick:this.options?this.options.onItemRecommendedListClick:void 0});this.$el.append(t.render().el)},this),this}});n.default=t}.call(this,r(5))},1923:function(e,n,t){"use strict";t.r(n),function(e,t){var i=e.Model.extend({defaults:{restrictToCurrentBboxTitle:"",glyphIcons:{restrictToCurrentBbox:"glyphicon-filter"},restrictToCurrentBbox:!1},initialize:function(){this.changeLang(t.language)},toggleRestrictToCurrentBbox:function(){this.set("restrictToCurrentBbox",!this.get("restrictToCurrentBbox"))},changeLang:function(){this.set({restrictToCurrentBboxTitle:t.t("additional:detailedSearch.restrictToCurrentBboxTitle")})}});n.default=i}.call(this,t(5),t(24))},1924:function(e,a,l){"use strict";l.r(a),function(e,t,n){var i=l(2090),r=l.n(i),s=e.View.extend({events:{click:"onRestrictBboxCheckBoxClick"},initialize:function(e){this.options=e,this.listenTo(this.model,{change:this.onRestrictToCurrentBboxChange})},tagName:"span",attributes:{class:"restrict-bbox-cb"},template:t.template(r.a),render:function(){var e=this.model.toJSON();return this.$el.attr("title",e.restrictToCurrentBboxTitle),this.$el.html(this.template(e)),this},onRestrictBboxCheckBoxClick:function(){this.model.toggleRestrictToCurrentBbox()},onRestrictToCurrentBboxChange:function(){this.render();var e=this.model.get("glyphIcons").restrictToBbox,t=this.model.get("glyphIcons").restrictToBboxActive,i=this.model.get("restrictToCurrentBbox");i?n(".span-restrictToBbox").removeClass(e).addClass(t):n(".span-restrictToBbox").removeClass(t).addClass(e),this.options&&this.options.onRestrictToCurrentBboxChange&&this.options.onRestrictToCurrentBboxChange(i)}});a.default=s}.call(this,l(5),l(3),l(10))},1927:function(e,h,d){"use strict";d.r(h),function(e,t){var i=d(1875),n=d(2093),r=d.n(n),s=d(2094),a=d.n(s),l=d(2095),o=d.n(l),c=e.View.extend({events:{"click .btn-detailed-search":"onDetailedSearchBtnClick"},initialize:function(e){this.options=e,this.listenTo(this.collection,{change:this.render})},tagName:"ul",templateDetailedSearchButton:t.template(r.a),templateNumberSearchResults:t.template(a.a),templateNoResults:t.template(o.a),attributes:{class:"search-dropdown-list hit-list"},render:function(){var e=this.model.toJSON();return this.$el.children().remove(),this.collection.forEach(function(e){var t=new i.default({model:e,onHitClick:this.options?this.options.onHitClick:void 0});this.$el.append(t.el)},this),0===this.collection.length?this.$el.append(this.templateNoResults(e)):this.$el.append(this.templateNumberSearchResults(e)),this.$el.append(this.templateDetailedSearchButton(e)),this},onDetailedSearchBtnClick:function(){this.options&&this.options.onDetailedSearchBtnClick&&this.options.onDetailedSearchBtnClick()}});h.default=c}.call(this,d(5),d(3))},2031:function(e,m,f){"use strict";f.r(m),function(a,s,e,l){var o=f(1975),c=f(1927),t=f(1976),i=f(1922),r=f(1918),n=f(1924),h=f(1923),d=f(2124),u=f.n(d),p=f(1860),g=a.View.extend({events:{"click .btn-search-help":"onSearchHelpButtonClick","click .btn-search":"onSearchButtonClick","click .clear-search":"onClearSearchClick","input #detailedSearchInput":"onDetailedSearchInputInput","click #detailedSearchInput":"onDetailedSearchInputClick","blur #detailedSearchInput":"onDetailedSearchInputBlur","keydown input":"onInputKeyDown","click .close-button":"hideDetailedSearch","click .minimizer-window":"minimizeDetailedSearchWindow","click .maximizer-window":"maximizeDetailedSearchWindow","click .search-result-hit-header":"minimizeDetailedSearchWindow"},initialize:function(){var e=this,t=s.request("Parser","getPortalConfig"),i=t?t.detailedSearch:{},n=s.request("QuickHelp","isSet"),r=s.channel("DetailedSearch");s.request("Map","getMap").on("click",function(){e.hideRecommendedList(),e.hideHitList()},this),i.quickHelp=n,this.model=new o.default(i),this.checkForDefaultSearchBar(),this.listenTo(this.model,{"change:detailedSearchVisible":this.onDetailedSearchVisibleChange,"change:preSearchString":this.onPreSearchStringChange,"change:isLoading":this.onIsLoadingChange,"change:currentLng":function(){e.render(s.request("Util","isViewMobile"))},"change:searchCategory":function(){e.renderCategoryFilter()}}),this.listenTo(this.model.recommendedResults,{change:this.renderRecommendedList}),this.listenTo(this.model.searchResults,{change:function(){this.renderHitList(),this.renderDetailedSearch()}}),this.listenTo(this.model.categoryFilters,{reset:this.renderCategoryFilter}),this.listenTo(s.channel("Util"),{isViewMobileChanged:this.viewMobileChanged}),r.reply({triggerSearch:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(e){var i=this.model.get("restrictToCurrentBbox");this.model.set({searchString:e,restrictToCurrentBbox:Boolean(t.restrictToCurrentBbox),searchMeta:t.limit?{limit:t.limit}:this.model.get("searchMeta"),sortOrder:t.sortOrder||this.model.get("defaultSortOrder"),sortBy:t.sortBy||this.model.get("defaultSortBy"),detailedSearchVisible:t.detailedSearchVisible,searchCategory:void 0!==t.searchCategory?new p.default({name:t.searchCategory,label:t.searchCategory}):void 0,searchFilters:t.searchFilters||[]},{silent:!0}),i!==Boolean(t.restrictToCurrentBbox)&&this.$(".restrict-bbox-cb").click(),this.$("#detailedSearchInput").val(e),t.searchCategory&&this.$(".category-filter-select").val(t.searchCategory),this.model.search()}}.bind(this)}),this.render(s.request("Util","isViewMobile")),this.model.getCategories()},id:"detailedSearchbar",className:"navbar-form col-xs-9",template:e.template(u.a),render:function(e){return this.model.set("detailedSearchVisible",!1),this.renderSearchBar(e),this.renderCategoryFilter(),this.renderRestrictBoundingBoxCheckBox(),s.trigger("Title","setSize"),this.delegateEvents(),this},renderSearchBar:function(e){var t=this.model.toJSON(),i=this.model.get("position"),n=l("#main-nav .navbar-collapse"),r=l("#main-nav .navbar-toggle");if("detached"===i&&!e&&768<=window.innerWidth){this.$el.html(this.template(t)),t.quickHelp&&this.$el.addClass("with-help"),t.preSearchString&&this.showClearButton(),0<l("#ds-wrapper").length&&l("#ds-wrapper").remove();var s=l("<div/>",{id:"ds-wrapper"});t.hasOwnProperty("top")&&s.css("top",t.top),t.hasOwnProperty("left")&&s.css("left",t.left),s.append("<div></div>"),s.children().append(this.$el),s.insertBefore("#map")}else{if(!n)return;switch(this.$el.html(this.template(t)),t.position){case"left":this.$el.addClass("pull-left");break;case"right":this.$el.addClass("pull-right")}t.quickHelp&&this.$el.addClass("with-help"),t.preSearchString&&this.showClearButton(),window.innerWidth<768?r.before(this.$el):n.append(this.$el)}},renderRestrictBoundingBoxCheckBox:function(){var e=this.model.get("preRestrictToCurrentBbox"),t=this.model.get("glyphIcons");return this.restrictBoundingBoxView=new n.default({model:new h.default({restrictToCurrentBbox:e,glyphIcons:t}),onRestrictToCurrentBboxChange:this.onRestrictToCurrentBboxChange.bind(this)}),this.$(".ds-input-group").append(this.restrictBoundingBoxView.render().el),this},renderCategoryFilter:function(){var e=this.model.getCategoryFilters(),t=this.model.get("searchCategory"),i=this.model.get("glyphIcons").categories.default,n=this.model.get("defaultCategory");return this.categoryFiltersView=new r.default({model:t,collection:e,defaultCategory:n,onCategoryFilterChange:this.onCategoryFilterChange.bind(this),defaultGlyphIcon:i}),this.$(".category-filter-div").html(this.categoryFiltersView.render().el),this},renderRecommendedList:function(){if(this.hideHitList(),!this.recommendedResultsView){var e=this.model.getRecommendedResults();this.recommendedResultsView=new i.default({collection:e,onItemRecommendedListClick:this.onItemRecommendedListClick.bind(this)}),this.$(".search-results-dropdown-div").html(this.recommendedResultsView.render().el)}return this},renderHitList:function(){if(this.hideRecommendedList(),this.model.get("detailedSearchVisible"))return this;if(!this.searchResultsView){var e=this.model.getSearchResults(),t=this.model.get("detailedSearchButtonTitle"),i=this.model.get("searchResultNoResultInfo"),n=this.model.get("glyphIcons"),r=this.model.get("searchMeta"),s=this.model.get("searchResultHitTitle");this.searchResultsView=new c.default({collection:e,model:new a.Model({detailedSearchButtonTitle:t,glyphIcons:n,searchResultNoResultInfo:i,searchMeta:r,searchResultHitTitle:s}),onDetailedSearchBtnClick:this.onDetailedSearchBtnClick.bind(this),onHitClick:this.onHitClick.bind(this)}),this.$(".search-results-dropdown-div").html(this.searchResultsView.render().el)}return this},renderDetailedSearch:function(){return this.model.get("detailedSearchVisible")?(this.hideHitList(),this.detailedSearchView?this.detailedSearchView.render():(this.detailedSearchView=new t.default({model:this.model,onHitClick:this.onHitClick.bind(this),triggerSearch:this.triggerSearch.bind(this),onIsLoadingChange:this.onIsLoadingChange.bind(this)}),this.$(".detailed-search-container-div").html(this.detailedSearchView.render().el))):this.hideDetailedSearch(),this},hideDetailedSearch:function(){return this.detailedSearchView&&(this.detailedSearchView.remove(),this.detailedSearchView=void 0),this.model.setDetailedSearchVisible(!1),this},hideRecommendedList:function(){return this.recommendedResultsView&&(this.recommendedResultsView.remove(),this.recommendedResultsView=void 0),this},hideHitList:function(){return this.searchResultsView&&(this.searchResultsView.remove(),this.searchResultsView=void 0),this},deleteSearchString:function(){this.model.clearSearch(),this.model.setDetailedSearchVisible(!1)},onRestrictToCurrentBboxChange:function(e){this.model.set("preRestrictToCurrentBbox",e)},onDetailedSearchVisibleChange:function(){this.renderDetailedSearch()},onDetailedSearchBtnClick:function(){this.model.setDetailedSearchVisible(!0)},checkForDefaultSearchBar:function(){var e=this.model.get("searchbarErrorMessage"),t=s.request("Parser","getItemsByAttributes",{type:"searchBar"});t&&1===t.length&&t[0].attr&&s.trigger("Alert","alert",{text:e,kategorie:"alert-warning"})},onSearchHelpButtonClick:function(){s.trigger("QuickHelp","showWindowHelp","detailedSearch");var e=new Event("mp-addons-onSearchHelpButtonClick");document.dispatchEvent(e)},onSearchButtonClick:function(){this.triggerSearch()},onDetailedSearchInputInput:function(e){var t=e.target.value;this.model.setPreSearchString(t),0<t.length?this.showClearButton():(this.hideRecommendedList(),this.model.get("detailedSearchVisible")||this.hideClearButton())},onDetailedSearchInputClick:function(e){""===e.target.value&&this.$("#detailedSearchInput")[0].setAttribute("placeholder","")},onDetailedSearchInputBlur:function(){this.$("#detailedSearchInput")[0].setAttribute("placeholder",this.model.get("placeholder"))},onPreSearchStringChange:function(e,t){t?this.model.searchRecommended():(this.hideRecommendedList(),this.hideHitList())},onInputKeyDown:function(e){var t=e.keyCode,i=document.querySelectorAll("#detailedSearchForm .recommended-list .item-recommended-list"),n=document.querySelector("#detailedSearchForm .recommended-list .item-recommended-list.manual-selection"),r=document.querySelectorAll("#detailedSearchForm > div.search-results-dropdown-div > ul > li.list-group-item.hit"),s=document.querySelector("#detailedSearchForm > div.search-results-dropdown-div > ul > li.list-group-item.hit.manual-selection"),a=n||s,l=0<i.length?i:r,o=0<r.length;if(40===t){if(a){var c=a.nextElementSibling;c&&(c.classList.contains("hit")||c.classList.contains("item-recommended-list"))&&(a.classList.remove("manual-selection"),a.nextElementSibling.classList.add("manual-selection"),o&&a.nextElementSibling.dispatchEvent(new Event("keydown")))}else l&&0<l.length&&(l[0].classList.add("manual-selection"),o&&l[0].dispatchEvent(new Event("keydown")));e.preventDefault()}else 38===t?(a&&a.previousElementSibling&&(a.classList.remove("manual-selection"),a.previousElementSibling.classList.add("manual-selection"),o&&a.previousElementSibling.dispatchEvent(new Event("keydown"))),e.preventDefault()):13===t&&(a?(a.click(),e.preventDefault()):this.triggerSearch())},onClearSearchClick:function(){this.clearSearch()},onItemRecommendedListClick:function(e){var t=e.value.replace(/(<([^>]+)>)/gi,"");this.hideRecommendedList(),this.model.set("preSearchString",t,{silent:!0}),this.setSearchbarString(t),this.triggerSearch()},onHitClick:function(){this.hideRecommendedList(),this.hideHitList(),this.hideDetailedSearch()},clearSearch:function(){this.model.clearSearch(),this.setSearchbarString(""),this.$("#detailedSearchInput")[0].setAttribute("placeholder",this.model.get("placeholder")),this.hideClearButton(),this.hideRecommendedList(),this.hideHitList(),this.hideDetailedSearch(),s.trigger("MapMarker","hideWktFeature"),s.trigger("Map","removeOverlays")},setSearchbarString:function(e){this.$("#detailedSearchInput").val(e)},triggerSearch:function(e){var t=!(0<arguments.length&&void 0!==e)||e;if(this.hideHitList(),t){var i=this.model.get("preSearchString"),n=this.model.get("preSearchCategory"),r=this.model.get("preRestrictToCurrentBbox"),s=this.model.get("detailedSearchVisible");if(s&&!i)return;s||(this.model.set("sortBy",this.model.get("defaultSortBy"),{silent:!0}),this.model.set("sortOrder",this.model.get("defaultSortOrder"),{silent:!0})),this.model.set("searchCategory",n),this.model.set("restrictToCurrentBbox",r),this.model.setSearchString(i),this.model.set("searchFilters",[],{silent:!0}),this.model.resetSearchMeta({silent:!0})}this.model.search(),this.hideRecommendedList()},onCategoryFilterChange:function(e){this.model.set("preSearchCategory",e),this.triggerSearch(!0)},onIsLoadingChange:function(e,t){t?this.showLoadingSpinner():this.hideLoadingSpinner()},showLoadingSpinner:function(){this.hideClearButton(),this.$("input").prop("disabled",!0),this.undelegateEvents(),this.$("span.btn-loading").show()},hideLoadingSpinner:function(){this.$("input").prop("disabled",!1),this.delegateEvents(),this.$("span.btn-loading").hide(),this.showClearButton()},showClearButton:function(){this.$("span.clear-search").show()},hideClearButton:function(){this.$("span.clear-search").hide()},viewMobileChanged:function(e){this.clearSearch(),this.render(e)},minimizeDetailedSearchWindow:function(){this.$(".container-detailed-search").css("height","54px")},maximizeDetailedSearchWindow:function(){this.$(".container-detailed-search").css("height","100%")}});m.default=g}.call(this,f(5),f(4),f(3),f(10))},2085:function(e,t){e.exports='<div class="content-hit-container">\r\n    <div>\r\n        <span class="glyphicon <% if (glyphIcon) print(glyphIcon) %> text-center img-hit" aria-hidden="true"></span>\r\n    </div>\r\n\r\n    <div>\r\n        <div class="search-result-row">\r\n            <span>\r\n                <div class="search-result-title" title="<%= title %>"><%= title %></div>\r\n                <% if (category && additionalData && additionalData.subtitle) { %>\r\n                    <div class="search-result-subtitle" title="<%= additionalData.subtitle %>"><%= additionalData.subtitle %></div>\r\n                <% } %>\r\n            </span>\r\n            <span>\r\n            \x3c!-- Remove the last part of the following line to enable also wfs import: && additionalData.serviceType === "WMS" || additionalData.serviceType === "WMTS" --\x3e\r\n            <% if (type && type === "service" && additionalData && additionalData.serviceUrl && additionalData.serviceUrl.length && (additionalData.serviceType === "WMS" || additionalData.serviceType === "WMTS")) { %>\r\n                <span title="<%= searchResultFooterMapToolTip %>" class="glyphicon <% if (glyphIcons) print(glyphIcons.hitMap) %> text-center hit-list-map img-hit search-result-btn" aria-hidden="true"></span>\r\n            <% } %>\r\n            <% if (category && category === "metadata") { %>\r\n                <a class="" href="<%= additionalData.metadataUrl %>" target="_blank">\r\n                    <span title="<%= searchResultFooterMetadataToolTip %>" class="glyphicon <% if (glyphIcons) print(glyphIcons.hitMetadata) %> text-center img-hit search-result-btn" aria-hidden="true"></span>\r\n                </a>\r\n            <% } %>\r\n            <% if (isRoutable) { %>\r\n                <span title="<%= searchResultFooterRoutingTitle %>" class="hit-routing fas fa-route text-center img-hit search-result-btn" aria-hidden="true"></span>\r\n            <% } %>\r\n            </span>\r\n        </div>\r\n    </div>\r\n</div>\r\n'},2089:function(e,t){e.exports='<div class="category-filter-select form-control dropdown">\r\n  <button class="btn btn-default dropdown-toggle" type="button" id="detailedsearch-category-filter-select" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">\r\n    <%= model ? model.label : categoryFilterAllTitle %>\r\n    <span class="dropdown-caret fas fa-caret-down"></span>\r\n  </button>\r\n  <ul class="dropdown-menu ds-category-filter-dropdown" aria-labelledby="detailedsearch-category-filter-select">\r\n    <% if (!defaultCategory) { %>\r\n      <li>\r\n        <a href="#" class="detailed-search-category-filter-item" data-category-name=""><span class="glyphicon <%= defaultGlyphIcon %>"></span><%= categoryFilterAllTitle %></a>\r\n      </li>\r\n    <% } %>\r\n    <% collection.forEach(function (category) { %>\r\n      <li>\r\n        <a href="#" class="detailed-search-category-filter-item" data-category-name="<%= category.name %>"><span class="glyphicon <%= category.glyphicon %>"></span><%= category.label %></a>\r\n      </li>\r\n    <% }); %>\r\n    <% if (defaultCategory) { %>\r\n      <li>\r\n        <a href="#" class="detailed-search-category-filter-item" data-category-name=""><span class="glyphicon <%= defaultGlyphIcon %>"></span><%= categoryFilterAllTitle %></a>\r\n      </li>\r\n    <% } %>\r\n  </ul>\r\n</div>\r\n'},2090:function(e,t){e.exports='<button class="btn btn-default btn-restrict-bbox <%= restrictToCurrentBbox ? \'active\' : \'\' %>" type="button">\r\n    <span class="glyphicon span-restrictToBbox <%= glyphIcons.restrictToBbox %>"></span>\r\n</button>\r\n'},2093:function(e,t){e.exports='<li>\r\n    <button class="btn btn-detailed-search" type="button" title="<%= detailedSearchButtonTitle %>">\r\n        <span class="glyphicon <%= glyphIcons.search %>"></span>\r\n        <span><%= detailedSearchButtonTitle %></span>\r\n    </button>\r\n</li>\r\n'},2094:function(e,t){e.exports='<li class="list-group-item">\r\n    <div class="ds-hit-list-total">\r\n        <span><%= searchMeta.total %> <%= searchResultHitTitle %></span>\r\n    </div>\r\n</li>\r\n'},2095:function(e,t){e.exports='<li class="list-group-item text-center item-no-results">\r\n    <%= searchResultNoResultInfo %>\r\n</li>\r\n'},2124:function(e,t){e.exports='<div id="detailedSearchForm" class="form-group form-inline" role="search">\r\n    <div class="input-group has-feedback">\r\n        <div class="category-filter-div input-group-btn hidden-xs"></div>\r\n        <input id="detailedSearchInput" class="form-control" type="text" name="text" placeholder="<%= placeholder %>" value="<%= searchString %>" autocomplete="off">\r\n        <span class="glyphicon glyphicon-repeat form-control-feedback btn-loading"></span>\r\n        <span class="glyphicon glyphicon-remove form-control-feedback clear-search"></span>\r\n        <div class="input-group-btn input-group-right ds-input-group">\r\n            <button class="btn btn-default btn-search" type="button" title="<%= buttonSearchTitle %>">\r\n                <span class="glyphicon <%= glyphIcons.search %>"></span>\r\n            </button>\r\n        </div>\r\n        <% if (quickHelp === true) { %>\r\n            <button class="btn btn-default hidden-xs btn-search-help" type="button" title="<%= buttonOpenHelpTitle %>">\r\n                <span class="glyphicon <%= glyphIcons.searchHelp %>"></span>\r\n            </button>\r\n        <% } %>\r\n    </div>\r\n    <div class="search-results-dropdown-div"></div>\r\n    <div class="detailed-search-container-div <%= alignDetailedSearch === \'left\' ? \'detailed-search-align-left\' : alignDetailedSearch === \'center\' ? \'detailed-search-align-center\' : \'detailed-search-align-right\' %>">\r\n    </div>\r\n</div>\r\n\r\n'}}]);