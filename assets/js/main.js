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
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
