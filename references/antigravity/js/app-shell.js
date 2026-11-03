/**
 * CRM Atendimento & Vendas - App Shell Controller
 * Manages active user badge in navbar, sidebar active state and global interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sync active user from localStorage if set
  const rawUser = localStorage.getItem('crm_active_user');
  if (rawUser) {
    try {
      const user = JSON.parse(rawUser);
      const userHeaderName = document.getElementById('shellUserName');
      const userHeaderRole = document.getElementById('shellUserRole');
      const userHeaderAvatar = document.getElementById('shellUserAvatar');

      if (userHeaderName) userHeaderName.textContent = user.name;
      if (userHeaderRole) userHeaderRole.textContent = user.role;
      if (userHeaderAvatar) userHeaderAvatar.textContent = user.initials;
    } catch (e) {
      console.warn('Error reading saved user', e);
    }
  }

  // Highlight active link in sidebar and offcanvas
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.crm-sidebar .nav-link, .offcanvas .nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPath || (currentPath === '' && href === 'index.html'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
