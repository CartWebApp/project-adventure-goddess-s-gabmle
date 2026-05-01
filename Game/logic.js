import { story } from './story.js';


// localstorage key
const storageKey = 'gork';

// status object where ui can see and read from it
const status = {
    Health: 100,
    Inventory: {},
    Progression: { chapterIndex: 0, sceneIndex: 0 },
    Karma: 0,
    LastChoice: ''
};

// save status to localstorage
function saveStatus() {
    localStorage.setItem(storageKey, JSON.stringify(status));
}

// load status from localstorage and merge with status 
function loadStatus() {
    let statusStr = localStorage.getItem(storageKey);
    if (statusStr) {
        let statusData = JSON.parse(statusStr);
        for (let prop in statusData) {  // goes through all properties and overwrite only existing properties
            if (statusData.hasOwnProperty(prop)) {
                status[prop] = statusData[prop];
            }
        }
    }
}

// progression function 
function progression() {
    let prog = status.Progression;
    let chapter = story[prog.chapterIndex];

    // advance one scene (single-choice scenes = next)
    prog.sceneIndex = prog.sceneIndex + 1;

    // if we're on the last scene go to next chapter
    if (prog.sceneIndex >= chapter.scenes.length) {
        prog.chapterIndex = prog.chapterIndex + 1;
        prog.sceneIndex = 0;
        if (prog.chapterIndex >= story.length) { // if we passed the final chapter, go to last scene b4 it ended
            prog.chapterIndex = story.length - 1;
            let last = story[prog.chapterIndex];
            prog.sceneIndex = (last.scenes || []).length - 1;
        }
    }

    // save progression to local storage 
    saveStatus();

    // return the story and scene index
    return { chapterIndex: prog.chapterIndex, sceneIndex: prog.sceneIndex };
}


loadStatus();

// exports functions and the status 
export { status, progression, saveStatus, loadStatus };


// classes
class item{
    constructor(name, img, effect){
        this.name = name;
        this.img = img;
        this.effect = effect;
    }
}

class enemy{
    constructor(name, img, health, dmg){
        this.name = name;
        this.img = img; 
        this.health = health;
        this.dmg = dmg;
    }
}
