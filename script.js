/*
  OPEN WHEN WEBSITE
  -----------------
  To personalize this website, edit the "letters" array below.
  Each letter has:
    title: what appears on the envelope
    icon: the little symbol
    preview: small text on the envelope
    paragraphs: an array of paragraphs inside the letter
*/

const letters = [
  {
    title: "Open when you miss me",
    icon: "♡",
    preview: "for when you wish I were there",
    paragraphs: [
      "I wish I could be there with you right now. I know a screen isn't the same as having me beside you, but I hope this can be a tiny reminder that I'm still here.",
      "Imagine me pulling you into a big hug, letting you get comfortable against me, and just staying there with you for as long as you need.",
      "Until I can actually do that, you can always come back here and steal a little bit of me. ♡"
    ]
  },
  {
    title: "Open when you're having a bad day",
    icon: "☁",
    preview: "you don't have to be okay",
    paragraphs: [
      "Hey, baby.",
      "You don't have to fix everything right now. You don't have to pretend you're okay for me either. It's okay to have bad days.",
      "Take a breath, get yourself somewhere comfortable, and be gentle with yourself for a little while.",
      "I'm proud of you for making it this far today. Even if today wasn't a good one, you still deserve kindness. ♡"
    ]
  },
  {
    title: "Open when you can't sleep",
    icon: "☾",
    preview: "a tiny goodnight from me",
    paragraphs: [
      "Can't sleep, hm?",
      "Then imagine I'm right there beside you. Get yourself comfy, close your eyes, and pretend I'm playing with your hair while you slowly drift off.",
      "You don't need to do anything right now. Just rest.",
      "Goodnight, sweetheart. Sleep well. I'll be here when you wake up. 🌙"
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
