const myTimeout = setTimeout(myGreeting, 3000);

function myGreeting() {
  var content = document.getElementById("content");
  var loader = document.getElementById("loader");

  loader.style.display = "none";
  content.style.display = "block";
}
