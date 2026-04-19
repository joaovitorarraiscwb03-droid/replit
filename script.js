// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── BUTTON HOVER PULSE ──
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.025)';
    btn.style.boxShadow = '0 0 40px rgba(245,158,11,0.45)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
    btn.style.boxShadow = '0 0 0 rgba(245,158,11,0)';
  });
  btn.addEventListener('mousedown', () => {
    btn.style.transform = 'scale(0.98)';
  });
  btn.addEventListener('mouseup', () => {
    btn.style.transform = 'scale(1.025)';
  });
});

// ── SCROLL REVEAL ──
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -60px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add base styles for animation
const style = document.createElement('style');
style.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  .reveal-delay-1 { transition-delay: 0.1s; }
  .reveal-delay-2 { transition-delay: 0.2s; }
  .reveal-delay-3 { transition-delay: 0.3s; }
  .reveal-delay-4 { transition-delay: 0.4s; }
`;
document.head.appendChild(style);

// Apply reveal class to elements
const revealElements = [
  ...document.querySelectorAll('h2'),
  ...document.querySelectorAll('.card'),
  ...document.querySelectorAll('.step'),
  ...document.querySelectorAll('.objection'),
  ...document.querySelectorAll('.proof-item'),
  ...document.querySelectorAll('.simple-block'),
  ...document.querySelectorAll('.earnings-pill'),
  ...document.querySelectorAll('.impact-bullets'),
  ...document.querySelectorAll('.offer-wrapper'),
  ...document.querySelectorAll('.guarantee-block'),
];

revealElements.forEach((el, i) => {
  el.classList.add('reveal');
  const delay = i % 4;
  if (delay > 0) el.classList.add(`reveal-delay-${delay}`);
  observer.observe(el);
});

// ── URGENCY BLINK ──
const urgencyBars = document.querySelectorAll('.urgency-bar, .pre-alert');
let visible = true;
setInterval(() => {
  urgencyBars.forEach(el => {
    el.style.opacity = visible ? '0.7' : '1';
  });
  visible = !visible;
}, 2500);
