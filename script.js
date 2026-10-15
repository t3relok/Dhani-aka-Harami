// Customize the messages below to make this surprise feel even more personal.
const loveMessages = [
  "Tum meri life ka woh hissa ho jahan aake dil ko sukoon milta hai. ♡",
  "Tumhe har baar perfect hone ki zaroorat nahi, Dhani. Tum jaisi ho, mere liye bahut special ho.",
  "Agar kabhi tumhara din achha na ho, toh yaad rakhna — koi hai jo tumhari smile dekhna chahta hai. 🩷",
  "Mujhe tumhare saath sirf achhe moments nahi, normal se boring moments bhi share karne hain.",
  "Main har cheez ka promise nahi kar sakta, par itna zaroor: main tumhari baat samajhne ki koshish karta rahunga. ♡"
];

const revealBtn = document.querySelector("#revealBtn");
const messageSection = document.querySelector("#messageSection");
const loveMessage = document.querySelector("#loveMessage");
const nextMessageBtn = document.querySelector("#nextMessageBtn");
const messageCount = document.querySelector("#messageCount");
const heartBtn = document.querySelector("#heartBtn");
const hugBtn = document.querySelector("#hugBtn");
const hugReply = document.querySelector("#hugReply");
const heartsLayer = document.querySelector("#hearts");
const musicBtn = document.querySelector("#musicBtn");
const musicText = document.querySelector("#musicText");
const musicIcon = document.querySelector("#musicIcon");
const bgMusic = document.querySelector("#bgMusic");

let messageIndex = 0;
let musicOn = false;

function burstHearts(amount = 9) {
  const symbols = ["♥", "♡", "✧", "💕"];
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 22}px`;
    heart.style.setProperty("--duration", `${3.1 + Math.random() * 2.5}s`);
    heart.style.animationDelay = `${Math.random() * 0.45}s`;
    heartsLayer.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
}

revealBtn.addEventListener("click", () => {
  messageSection.hidden = false;
  messageSection.scrollIntoView({ behavior: "smooth", block: "center" });
  burstHearts(18);
  revealBtn.textContent = "Secret unlocked ♡";
  revealBtn.disabled = true;
  revealBtn.style.opacity = ".8";
});

nextMessageBtn.addEventListener("click", () => {
  messageIndex = (messageIndex + 1) % loveMessages.length;
  loveMessage.animate(
    [{ opacity: 0, transform: "translateY(7px)" }, { opacity: 1, transform: "translateY(0)" }],
    { duration: 350, easing: "ease-out" }
  );
  loveMessage.textContent = loveMessages[messageIndex];
  messageCount.textContent = `${messageIndex + 1} / ${loveMessages.length}`;
  burstHearts(5);
});

heartBtn.addEventListener("click", () => {
  burstHearts(24);
  heartBtn.animate([{ transform: "scale(1)" }, { transform: "scale(1.3)" }, { transform: "scale(1)" }], { duration: 300 });
});

hugBtn.addEventListener("click", () => {
  hugReply.hidden = false;
  hugBtn.textContent = "Hug sent! ♡";
  burstHearts(16);
});

musicBtn.addEventListener("click", async () => {
  if (!musicOn) {
    try {
      await bgMusic.play();
      musicOn = true;
      musicBtn.setAttribute("aria-pressed", "true");
      musicText.textContent = "Pause soft music";
      musicIcon.textContent = "♫";
    } catch (error) {
      musicText.textContent = "Add music.mp3 first";
      musicBtn.setAttribute("aria-pressed", "false");
    }
  } else {
    bgMusic.pause();
    musicOn = false;
    musicBtn.setAttribute("aria-pressed", "false");
    musicText.textContent = "Play soft music";
    musicIcon.textContent = "♫";
  }
});

// A gentle sprinkle on first load; no sound starts automatically.
window.addEventListener("load", () => {
  setTimeout(() => burstHearts(7), 550);
});
