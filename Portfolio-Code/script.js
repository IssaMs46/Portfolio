// Año dinámico en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mensaje para consola
console.log("Portafolio base cargado. ✨");


// Scroll con rueda: avanza una imagen completa con cada movimiento
document.querySelectorAll('.carousel').forEach(carousel => {
  const slides = Array.from(carousel.children);
  let isScrolling = false;

  carousel.addEventListener('wheel', (e) => {
    e.preventDefault();

    // Evita múltiples saltos por scroll rápido
    if (isScrolling) return;
    isScrolling = true;

    const slideWidth = slides[0].offsetWidth + 24; // incluye gap
    const direction = e.deltaY > 0 ? 1 : -1;

    // Calcula la posición actual y siguiente
    const target = Math.round(carousel.scrollLeft / slideWidth) + direction;
    const nextIndex = Math.max(0, Math.min(target, slides.length - 1));

    // Desliza suavemente hacia la siguiente imagen centrada
    carousel.scrollTo({
      left: slides[nextIndex].offsetLeft - (carousel.clientWidth - slideWidth) / 2,
      behavior: 'smooth'
    });

    // Espera antes de permitir otro movimiento
    setTimeout(() => { isScrolling = false; }, 700);
  }, { passive: false });
});

