function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach(bar => {
      if (isInViewport(bar) && !bar.style.width.includes('%')) {
        bar.style.width = bar.getAttribute('style').split(':')[1];
      }
    });
  }

  window.addEventListener('scroll', animateSkills);
  window.addEventListener('load', animateSkills);

  // Simple form submission simulation
  const form = document.getElementById('contact-form');
  const messageDiv = document.getElementById('form-message');

  form.addEventListener('submit', e => {
    e.preventDefault();
    messageDiv.textContent = 'Sending message...';

    setTimeout(() => {
      messageDiv.textContent = 'Thank you for your message! I will get back to you soon.';
      form.reset();
    }, 1500);
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const menu = document.getElementById('primary-menu');
      if(menu.classList.contains('open')) {
        menu.classList.remove('open');
        document.getElementById('menu-toggle').classList.remove('active');
        document.getElementById('menu-toggle').setAttribute('aria-expanded', 'false');
      }
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Toggle mobile menu
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('primary-menu');
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    menuToggle.classList.toggle('active');
    menu.classList.toggle('open');
  });