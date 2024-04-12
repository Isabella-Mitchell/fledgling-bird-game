const sound = new Audio(
  "https://www.freespecialeffects.co.uk/soundfx/animals/bird.wav"
);
const robinClip = new Audio(
    "assets/sounds/robin-clip.mp3"
  );
// sound.loop = true;

function stopSound() {
    robinClip.pause();
}

function hourChime(hour) {
  console.log("It's the hour of", hour);
  robinClip.play();
}

setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if (hour >= 12) {
    if (hour > 12) hour -= 12;
    am_pm = "PM";
  } else if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  //   let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
  let displayTime = hour + ":" + min + " " + am_pm;
  let chimeTime = min + ":" + sec;

  document.getElementById("clock").innerHTML = displayTime;

  if (chimeTime === "00:00") {
    hourChime(hour);
  }
}

showTime();
