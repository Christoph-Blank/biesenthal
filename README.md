# Karten-Viewer API Demo

This is a demo project of the LGB Karten-Viewer API standalone version.

## Quickstart

You only have to download this repo and deploy the files on a webserver (e.g. apache, nginx). A small script based webserver will work as well:

```bash
# startet eine lokalen Webserver (Port 8000) im aktuellen Ordner
python -m SimpleHTTPServer 8000
```

#### config.js
  - Set the id of the HTML DOM element in which the map viewer should be rendered, e.g.:
  ```json
    renderTarget: "api-target-div",
  ```
  - Set the paths to the viewer conf, e.g.:
  ```json
    portalConf: "./default/config.json",
  ```
  ... and other Resource, e.g.:
   ```json
    quickHelp: {
        imgPath: "./default/ressources/img/"
    },
    layerConf: "./default/ressources/services-internet.json",
    restConf: "./default/ressources/rest-services-internet.json",
    styleConf: "./default/ressources/style_v2.json",
  ```   

#### config.json / other configs
  - Configurate the viewer for your needs
