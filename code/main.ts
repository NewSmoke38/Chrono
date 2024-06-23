import kaboom from "kaboom"
import "kaboom/global"

// initialize context
kaboom({
  // setting global configuration
  global: true, // enable global fn and vars for kaboom.js
  fullscreen: true, // for fullscreen mode
  scale: 2, // for scaling the game 2x times bigger pixels
  clearColor: [0, 0, 0, 1], // for clearing the color of the canvas to black every time, 1 for opacity (black w full opacity)
  
})


// load assets
// sprites are 2d characters, objects, backgrounds, and other elements within a game.

  loadSprite("chrono", "sprites/chrono.png"); // Load the sprite for the player character (chrono) from the specified URL
  loadSprite("background", "sprites/background.jpeg"); // Load the sprite for the background
  loadSprite("platform", "sprites/platform1.png"); // Load the sprite for the platform 
  loadSprite("goal", "sprites/goal.png"); // Load the sprite for the goal of end 

// constants for game mechanics
const MOVE_SPEED = 400; // Speed at which the player character moves
let timeGauge = 100; // time ability gauge

// The timeGauge starts at 100, indicating full capacity. it is like energy. When the player uses a time manipulation ability (e.g., pressing the ‘z’, ‘x’, or ‘c’ key), the timeGauge decreases by 20. Each ability checks if the timeGauge is greater than 0 before it can be used, ensuring the player cannot use the ability if they don’t have enough “energy” left in the gauge.


// time manipulation functions
function rewindTime() {
  // This line defines a new function named 'rewindTime'
  // Functions are blocks of code designed to perform particular tasks when called
  
  // Logic for rewinding time is-
  // This is a placeholder comment indicating where the actual code to implement the time rewind functionality will go
  console.log("Rewind time!");
  // This line logs a message to the console indicating that time has been rewound.
  // This is useful for debugging and understanding when the rewindTime function is called.

}

function freezeTime() {
  // For times when i might stop the movement of certain objects or pause animations and freeze time
  console.log("Freeze time!");
  // this line tells the console to log a message telling that time has been frozen.
}


function accelerateTime() {
  // when speeding up time
console.log("Accelerate time!");
  // this means that time has been accelarated
}


// level 1 scene
scene("level1", () => {
  // defines layers for bg, obj, and ui
  layers(["bg", "obj", "ui"], "obj");

 // add and scale background
  add([
    sprite("background"),
    layer("bg"),
    scale(width() / 400, height() / 800),
    pos((width() - spriteWidth("background")) / 2, (height() - spriteHeight("background")) / 2),
  ]);

  add([
    sprite("platform"),
    pos(100, 200),
    solid(),
  ]);
  

    const player = add([
      sprite("chrono"),
      pos(0, 0),
      scale(0.1),
      body(),
    ]);

    add([
      sprite("goal"),
      pos(700, 50),
    ]);

    keyDown("left", () => {
      player.move(-MOVE_SPEED, 0);
    });

    keyDown("right", () => {
      player.move(MOVE_SPEED, 0);
    });
  });






