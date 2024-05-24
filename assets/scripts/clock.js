const blackbirdClip = new Audio("assets/sounds/blackbird-clip.mp3");
const blackcapClip = new Audio("assets/sounds/blackcap-clip.mp3");
const blueTitClip = new Audio("assets/sounds/blue-tit-clip.mp3");
const chaffinchClip = new Audio("assets/sounds/chaffinch-clip.mp3");
const chiffchaffClip = new Audio("assets/sounds/chiffchaff-clip.mp3");
const coalTitClip = new Audio("assets/sounds/coal-tit-clip.mp3");
const greatTitClip = new Audio("assets/sounds/great-tit-clip.mp3");
const longTailedTitClip = new Audio("assets/sounds/long-tailed-tit-clip.mp3");
const mistleThrushClip = new Audio("assets/sounds/mistle-thrush-clip.mp3");
const robinClip = new Audio("assets/sounds/robin-clip.mp3");
const willowWarblerClip = new Audio("assets/sounds/willow-warbler-clip.mp3");
const wrenClip = new Audio("assets/sounds/wren-clip.mp3");
const yellowhammerClip = new Audio("assets/sounds/yellowhammer-clip.mp3");

// to do - move config into shared repo
const CONFIG = {
  blackbird: {
    birdName: "Blackbird",
    birdId: "blackbird",
    sound: blackbirdClip,
    outlineImageSrc: "assets/images/bb-outline.png",
    finishedImageSrc: "assets/images/bb-final.png",
  },
  robin: {
    birdName: "Robin",
    birdId: "robin",
    sound: robinClip,
    outlineImageSrc: "",
    finishedImageSrc: "",
  },
  willowWarbler: {
    birdName: "Willow Warbler",
    birdId: "willowWarbler",
    sound: willowWarblerClip,
    outlineImageSrc: "",
    finishedImageSrc: "",
  },
  coalTit: {
    birdName: "Coal Tit",
    birdId: "coalTit",
    sound: coalTitClip,
    outlineImageSrc: "",
    finishedImageSrc: "",
  },
  blackcap: {
    birdName: "Blackcap",
    birdId: "blackcap",
    sound: blackcapClip,
    outlineImageSrc: "",
    finishedImageSrc: "",
  },
  blueTit: {
    birdName: "Blue Tit",
    birdId: "blueTit",
    sound: blueTitClip,
    outlineImageSrc: "",
    finishedImageSrc: "",
  },
  chaffinch: {
    birdName: "Chaffinch",
    birdId: "chaffinch",
    sound: chaffinchClip,
    outlineImageSrc: "",
    finishedImageSrc: "",
  },
  chiffchaff: {
    birdName: "Chiffchaff",
    birdId: "chiffchaff",
    sound: chiffchaffClip,
    outlineImageSrc: "",
    finishedImageSrc: "",
  },
  greatTit: {
    birdName: "Great Tit",
    birdId: "greatTit",
    sound: greatTitClip,
    outlineImageSrc: "",
    finishedImageSrc: "",
  },
  longTailedTit: {
    birdName: "Long Tailed Tit",
    birdId: "longTailedTit",
    sound: longTailedTitClip,
    outlineImageSrc: "",
    finishedImageSrc: "",
  },
  mistleThrush: {
    birdName: "Mistle Thrush",
    birdId: "mistleThrush",
    sound: mistleThrushClip,
    outlineImageSrc: "",
    finishedImageSrc: "",
  },
  wren: {
    birdName: "Wren",
    birdId: "wren",
    sound: wrenClip,
    outlineImageSrc: "",
    finishedImageSrc: "",
  },
  yellowhammer: {
    birdName: "Yellowhammer",
    birdId: "yellowhammer",
    sound: yellowhammerClip,
    outlineImageSrc: "",
    finishedImageSrc: "",
  },
};

function shuffle(array) {
  let currentIndex = array.length;
  console.log(array);

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

let orderedBirdList = [];
let randomisedBirdList = [];

function populateRandomisedBirdList() {
  for (const bird in CONFIG) {
    orderedBirdList.push(CONFIG[bird]);
  }
  randomisedBirdList = shuffle(orderedBirdList);
}

function updateChimeDisplay(zeroIndexedHour) {
  let currentbirdName = randomisedBirdList[zeroIndexedHour].birdName;
  let nextbirdName = randomisedBirdList[zeroIndexedHour + 1].birdName;
  $("#birdName").text(
    `The current bird is ${currentbirdName}. The next bird is ${nextbirdName}`
  );
}

function getBirdSound(zeroIndexedHour) {
  console.log(zeroIndexedHour);
  console.log(randomisedBirdList[zeroIndexedHour]);
  return randomisedBirdList[zeroIndexedHour].sound;
}

// duplicate logic as showtime - should put hour in state
function calcHour() {
  let time = new Date();
  let hour = time.getHours();
  if (hour >= 12) {
    if (hour > 12) hour -= 12;
  } else if (hour == 0) {
    hr = 12;
  }
  return hour;
}

// need to refactor - using shared logic - could set bird in state
// need to remove if not pressed
function stopSound() {
  let hour = calcHour();
  const zeroIndexedHour = hour === 12 ? 0 : hour;
  let chime = getBirdSound(zeroIndexedHour);
  chime.pause();
  $("#stop-sound-button").addClass("d-none");
}

// need to refactor - using shared logic
function playSound() {
  let hour = calcHour();
  const zeroIndexedHour = hour === 12 ? 0 : hour;
  let chime = getBirdSound(zeroIndexedHour);
  chime.play();
}

function hourChime(hour) {
  $("#stop-sound-button").removeClass("d-none");
  const zeroIndexedHour = hour === 12 ? 0 : hour;
  let chime = getBirdSound(zeroIndexedHour);
  chime.play();
  updateChimeDisplay(zeroIndexedHour);
  setTimeout(function () {
    $("#stop-sound-button").addClass("d-none");
  }, 7000);
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

  displayHour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  //   let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
  let displayTime = displayHour + ":" + min + " " + am_pm;
  let chimeTime = min + ":" + sec;

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
      populateRandomisedBirdList();
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
