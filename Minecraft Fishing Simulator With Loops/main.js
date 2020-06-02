// Minecraft Fishing Simulator
"use strict";

// GLobal Variables
let numFish = 0;
let numSalmon = 0;
let numPuffer = 0;
let numClown = 0;
let numJunk = 0;
let numTreasure = 0;

let resultsEl = document.getElementById("results");

// Event Listners
document.getElementById("mainImg").addEventListener("click", catchFish);
document.getElementById("plus10").addEventListener("click", plus10);
document.getElementById("plus100").addEventListener("click", plus100);
document.getElementById("until50Clownfish").addEventListener("click", until50Clownfish);

// Event Function
function catchFish() {
  //Genrate a random number
  let randNum = Math.random(); // Random decimal from 0 up to 1

  //Simulate results
  if (randNum < 0.85) {
    // Catch Fish - Simulate type of fish to catch
    let randFish = Math.random();

    if (randFish < 0.5) {
      console.log("RawFish");
      numFish++;
      document.getElementById("fish").innerHTML = numFish;
      resultsEl.innerHTML += '<img src="images/RawFish.png">';
    } else if (randFish < 0.7) {
      console.log("RawSalmon");
      numSalmon++;
      document.getElementById("salmon").innerHTML = numSalmon;
      resultsEl.innerHTML += '<img src="images/Raw_Salmon.png">';
    } else if (randFish < 0.9) {
      console.log("Pufferfish");
      numPuffer++;
      document.getElementById("puffer").innerHTML = numPuffer;
      resultsEl.innerHTML += '<img src="images/Pufferfish_old.png">';
    } else {
      console.log("ClownFish");
      numClown++;
      document.getElementById("clown").innerHTML = numClown;
      resultsEl.innerHTML += '<img src="images/Clownfish.png">';
    }
  } else if (randNum < 0.95) {
    // Catch Junk
    console.log("junk");
    numJunk++;
    document.getElementById("junk").innerHTML = numJunk;
    resultsEl.innerHTML += '<img src="images/leatherboots.png">';
  } else {
    // Catch Treasure
    console.log("treasure");
    numTreasure++;
    document.getElementById("treasure").innerHTML = numTreasure;
    resultsEl.innerHTML += '<img src="images/Bow.png">';
  }
}

function plus10() {
  for (let n = 0; n <= 10; n++) {
    console.log(n);
    catchFish();
  }
}

function plus100() {
    for (let n = 0; n <= 100; n++) {
      console.log(n);
      catchFish();
    }
  }
  
function until50Clownfish() {
    let count = 0;
    while (numClown < 50) {
        catchFish();
        count++;
    }
    console.log("Count" + count);
}