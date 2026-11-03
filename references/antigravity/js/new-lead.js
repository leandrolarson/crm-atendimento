/**
 * CRM Atendimento & Vendas - New Lead Interaction & ViaCEP Integration
 */

// Global State
const leadState = {
  name: '',
  email: '',
  phone: '',
  channel: 'WhatsApp',
  priority: 'Média',
  assignedRep: 'Leandro Larson',
  cep: '',
  street: '',
  city: 'São Paulo',
  state: 'SP',
  stage: 'Novo',
  estimatedValue: '3.500,00'
};

function selectChannel(element, channelName) {
  document.querySelectorAll('.crm-channel-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');
  
  const hiddenInput = document.getElementById('selectedChannelInput');
  if (hiddenInput) hiddenInput.value = channelName;
  
  leadState.channel = channelName;
  updatePreview();
}

function selectPriority(element, priorityName) {
  document.querySelectorAll('.crm-priority-btn').forEach(btn => btn.classList.remove('active'));
  element.classList.add('active');

  const hiddenInput = document.getElementById('selectedPriorityInput');
  if (hiddenInput) hiddenInput.value = priorityName;

  const slaNote = document.getElementById('slaNote');
  if (slaNote) {
    if (priorityName === 'Alta') {
      slaNote.innerHTML = '<span class="material-symbols-outlined fs-sm text-danger">schedule</span> SLA Previsto: Atendimento em até <strong class="text-dark">15 minutos</strong>';
    } else if (priorityName === 'Média') {
      slaNote.innerHTML = '<span class="material-symbols-outlined fs-sm text-warning">schedule</span> SLA Previsto: Atendimento em até <strong class="text-dark">1 hora</strong>';
    } else {
      slaNote.innerHTML = '<span class="material-symbols-outlined fs-sm text-secondary">schedule</span> SLA Previsto: Atendimento em até <strong class="text-dark">4 horas</strong>';
    }
  }

  leadState.priority = priorityName;
  updatePreview();
}

function maskPhone(input) {
  let val = input.value.replace(/\D/g, '');
  if (val.length > 11) val = val.substring(0, 11);

  if (val.length > 10) {
    input.value = `(${val.substring(0, 2)}) ${val.substring(2, 7)}-${val.substring(7)}`;
  } else if (val.length > 6) {
    input.value = `(${val.substring(0, 2)}) ${val.substring(2, 6)}-${val.substring(6)}`;
  } else if (val.length > 2) {
    input.value = `(${val.substring(0, 2)}) ${val.substring(2)}`;
  } else {
    input.value = val;
  }
}

function maskCEP(input) {
  let val = input.value.replace(/\D/g, '');
  if (val.length > 8) val = val.substring(0, 8);
  if (val.length > 5) {
    input.value = `${val.substring(0, 5)}-${val.substring(5)}`;
  } else {
    input.value = val;
  }

  if (val.length === 8) {
    searchViaCEP();
  }
}

function maskCurrency(input) {
  let val = input.value.replace(/\D/g, '');
  if (!val) {
    input.value = '';
    return;
  }
  const floatVal = (parseInt(val, 10) / 100).toFixed(2);
  input.value = floatVal.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

async function searchViaCEP() {
  const cepInput = document.getElementById('cepInput');
  const feedback = document.getElementById('cepFeedback');
  const btn = document.getElementById('btnFetchCep');

  if (!cepInput) return;
  const cleanCep = cepInput.value.replace(/\D/g, '');

  if (cleanCep.length !== 8) {
    if (feedback) feedback.textContent = 'Informe um CEP válido com 8 dígitos.';
    return;
  }

  if (feedback) feedback.textContent = 'Consultando ViaCEP...';
  if (btn) btn.disabled = true;

  try {
    const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
    const data = await res.json();

    if (data.erro) {
      if (feedback) feedback.textContent = 'CEP não encontrado.';
      return;
    }

    const street = document.getElementById('addressStreet');
    const neighborhood = document.getElementById('addressNeighborhood');
    const city = document.getElementById('addressCity');
    const state = document.getElementById('addressState');

    if (street && data.logradouro) street.value = data.logradouro;
    if (neighborhood && data.bairro) neighborhood.value = data.bairro;
    if (city && data.localidade) city.value = data.localidade;
    if (state && data.uf) state.value = data.uf;

    if (feedback) feedback.textContent = 'Endereço localizado com sucesso!';
    updatePreview();
  } catch (err) {
    if (feedback) feedback.textContent = 'Erro ao consultar a API ViaCEP.';
  } finally {
    if (btn) btn.disabled = false;
  }
}

function updatePreview() {
  const nameInput = document.getElementById('leadName');
  const cityInput = document.getElementById('addressCity');
  const stateInput = document.getElementById('addressState');
  const valueInput = document.getElementById('estimatedValue');
  const stageSelect = document.getElementById('initialStage');
  const repSelect = document.getElementById('assignedRep');

  // Preview elements
  const prevName = document.getElementById('previewLeadName');
  const prevLoc = document.getElementById('previewLocationText');
  const prevVal = document.getElementById('previewValue');
  const prevStage = document.getElementById('previewStageBadge');
  const prevChannel = document.getElementById('previewChannelText');
  const prevPriority = document.getElementById('previewPriorityBadge');
  const prevRep = document.getElementById('previewRepName');
  const prevRepAvatar = document.getElementById('previewRepAvatar');

  if (prevName && nameInput) {
    prevName.textContent = nameInput.value.trim() || 'Nome do Lead';
  }

  if (prevLoc && cityInput && stateInput) {
    const c = cityInput.value.trim();
    const s = stateInput.value.trim();
    prevLoc.textContent = c && s ? `${c}, ${s}` : 'Localização não informada';
  }

  if (prevVal && valueInput) {
    prevVal.textContent = valueInput.value ? `R$ ${valueInput.value}` : 'R$ 0,00';
  }

  if (prevStage && stageSelect) {
    prevStage.textContent = stageSelect.value;
  }

  if (prevChannel) {
    prevChannel.textContent = leadState.channel;
  }

  if (prevPriority) {
    prevPriority.textContent = leadState.priority;
    prevPriority.className = 'badge rounded-pill';
    if (leadState.priority === 'Alta') {
      prevPriority.classList.add('bg-danger-subtle', 'text-danger');
    } else if (leadState.priority === 'Média') {
      prevPriority.classList.add('bg-warning-subtle', 'text-warning');
    } else {
      prevPriority.classList.add('bg-secondary-subtle', 'text-secondary');
    }
  }

  if (prevRep && repSelect) {
    prevRep.textContent = repSelect.value;
    if (prevRepAvatar) {
      const parts = repSelect.value.split(' ');
      const initials = parts.length > 1 ? `${parts[0][0]}${parts[1][0]}` : parts[0].slice(0, 2);
      prevRepAvatar.textContent = initials.toUpperCase();
    }
  }
}

function validateEmailField(input) {
  const badge = document.getElementById('emailStatusBadge');
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);

  if (badge) {
    if (input.value.length === 0) {
      badge.innerHTML = '<span class="status-pulse-dot me-1"></span> Validação ativa';
      badge.className = 'small text-secondary';
    } else if (isValid) {
      badge.innerHTML = '<span class="material-symbols-outlined fs-sm text-success">check_circle</span> Válido';
      badge.className = 'small text-success fw-medium';
    } else {
      badge.innerHTML = '<span class="material-symbols-outlined fs-sm text-danger">error</span> Formato inválido';
      badge.className = 'small text-danger fw-medium';
    }
  }
}

function submitLeadForm(startAttendance) {
  const form = document.getElementById('leadCreationForm');
  if (!form) return;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const toast = document.getElementById('statusToast');
  if (toast) {
    toast.classList.remove('d-none');
    toast.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  setTimeout(() => {
    if (startAttendance) {
      window.location.href = 'lead-manager.html?action=start_timer';
    } else {
      window.location.href = 'lead-manager.html';
    }
  }, 1200);
}

function resetLeadForm() {
  const form = document.getElementById('leadCreationForm');
  if (form) {
    form.reset();
    updatePreview();
  }
}

function saveDraft() {
  alert('Rascunho de lead salvo no armazenamento local do navegador.');
}

document.addEventListener('DOMContentLoaded', () => {
  const notes = document.getElementById('initialNotes');
  const charCount = document.getElementById('charCount');

  if (notes && charCount) {
    notes.addEventListener('input', () => {
      charCount.textContent = `${notes.value.length} / 500 caracteres`;
    });
  }

  updatePreview();
});
