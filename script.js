let musikDimulai = false;
function nextPage(pageNum) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.classList.remove('show');
    setTimeout(() => page.classList.add('hidden'), 600);
  });
  const target = document.getElementById(`page${pageNum}`);
  setTimeout(() => {
    target.classList.remove('hidden');
    setTimeout(() => target.classList.add('show'), 50);
  }, 600);
  if (pageNum === 2) {
    document.getElementById('bgSlides').classList.remove('hidden');
    startSlideshow();
  } else {
    document.getElementById('bgSlides').classList.add('hidden');
  }
  if (!musikDimulai) {
    const musik = document.getElementById("bgMusic");
    musik.play().catch(err => console.log("Autoplay diblokir."));
    musikDimulai = true;
  }
}
let bgIndex = 0;
const bgImages = ['assets/bg1.jpg', 'assets/bg2.jpg', 'assets/bg3.jpg'];
function startSlideshow() {
  const bgEl = document.getElementById("bgSlides");
  if (!bgEl) return;
  bgEl.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
  setInterval(() => {
    bgIndex = (bgIndex + 1) % bgImages.length;
    bgEl.style.backgroundImage = `url('${bgImages[bgIndex]}')`;
  }, 5000);
}
function kirimPesan() {
  const isi = document.getElementById("pesanLutfi").value;
  if (isi.trim() === "") {
    alert("Tulis dulu dong, sayang 😘");
    return;
  }
  const wa = "https://wa.me/08XXXXXXXXXX?text=" + encodeURIComponent(isi);
  window.open(wa, "_blank");
  document.getElementById("notif").classList.remove("hidden");
}
// Bunga jatuh
function bungaJatuh() {
  const kelopak = document.createElement('div');
  kelopak.classList.add('kelopak');
  kelopak.style.left = Math.random() * 100 + "vw";
  kelopak.style.animationDuration = 2 + Math.random() * 3 + "s";
  kelopak.style.opacity = Math.random();
  kelopak.style.fontSize = Math.random() * 10 + 10 + "px";
  kelopak.innerHTML = "🌸";
  document.body.appendChild(kelopak);
  setTimeout(() => kelopak.remove(), 5000);
}
setInterval(bungaJatuh, 300);
