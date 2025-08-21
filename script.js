//quotes
const quotes = [
  "Memento Mori: remember you will die.",
  "Only those who face themselves can break their chains.",
  "Your heart determines the shape of your destiny.",
  "Rebellion begins with a single step into the dark.",
  "The world is not beautiful. Therefore, it is.",
  "In this world, is the destiny of mankind controlled by some transcendental entity, or law?",
  "If you can’t accept your own darkness, you can’t control it.",
  "The only ones who should kill are those prepared to be killed.",
  "A lesson without pain is meaningless.",
  "Even if it’s painful, even if it’s heartbreaking, you still can’t regret it.",
  "The world is merciless, but so is the will to survive.",
  "I’m not afraid of the world, I’m afraid of myself within it.",
  "The line between justice and evil is paper-thin.",
  "Those who don’t fear the abyss are already consumed by it."
];

function setQuote() {
  document.getElementById("quote").textContent =
    quotes[Math.floor(Math.random() * quotes.length)];
}
setQuote();

// trivias
const facts = [
  "The Velvet Room exists between dream and reality, mind and matter.",
  "Personas are born from the masks we wear to face the world.",
  "The Fool Arcana symbolizes infinite possibilities.",
  "Every main Persona protagonist starts with a Persona of the Wild Card.",
  "The Tarot Arcana are the backbone of Persona’s themes and growth.",
  "Some Personas are inspired by myth, legend, and even gods across cultures.",
  "Shadows are manifestations of suppressed human emotions.",
  "In Persona 5, the Phantom Thieves’ masks symbolize rebellion against society."
];

function setFact() {
  document.getElementById("fact").textContent =
    facts[Math.floor(Math.random() * facts.length)];
}
setFact();

document.getElementById("refreshFact").addEventListener("click", setFact);

// Theme toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
