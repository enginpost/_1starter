import { App } from "./classes/app.class.js"

function onContentLoaded(evt){
    console.log("the content is loaded");
}
function onContentLoadError(evt) {
    console.log("the content failed to load", evt);
}

const site_app = new App();
site_app.addListener("contentLoaded", onContentLoaded);
site_app.addListener("contentLoad_Error", onContentLoadError);
site_app.loadContent("/scripts/data/content.json");