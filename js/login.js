/**
 * CRM Atendimento & Vendas - Login Screen Logic
 * Conforme US01: Identificação do Atendente e Persistência no localStorage
 */

function updateUserProfilePreview() {
  const select = document.getElementById('attendantSelect');
  if (!select) return;

  const selectedOption = select.options[select.selectedIndex];
  if (!selectedOption) return;

  const role = selectedOption.getAttribute('data-role') || 'Atendente Comercial';
  const initials = selectedOption.getAttribute('data-initials') || 'US';
  const team = selectedOption.getAttribute('data-team') || 'Comercial';
  const name = selectedOption.text.split(' — ')[0];

  const userName = document.getElementById('userName');
  const userAvatar = document.getElementById('userAvatar');
  const userRoleDetail = document.getElementById('userRoleDetail');
  const userTeam = document.getElementById('userTeam');

  if (userName) userName.textContent = name;
  if (userAvatar) userAvatar.textContent = initials;
  if (userRoleDetail) userRoleDetail.textContent = `Perfil: ${role} • Atribuição ativa`;
  if (userTeam) userTeam.textContent = team;
}

function handleLogin(event) {
  if (event) event.preventDefault();

  const select = document.getElementById('attendantSelect');
  const rememberMe = document.getElementById('rememberMe');
  const toast = document.getElementById('statusToast');

  if (!select) return;

  const selectedOption = select.options[select.selectedIndex];
  const attendantData = {
    id: select.value,
    name: selectedOption.text.split(' — ')[0],
    role: selectedOption.getAttribute('data-role'),
    initials: selectedOption.getAttribute('data-initials'),
    team: selectedOption.getAttribute('data-team')
  };

  // Persist attendant in localStorage
  localStorage.setItem('crm_active_user', JSON.stringify(attendantData));

  if (rememberMe && rememberMe.checked) {
    localStorage.setItem('crm_saved_attendant', select.value);
  } else {
    localStorage.removeItem('crm_saved_attendant');
  }

  if (toast) {
    toast.classList.remove('d-none');
    toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Redirect to dashboard or lead manager
  setTimeout(() => {
    window.location.href = 'lead-manager.html';
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('attendantSelect');
  const rememberMeCheckbox = document.getElementById('rememberMe');
  const loginForm = document.getElementById('loginForm');

  if (select) {
    const savedUser = localStorage.getItem('crm_saved_attendant');
    if (savedUser) {
      select.value = savedUser;
      if (rememberMeCheckbox) rememberMeCheckbox.checked = true;
    }
    select.addEventListener('change', updateUserProfilePreview);
    updateUserProfilePreview();
  }

  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }
});
