const dialogBox = document.getElementById('dialog');
const healthBar = document.getElementById('healthBar');
const objecetiveP = document.getElementById('objectiveP');
const bg = document.getElementById('body');
const dialogAction = document.getElementById('action');
const speakerPic = document.getElementById('speakerPic');
const speakerTitle = document.getElementById('speaker');
const neuChoice = document.getElementById('neuchoice');
const posChoice = document.getElementById('poschoice');
const negChoice = document.getElementById('negchoice');


import { story } from 'story.js';
import { status } from './logic';
import Typewriter from "https://cdn.jsdelivr.net/npm/typewriter-effect@2.22.0/dist/core.min.js";
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

function setBG(place) { //gives class to body based on the place you're in to style later
  switch (place) {
    case 'cutscene1':
      bg.className = place;
      break;
    case 'home':
      bg.className = place;
      break;
    case 'town':
      bg.className = place;
      break;
    case 'castleCell':
      bg.className = place;
      break;
    case 'castleExit':
      bg.className = place;
      break;
    case 'whitoria':
      bg.className = place;
      break;
    case 'whitoria':
      bg.className = place;
      break;
    case 'treasury':
      bg.className = place;
      break;
    case 'road':
      bg.className = place;
      break;
    case 'astroFight':
      bg.className = place;
      break;
    case 'icarusFight':
      bg.className = place;
      break;
    case 'village':
      bg.className = place;
      break;

  }
}

function setPerson(speaker) { //long switch statement that reads speaker and sets a class to the div and changes the h2 to make it their name
  switch (speaker) {
    case 'Narrator':
      speakerPic.className = speaker
      speakerTitle.textContent = speaker
      break;
    case 'Player':
      speakerPic.className = speaker
      speakerTitle.textContent = speaker
      break;
    case 'Royal Guard':
      speakerPic.className = speaker
      speakerTitle.textContent = speaker
      break;
    case 'Yapper':
      speakerPic.className = speaker
      speakerTitle.textContent = speaker
      break;
    case 'Prophet':
      speakerPic.className = speaker
      speakerTitle.textContent = speaker
      break;
    case 'Mean Granny':
      speakerPic.className = speaker
      speakerTitle.textContent = speaker
      break;
    case 'Cat':
      speakerPic.className = speaker
      speakerTitle.textContent = speaker
      break;
    case 'Duke':
      speakerPic.className = speaker
      speakerTitle.textContent = speaker
      break;
    case 'Astro':
      speakerPic.className = speaker
      speakerTitle.textContent = speaker
      break;
    case 'Icarus':
      speakerPic.className = speaker
      speakerTitle.textContent = speaker
      break;
    case 'Chief':
      speakerPic.className = speaker
      speakerTitle.textContent = speaker
      break;
  }
}

function speakerDialog(text) {
  dialogBox.textContent = text;
}

function choices(options, pN, neg, neu) { 
  //if choices are equal to 1 then give pos choice and neg choice an invisible class
 if(options.length === 1){
  posChoice.className = 'hide';
  negChoice.className = 'hide';
  neuChoice.className = 'next';
  neuChoice.textContent = pN;
 } 
 if (options.length > 1){
  posChoice.textContent = pN;
  negChoice.textContent = neg;
  neuChoice.textContent = neu;
 }

}

function speakerAction(action) {

}

function pageUpdate() { //grabs what part of the story ur on and distributes 
  let chapter = story[status.Progression.chapterIndex];
  let scene = chapter.scenes[status.Progression.sceneIndex];
  let place = scene.place;
  let speaker = scene.speaker;
  let dialog = scene.dialog.speech;
  let action = scene.dialog.action;
  let options = scene.choices;
  let posAndNextText = scene.choices[0].text;
  let negText = scene.choices[1].text;
  let neuText = scene.choices[2].text; //because choices is an array i have to split the choice text up since just one choice will give me all 3 sadly
  let obj = scene.objective;

  setBG(place);
  setPerson(speaker);
  speakerDialog(dialog);
  speakerAction(action);
  choices(options, posAndNextText, negText, neuText);
  objective(obj)
}

export { pageUpdate };
