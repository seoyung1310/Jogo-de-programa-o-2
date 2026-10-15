
/* =====================================================
   JOGO DA MEMÓRIA - ARTES VISUAIS - 6º ANO
   Tema: Coelhinho em Azul Bebê
   Cada par = 1 carta CONCEITO (texto) + 1 carta IMAGEM (SVG)
   ===================================================== */

// ---------- BANCO DE DADOS DAS CARTAS (NOVOS CONCEITOS) ----------
const CARD_PAIRS = [
  {
    id: 'elementos_visuais',
    label: 'Elementos Visuais',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#EAF7FC"/>
      <circle cx="25" cy="25" r="8" fill="#5CA8D8"/>
      <line x1="45" y1="25" x2="85" y2="25" stroke="#FF9FB8" stroke-width="4" stroke-linecap="round"/>
      <rect x="15" y="45" width="20" height="20" fill="#A8D8EA" stroke="#5CA8D8" stroke-width="2"/>
      <path d="M45 65 L 60 45 L 75 65 Z" fill="#FFC7DD" stroke="#5CA8D8" stroke-width="2"/>
      <path d="M10 85 Q 30 70 50 85 T 90 85" stroke="#5CA8D8" stroke-width="3" fill="none"/>
    </svg>`
  },
  {
    id: 'tridimensional',
    label: 'Arte Tridimensional',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cube-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#D6EEF7"/><stop offset="1" stop-color="#A8D8EA"/>
        </linearGradient>
        <linearGradient id="cube-left" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#5CA8D8"/><stop offset="1" stop-color="#4A8DB8"/>
        </linearGradient>
        <linearGradient id="cube-right" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#8FC3DD"/><stop offset="1" stop-color="#6BAACB"/>
        </linearGradient>
      </defs>
      <!-- cubo isométrico -->
      <polygon points="50,20 80,38 50,56 20,38" fill="url(#cube-top)"/>
      <polygon points="20,38 50,56 50,86 20,68" fill="url(#cube-left)"/>
      <polygon points="80,38 50,56 50,86 80,68" fill="url(#cube-right)"/>
    </svg>`
  },
  {
    id: 'bidimensional',
    label: 'Arte Bidimensional',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="15" width="80" height="70" rx="4" fill="#FFF8E7" stroke="#5CA8D8" stroke-width="3"/>
      <circle cx="30" cy="35" r="8" fill="#FFC7DD"/>
      <path d="M15 75 L 35 50 L 55 70 L 70 55 L 85 75 Z" fill="#A8D8EA"/>
      <line x1="10" y1="15" x2="90" y2="15" stroke="#5CA8D8" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'arte_rupestre',
    label: 'Arte Rupestre',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rock" cx="40%" cy="35%">
          <stop offset="0" stop-color="#F2E4D0"/><stop offset="1" stop-color="#B48A5C"/>
        </radialGradient>
      </defs>
      <path d="M5 90 Q 20 20 50 10 Q 80 20 95 90 Z" fill="url(#rock)" stroke="#7A5230" stroke-width="2"/>
      <!-- desenhos rupestres -->
      <g stroke="#5B3A1E" stroke-width="2" fill="none" stroke-linecap="round">
        <circle cx="35" cy="45" r="4"/>
        <path d="M28 45 L 18 40 M42 45 L 52 40 M35 49 L 35 60"/>
        <path d="M28 60 L 42 60"/>
        <!-- bisão -->
        <path d="M60 55 Q 70 48 82 55 Q 80 65 70 68 L 62 68 Z"/>
        <path d="M62 68 L 60 76 M 72 68 L 74 76"/>
      </g>
    </svg>`
  },
  {
    id: 'arte_contemporanea',
    label: 'Arte Contemporânea',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFFFFF"/>
      <rect x="15" y="15" width="30" height="30" fill="#5CA8D8"/>
      <circle cx="70" cy="30" r="16" fill="#FFC7DD"/>
      <rect x="15" y="55" width="30" height="30" fill="#C8F0DC" stroke="#5CA8D8" stroke-width="2"/>
      <path d="M55 85 L 75 60 L 90 85 Z" fill="#D9C7F2"/>
      <line x1="5" y1="5" x2="95" y2="5" stroke="#5CA8D8" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'desenho',
    label: 'Desenho',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Lápis grafite -->
      <g transform="rotate(-35 50 50)">
        <rect x="42" y="10" width="16" height="60" fill="#FFD34D" stroke="#B48A5C" stroke-width="2"/>
        <polygon points="42,70 58,70 50,90" fill="#F5DEB3" stroke="#B48A5C" stroke-width="1.5"/>
        <polygon points="47,80 53,80 50,90" fill="#3A3A3A"/>
        <rect x="42" y="6" width="16" height="6" fill="#FF7A9C"/>
      </g>
      <!-- rabisco -->
      <path d="M20 25 Q 35 15 45 30 T 30 55" stroke="#5CA8D8" stroke-width="2" fill="none" opacity="0.8"/>
    </svg>`
  },
  {
    id: 'pintura',
    label: 'Pintura',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- paleta -->
      <path d="M50 20 Q 90 20 90 55 Q 90 85 60 85 Q 45 85 45 75 Q 45 68 55 68 Q 62 68 62 60 Q 62 50 50 50 Q 25 50 20 40 Q 18 22 50 20 Z"
            fill="#F2E4D0" stroke="#B48A5C" stroke-width="2"/>
      <circle cx="35" cy="35" r="5" fill="#5CA8D8"/>
      <circle cx="52" cy="32" r="5" fill="#FFC7DD"/>
      <circle cx="68" cy="38" r="5" fill="#FFD34D"/>
      <circle cx="30" cy="52" r="5" fill="#C8F0DC"/>
      <circle cx="48" cy="55" r="5" fill="#D9C7F2"/>
      <!-- pincel -->
      <rect x="72" y="55" width="6" height="30" fill="#8FC3DD" transform="rotate(25 75 70)"/>
      <polygon points="70,55 82,55 78,45 74,45" fill="#B48A5C"/>
    </svg>`
  },
  {
    id: 'fotografia',
    label: 'Fotografia',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="30" width="76" height="52" rx="8" fill="#5CA8D8"/>
      <rect x="35" y="22" width="30" height="12" rx="4" fill="#4A8DB8"/>
      <circle cx="50" cy="56" r="16" fill="#D6EEF7" stroke="#FFFFFF" stroke-width="3"/>
      <circle cx="50" cy="56" r="9" fill="#4A8DB8"/>
      <circle cx="46" cy="52" r="3" fill="#FFFFFF" opacity="0.8"/>
      <circle cx="76" cy="42" r="3" fill="#FFD34D"/>
    </svg>`
  }
];

// ---------- CONFIGURAÇÃO DO JOGO ----------
const TOTAL_PAIRS = 6;
const MAX_LIVES = 3;

// ---------- ESTADO ----------
let state = {
  deck: [],
  flipped: [],
  matched: 0,
  moves: 0,
  score: 0,
  lives: MAX_LIVES,
  timer: 0,
  timerId: null,
  lock: false,
  started: false
};

// ---------- REFERÊNCIAS DOM ----------
const $ = (sel) => document.querySelector(sel);
const startScreen = $('#start-screen');
const gameScreen  = $('#game-screen');
const endScreen   = $('#end-screen');
const board       = $('#board');
const timerEl     = $('#timer');
const movesEl     = $('#moves');
const scoreEl     = $('#score');
const livesEl     = $('#lives');
const endTitle    = $('#end-title');
const endMessage  = $('#end-message');
const endEmoji    = $('#end-emoji');
const finalScore  = $('#final-score');
const finalTime   = $('#final-time');
const finalMoves  = $('#final-moves');

// ---------- UTILITÁRIOS ----------
function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function formatTime(s){
  const m = String(Math.floor(s/60)).padStart(2,'0');
  const sec = String(s % 60).padStart(2,'0');
  return `${m}:${sec}`;
}

function buildDeck(){
  const pairsPool = shuffle(CARD_PAIRS).slice(0, TOTAL_PAIRS);
  const deck = [];
  pairsPool.forEach(pair => {
    deck.push({ pairId: pair.id, type: 'image', label: pair.label, svg: pair.svg, uid: `${pair.id}-img` });
    deck.push({ pairId: pair.id, type: 'text',  label: pair.label, svg: pair.svg, uid: `${pair.id}-txt` });
  });
  return shuffle(deck);
}

// ---------- RENDERIZAÇÃO ----------
function renderCard(card){
  const el = document.createElement('div');
  el.className = 'card';
  el.dataset.pair = card.pairId;
  el.dataset.uid  = card.uid;
  el.setAttribute('role','gridcell');
  el.setAttribute('tabindex','0');

  const frontContent = card.type === 'image'
    ? card.svg
    : `<div class="label">${card.label}</div>`;

  el.innerHTML = `
    <div class="card-inner">
      <div class="card-face card-back"></div>
      <div class="card-face card-front">${frontContent}</div>
    </div>
  `;

  el.addEventListener('click', () => flipCard(el));
  el.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); flipCard(el); }
  });
  return el;
}

function renderBoard(){
  board.innerHTML = '';
  state.deck.forEach(card => board.appendChild(renderCard(card)));
}

// ---------- LÓGICA DE VIRADA ----------
function flipCard(el){
  if(state.lock) return;
  if(el.classList.contains('flipped') || el.classList.contains('matched')) return;
  if(!state.started) return;

  el.classList.add('flipped');
  state.flipped.push(el);

  if(state.flipped.length === 2){
    state.moves++;
    movesEl.textContent = state.moves;
    checkMatch();
  }
}

function checkMatch(){
  const [a, b] = state.flipped;
  const samePair = a.dataset.pair === b.dataset.pair;

  if(samePair){
    a.classList.add('matched');
    b.classList.add('matched');
    state.flipped = [];
    state.matched++;
    const bonus = Math.max(10, 60 - state.timer);
    state.score += 50 + bonus;
    scoreEl.textContent = state.score;

    if(state.matched === TOTAL_PAIRS) endGame(true);
  } else {
    state.lock = true;
    a.classList.add('wrong');
    b.classList.add('wrong');
    state.lives--;
    livesEl.textContent = state.lives;

    setTimeout(() => {
      a.classList.remove('flipped','wrong');
      b.classList.remove('flipped','wrong');
      state.flipped = [];
      state.lock = false;
      if(state.lives <= 0) endGame(false);
    }, 900);
  }
}

// ---------- TIMER ----------
function startTimer(){
  clearInterval(state.timerId);
  state.timer = 0;
  timerEl.textContent = '00:00';
  state.timerId = setInterval(() => {
    state.timer++;
    timerEl.textContent = formatTime(state.timer);
  }, 1000);
}

// ---------- INÍCIO ----------
function startGame(){
  state = {
    deck: buildDeck(),
    flipped: [],
    matched: 0,
    moves: 0,
    score: 0,
    lives: MAX_LIVES,
    timer: 0,
    timerId: null,
    lock: false,
    started: true
  };

  movesEl.textContent = '0';
  scoreEl.textContent = '0';
  livesEl.textContent = MAX_LIVES;
  timerEl.textContent = '00:00';

  renderBoard();
  showScreen('game');
  startTimer();
}

// ---------- FINALIZAÇÃO ----------
function endGame(win){
  clearInterval(state.timerId);
  state.started = false;

  finalScore.textContent = state.score;
  finalTime.textContent  = formatTime(state.timer);
  finalMoves.textContent = state.moves;

  if(win){
    endEmoji.textContent = '🐰🎉';
    endTitle.textContent = 'Parabéns, grande artista!';
    endMessage.textContent = 'Você encontrou todos os pares e dominou os conceitos de Arte!';
  } else {
    endEmoji.textContent = '🐰💧';
    endTitle.textContent = 'Fim de Jogo!';
    endMessage.textContent = 'Você perdeu todas as vidas. Tente novamente — você consegue!';
  }

  setTimeout(() => showScreen('end'), 500);
}

// ---------- NAVEGAÇÃO ----------
function showScreen(name){
  [startScreen, gameScreen, endScreen].forEach(s => s.classList.remove('active'));
  if(name === 'start') startScreen.classList.add('active');
  if(name === 'game')  gameScreen.classList.add('active');
  if(name === 'end')   endScreen.classList.add('active');
}

// ---------- EVENTOS ----------
$('#btn-start').addEventListener('click', startGame);
$('#btn-restart').addEventListener('click', () => showScreen('start'));

showScreen('start');
