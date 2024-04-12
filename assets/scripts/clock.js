// to do - move config into shared repo
const CONFIG = {
  blackbird: {
    birdName: "Blackbird",
    birdId: "blackbird",
    outlineImageSrc: "assets/images/bb-outline.png",
    finishedImageSrc: "assets/images/bb-final.png",
  },
  blueTit: {
    birdName: "Blue Tit",
    birdId: "blueTit",
    outlineImageSrc: "assets/images/bt-outline.png",
    finishedImageSrc: "assets/images/bt-final.png",
  },
  cormorant: {
    birdName: "Cormorant",
    birdId: "cormorant",
    outlineImageSrc: "assets/images/cm-outline.png",
    finishedImageSrc: "assets/images/cm-final.png",
  },
  magpie: {
    birdName: "Magpie",
    birdId: "magpie",
    outlineImageSrc: "assets/images/mp-outline.png",
    finishedImageSrc: "assets/images/mp-final.png",
  },
  goldfinch: {
    birdName: "Goldfinch",
    birdId: "goldfinch",
    outlineImageSrc: "assets/images/gf-outline.png",
    finishedImageSrc: "assets/images/gf-final.png",
  },
};

// const sound = new Audio(
//   "https://www.freespecialeffects.co.uk/soundfx/animals/bird.wav"
// );
const robinClip = new Audio("assets/sounds/robin-clip.mp3");
// sound.loop = true;

// need to remove if not pressed
function stopSound() {
  robinClip.pause();
  $("#stop-sound-button").addClass("d-none");
}

function hourChime(hour) {
  console.log("It's the hour of", hour);
  $("#stop-sound-button").removeClass("d-none");
  robinClip.play();
  setTimeout(function () {
    $("#stop-sound-button").addClass("d-none");
  }, 10000);
}

setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "am";

  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "pm";
  } else if (hour == 0) {
    hr = 12;
    am_pm = "am";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  //   let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
  let displayTime = hour + ":" + min + " " + am_pm;
  let chimeTime = min + ":" + sec;
  let testChimeTime = sec;

  document.getElementById("clock").innerHTML = displayTime;

  if (chimeTime === "00:00") {
    hourChime(hour);
  }
}

function fadeInClock() {
  $("#landing-screen").addClass("d-none");
  $("#clock-screen").removeClass("d-none");
  $("#clock-box").fadeIn(1000);
}

function startClock() {
  showTime();
  $("#clock-box").fadeOut(500, function () {
    fadeInClock();
  });
}

/**
 * Defines what action should happen when a button is clicked.
 */
function addCorrectButtonAction(buttonClicked) {
  const buttonCommandType = buttonClicked.getAttribute("data-button-command");
  switch (buttonCommandType) {
    case "start-clock":
      startClock();
      break;
    default:
      break;
  }
}

/**
 * Adds event listeners to game buttons.
 * Function is called when DOM content is loaded
 */
function addEventListeners() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      addCorrectButtonAction(this);
    });
  }
}

/**
 * Wait for the DOM to finish loading before running the game
 * Get the button elements and add event listeners to them
 */
document.addEventListener("DOMContentLoaded", addEventListeners);
