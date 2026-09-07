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


toggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play()
      .then(() => {
        text.textContent = "Pausar";
        toggle.classList.add("playing");
      })
      .catch((error) => {
        console.error("Erro ao tocar música:", error);
        text.textContent = "Erro";
      });
  } else {
    audio.pause();
    text.textContent = "Som";
    toggle.classList.remove("playing");
  }
});
