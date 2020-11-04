'use strict';
// éléments du DOM
let workTimer = document.querySelector(`#work-timer p`)
let breakTimer = document.querySelector(`#break-timer p`)
let startTimer = document.querySelector(`#start`)
let stopTimer = document.querySelector(`#stop`)
let resetTimer = document.querySelector(`#reset`)
let counter = document.querySelector(`#counter`)

// inialisation des variables
let workTime = 1800; // 30 minutes
let breakTime = 300; // 5 minutes
let counterLoop = 0;
let stop = false;

// initialiser l'affichage
counter.innerText = `Nombre de cycle : ${counterLoop}`;
workTimer.innerText = `${Math.round(workTime/60)} : ${(workTime % 60 < 10) ? `0${workTime % 60}` : workTime % 60}`
breakTimer.innerText = `${Math.round(breakTime/60)} : ${(breakTime % 60 < 10) ? `0${breakTime % 60}` : breakTime % 60}`