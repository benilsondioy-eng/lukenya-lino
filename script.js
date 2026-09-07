const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

const audio = document.getElementById("bgMusic");
const toggle = document.getElementById("soundToggle");
const text = document.getElementById("soundText");

toggle.addEventListener("click", async () => {
  try {
    if (audio.paused) {
      await audio.play();
      text.textContent = "Pausar";
      toggle.classList.add("playing");
    } else {
      audio.pause();
      text.textContent = "Som";
      toggle.classList.remove("playing");
    }
  } catch {
    text.textContent = "Adiciona musica.mp3";
  }
});
