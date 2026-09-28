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
      "I know a screen isn't the same as having me beside you, but I hope this serves as a reminder that I'm still here. I still care for you and I fantasise about the day I can come take care of you. Take all the worries from your mind.",
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
      "I don't think I could fit the entire answer onto one little page. But i'll try",
      "I love the little things about you. The things you probably don't even realize I notice. The way you talk and formulate your sentences, the things you get excited about, your silly moments and 'awesome sauces', your sleepy moments and voice, the moments when we are so close and connect our minds, and the moments where i get to take care of my little girl, or the moments where you are in a mood and get all pouty. When i get to cheer you up. I love learning your mind. All those tiny pieces that make you you. I love you always: the good, the bad, the miserable.",
      "I love being able to know you. Spend time with you. Hear your laugh, your cries, your voice. I am so lucky to have met you.",
      "And if you ever wonder whether you're loved, come back here.",
      "The answer is yes. It always has been. I hope I get to have you in my life for a long time.",
      "Here's the list of 35 reasons I drafted up a while back, unedited. I want you to have a reminder of it here. Of why I even began to fall for you:", 
         "1. You're funny, and you always put a smile on my face. Or make me chuckle. Even just talking to you puts a smile on my face. Like, the fucking feeling you give me is fucking ridiculous.",
    "2. You're cute and pretty. I don't think I tell you that enough.",
    "3. You have a lovely voice that I'd love to listen to every day.",
    "4. You have a lovely laugh that's genuinely sonically pleasing to me.",
    "5. I don't kill insects. I'd get rid of them for you every time. So you never have to worry about that shit.",
    "6. I fucking hate vomit too. I'll always warn you before it comes on screen. I watch a lot of movies, so I probably would know beforehand.",
    "7. I'll bring you as much peanut sauce and whatever that drink you like as you want. I frequently visit Germany, so I'd love to come see you and show you the person I am in real life.",
    "8. I'll always be in your corner if some bitch tries to argue with you. I know I'm the quiet type, but I seriously would always defend you if it came to it.",
    "9. I'd go second or third support for you if you wanna DPS Luna. I'll sacrifice my own game for yours lmfao.",
    "10. I'll always combo with you. You don't get to escape me that easily.",
    "11. You have good music taste. I wanna hear more of it. I wanna make you playlists. I don't think I've ever had a 95% blend with anyone before.",
    "12. I'll always respond as soon as I can when you text me. I'll give you as much attention as you need whenever you need it. I know you're not emotionally able to provide the same, and I honestly don't really need you to. I've got my friend group, and I guess life has made me pretty self-dependent. I just want to spend time with you whenever you want to, on your terms.",
    "13. You're firm in your decisions and outspoken. You don't let people fuck with you, and I admire that. You do it without being arrogant, and you actually get to the bottom of things instead of jumping to conclusions.",
    "14. I'll treat you like a princess every day, especially on your birthday.",
    "15. You're hyperaware of your needs, wants, shortcomings, and everything in between. I know that sometimes makes you reflect too harshly on yourself, but I genuinely think being that self-aware is a good trait.",
    "16. I know you don't like horror, and I honestly don't like it that much either, but I'll always be down to watch it with you and be scared together.",
    "17. I'd love to watch true crime with you. Even if you're not vocal while watching, I'm not either, yk? We can always talk about it afterwards.",
    "18. I know you hate cooking for yourself, and I'd love to cook for you so you never have to. I'm a pretty okay baker and cook, so I'd happily feed you.",
    "19. You're genuine. You say you're a liar, but you're genuine. I can tell. At least with me, you've been honest and upfront about what bothers you and what you don't fuck with. I like the straightforwardness. I'm a very dense person sometimes, and that's exactly what I need.",
    "20. I wish I had been honest with you from the beginning so I didn't fuck this shit up. I really am sorry for being such a liar, hurting your feelings, and betraying you. You deserved better from me.",
    "21. You're very intelligent. I know you said you dropped out and took a break from studying, but I genuinely think studying law is admirable. That shit is difficult as fuck. I could never do it, and I think you're a very intelligent person.",
    "22. You're confrontational, and I'm really not. I'm the quiet type, and you're not as much. I feel like we can balance each other out in that way.",
    "23. I can tell you care about your friends. Even when you say you don't wanna play with Maggot because he's bad, I still think it's cute how you guys fuck around with each other. I like seeing that side of you.",
    "24. I know you've said some bad shit in your past, like the n-word or whatever, but I can see that you feel bad about it and learn from it. That's a really good trait to have. Being able to admit when you've done something wrong and actually try to better yourself matters to me.",
    "25. The way you speak when you get all excited is actually fucking adorable. When you hit a freeze, or tell me about something you enjoy, or do something you're proud of, I always like hearing it. I wanna compliment you every time, you know? Like, I deadass play better with you in the game lol.",
    "26. You don't have to worry about me in any sense, yk? I make enough money, and I want to provide for you. I wanna shower you with gifts and do anything I can to put a smile on your face.",
    "27. Talking to you makes the boring days a lot more enjoyable. Even just watching a movie with your friends was really nice to me, even though I'm quiet as shit. I just enjoy being around you.",
    "28. I adore the way you say my name.",
    "29. I know you feel like shit sometimes, and you say you get into moods and feel depressed, but the fact that you're still living your life, getting up every day, and doing your best is a sign of strength, you know? And it's admirable. I know we've only known each other for a short while, but I genuinely mean it.",
    "30. I love hearing your random thoughts. I wanna hear them every day. Even the completely pointless ones. Especially the completely pointless ones.",
    "31. I love your sleepy voice. There's just something about hearing you when you're tired that makes me stupidly happy.",
    "32. I love how you make me feel included in group settings. I know I'm the quiet type, and you still made an effort to invite me to play with you guys. It means more to me than you probably realize.",
    "33. I swear I can't stop smiling whenever your name pops up.",
    "34. Even though I hurt you, one of the first things you did was ask me how I felt. When you called me both times that day, you asked me how I was doing. I don't know why you did that. Like, you're so fucking sweet, and I fucked you over.",
    "35. I know you said we aren't anything and never would be, but just talking to you and having that back-and-forth made me feel genuinely happy. I don't even know why. It made me wanna try harder. And I wish I had been honest, because I know this can make it seem like everything else I said was a lie. But I really mean it whenever I say I want to treat you like a princess and give you the world. I want to bring smiles to your face. I want to make you feel better when you're down. I just want to put a smile on your face."
        
    ]
  },
  {
    title: "Open when you want want to smile",
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
