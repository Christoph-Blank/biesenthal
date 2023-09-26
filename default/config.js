/* eslint-disable no-unused-vars */

const Config = {
    portalConf: "./config.json",
    layerConf: "./ressources/services-internet.json",
    restConf: "./ressources/rest-services-internet.json",
    styleConf: "./ressources/style_v2.json",
    wfsImgPath: "./ressources/img/",
    proxy: false,
    namedProjections: [
        ["EPSG:25833", "+title=ETRS89/33N +proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"],
        ["EPSG:25832", "+title=ETRS89/32N +proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"],
        ["EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs +type=crs"],
        ["EPSG:3857", "+title=WGS84/Web-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0 +lon_0=0 +x_0=0 +y_0=0 +k=1 +units=m +nadgrids=@null +wktext +no_defs +type=crs"]
    ],
    quickHelp: {
        imgPath: "./ressources/img/"
    },
    scaleLine: false,
    mouseHover: {
        numFeaturesToShow: 2,
        showLayerName: true
    },
    mapMarker: {
        type: "Layer"
    },
    addons: [
        "backgroundSwitcher",
        "coordinateTransform",
        "fontawesome",
        "mpJsApi",
        "detailedSearch",
        "projectionSwitcher",
        "mousePositionCustom",
        "languageSelectorCustom",
        "scaleLineCustom",
        "attributionsCustom",
        "footerCustom",
        "elevationProfile"
    ],
    coordinateTransformSourceCrs: [
        "25833",
        "25832",
        "4326",
        "4258",
        "3034",
        "3035",
        "3044",
        "3045",
        "3857",
        "4839",
        "5650",
        "31468",
        "31469"
    ],
    coordinateTransformTargetCrs: [
        "25833",
        "25832",
        "4326",
        "4258",
        "3034",
        "3035",
        "3044",
        "3045",
        "3857",
        "4839",
        "5650",
        "31468",
        "31469"
    ],
    portalLanguage: {
        enabled: false,
        debug: false,
        languages: {
            de: "deutsch",
            en: "englisch"
        },
        fallbackLanguage: "de",
        changeLanguageOnStartWhen: ["querystring", "localStorage", "navigator", "htmlTag"]
    }
};