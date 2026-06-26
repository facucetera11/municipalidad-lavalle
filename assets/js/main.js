function showPage(id) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  // Update nav active state
  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === id);
  });
  // Sync topbar/body background with the page's data-bg (sky on home, cream elsewhere)
  const bg = target ? (target.dataset.bg || 'cream') : 'cream';
  document.documentElement.setAttribute('data-bg', bg);
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToTurismo(sectionId) {
  showPage('turismo');
  // wait a tick for the page to become visible/active before measuring position
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const active = document.querySelector('.page.active');
  document.documentElement.setAttribute('data-bg', active ? (active.dataset.bg || 'cream') : 'cream');
});