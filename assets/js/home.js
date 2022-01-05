var text = [
  `Telev<span class="blurred-text">ision</span> P<span class="blurred-text">rodu</span>c<span class="blurred-text">tion</span>`,
  "Television Commercials",
  "Digital Videos",
  "Television Production",
  "Audiobooks",
];

var counter = 0;
var elem = document.getElementById("bannerText");
var sint = setInterval(change, 3000);

function change() {
  if (counter > 0) {
    elem.classList.add("fade");
  }
  elem.innerHTML = text[counter];
  counter++;

  if (counter >= text.length) {
    counter = 1;
    // clearInterval(inst);
  }
}

change();
