import { state } from "./model.js";

function renderTopBar() {
  const topbar = document.getElementById("topbar");
  topbar.innerHTML = /*html*/`
    <img src="${state.gangplank.pictures.profilePicture}" alt="gangplank">
    <div id="hpbar">hp: ${state.gangplank.stats.healthBar}</div>
    <div id="gold">gold: ${state.gangplank.stats.money}</div>
    <div id="button-container">
      <button id="dummyBtn">Go Home Or Store</button>
    </div>
  `;
}

export function updateView(){
  const app = document.getElementById("app");
  app.innerHTML = `<div id="topbar"></div>`;

  renderTopBar();                                  
}

// start
updateView();
