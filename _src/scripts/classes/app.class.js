import {sample_template} from "../_templates/sample.template.js"

let map = new WeakMap();

export class App{
    constructor() {
        this.content = {};
        map.set(this, {
            listeners: {}
        });
    }

    addListener(type, fn) {
        let listeners = map.get(this).listeners;
        if (!listeners[type]) {
            listeners[type] = [];
        }
        listeners[type].push(fn);
    }
    removeListener(type, fn) {
        let listeners = map.get(this).listeners[type];
        if (!listeners) {
            return;
        }
        let index = listeners.indexOf(fn);
        while (index > -1) {
            listeners.splice(index, 1);
            index = listeners.indexOf(fn);
        }
    }
    fireEvent(type, eventObj) {
        if (!type) {
            throw new Error("No event type specified");
        }
        if (!eventObj) {
            eventObj = {};
        }
        if (!eventObj.type) {
            eventObj.type = type;
        }
        if (!eventObj.target) {
            eventObj.target = this;
        }
        let listeners = map.get(this).listeners[type];
        if (!listeners) {
            return;
        }
        listeners.forEach(listener => {
            listener(eventObj);
        });
    }
    render(where, what) {
        document.querySelector(where).innerHTML = what;
    }
    loadContent(this_source) {
        console.log("fetching data");
        fetch(this_source)
            .then(response => {
                if (!response.ok) {
                    throw new Error("HTTP error" + response.status);
                }
                return response.json();
            })
            .then(json => {
                this.content = json;

                this.render( ".sample-target-container", sample_template( this.content ) );
                this.fireEvent("contentLoaded");
            })
            .catch((err) => {
                this.fireEvent("contentLoad_Error", err);
            });
    }
    getContent(){
        return this.content;
    }
}