// Typing effect
const phrases = ["Minimal. Coded. Clean.", "Fast. Responsive. Elegant.", "Built by RTX."];
let current = 0;
let char = 0;
const typewriter = document.getElementById("typewriter");

function typeLoop() {
  if (char < phrases[current].length) {
    typewriter.textContent += phrases[current].charAt(char);
    char++;
    setTimeout(typeLoop, 80);
  } else {
    setTimeout(() => {
      typewriter.textContent = "";
      char = 0;
      current = (current + 1) % phrases.length;
      typeLoop();
    }, 2000);
  }
}

typeLoop();

// Dark/Light mode toggle
const toggle = document.getElementById("toggleMode");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Initialize particles.js
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 60 },
    "color": { "value": "#00ffff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.2 },
    "size": { "value": 3 },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#00ffff",
      "opacity": 0.3,
      "width": 1
    },
    "move": { "enable": true, "speed": 2 }
  },
  "interactivity": {
    "events": { "onhover": { "enable": true, "mode": "repulse" } }
  }
});

// AOS
AOS.init();


window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 30) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
