// Scroll: watch drifts, zooms, rotates and fades into darkness
const watch = document.getElementById("watchWrap"), veil = document.getElementById("veil");
const sub = document.body.classList.contains("sub");
let ticking = false;
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const raw = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
  const p = sub ? .7 + raw * .3 : raw; // inner pages start already dimmed so text stays readable over the watch
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
