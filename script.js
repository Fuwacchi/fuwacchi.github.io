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

//Theme Toggle 
document.getElementById("toggleTheme").addEventListener("click", () => {
  // Toggle the theme
  document.body.classList.toggle("light");

  // Play the SFX
  const sfx = document.getElementById("toggleSound");
  sfx.currentTime = 0;
  sfx.play();
});


//Tic Tac Toe 
(() => {
  const cells = [...document.querySelectorAll(".cell")];
  const resetBtn = document.getElementById("tttReset");
  const statusEl = document.getElementById("tttStatus");
  const moveSfx = document.getElementById("moveSound");
  let board = Array(9).fill(null);
  let gameOver = false;
  const HUMAN = 'X', AI = 'O';

  const LINES = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  function winner(b) {
    for (let [a,b2,c] of LINES)
      if (b[a] && b[a]===b[b2] && b[a]===b[c]) return b[a];
    return null;
  }
  const isFull = b => b.every(Boolean);

  function minimax(b, turn) {
    const w = winner(b);
    if (w===HUMAN) return -1;
    if (w===AI) return 1;
    if (isFull(b)) return 0;

    let best = (turn===AI)? -Infinity : Infinity;
    for (let i=0;i<9;i++) if (!b[i]) {
      b[i]=turn;
      let val=minimax(b, turn===AI?HUMAN:AI);
      b[i]=null;
      best = (turn===AI)? Math.max(best,val):Math.min(best,val);
    }
    return best;
  }

  function bestMove() {
    let bestScore=-Infinity, move=null;
    for (let i=0;i<9;i++) if(!board[i]){
      board[i]=AI;
      let score=minimax(board,HUMAN);
      board[i]=null;
      if(score>bestScore){bestScore=score; move=i;}
    }
    place(move,AI);
  }

  function place(i, who) {
    if(board[i]||gameOver) return;
    board[i]=who;
    cells[i].textContent=who;
    cells[i].disabled=true;
    let w=winner(board);
    if(w){statusEl.textContent=(w===AI?"AI wins":"You win!?"); gameOver=true; return;}
    if(isFull(board)){statusEl.textContent="Draw"; gameOver=true; return;}
  }

  cells.forEach((c,i)=>c.onclick=()=>{
    if(gameOver||board[i])return;
    moveSfx.currentTime = 0;
    moveSfx.play();
    place(i,HUMAN);
    if(!gameOver) bestMove();
  });

  resetBtn.onclick=()=>{
    board=Array(9).fill(null); gameOver=false;
    cells.forEach(c=>{c.textContent=""; c.disabled=false;});
    statusEl.textContent="Your turn (X)";
  };
})();