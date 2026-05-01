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


import { story } from './story.js';
import { status } from './logic.js';


posChoice.addEventListener('click', )

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

function choices(options) { 
  //if choices are equal to 1 then give pos choice and neg choice an invisible class
  if (options[0].type === 'next'){
    neuChoice.textContent = options[0].text;
    neuChoice.className = 'nextButton'
    posChoice.className = 'hidden';
    negChoice.className = 'hidden';
  }
 if (options[0].type !== 'next'){
  posChoice.textContent = options[0].text;
  negChoice.textContent = options[1].text;
  neuChoice.textContent = options[2].text;
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
  console.log(options[0].type);
  
  

  setBG(place);
  setPerson(speaker);
  speakerDialog(dialog);
  speakerAction(action);
  choices(options);
  objective(obj);
}

export { pageUpdate };



document.addEventListener("DOMContentLoaded", () => {
  pageUpdate();
});




