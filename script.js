/*
    title: what appears on the envelope
    icon: the little symbol
    preview: small text on the envelope
    paragraphs: an array of paragraphs inside the letter
*/

const letters = [
  {
    title: "Open when you miss me / feel needy",
    icon: "♡",
    preview: "for when you wish I were there",
    paragraphs: [
      "I wish I could be there with you right now. I would kiss your forehead, your cute nose, your cheeks, and maybe a little one on the lips if you want it. I'd tell you how pretty you are. My sweet girl.", 
      "I know a screen isn't the same as having me beside you, but I hope serves as a reminder that I'm still here. I still care for you and I fantasise about the day I can come take care of you. Take all the worries from your mind.",
      "Imagine me pulling you into bed, holding you close, letting you get comfortable against me, and you can just stay there with me for as long as you need. I will run my fingers through your hair, and make you feel safe.",
      "Until I can actually do that, you can always come back here and fantasise with me. I will never leave or abandon you, little bunny. I promise. I'll always be the there for you. Even if I can't physically right now."
    ]
  },
  {
    title: "Open when you're having a bad day",
    icon: "☁",
    preview: "you don't have to be okay",
    paragraphs: [
      "Hey, baby. My poor little girl.",
      "You don't have to fix everything right now. You don't have to pretend you're okay for anyone. It's okay to have bad days. To be miserable, to just wanna play games and spend time with friends. To want some time away from dad, to not like me as much today.",
      "Just remember to take care of yourself while I am not there to do it for you. I wish I was: we could cuddle, take naps, watch movies, doomscroll through tiktok. Or you could do that, and I'll be around just in case you need a little more attention. I'd make your favourite snacks, I'd tend to you, and take care of everything. So you can shut your mind off and just let me take over.",
      "I'm proud of you for making it this far today. Even if today wasn't a good one, you still deserve kindness. So remember to be kind and gentle with yourself, alright? You're my good girl. I'll love you on the good and bad days."
    ]
  },
  {
    title: "Open when you can't sleep",
    icon: "☾",
    preview: "little goodnight for a little girl",
    paragraphs: [
      "Can't sleep, little bunny?",
      "Then imagine I'm right there beside you. Get yourself comfy, close your eyes, and pretend I'm playing with your hair while you slowly drift off. You can cling onto dad and suck on his thumb. Or i could spoon you while you are cuddling your stuffies. Read you a bedtime story, and protect you, make you feel safe.",
      "You don't need to do anything right now. Just rest. I am sorry that tonight is rough. I wish i was right there next to you. You're my good girl. My everything, my universe.",
      "Goodnight, sweetheart. Sleep well. Have the sweetest of dreams. I'll be here when you wake up. I am yours. 🌙"
    ]
  },
  {
    title: "Open when you need reassurance",
    icon: "♡",
    preview: "come here for a second",
    paragraphs: [
      "Come here. ♡",
      "Whatever your brain is telling you right now, you don't have to believe every thought it gives you.",
      "You're loved. You're wanted. You're important to me.",
      "You don't have to earn my affection by being perfect, being happy all the time, or having everything figured out. You can just be you."
    ]
  },
  {
    title: "Open when you want to know how much I love you",
    icon: "♥",
    preview: "this one is a little longer",
    paragraphs: [
      "I don't think I could fit the entire answer onto one little page.",
      "I love the little things about you. The things you probably don't even realize I notice. The way you talk, the things you get excited about, your silly moments, your sleepy moments, and all those tiny pieces that make you you.",
      "I love being able to know you.",
      "And if you ever wonder whether you're loved, come back here.",
      "The answer is yes. It always has been. ♡"
    ]
  },
  {
    title: "Open when you want to smile",
    icon: "☀",
    preview: "I hope this makes your day a little softer",
    paragraphs: [
      "Hi, pretty girl.",
      "This is your reminder that somewhere out here is a person who thinks you're ridiculously cute and is probably smiling just thinking about you.",
      "So please give me one tiny smile. Yes, that one. That's the one I wanted. ♡"
    ]
  },
  {
    title: "Open when you need a cuddle",
    icon: "🧸",
    preview: "initiating emergency cuddle protocol",
    paragraphs: [
      "Emergency cuddle protocol has been activated.",
      "Come here. Get comfortable. Put your head against me and let yourself relax for a little while.",
      "No talking required. No explaining yourself required. Just cuddles.",
      "There. Better. ♡"
    ]
  },
  {
    title: "Open when you feel insecure",
    icon: "✦",
    preview: "a reminder from someone who sees you",
    paragraphs: [
      "I know there are probably things about yourself that you wish you could change.",
      "But I wish you could see yourself through my eyes for a little while. You would see someone worth loving, worth listening to, worth caring for.",
      "You don't become less deserving of love on the days when you don't feel pretty, confident, or good enough.",
      "You are still you. And I still adore you. ♡"
    ]
  },
  {
    title: "Open when you wake up",
    icon: "☼",
    preview: "good morning, sleepyhead",
    paragraphs: [
      "Good morning, sleepyhead. ♡",
      "I hope you slept okay. Before the day gets busy, here's a tiny reminder that someone is thinking about you.",
      "Drink some water, take your time getting up, and be kind to yourself today.",
      "Now go have a lovely day for me."
    ]
  }
];

const grid = document.getElementById("envelopeGrid");
const modal = document.getElementById("letterModal");
const modalTitle = document.getElementById("modalTitle");
const modalEyebrow = document.getElementById("modalEyebrow");
const modalMessage = document.getElementById("modalMessage");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

function renderEnvelopes() {
  grid.innerHTML = "";

  letters.forEach((letter, index) => {
    const button = document.createElement("button");
    button.className = "envelope";
    button.type = "button";
    button.style.setProperty("--tilt", `${index % 2 === 0 ? -1 : 1}deg`);
    button.setAttribute("aria-label", letter.title);

    button.innerHTML = `
      <div class="envelope-paper">
        <div class="envelope-flap"></div>
      </div>
      <div class="envelope-content">
        <div class="envelope-icon">${letter.icon}</div>
        <h3>${letter.title}</h3>
        <p>${letter.preview}</p>
      </div>
    `;

    button.addEventListener("click", () => openLetter(index));
    grid.appendChild(button);
  });
}

function openLetter(index) {
  currentIndex = index;
  const letter = letters[index];

  modalTitle.textContent = letter.title;
  modalEyebrow.textContent = "a letter for you";
  modalMessage.innerHTML = letter.paragraphs
    .map(paragraph => `<p>${paragraph}</p>`)
    .join("");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  setTimeout(() => {
    document.querySelector(".close-button").focus();
  }, 100);
}

function closeLetter() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function openNextLetter() {
  const nextIndex = (currentIndex + 1) % letters.length;
  openLetter(nextIndex);
}

document.querySelectorAll("[data-close]").forEach(element => {
  element.addEventListener("click", closeLetter);
});

nextButton.addEventListener("click", openNextLetter);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeLetter();
  }

  if (event.key === "ArrowRight" && modal.classList.contains("is-open")) {
    openNextLetter();
  }
});

renderEnvelopes();
