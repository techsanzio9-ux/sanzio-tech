document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('backToTop');
    if (!button) return;
  
    // Afficher/masquer le bouton selon le scroll
    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    });
  
    // Action du bouton : retour en haut
    button.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
  
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  });