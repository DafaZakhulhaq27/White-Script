var text = [
  `Telev<span class="blurred-text">ision</span> P<span class="blurred-text">rodu</span>c<span class="blurred-text">tion</span>`,
  `Telev<span class="blurred-text">ision</span> Commerc<span class="blurred-text">ials</span>`,
  `Digi<span class="blurred-text">tal</span> Vide<span class="blurred-text">os</span>`,
  `Audiob<span class="blurred-text">ooks</span>`,
];

var counter = 0;
var elem = document.getElementById("bannerText");
var sint = setInterval(change, 5000);

function change() {
  // if (counter > 0) {
  // elem.classList.remove("banner-text");
  // elem.classList.add("banner-text-opacity");
  elem.classList.add("fade");
  // }
  console.log(counter, "text[counter]");
  elem.innerHTML = text[counter];
  counter++;

  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst);
  }
}

change();
