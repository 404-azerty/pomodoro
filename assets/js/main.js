'use strict';
// éléments du DOM
let workTimer = document.querySelector(`#work-timer p`);
let breakTimer = document.querySelector(`#break-timer p`);
let startTimer = document.querySelector(`#start`);
let stopTimer = document.querySelector(`#stop`);
let resetTimer = document.querySelector(`#reset`);
let counter = document.querySelector(`#counter`);

// inialisation des variables
let workTime = 1800; // 30 minutes
let breakTime = 300; // 5 minutes 
let counterLoop = 0;
let timing = false;
let stoping = false;

// initialiser l'affichage
counter.innerText = `Nombre de cycle : ${counterLoop}`;
workTimer.innerText = `${Math.trunc(workTime/60)} : ${(workTime % 60 < 10) ? `0${workTime % 60}` : workTime % 60}`;
breakTimer.innerText = `${Math.trunc(breakTime/60)} : ${(breakTime % 60 < 10) ? `0${breakTime % 60}` : breakTime % 60}`;

// écoute du lancement
startTimer.addEventListener(`click`, event => {
  event.preventDefault();

  // éviter le lancement multiple
  if (timing) return;
  timing = true;

  // lancer le timer
  let timer = setInterval(() => {
    // si le temps n'est pas en pause
    if (!stoping) {
      // si le temps de travail est supérieur à 0 le décrémenter
      if(workTime > 0) {
        workTime--;
        workTimer.innerText = `${Math.trunc(workTime/60)} : ${(workTime % 60 < 10) ? `0${workTime % 60}` : workTime % 60}`;
      }
      // si le temps de travail et le temps de pause sont à 0 réinitialisation des compteurs, de l'affichage et ajout d'un tour de boucle
      else if(workTime === 0 && breakTime === 0){
        workTime = 1800;
        workTimer.innerText = `${Math.trunc(workTime/60)} : ${(workTime % 60 < 10) ? `0${workTime % 60}` : workTime % 60}`;
        
        breakTime = 300;
        breakTimer.innerText = `${Math.trunc(breakTime/60)} : ${(breakTime % 60 < 10) ? `0${breakTime % 60}` : breakTime % 60}`;
        
        counterLoop++;
        counter.innerText = counterLoop > 1 ?  `Nombre de cycles : ${counterLoop}` : `Nombre de cycle : ${counterLoop}`;
      }
      // si le temps de pause est à 0
      else if(workTime === 0) {
        breakTime--;
        breakTimer.innerText = `${Math.trunc(breakTime/60)} : ${(breakTime % 60 < 10) ? `0${breakTime % 60}` : breakTime % 60}`;
      };
    }
  }, 1000);

  resetTimer.addEventListener(`click`, event => {
    console.log(event);

    // arrêter le temps et réinitialiser les éléments
    clearInterval(timer);
    timing = false;
    workTime = 1800;
    breakTime = 300;
    counterLoop = 0;
    workTimer.innerText = `${Math.trunc(workTime/60)} : ${(workTime % 60 < 10) ? `0${workTime % 60}` : workTime % 60}`;
    breakTimer.innerText = `${Math.trunc(breakTime/60)} : ${(breakTime % 60 < 10) ? `0${breakTime % 60}` : breakTime % 60}`;
  });
});

// écoute de la mise en pause
stopTimer.addEventListener(`click`, event => {
  event.preventDefault();
  
  // inverser la valeur de la variable stoping
  stoping = !stoping;

  // et changer le texte en conséquence
  stopTimer.innerText = stoping ? `Continuer` : `Pause` ;
});