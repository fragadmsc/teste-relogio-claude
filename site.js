// Scroll: watch drifts, zooms, rotates and fades into darkness
const watch = document.getElementById("watchWrap"), veil = document.getElementById("veil");
let ticking = false;
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const y = Math.min(max, Math.max(0, scrollY));
  // Scrolling past the hero takes the watch to 70% dimmed so the text below stays readable; the rest of the page finishes the fade
  const p = y < innerHeight ? .7 * y / innerHeight : .7 + .3 * (y - innerHeight) / Math.max(1, max - innerHeight);
  const scale = 1 + p * 0.35;
  const rot = -p * 8;
  watch.style.transform = `translateY(${-p * 4}vh) scale(${scale}) rotate(${rot}deg)`;
  veil.style.opacity = Math.min(.85, p * 1.2).toFixed(3);
  ticking = false;
}
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

// Reveal text as it enters the viewport
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: .2 });
document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
