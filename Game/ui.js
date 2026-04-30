const dialogBox = document.getElementById('dialog');
const healthBar = document.getElementById('healthBar');
const objecetiveP = document.getElementById('objectiveP');
const bg = document.getElementsByTagName('body');
const dialogAction = document.getElementById('action');


import { story } from 'story.js';
import { status } from './logic';
import Typewriter from "https://cdn.jsdelivr.net/npm/typewriter-effect@2.22.0/dist/core.min.js";
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});



function pageUpdate() { //grabs what part of the story ur on and distributes 
  let chapter = story[status.Progression.chapterIndex];
  let scene = chapter.scenes[status.Progression.sceneIndex];
  let place = scene.place;
  let speaker = scene.speaker;
  let dialog = scene.dialog.speech;
  let action = scene.dialog.action;
  let choices = scene.choices;

  setBG(place);
  setPerson(speaker);
  speakerDialog(dialog);
  speakerAction(action);
  choices(choices);

}

export { pageUpdate };

function setBG(place) { //gives class to body based on the place you're in to style later
  switch (place) {
    case 'cutscene1':
      bg.className('cutscene1');
      break;
    case 'home':
      bg.className('home');
      break;
    case 'town':
      bg.className('town');
      break;
    case 'castleCell':
      bg.className('castleCell');
      break;
    case 'castleExit':
      bg.className('castleExit');
      break;
    case 'whitoria':
      bg.className('whitoriaNight');
      break;
    case 'whitoria':
      bg.className('whitoriaNight');
      break;
    case 'treasury':
      bg.className('treasury');
      break;
    case 'road':
      bg.className('road');
      break;
    case 'astroFight':
      bg.className('astroFight'); //bruh i just realized that i can do bg.className(place) smh
      break;
    case 'icarusFight':
      bg.className(place);
      break;
    case 'village':
      bg.className(place);
      break;

  }
}

function setPerson(speaker) {

}

function speakerDialog(text) {

}

function choices(choices) { //if choices are equal to 1 then give pos choice and neg choice an invisible class

}

function speakerAction(action) {

}