import $ from "https://cdn.skypack.dev/jquery@3.6.0";
import * as platform from "https://cdn.skypack.dev/platform@1.3.6";

const se = new Audio(
  "https://dl.dropbox.com/s/pjf5iswhy43fc1f/camera-shutter3.mp3"
);
se.play();
let c = 6 * 60 * 60;
setInterval(() => {
  $("#hour").text(Math.floor(c / 3600));
  $("#min").text(Math.floor((c % 3600) / 60));
  $("#sec").text(Math.floor(c % 60));
  c = c - 1;
}, 1000);
$("#device").text(platform.description);
$("#date").text(new Date().toLocaleString("ja-JP"));
