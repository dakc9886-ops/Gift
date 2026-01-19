const audio = document.getElementById("bgm");
const btn = document.getElementById("startBtn");

btn.addEventListener("click", () => {
  audio.play();
  btn.style.display = "none";
});

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 4 + 2 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 300);
