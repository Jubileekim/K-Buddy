const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
const dialog = document.querySelector('#buddy-search-dialog');
const dialogCloseButton = document.querySelector('.dialog-close');
const searchForm = document.querySelector('#buddy-search-form');
const formFeedback = document.querySelector('#form-feedback');
const openSearchButtons = document.querySelectorAll('[data-open-search]');
const planButtons = document.querySelectorAll('[data-plan]');

function closeMobileMenu() {
  if (!menuButton || !navigation) return;
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  navigation?.classList.toggle('is-open', !isOpen);
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMobileMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
});

function openSearchDialog() {
  if (!dialog) return;
  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  } else {
    dialog.setAttribute('open', '');
  }
  closeMobileMenu();
}

openSearchButtons.forEach((button) => {
  button.addEventListener('click', openSearchDialog);
});

planButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openSearchDialog();
    if (formFeedback) {
      formFeedback.textContent = `${button.dataset.plan} selected. Add your travel date and interests.`;
    }
  });
});

dialogCloseButton?.addEventListener('click', () => {
  dialog?.close();
});

dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

searchForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(searchForm);
  const travelDate = formData.get('travelDate');
  const area = formData.get('area');
  const interests = formData.getAll('interest');

  if (!travelDate || !area) {
    if (formFeedback) {
      formFeedback.textContent = 'Please select a travel date and area.';
    }
    return;
  }

  if (interests.length === 0) {
    if (formFeedback) {
      formFeedback.textContent = 'Select at least one interest to improve your matches.';
    }
    return;
  }

  const interestSummary = interests.slice(0, 2).join(' and ');
  if (formFeedback) {
    formFeedback.textContent = `3 sample plans found in ${area} for ${travelDate}, including ${interestSummary}.`;
  }
});

const revealElements = document.querySelectorAll('[data-reveal]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => observer.observe(element));
}
