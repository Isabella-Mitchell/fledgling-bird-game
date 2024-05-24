const robinClip = new Audio("assets/sounds/robin-clip.mp3");
const blackbirdClip = new Audio("assets/sounds/blackbird-clip.mp3");
const willowWarblerClip = new Audio("assets/sounds/willow-warbler-clip.mp3");
const coalTitClip = new Audio("assets/sounds/coal-tit-clip.mp3");

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
  return randomisedBirdList[zeroIndexedHour].sound;
}

// need to remove if not pressed
function stopSound() {
  robinClip.pause();
  $("#stop-sound-button").addClass("d-none");
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

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  //   let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
  let displayTime = hour + ":" + min + " " + am_pm;
  let chimeTime = min + ":" + sec;
  // let testChimeTime = sec;

  document.getElementById("clock").innerHTML = displayTime;

  if (chimeTime === "00") {
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
